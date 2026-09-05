#!/usr/bin/env python3
"""Build a landing-page phone mockup from a raw iPhone screenshot.

The site shows every app screen in the same iPhone chassis: the one baked into
assets/app-mockups/step-matchlist-fr.webp. That chassis comes from a
perspective-corrected photo, so its screen area is not a plain rounded
rectangle — the four corners are slightly different ellipses. This script drops
a fresh capture into that exact area and leaves every other chassis pixel
untouched, which is what keeps all the phones on the page identical.

It also rewrites the iOS status bar to a neutral state: 21:00, full battery,
no charging bolt. Signal and Wi-Fi are left alone (the captures already show
them full). Nothing below the status bar is ever modified, so the screen
content stays pixel-for-pixel what the app rendered.

Usage
    python3 tools/make-phone-mockup.py SOURCE.png OUT.webp [options]

    --quality N        WebP quality, default 92 (~95 KB for a light screen)
    --keep-status-bar  paste the capture as-is, no 21:00 / battery rewrite
    --chassis PATH     use another mockup as the frame donor

Requires Pillow. The status-bar rewrite additionally requires macOS's
/System/Library/Fonts/SFNS.ttf (San Francisco), whose metrics were fitted
against a real iOS clock: re-rendering the original "15:24" with these
parameters reproduces the captured glyphs.
"""

import argparse, os, sys
from PIL import Image, ImageDraw, ImageFont
import numpy as np

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHASSIS = os.path.join(REPO, 'assets/app-mockups/step-matchlist-fr.webp')
FONT = '/System/Library/Fonts/SFNS.ttf'

# ── Chassis geometry, measured on step-matchlist-fr.webp (1086x1448 canvas) ──
SCREEN = (236, 44, 850, 1408)                 # x0, y0, x1, y1 — inclusive
CORNERS = {'tl': (83, 87), 'tr': (82, 85),    # per-corner ellipse radii
           'bl': (85, 84), 'br': (78, 89)}    # (rx, ry)

# ── Status-bar geometry, measured on the 1320x2868 captures ──
TIME_BOX = (160, 60, 345, 135)                # erased before redrawing the clock
TIME_CX = 252.0                               # centre of the captured clock ink
TIME_DY = 5.129                               # draw origin inside TIME_BOX
TIME_FONT = dict(size=53.15, weight=565, optical=20)
BATTERY_BOX = (1100, 66, 1192, 128)           # erased; the nub at x>=1192 survives
SHELL = (1104.5, 74.5, 1189.5, 118.5)         # outer rounded rect of the shell
SHELL_R, SHELL_W, SHELL_RGB = 11.0, 3.5, (149, 149, 150)
FILL = (1111.5, 81.5, 1183.0, 111.0)          # inner fill at 100% charge
FILL_R, FILL_RGB = 11.0, (0, 0, 0)
CAPTURE_SIZE = (1320, 2868)


def _rounded(box, radius, size, origin, width=None, ss=8):
    """Antialiased rounded-rect coverage map, filled or stroked."""
    w, h = size
    lay = Image.new('L', (w * ss, h * ss), 0)
    d = ImageDraw.Draw(lay)
    x0, y0, x1, y1 = ((box[0] - origin[0]) * ss, (box[1] - origin[1]) * ss,
                      (box[2] - origin[0]) * ss, (box[3] - origin[1]) * ss)
    if width:
        d.rounded_rectangle([x0, y0, x1, y1], radius=radius * ss,
                            outline=255, width=int(round(width * ss)))
    else:
        d.rounded_rectangle([x0, y0, x1, y1], radius=radius * ss, fill=255)
    return np.array(lay.resize((w, h), Image.LANCZOS)).astype(float) / 255.


def _blend(region, cover, rgb):
    return region * (1 - cover[..., None]) + np.array(rgb, float) * cover[..., None]


def patch_status_bar(im):
    """Rewrite the clock to 21:00 and the battery to full, in place."""
    bg = im.getpixel((40, 95))                       # status-bar background
    d = ImageDraw.Draw(im)

    x0, y0, x1, y1 = TIME_BOX
    d.rectangle([x0, y0, x1, y1], fill=bg)
    w, h = x1 - x0, y1 - y0
    f = ImageFont.truetype(FONT, TIME_FONT['size'] * 4)
    f.set_variation_by_axes([100, TIME_FONT['optical'], 400, TIME_FONT['weight']])

    def ink(shift):
        lay = Image.new('L', (w * 4, h * 4), 0)
        ImageDraw.Draw(lay).text((shift * 4, TIME_DY * 4), '21:00', font=f, fill=255)
        return np.array(lay.resize((w, h), Image.LANCZOS)).astype(float) / 255.

    m = ink(0)                                       # centre it like iOS does
    cols = np.where(m.max(0) > 0.02)[0]
    m = ink((TIME_CX - x0) - (cols[0] + cols[-1] + 1) / 2.0)
    reg = np.array(im.crop(TIME_BOX)).astype(float)
    im.paste(Image.fromarray(_blend(reg, m, (0, 0, 0)).round().astype('uint8')), (x0, y0))

    d.rectangle(list(BATTERY_BOX), fill=bg)
    size = (BATTERY_BOX[2] - BATTERY_BOX[0], BATTERY_BOX[3] - BATTERY_BOX[1])
    org = BATTERY_BOX[:2]
    reg = np.array(im.crop(BATTERY_BOX)).astype(float)
    reg = _blend(reg, _rounded(SHELL, SHELL_R, size, org, width=SHELL_W), SHELL_RGB)
    reg = _blend(reg, _rounded(FILL, FILL_R, size, org), FILL_RGB)
    im.paste(Image.fromarray(reg.round().astype('uint8')), org)
    return im


def screen_mask(w, h, ss=8):
    """Coverage map of the chassis screen area, with its elliptical corners."""
    xs = (np.arange(w * ss) + 0.5) / ss
    ys = (np.arange(h * ss) + 0.5) / ss
    X, Y = np.meshgrid(xs, ys)
    inside = np.ones_like(X, dtype=bool)
    for k, (rx, ry) in CORNERS.items():
        cx = rx if k[1] == 'l' else w - rx
        cy = ry if k[0] == 't' else h - ry
        corner = ((X < cx) if k[1] == 'l' else (X > cx)) & \
                 ((Y < cy) if k[0] == 't' else (Y > cy))
        inside &= ~(corner & (((X - cx) / rx) ** 2 + ((Y - cy) / ry) ** 2 > 1))
    return np.array(Image.fromarray((inside * 255).astype('uint8'))
                    .resize((w, h), Image.LANCZOS)).astype(float) / 255.


def build(source, out, quality=92, keep_status_bar=False, chassis=CHASSIS):
    im = Image.open(source).convert('RGB')
    if im.size != CAPTURE_SIZE:
        print(f'  note: {os.path.basename(source)} is {im.size}, expected {CAPTURE_SIZE} — '
              'the status-bar geometry assumes the latter', file=sys.stderr)
    if not keep_status_bar:
        patch_status_bar(im)

    x0, y0, x1, y1 = SCREEN
    w, h = x1 - x0 + 1, y1 - y0 + 1
    screen = np.array(im.resize((w, h), Image.LANCZOS)).astype(float)
    frame = np.array(Image.open(chassis).convert('RGBA')).astype(float)
    m = screen_mask(w, h)[..., None]
    # black underneath, so the corners outside the mask read as bezel
    frame[y0:y1 + 1, x0:x1 + 1, :3] = screen * m
    Image.fromarray(frame.round().clip(0, 255).astype('uint8')).save(
        out, 'WEBP', quality=quality, method=6)
    return os.path.getsize(out)


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('source'); p.add_argument('out')
    p.add_argument('--quality', type=int, default=92)
    p.add_argument('--keep-status-bar', action='store_true')
    p.add_argument('--chassis', default=CHASSIS)
    a = p.parse_args()
    size = build(a.source, a.out, a.quality, a.keep_status_bar, a.chassis)
    print(f'{a.out}  {size / 1024:.1f} KB')


if __name__ == '__main__':
    main()
