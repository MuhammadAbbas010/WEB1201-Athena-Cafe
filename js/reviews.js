// =====================================================
// reviews.js – Athena Reviews System
// =====================================================

(function() {
  'use strict';

  const STORAGE_KEY = 'athenaReviews';

  // ── Default Reviews ──
  const defaultReviews = [
    {
      id: Date.now() + 1,
      name: 'Eleni K.',
      text: 'The best Greek coffee in Athens! The atmosphere is so warm and inviting. I felt like I was at home.',
      rating: 5,
      date: '2024-12-15'
    },
    {
      id: Date.now() + 2,
      name: 'Dimitris P.',
      text: 'Amazing place! The coffee is perfect and the staff is incredibly friendly. Highly recommend!',
      rating: 5,
      date: '2024-12-10'
    },
    {
      id: Date.now() + 3,
      name: 'Maria S.',
      text: 'I love coming here for my morning coffee. The traditional Greek coffee is unmatched.',
      rating: 4,
      date: '2024-12-05'
    }
  ];

  // ── Get Reviews ──
  function getReviews() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {}
    }
    // If no stored reviews, save defaults and return them
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultReviews));
    return defaultReviews;
  }

  // ── Save Reviews ──
  function saveReviews(reviews) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }

  // ── Render Stars ──
  function renderStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  // ── Render Reviews ──
  function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;

    const reviews = getReviews();

    if (reviews.length === 0) {
      grid.innerHTML = `
        <div class="empty-reviews">
          <span class="empty-icon">☕</span>
          <h3>No Reviews Yet</h3>
          <p>Be the first to share your experience at Athena!</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = reviews.map(review => `
      <article class="review-card">
        <div class="review-card-header">
          <span class="review-card-name">${escapeHtml(review.name)}</span>
          <span class="review-card-stars">${renderStars(review.rating)}</span>
        </div>
        <p class="review-card-text">${escapeHtml(review.text)}</p>
        <span class="review-card-date">${review.date || 'Recently'}</span>
      </article>
    `).join('');
  }

  // ── Escape HTML ──
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ── Star Rating UI ──
  function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('review-rating');
    let selectedRating = 0;

    stars.forEach(star => {
      star.addEventListener('click', function() {
        selectedRating = parseInt(this.dataset.value);
        ratingInput.value = selectedRating;
        stars.forEach(s => {
          s.classList.toggle('active', parseInt(s.dataset.value) <= selectedRating);
        });
      });

      star.addEventListener('mouseenter', function() {
        const val = parseInt(this.dataset.value);
        stars.forEach(s => {
          s.style.color = parseInt(s.dataset.value) <= val ? 'var(--gold)' : 'var(--line)';
        });
      });

      star.addEventListener('mouseleave', function() {
        stars.forEach(s => {
          s.style.color = s.classList.contains('active') ? 'var(--gold)' : 'var(--line)';
        });
      });
    });
  }

  // ── Submit Review ──
  function setupForm() {
    const form = document.getElementById('review-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('review-name');
      const text = document.getElementById('review-text');
      const rating = document.getElementById('review-rating');

      if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return;
      }

      if (!text.value.trim()) {
        alert('Please write a review.');
        text.focus();
        return;
      }

      if (parseInt(rating.value) === 0) {
        alert('Please select a star rating.');
        return;
      }

      const newReview = {
        id: Date.now(),
        name: name.value.trim(),
        text: text.value.trim(),
        rating: parseInt(rating.value),
        date: new Date().toISOString().split('T')[0]
      };

      const reviews = getReviews();
      reviews.unshift(newReview);
      saveReviews(reviews);
      renderReviews();

      // Reset form
      form.reset();
      document.getElementById('review-rating').value = 0;
      document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));

      alert('✅ Thank you for your review!');
    });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function() {
    renderReviews();
    setupStarRating();
    setupForm();
  });

})();