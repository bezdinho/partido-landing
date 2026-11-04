'use strict';

// Page publique d'un lien d'invitation de groupe : partido.ma/g/<code>?r=<ref>
// (vercel.json réécrit /g/:code vers cette fonction).
// La page arrive déjà remplie pour que les robots de WhatsApp, Facebook et X,
// qui n'exécutent aucun script, voient le vrai nom et la vraie photo du groupe.
// Elle contient le français et l'arabe : js/group-link.js choisit la langue chez
// le visiteur, si bien qu'une seule version est gardée en cache par Vercel.

const { isIP } = require('net');

const API_BASE = 'https://api.partido.ma/v1/groups/links';
const ONELINK = 'https://partidoapp.onelink.me/Yi0x';
const SITE = 'https://www.partido.ma'; // partido.ma renvoie ici : les robots n'ont pas de redirection à suivre
const GENERIC_IMAGE = `${SITE}/assets/partage-partido.jpg`;

const APP_STORE_URL = 'https://apps.apple.com/app/apple-store/id6751658726?pt=128093686&ct=website&mt=8';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.partido.master&referrer=utm_source%3Dwebsite%26utm_medium%3Dsite%26utm_campaign%3Dpartido_ma';

const CODE_RE = /^[a-z0-9]{10}$/i; // 10 signes (décision 29)
const REF_RE = /^[a-z0-9]{6}$/i; // 6 signes du membre qui partage

const UPSTREAM_TIMEOUT_MS = 3000;
const CACHE_NORMAL = 'public, max-age=0, s-maxage=60';
const CACHE_SHORT = 'public, max-age=0, s-maxage=10'; // secours, ou arabe indisponible

const CSP = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self' https://api.fontshare.com https://fonts.googleapis.com",
  'font-src https://cdn.fontshare.com https://fonts.gstatic.com',
  "img-src 'self' https:",
  "connect-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join('; ');

const TEXT = {
  eyebrow: ['INVITATION · GROUPE PRIVÉ', 'دعوة · مجموعة خاصة'],
  join: ['Rejoindre le groupe', 'انضمّ إلى المجموعة'],
  step1: ['Téléchargez Partido (gratuit).', 'حمّل تطبيق Partido (مجانًا).'],
  step2: ['Créez votre compte en 1 minute.', 'أنشئ حسابك في دقيقة واحدة.'],
  step3: ['Vous arrivez directement dans le groupe.', 'ستدخل مباشرةً إلى المجموعة.'],
  footer: ['Groupe privé : seuls ceux qui ont ce lien peuvent le rejoindre.', 'مجموعة خاصة: لا يمكن الانضمام إليها إلا لمن لديه هذا الرابط.'],
  replacedTitle: ['Ce lien ne marche plus', 'هذا الرابط لم يعد يعمل'],
  replacedText: ["L'admin du groupe a changé le lien d'invitation. Demandez le nouveau lien à un membre du groupe.", 'غيّر مشرف المجموعة رابط الدعوة. اطلب الرابط الجديد من أحد أعضاء المجموعة.'],
  goneTitle: ["Ce groupe n'existe plus.", 'هذه المجموعة لم تعد موجودة.'],
  unknownText: ['Vérifiez le lien, ou demandez-le à un membre du groupe.', 'تحقّق من الرابط، أو اطلبه من أحد أعضاء المجموعة.'],
  fallbackTitle: ['Vous êtes invité dans un groupe sur Partido.', 'أنت مدعو إلى مجموعة على Partido.'],
  discover: ['Découvrir Partido', 'اكتشف Partido'],
  pitch: ['Partido : trouvez un match de foot près de chez vous, ou les joueurs qui vous manquent.', 'Partido: اعثر على مباراة كرة قدم قريبة منك، أو على اللاعبين الذين ينقصونك.'],
};

const LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="68 55 482 140"><g><path fill="#9ec53f" d="M123.74,82.76c5.05.28,8.86,1.4,11.46,3.37,2.59,1.97,4.55,4.62,5.87,7.96,2.89,7.2,2.26,15.38-1.88,24.53-5.57,10.51-14.65,16.15-27.25,16.91h-13.47l-4.96,19.68h-16.7l12.79-52.61h17.12l-4.59,18.43h8.56c4.18-.14,7.55-1.31,10.12-3.5,2.58-2.09,4.26-4.59,5.06-7.52,2.37-8.11-.04-12.21-7.2-12.32h-7.98v-.05h-19.89l3.65-15.08,29.28.21Z"/><path fill="#9ec53f" d="M166.34,135.37c-5.05-.31-8.87-1.44-11.46-3.39-2.59-1.95-4.55-4.59-5.87-7.93-2.89-7.2-2.26-15.4,1.88-24.58,5.57-10.47,14.65-16.09,27.25-16.86h30.27l-12.79,52.98-29.28-.21ZM186.59,102.7h-.05l1.31-5.58h-8.09c-4.35.07-7.85,1.24-10.49,3.5-2.58,2.05-4.26,4.56-5.06,7.52-2.37,8.11.03,12.21,7.2,12.32h10.96l4.23-17.75Z"/><path fill="#9ec53f" d="M228.66,82.5h16.86l-3.86,15.14h-9.19c-1.04,0-2,.37-2.87,1.1-.83.73-1.39,1.65-1.67,2.77l-8.3,34.08h-16.91l9.24-38.42c2.4-8.56,7.97-13.45,16.7-14.67Z"/><path fill="#9ec53f" d="M243.48,117.52l12.89-52.41h16.91c-2.86,11.17-4.33,16.95-4.44,17.33h12.48l-3.76,15.4h-12.42c-.91,3.72-1.65,6.81-2.24,9.26-.59,2.45-1.13,4.68-1.62,6.68s-.78,3.25-.89,3.73c-.1.87.11,1.65.63,2.35.52.7,1.25,1.04,2.19,1.04h8.77l-3.55,14.67h-11.38c-4.66,0-8.34-1.81-11.01-5.43-2.71-3.62-3.57-7.83-2.56-12.63Z"/><path fill="#9ec53f" d="M275.38,135.58l13.15-53.34h17.23l-12.95,53.34h-17.43Z"/><path fill="#9ec53f" d="M323.55,135.37c-5.05-.31-8.86-1.44-11.46-3.39-2.59-1.95-4.55-4.59-5.87-7.93-2.89-7.2-2.26-15.4,1.88-24.58,5.57-10.47,14.65-16.09,27.24-16.86h13.47l4.65-17.49h16.7l-12.47,50.42h-17.12l4.6-18.43h-8.56c-4.17.14-7.55,1.3-10.12,3.5-2.58,2.05-4.26,4.56-5.06,7.52-2.37,8.11.03,12.21,7.2,12.32h27.88l-3.65,15.14-29.28-.21Z"/><path fill="#9ec53f" d="M371.52,131.3c-2.61-1.98-4.58-4.68-5.9-8.09-2.96-7.41-2.33-15.71,1.88-24.9,5.64-10.23,14.75-15.57,27.35-16.02,3.06-.17,6.18-.14,9.35.1,5.15.45,9.05,1.71,11.69,3.79,2.65,2.07,4.65,4.81,6,8.22,2.96,7.45,2.33,15.75-1.88,24.9-5.6,10.27-14.89,15.66-27.88,16.18-2.64.17-5.64.12-8.98-.16-5.15-.7-9.03-2.04-11.64-4.02ZM406.39,110.11c1.08-3.97,1.12-6.99.11-9.08-1.01-2.09-3.5-3.31-7.46-3.65-5.15-.38-9.4.5-12.74,2.66-2.61,2.02-4.33,4.51-5.17,7.46-2.4,7.9.05,12.14,7.36,12.73,5.98.14,10.23-.75,12.74-2.66,2.61-1.98,4.33-4.47,5.17-7.46Z"/></g><g><path fill="#ffffff" d="M170.68,178.31l1.71-6.96h13.14c1.4.12,2.23-.32,2.52-1.31.03-1.07-.77-1.56-2.42-1.46h-3.71c-2.56-.05-4.51-.87-5.85-2.47-1.36-1.62-1.78-3.83-1.26-6.63,1.48-4.88,5.21-7.14,11.2-6.79h13.97l-1.64,6.68h-13.59c-1.03-.05-1.61.32-1.77,1.11-.07.62.15,1.03.66,1.24.5.2,1.2.28,2.09.23l3.31-.1c3.11.1,5.17.98,6.18,2.65,1.01,1.65,1.28,3.86.81,6.63-1.03,4.98-4.44,7.37-10.24,7.19h-15.11Z"/><path fill="#ffffff" d="M217.53,152.78c2.44.13,4.29.68,5.54,1.63,1.25.95,2.2,2.23,2.84,3.85,1.4,3.48,1.09,7.43-.91,11.86-2.69,5.08-7.08,7.8-13.17,8.17h-6.51l-2.4,9.51h-8.07l6.18-25.43h8.27l-2.22,8.91h4.14c2.02-.07,3.65-.63,4.89-1.69,1.24-1.01,2.06-2.22,2.45-3.63,1.14-3.92-.02-5.9-3.48-5.95h-3.86v-.03h-9.61l1.77-7.29,14.15.1Z"/><path fill="#ffffff" d="M232.64,176.24c-1.26-.96-2.21-2.26-2.85-3.91-1.43-3.58-1.13-7.59.91-12.03,2.72-4.94,7.13-7.53,13.22-7.74,1.48-.08,2.98-.07,4.51.05,2.49.22,4.37.83,5.65,1.83s2.24,2.32,2.9,3.97c1.43,3.6,1.13,7.61-.91,12.03-2.71,4.96-7.2,7.57-13.47,7.82-1.28.08-2.72.06-4.34-.08-2.49-.34-4.37-.98-5.63-1.94ZM249.49,166c.52-1.92.54-3.38.05-4.39s-1.69-1.6-3.61-1.77c-2.49-.18-4.54.24-6.15,1.29-1.26.97-2.1,2.18-2.5,3.61-1.16,3.82.03,5.87,3.56,6.16,2.89.07,4.94-.36,6.15-1.29,1.26-.96,2.1-2.16,2.5-3.61Z"/><path fill="#ffffff" d="M270.37,152.65h8.15l-1.87,7.32h-4.44c-.5,0-.97.18-1.39.53-.4.35-.67.8-.81,1.34l-4.01,16.47h-8.17l4.46-18.57c1.16-4.14,3.85-6.5,8.07-7.09Z"/><path fill="#ffffff" d="M277.54,169.58l6.23-25.33h8.17c-1.38,5.4-2.09,8.19-2.14,8.37h6.03l-1.81,7.44h-6.01c-.44,1.8-.8,3.29-1.08,4.48-.29,1.19-.55,2.26-.78,3.23-.24.97-.38,1.57-.43,1.8-.05.42.05.8.3,1.14.25.34.6.5,1.06.5h4.24l-1.71,7.09h-5.5c-2.25,0-4.03-.87-5.32-2.62-1.31-1.75-1.73-3.78-1.24-6.11Z"/><path fill="#ffffff" d="M292.95,178.31l1.71-6.96h13.14c1.4.12,2.24-.32,2.52-1.31.03-1.07-.77-1.56-2.42-1.46h-3.71c-2.56-.05-4.51-.87-5.85-2.47-1.36-1.62-1.78-3.83-1.26-6.63,1.48-4.88,5.21-7.14,11.2-6.79h13.97l-1.64,6.68h-13.6c-1.03-.05-1.61.32-1.77,1.11-.07.62.15,1.03.66,1.24.5.2,1.2.28,2.09.23l3.31-.1c3.11.1,5.17.98,6.18,2.65,1.01,1.65,1.28,3.86.81,6.63-1.03,4.98-4.44,7.37-10.24,7.19h-15.11Z"/></g><circle fill="#ffffff" cx="300.13" cy="67.86" r="8.35"/><rect fill="#ffffff" x="72.79" y="172.36" width="82.88" height="4.42"/><rect fill="#ffffff" x="331.59" y="172.36" width="47.15" height="4.42"/><g><circle fill="#99ca3c" cx="530.79" cy="82.26" r="14.14"/><path fill="#99ca3c" d="M434.6,73.94l49.27,3.54s2.98.33,5.3,2.65,3.65,4.64,3.65,4.64c0,0,1.16,1.05,0,2.21s-7.73,4.53-7.73,4.53c0,0-.61.5-1.66-.55s-48.83-17.01-48.83-17.01Z"/><path fill="#99ca3c" d="M506.08,119.23l7.95-3.76s2.1-.99,3.54,1.44,3.98,8.06,3.98,8.06c0,0,.77.88,1.88,0s18.89-15.47,18.89-15.47l-20.77,26.29s-.99.66-1.99,0-13.48-16.57-13.48-16.57Z"/><path fill="#99ca3c" d="M466.31,141.43l17.23-10.61s1.44-1.1,3.98,0,27.29,15.91,27.29,15.91c0,0,7.29,4.97,1.33,8.4s-42.97,21.87-42.97,21.87l10.61,12.92-16.46-14.03,30.05-21.54s1.55-1.55-1.44-2.32-29.61-10.61-29.61-10.61Z"/><path fill="#ffffff" d="M389.97,181.64h-1.77v-13.7s102.74-76,115.11-79.43,19.88,16.35,9.28,22.54c-10.61,6.19-110.03,55.35-114.23,58.11-4.2,2.76-4.75.44-8.4,12.48Z"/></g></svg>';
const BADGE_APPLE_FR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" rx="5" fill="#000"/><rect x=".5" y=".5" width="119" height="39" rx="4.5" fill="none" stroke="#a6a6a6" stroke-width="1"/><g fill="#fff"><path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.62-.96a5.31 5.31 0 0 0-4.47 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.01 2.82 3.44 2.76 1.39-.06 1.92-.89 3.6-.89 1.68 0 2.16.89 3.62.86 1.5-.03 2.44-1.33 3.33-2.67a11.04 11.04 0 0 0 1.53-3.1 4.78 4.78 0 0 1-2.99-4.4z"/><path d="M22.04 12.21a4.87 4.87 0 0 0 1.12-3.49 4.95 4.95 0 0 0-3.2 1.66 4.64 4.64 0 0 0-1.14 3.37 4.09 4.09 0 0 0 3.22-1.54z"/></g><g fill="#fff"><text font-family="SF Pro Text,Helvetica,Arial,sans-serif" font-size="6.8" x="76" y="14.5" text-anchor="middle" letter-spacing=".01em">Télécharger dans l\'</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13" font-weight="600" x="76" y="29" text-anchor="middle" letter-spacing="-.02em">App Store</text></g></svg>';
const BADGE_APPLE_AR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" rx="5" fill="#000"/><rect x=".5" y=".5" width="119" height="39" rx="4.5" fill="none" stroke="#a6a6a6" stroke-width="1"/><g fill="#fff"><path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.62-.96a5.31 5.31 0 0 0-4.47 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.01 2.82 3.44 2.76 1.39-.06 1.92-.89 3.6-.89 1.68 0 2.16.89 3.62.86 1.5-.03 2.44-1.33 3.33-2.67a11.04 11.04 0 0 0 1.53-3.1 4.78 4.78 0 0 1-2.99-4.4z"/><path d="M22.04 12.21a4.87 4.87 0 0 0 1.12-3.49 4.95 4.95 0 0 0-3.2 1.66 4.64 4.64 0 0 0-1.14 3.37 4.09 4.09 0 0 0 3.22-1.54z"/></g><g fill="#fff"><text font-family="Cairo,Arial,sans-serif" font-size="8" x="76" y="15" text-anchor="middle">متاح على</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13" font-weight="600" x="76" y="29" text-anchor="middle" letter-spacing="-.02em">App Store</text></g></svg>';
const BADGE_GOOGLE_FR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40"><rect width="135" height="40" rx="5" fill="#000"/><rect x=".5" y=".5" width="134" height="39" rx="4.5" fill="none" stroke="#a6a6a6" stroke-width="1"/><g transform="translate(10,8) scale(.55)"><path fill="#00d9ff" d="M0 1.13v40.98c0 .72.4 1.12.89.65l22.61-21.14L.89.48C.4.01 0 .41 0 1.13z"/><path fill="#00f076" d="M30.24 17.77L23.5 21.62.89 43.76c.38.39.97.44 1.65.06l30.7-17.69-3-8.36z"/><path fill="#ff3a44" d="M30.24 25.47l3-8.36L.89.48C.51.09-.1.14.01.53L23.5 21.62l6.74 3.85z"/><path fill="#ffbc00" d="M.89.48C.4.01 0 .41 0 1.13l23.5 20.49 6.74-3.85L2.54.08C1.86-.3 1.27-.25.89.48z"/><path fill="#00d9ff" d="M23.5 21.62L.89 43.76c.48.47 1.07.43 1.65.06L33.24 26.2l-3-4.58-6.74 0z" opacity=".2"/><path fill="none" d="M.89.48l32.35 17.7 0 0L.89.48z"/></g><g fill="#fff"><text font-family="SF Pro Text,Helvetica,Arial,sans-serif" font-size="7.5" x="87" y="13.5" text-anchor="middle" letter-spacing=".05em">DISPONIBLE SUR</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13.2" font-weight="600" x="87" y="28" text-anchor="middle" letter-spacing="-.01em">Google Play</text></g></svg>';
const BADGE_GOOGLE_AR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40"><rect width="135" height="40" rx="5" fill="#000"/><rect x=".5" y=".5" width="134" height="39" rx="4.5" fill="none" stroke="#a6a6a6" stroke-width="1"/><g transform="translate(10,8) scale(.55)"><path fill="#00d9ff" d="M0 1.13v40.98c0 .72.4 1.12.89.65l22.61-21.14L.89.48C.4.01 0 .41 0 1.13z"/><path fill="#00f076" d="M30.24 17.77L23.5 21.62.89 43.76c.38.39.97.44 1.65.06l30.7-17.69-3-8.36z"/><path fill="#ff3a44" d="M30.24 25.47l3-8.36L.89.48C.51.09-.1.14.01.53L23.5 21.62l6.74 3.85z"/><path fill="#ffbc00" d="M.89.48C.4.01 0 .41 0 1.13l23.5 20.49 6.74-3.85L2.54.08C1.86-.3 1.27-.25.89.48z"/><path fill="#00d9ff" d="M23.5 21.62L.89 43.76c.48.47 1.07.43 1.65.06L33.24 26.2l-3-4.58-6.74 0z" opacity=".2"/><path fill="none" d="M.89.48l32.35 17.7 0 0L.89.48z"/></g><g fill="#fff"><text font-family="Cairo,Arial,sans-serif" font-size="6.8" x="87" y="13" text-anchor="middle">احصل عليه على</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13.2" font-weight="600" x="87" y="28" text-anchor="middle" letter-spacing="-.01em">Google Play</text></g></svg>';

const ICON_LINK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
const HEX_PATH = 'M60.5 9.5Q70 4 79.5 9.5L126.5 36.5Q136 42 136 53L136 133Q136 144 126.5 149.5L79.5 176.5Q70 182 60.5 176.5L13.5 149.5Q4 144 4 133L4 53Q4 42 13.5 36.5Z';
const ICON_PEOPLE_PATHS = '<g transform="translate(46 69) scale(2)" fill="none" stroke="#a1a795" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>';

// ── Écriture sûre ──────────────────────────────────────────────────

function esc(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Texte venu du serveur : une chaîne non vide, sans caractères de contrôle.
function cleanText(value) {
  if (typeof value !== 'string') return null;
  const text = value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
  return text || null;
}

function httpsUrl(value) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

function bilingual(fr, ar) {
  return `<span class="l-fr" lang="fr">${fr}</span><span class="l-ar" lang="ar">${ar}</span>`;
}

function t(key) {
  return bilingual(esc(TEXT[key][0]), esc(TEXT[key][1]));
}

// ── Morceaux de page ───────────────────────────────────────────────

function membersFr(n) {
  return n === 1 ? '1 membre' : `${n} membres`;
}

function membersAr(n) {
  if (n === 1) return 'عضو واحد';
  if (n === 2) return 'عضوان';
  if (n <= 10) return `${n} أعضاء`;
  return `${n} عضوًا`;
}

function metaLine(count, city) {
  return [count, city && `<bdi>${esc(city)}</bdi>`].filter(Boolean).join(' · ');
}

function oneLink(code, ref) {
  const params = new URLSearchParams({
    deep_link_value: 'invite',
    deep_link_sub1: 'group',
    deep_link_sub2: code,
  });
  if (ref) params.set('deep_link_sub3', ref);
  return `${ONELINK}?${params}`;
}

function badges(appleUrl, googleUrl, newTab) {
  const attrs = newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
  const badge = (url, cls, label, svg) => `<a class="g-badge ${cls}" lang="${cls === 'l-ar' ? 'ar' : 'fr'}" href="${esc(url)}"${attrs} aria-label="${esc(label)}">${svg}</a>`;
  return `<div class="g-badges">
${badge(appleUrl, 'l-fr', 'Télécharger sur l’App Store', BADGE_APPLE_FR)}
${badge(appleUrl, 'l-ar', 'حمّل التطبيق من App Store', BADGE_APPLE_AR)}
${badge(googleUrl, 'l-fr', 'Télécharger sur Google Play', BADGE_GOOGLE_FR)}
${badge(googleUrl, 'l-ar', 'حمّل التطبيق من Google Play', BADGE_GOOGLE_AR)}
</div>`;
}

function steps() {
  const items = ['step1', 'step2', 'step3']
    .map((key, i) => `<li><span class="g-steps__n">${i + 1}</span><span>${t(key)}</span></li>`)
    .join('\n');
  return `<ol class="g-steps">\n${items}\n</ol>`;
}

function neutralHex() {
  return `<svg class="g-hex" viewBox="0 0 140 186" aria-hidden="true"><path d="${HEX_PATH}" fill="#1c1f18" stroke="#3a3f32" stroke-width="3" stroke-linejoin="round"/>${ICON_PEOPLE_PATHS}</svg>`;
}

function photoHex(photo) {
  return `<svg class="g-hex" viewBox="0 0 140 186" aria-hidden="true"><defs><clipPath id="g-hex-clip"><path d="${HEX_PATH}"/></clipPath></defs><path d="${HEX_PATH}" fill="#1c1f18"/><image href="${esc(photo)}" width="140" height="186" preserveAspectRatio="xMidYMid slice" clip-path="url(#g-hex-clip)"/><path d="${HEX_PATH}" fill="none" stroke="#99ca3c" stroke-width="4" stroke-linejoin="round"/></svg>`;
}

function hero(photo) {
  if (!photo) return `<div class="g-hero">${neutralHex()}</div>`;
  return `<div class="g-hero g-hero--photo"><img class="g-hero__bg" src="${esc(photo)}" alt="">${photoHex(photo)}</div>`;
}

function shell({ og, main, footer }) {
  return `<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(og.title)}</title>
<meta name="description" content="${esc(og.description)}">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#111310">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Partido">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="${esc(og.url)}">
<meta property="og:title" content="${esc(og.title)}">
<meta property="og:description" content="${esc(og.description)}">
<meta property="og:image" content="${esc(og.image)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(og.title)}">
<meta name="twitter:description" content="${esc(og.description)}">
<meta name="twitter:image" content="${esc(og.image)}">
<link rel="preconnect" href="https://api.fontshare.com">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/group-link.css">
<link rel="icon" href="/favicon.ico?v=4" sizes="16x16 32x32 48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=4">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png?v=4">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2">
<script src="/js/group-link.js"></script>
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>
<header class="g-top">
<a class="g-logo" href="/" aria-label="Partido">${LOGO_SVG}</a>
<div class="g-lang" role="group" aria-label="Langue · اللغة">
<button type="button" data-lang="fr" lang="fr">FR</button><span aria-hidden="true">·</span><button type="button" data-lang="ar" lang="ar">العربية</button>
</div>
</header>
<main class="g-main">
${main}
</main>
${footer ? `<footer class="g-foot">${footer}</footer>` : ''}
</body>
</html>
`;
}

// ── Les cas de la page ─────────────────────────────────────────────

function activePage({ code, ref, data, cityAr, og }) {
  const name = cleanText(data.name);
  const photo = httpsUrl(data.photoUrl);
  const n = Number.isInteger(data.memberCount) && data.memberCount > 0 ? data.memberCount : null;
  const cityFr = cleanText(data.city && data.city.name);
  const player = cleanText(data.inviter && data.inviter.username);
  const link = oneLink(code, ref);

  const meta = n || cityFr
    ? `<p class="g-meta">${bilingual(metaLine(n && esc(membersFr(n)), cityFr), metaLine(n && esc(membersAr(n)), cityAr || cityFr))}</p>`
    : '';
  const who = player && `<b><bdi>${esc(player)}</bdi></b>`;
  const invite = player
    ? `<p class="g-text g-text--invite">${bilingual(`${who} vous invite à rejoindre son groupe de foot sur Partido.`, `يدعوك ${who} للانضمام إلى مجموعته لكرة القدم على Partido.`)}</p>`
    : '';

  return shell({
    og,
    main: `${hero(photo)}
<div class="g-col">
<p class="g-eyebrow">${t('eyebrow')}</p>
<h1 class="g-title"><bdi>${esc(name)}</bdi></h1>
${meta}
${invite}
<a class="g-cta" href="${esc(link)}">${t('join')}</a>
${badges(link, link, false)}
${steps()}
</div>`,
    footer: t('footer'),
  });
}

function deadLinkPage({ og, title, text }) {
  return shell({
    og,
    main: `<div class="g-col g-col--dead">
<div class="g-dead-icon">${ICON_LINK}</div>
<h1 class="g-title">${t(title)}</h1>
${text ? `<p class="g-text">${t(text)}</p>` : ''}
<a class="g-cta" href="/">${t('discover')}</a>
${badges(APP_STORE_URL, GOOGLE_PLAY_URL, true)}
<p class="g-pitch">${t('pitch')}</p>
</div>`,
  });
}

function fallbackPage({ code, ref, og }) {
  const link = oneLink(code, ref);
  return shell({
    og,
    main: `${hero(null)}
<div class="g-col">
<p class="g-eyebrow">${t('eyebrow')}</p>
<h1 class="g-title g-title--long">${t('fallbackTitle')}</h1>
<a class="g-cta" href="${esc(link)}">${t('join')}</a>
${badges(link, link, false)}
${steps()}
</div>`,
    footer: t('footer'),
  });
}

// ── Aperçu (robots) ────────────────────────────────────────────────

function genericOg(code) {
  return {
    title: 'Partido',
    description: TEXT.pitch[0],
    image: GENERIC_IMAGE,
    url: code ? `${SITE}/g/${code}` : `${SITE}/`,
  };
}

function ogFromShare(share, code) {
  const generic = genericOg(code);
  const s = share && typeof share === 'object' ? share : {};
  return {
    title: cleanText(s.title) || generic.title,
    description: cleanText(s.description) || generic.description,
    image: httpsUrl(s.image) || generic.image,
    url: generic.url,
  };
}

// ── Serveur Partido ────────────────────────────────────────────────

// Adresse du vrai visiteur telle que Vercel la donne : une seule, et de forme valide.
// Elle ne sert qu'à l'appel au serveur : ni la page, ni les journaux, ni le cache ne la voient.
function visitorIp(req) {
  const { 'x-real-ip': realIp, 'x-forwarded-for': forwarded = '' } = req.headers;
  const address = (realIp || forwarded.split(',')[0]).trim();
  // isIP accepte « fe80::1%eth0 » : un suffixe de zone n'a pas de sens pour un visiteur.
  return isIP(address) && !address.includes('%') ? address : null;
}

async function fetchPreview(code, ref, lang, signal, visitor) {
  const query = new URLSearchParams({ lang });
  if (ref) query.set('r', ref);
  const headers = { Accept: 'application/json' };
  if (process.env.PARTIDO_SITE_KEY) {
    headers['X-Partido-Site-Key'] = process.env.PARTIDO_SITE_KEY;
    // Le serveur compte alors ses limites sur le visiteur, pas sur l'adresse de Vercel.
    if (visitor) headers['X-Partido-Visitor-IP'] = visitor;
  }

  try {
    // redirect: 'error' : le laissez-passer n'est jamais renvoyé vers une autre adresse.
    const response = await fetch(`${API_BASE}/${encodeURIComponent(code)}/preview?${query}`, { headers, signal, redirect: 'error' });
    if (response.status === 404) return { kind: 'notfound' };
    if (response.status !== 200) {
      console.warn('[group-link] réponse inattendue du serveur', response.status);
      return { kind: 'error' };
    }
    return { kind: 'ok', data: await response.json() };
  } catch (error) {
    console.warn('[group-link] serveur injoignable', error && error.name);
    return { kind: 'error' };
  }
}

async function buildPage(code, ref, visitor) {
  const unknown = () => ({
    status: 404,
    cache: CACHE_NORMAL,
    html: deadLinkPage({ og: genericOg(CODE_RE.test(code) ? code : null), title: 'replacedTitle', text: 'unknownText' }),
  });
  const fallback = () => ({ status: 200, cache: CACHE_SHORT, html: fallbackPage({ code, ref, og: genericOg(code) }) });

  if (!CODE_RE.test(code)) return unknown();

  // Un seul délai pour les deux appels. L'arabe n'est demandé que pour un lien valide :
  // les codes faux comptent dans une limite stricte par adresse IP, côté serveur.
  const signal = AbortSignal.timeout(UPSTREAM_TIMEOUT_MS);
  const fr = await fetchPreview(code, ref, 'fr', signal, visitor);
  if (fr.kind === 'notfound') return unknown();
  if (fr.kind !== 'ok' || !fr.data || typeof fr.data !== 'object') return fallback();

  const data = fr.data;
  const og = ogFromShare(data.share, code);

  if (data.status === 'expired') {
    const page = data.reason === 'REPLACED'
      ? { title: 'replacedTitle', text: 'replacedText' }
      : data.reason === 'GROUP_DELETED' || data.reason === 'GROUP_CLOSED'
        ? { title: 'goneTitle', text: null }
        : { title: 'replacedTitle', text: 'unknownText' };
    return { status: 200, cache: CACHE_NORMAL, html: deadLinkPage({ og, ...page }) };
  }

  if (data.status !== 'active' || !cleanText(data.name)) return fallback();

  const ar = await fetchPreview(code, ref, 'ar', signal, visitor);
  const arOk = ar.kind === 'ok' && ar.data && ar.data.status === 'active';
  const cityAr = arOk ? cleanText(ar.data.city && ar.data.city.name) : null;
  return {
    status: 200,
    cache: arOk ? CACHE_NORMAL : CACHE_SHORT,
    html: activePage({ code, ref, data, cityAr, og }),
  };
}

module.exports = async function groupLink(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET, HEAD');
    res.end();
    return;
  }

  const url = new URL(req.url, SITE);
  const pathCode = url.pathname.match(/^\/g\/([^/]+)\/?$/);
  const code = url.searchParams.get('code') || (pathCode ? pathCode[1] : '');
  const rawRef = url.searchParams.get('r');
  const ref = rawRef && REF_RE.test(rawRef) ? rawRef : null;

  let page;
  try {
    page = await buildPage(code, ref, visitorIp(req));
  } catch (error) {
    console.error('[group-link] erreur de fabrication', error && error.name);
    page = CODE_RE.test(code)
      ? { status: 200, cache: CACHE_SHORT, html: fallbackPage({ code, ref, og: genericOg(code) }) }
      : { status: 404, cache: CACHE_NORMAL, html: deadLinkPage({ og: genericOg(null), title: 'replacedTitle', text: 'unknownText' }) };
  }

  const body = Buffer.from(page.html, 'utf8');
  res.statusCode = page.status;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Content-Length', body.length);
  res.setHeader('Cache-Control', page.cache);
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Content-Security-Policy', CSP);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.end(req.method === 'HEAD' ? undefined : body);
};
