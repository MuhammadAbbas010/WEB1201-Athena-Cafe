# 🏛️ Athena Greek Coffee House

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
<!-- TODO(human): no LICENSE file exists in the repo yet, so the MIT badge below links nowhere. Either add a LICENSE file or drop this badge. -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)


<table border="0" style="border: none; border-collapse: collapse;">
  <tr style="border: none;">
    <td width="30%" align="center" style="border: none;">
      <img src="assets/athena-dark.png" alt="Athena Logo" width="220" />
    </td>
    <td width="70%" valign="top" style="border: none;">
      <h3>About the Project</h3>
      <p>
        A modern, responsive multi-page web application celebrating authentic Greek coffee, 
        Turkish-style brewing, and Mediterranean café culture. Built with vanilla HTML5, 
        custom CSS properties, and native Web Components for the WEB1201 final assessment.
      </p>
      <h4>👥 Group Members</h4>
      <ul>
        <li><strong>Member 1 Ramazan Karahan</strong> (Student ID: <code>24006801</code>) — <em>Role / Menu & Contact Us form </em></li>
        <li><strong>Member 2 Muhammad Abbas</strong> (Student ID: <code>26052019</code>) — <em>Role / Login & Reservation and footer UI </em></li>
        <li><strong>Member 3 Hafiz Raziq Obiyathulla</strong> (Student ID: <code>23059454</code>) — <em>Role / Team page </em></li>
        <li><strong>Member 4 Wayne Bertrand Lesperance</strong> (Student ID: <code>25018177</code>) — <em>Role / Website Home page and design language</em></li>
      </ul>
    </td>
  </tr>
</table>

---

### Site Snapshots
(Click to expand / collapse)


<details open>
<summary><b>📷 Slide 1: Athena Landing Page</b></summary>
<br>
<img src="screenshots/landing.png" alt="Landing page" width="50%" max-height="200px">
<p align="left"><i>ATHENA Home page</i></p>
</details>

<details>
<summary><b>📷 Slide 2: Our delicacies</b></summary>
<br>
<img src="screenshots/menu.png" alt="Coffee & Pastries" width="100%" max-height="400px">
<p align="center"><i>Enjoy our hot & cold drinks with handmade daily pastries, baklava, and honeyed treats.</i></p>
</details>

<details>
<summary><b>📷 Slide 3: Reservation Page</b></summary>
<br>
<img src="screenshots/reservation.png" alt="Reservation and Login Page" width="100%" max-height="400px">
<p align="left"><i>Reserve your seat before it's too late!</i></p>
</details>


## ✨ Features

* **🎨 Theme Switcher:** Fully customizable Dark and Light modes using CSS variables and interactive SVGs with local storage persistence.
* **📱 Fully Responsive:** Mobile-first design optimized across desktop, tablet, and mobile breakpoints using CSS Grid and Flexbox.
* **⚙️ Custom Web Components:** Modular `<site-footer>` custom element built with native Web Components to eliminate code duplication across pages.
* **📋 Multi-Step Reservation Form:** 3-step interactive login page with a greeting message after login validation and progress tracker bar
* **♿ Accessibility First:** Includes skip navigation links, explicit `aria-` labels, dynamic high-contrast adjustments, and keyboard navigation support.



### 🛠️ Tech Stack and Assets Used  

* **Frontend:** HTML5, CSS3 (Modern Flexbox & CSS Grid), JavaScript (ES6+)
* **Architecture:** Modular component architecture (Vanilla Web Components)
* **Fonts:** Google Fonts (*Cormorant Garamond*, *Manrope*)
* **Icons:** SVG iconography
* **Logos:** Custom created by M.Abbas



### 📂 File Directories

```text
WEB1201-Athena-Cafe/
├── assets/                  # Brand assets, logos, and menu images
├── css/
│   ├── styles.css            # Global stylesheets, layout grids, variables
│   ├── register.css          # Reservation page styling
│   ├── menu.css               # Menu page styling
│   ├── contact.css            # Contact page styling
│   ├── reviews.css            # Reviews page styling
│   └── team.css               # Team page styling
├── js/
│   ├── script.js              # Core interactive scripts & theme toggles
│   ├── theme-init.js          # Applies saved theme before first paint
│   ├── register.js            # Multi-step reservation form logic & validation
│   ├── footer-component.js    # Reusable <site-footer> Web Component
│   ├── catalogue.js           # Menu catalogue rendering/filtering
│   ├── contact.js             # Contact form logic
│   └── reviews.js             # Reviews page logic
├── portfolio/                 # Individual team member portfolio pages
│   ├── member1.html … member4.html
│   ├── css/portfolio.css
│   ├── js/portfolio.js
│   └── portfolioImages/, assets/
├── screenshots/                # README preview images
├── index.html                  # Home page
├── menu.html                   # Coffee & pastry menu
├── reservation.html            # Multi-step reservation & login page
├── reviews.html                 # Customer testimonials
├── team.html                    # Staff info
└── contact.html                  # Contact us page
```

## 🚀 Getting Started

This is a static site with no build step or dependencies — just open it in a browser:

```bash
git clone https://github.com/muhammadabbas010/web1201-athena-cafe.git
cd web1201-athena-cafe
```

Then either open `index.html` directly in your browser, or serve it locally (recommended, so relative paths and fonts load correctly):

```bash
npx serve .
# or
python3 -m http.server
```
