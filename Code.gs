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
