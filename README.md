# 🏛️ Athena Greek Coffee House

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> A modern, responsive multi-page web application celebrating authentic Greek coffee, Turkish-style brewing, and Mediterranean café culture. Built with vanilla HTML5, custom CSS properties, and native Web Components.

---

## 📸 Preview

| Desktop Light View | Mobile Responsive |
| :---: | :---: |
| ![Desktop View](assets/athena-dark.png) | ![Mobile View](assets/athena-dark.png) |


| ![Hero Page](/screenshots/Hero-readme.png)|

---

## ✨ Features

* **🎨 Theme Switcher:** Fully customizable Dark and Light modes using CSS variables and interactive SVGs with local storage persistence.
* **📱 Fully Responsive:** Mobile-first design optimized across desktop, tablet, and mobile breakpoints using CSS Grid and Flexbox.
* **⚙️ Custom Web Components:** Modular `<site-footer>` custom element built with native Web Components to eliminate code duplication across pages.
* **📋 Multi-Step Reservation Form:** Interactive step-by-step table reservation workflow with client-side form validation.
* **♿ Accessibility First:** Includes skip navigation links, explicit `aria-` labels, dynamic high-contrast adjustments, and keyboard navigation support.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Modern Flexbox & CSS Grid), JavaScript (ES6+)
* **Architecture:** Modular component architecture (Vanilla Web Components)
* **Fonts:** Google Fonts (*Cormorant Garamond*, *Manrope*)
* **Icons:** Custom SVG iconography

---

## 📂 Project Structure

```text
WEB1201-WEB-FUNDAMENTALS-FINAL-PROJECT/
├── assets/                  # Brand assets, logos, and images
├── css/
│   ├── styles.css           # Global stylesheets, layout grids, variables
│   └── register.css         # Page-specific reservation styling
├── js/
│   ├── script.js            # Core interactive scripts & theme toggles
│   ├── register.js          # Multi-step form logic & validation
│   └── footer-component.js  # Reusable <site-footer> Web Component
├── index.html               # Home Page
├── menu.html                # Coffee & Pastry Menu
├── reservation.html         # Multi-step Reservation Page
├── reviews.html             # Customer Testimonials
├── team.html                # Staff & Heritage Info
└── contact.html             # Contact & Location Info
