// =====================================================
// contact.js – Athena Contact Page
// =====================================================

(function() {
  'use strict';

  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const subject = document.getElementById('contact-subject');
      const message = document.getElementById('contact-message');

      // Validation
      if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return;
      }

      if (!email.value.trim() || !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
      }

      if (!subject.value.trim()) {
        alert('Please enter a subject.');
        subject.focus();
        return;
      }

      if (!message.value.trim()) {
        alert('Please write a message.');
        message.focus();
        return;
      }

      // Simulate sending
      const btn = form.querySelector('.btn-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        alert('✅ Message sent successfully! We\'ll get back to you soon.');
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1500);
    });
  }

})();