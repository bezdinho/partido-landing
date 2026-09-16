// ============================================================
//  Partido — Contact Form Handler
//  Deploy as: Web App  |  Execute as: Me  |  Access: Anyone
// ============================================================

var RECIPIENT = 'admin@partido.ma';

function doPost(e) {
  try {
    // Parse JSON body
    var data = JSON.parse(e.postData.contents);

    var first_name = (data.first_name || '').trim();
    var last_name  = (data.last_name  || '').trim();
    var email      = (data.email      || '').trim();
    var phone      = (data.phone      || '').trim() || 'Not provided';
    var subject    = (data.subject    || '').trim() || 'General';
    var message    = (data.message    || '').trim();

    // Basic validation
    if (!first_name || !last_name || !email || !message) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }

    // Email subject line
    var emailSubject = '[Partido Contact] ' + subject + ' \u2014 ' + first_name + ' ' + last_name;

    // Email body
    var emailBody = [
      'New contact form submission:',
      '',
      'Name:    ' + first_name + ' ' + last_name,
      'Email:   ' + email,
      'Phone:   ' + phone,
      'Topic:   ' + subject,
      '',
      'Message:',
      message
    ].join('\n');

    GmailApp.sendEmail(RECIPIENT, emailSubject, emailBody, {
      replyTo: email,
      name:    first_name + ' ' + last_name
    });

    // ── Auto-reply to the user ──────────────────────────────
    // Use the website language at submission; French is the fallback for older clients.
    var language = String(data.lang || 'fr').toLowerCase().split(/[-_]/)[0];
    var replies = {
      fr: {
        subject: 'Nous avons bien reçu votre message — Partido',
        greeting: 'Bonjour ' + first_name + ',',
        thanks: 'Merci de nous avoir contactés.',
        confirmation: 'Votre message a bien été reçu. Notre équipe vous répondra dès que possible.',
        closing: 'À bientôt,',
        team: 'L’équipe Partido'
      },
      en: {
        subject: 'We received your message — Partido',
        greeting: 'Hi ' + first_name + ',',
        thanks: 'Thank you for contacting us.',
        confirmation: 'We have received your message. Our team will get back to you as soon as possible.',
        closing: 'Best regards,',
        team: 'The Partido Team'
      },
      ar: {
        subject: 'تم استلام رسالتكم — بارتيدو',
        greeting: 'مرحباً ' + first_name + '،',
        thanks: 'شكراً لتواصلكم معنا.',
        confirmation: 'تم استلام رسالتكم بنجاح. سيردّ عليكم فريقنا في أقرب وقت ممكن.',
        closing: 'مع أطيب التحيات،',
        team: 'فريق بارتيدو'
      }
    };
    if (['fr', 'en', 'ar'].indexOf(language) === -1) language = 'fr';
    var reply = replies[language];
    var paragraphs = [reply.greeting, reply.thanks, reply.confirmation, reply.closing + '\n' + reply.team, RECIPIENT];
    var replyBody = paragraphs.join('\n\n');
    // Escape the visitor name before placing it in HTML; Arabic uses an explicit RTL layout.
    var replyHtml = '<div lang="' + language + '" dir="' + (language === 'ar' ? 'rtl' : 'ltr') + '" style="font-family:Arial,sans-serif;font-size:16px;line-height:1.7;text-align:' + (language === 'ar' ? 'right' : 'left') + '">' +
      paragraphs.map(function (paragraph) { return '<p>' + escapeEmailHtml(paragraph).replace(/\n/g, '<br>') + '</p>'; }).join('') + '</div>';
    GmailApp.sendEmail(email, reply.subject, replyBody, {
      name: 'Partido',
      replyTo: RECIPIENT,
      htmlBody: replyHtml
    });
    // ── End auto-reply ──────────────────────────────────────

    return jsonResponse({ success: true });

  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── GET handler (health check) ──────────────────────────────
function doGet() {
  return jsonResponse({ status: 'Partido contact endpoint is live.' });
}

function escapeEmailHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
