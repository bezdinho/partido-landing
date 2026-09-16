/* Contact endpoint contract retained; one full-name field replaces the two name inputs. */
(function () {
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxfGz5S_NpbnrKV-xX9qKu8C7mrAKPL6Yek3j-GKo04pWJuMTlphF6-jXuD3QkY_XZ6/exec';
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('cp-form-status');
  const button = form.querySelector('.cp-submit');
  const label = button.querySelector('span');
  const fields = ['cp-name', 'cp-email', 'cp-topic', 'cp-msg'].map(id => document.getElementById(id));
  let busy = false, statusKey = '', touched = new Set();
  const copy = () => T[document.documentElement.lang || 'fr'].contact;
  function errorKey(field) {
    if (!field.value.trim()) return {'cp-name':'nameError','cp-email':'emailError','cp-topic':'topicError','cp-msg':'messageError'}[field.id];
    if (field.id === 'cp-email' && !field.validity.valid) return 'emailError';
    return '';
  }
  function validate(field) {
    const key = errorKey(field);
    const error = document.getElementById(field.id + '-error');
    field.setAttribute('aria-invalid', key ? 'true' : 'false');
    error.textContent = key ? copy()[key] : '';
    error.hidden = !key;
    return !key;
  }
  function render() {
    label.textContent = busy ? copy().sending : copy().btn;
    status.textContent = statusKey ? copy()[statusKey] : '';
    touched.forEach(validate);
  }
  fields.forEach(field => field.addEventListener('input', () => {
    if (touched.has(field)) validate(field);
    if (!busy && statusKey) { statusKey = ''; status.textContent = ''; }
  }));
  document.addEventListener('partido:language', render);
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy) return;
    touched = new Set(fields);
    const results = fields.map(validate);
    if (results.includes(false)) {
      statusKey = 'invalid'; status.className = 'cp-form-status cp-form-status--err'; render();
      fields[results.indexOf(false)].focus(); return;
    }
    const topic = fields[2];
    // Legacy deployed Apps Script requires both name fields. Keep a single visible input.
    const nameParts = fields[0].value.trim().split(/\s+/);
    const payload = { lang: document.documentElement.lang || 'fr', first_name: nameParts.shift(), last_name: nameParts.join(' ') || '—', email: fields[1].value.trim(), phone: '', subject: topic.selectedOptions[0].textContent, message: fields[3].value.trim() };
    busy = true; button.disabled = true; form.setAttribute('aria-busy','true');
    fields.forEach(field => field.disabled = true);
    statusKey = ''; status.className = 'cp-form-status'; render();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(ENDPOINT, { method:'POST', headers:{'Content-Type':'text/plain'}, body:JSON.stringify(payload), signal:controller.signal });
      if (!response.ok) throw new Error('HTTP failure');
      const data = await response.json();
      if (data.success !== true) throw new Error('Unconfirmed delivery');
      form.reset(); touched.clear();
      fields.forEach(field => field.removeAttribute('aria-invalid'));
      statusKey = 'success'; status.className = 'cp-form-status cp-form-status--ok';
    } catch (_) {
      statusKey = 'error'; status.className = 'cp-form-status cp-form-status--err';
    } finally {
      clearTimeout(timeout); busy = false; button.disabled = false;
      fields.forEach(field => field.disabled = false);
      form.removeAttribute('aria-busy'); render();
    }
  });
  render();
})();
