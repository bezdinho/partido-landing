/* === contact.js === */
/* Handles the contact form submission via Google Apps Script */

(function () {
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbxfGz5S_NpbnrKV-xX9qKu8C7mrAKPL6Yek3j-GKo04pWJuMTlphF6-jXuD3QkY_XZ6/exec';

  var form    = document.getElementById('contact-form');
  var status  = document.getElementById('cp-form-status');
  var btn     = form && form.querySelector('.cp-submit');
  var btnSpan = btn  && btn.querySelector('span');

  if (!form) return;

  // ── Live validation: enable button only when all required fields are valid ──
  var fFname = form.querySelector('#cp-fname');
  var fLname = form.querySelector('#cp-lname');
  var fEmail = form.querySelector('#cp-email');
  var fTopic = form.querySelector('#cp-topic');
  var fMsg   = form.querySelector('#cp-msg');

  function isEmailValid(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function isFormValid() {
    return (fFname.value.trim() !== '') &&
           (fLname.value.trim() !== '') &&
           isEmailValid(fEmail.value.trim()) &&
           (fTopic.value !== '') &&
           (fMsg.value.trim() !== '');
  }

  function updateButton() {
    btn.disabled = !isFormValid();
  }

  // Disable on init
  btn.disabled = true;

  // Watch all required fields
  [fFname, fLname, fEmail, fTopic, fMsg].forEach(function (el) {
    el.addEventListener('input', updateButton);
    el.addEventListener('change', updateButton);
  });
  // ── End live validation ──

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // ── Gather fields ──
    var select       = form.querySelector('#cp-topic');
    var subjectLabel = select.options[select.selectedIndex]
                        ? select.options[select.selectedIndex].text
                        : select.value;

    var payload = {
      first_name: (form.querySelector('#cp-fname').value  || '').trim(),
      last_name:  (form.querySelector('#cp-lname').value  || '').trim(),
      email:      (form.querySelector('#cp-email').value  || '').trim(),
      phone:      (form.querySelector('#cp-phone').value  || '').trim(),
      subject:    subjectLabel,
      message:    (form.querySelector('#cp-msg').value    || '').trim()
    };

    // ── Loading state ──
    btn.disabled    = true;
    btnSpan.textContent = 'Sending\u2026';
    status.textContent  = '';
    status.className    = 'cp-form-status';

    fetch(ENDPOINT, {
      method:  'POST',
      headers: { 'Content-Type': 'text/plain' },
      body:    JSON.stringify(payload)
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.success) {
        status.textContent = 'Message sent successfully.';
        status.classList.add('cp-form-status--ok');
        form.reset();
        updateButton(); // re-disable after reset
      } else {
        throw new Error(data.error || 'Server error');
      }
    })
    .catch(function () {
      status.textContent = 'Something went wrong. Please try again.';
      status.classList.add('cp-form-status--err');
    })
    .finally(function () {
      btnSpan.textContent = 'Send message';
      updateButton(); // restore correct enabled/disabled state after response
    });
  });
})();
