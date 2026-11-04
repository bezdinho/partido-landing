// Page d'un lien de groupe (/g/<code>) : choix de la langue, français ou arabe.
// Chargé dans <head>, sans defer, pour que la bonne langue soit là dès le premier affichage.
(function () {
  'use strict';

  // Vercel Web Analytics, comme sur les autres pages.
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

  var root = document.documentElement;

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem('partido_lang'); } catch (e) {}
    if (saved === 'fr' || saved === 'ar') return saved;
    return /^ar\b/i.test(navigator.language || '') ? 'ar' : 'fr';
  }

  function apply(lang) {
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.g-lang button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
  }

  apply(initialLang());

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.lang);
    document.querySelectorAll('.g-lang button').forEach(function (button) {
      button.addEventListener('click', function () {
        apply(button.dataset.lang);
        try { localStorage.setItem('partido_lang', button.dataset.lang); } catch (e) {}
      });
    });
  });
})();
