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
    var replySubject = 'We received your message \u2013 Partido';
    var replyBody = [
      'Hi ' + first_name + ',',
      '',
      'Thank you for reaching out to Partido.',
      '',
      'We have received your message and will get back to you as soon as possible.',
      '',
      'Best regards,',
      'The Partido Team',
      'admin@partido.ma'
    ].join('\n');

    GmailApp.sendEmail(email, replySubject, replyBody, {
      name: 'Partido'
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
