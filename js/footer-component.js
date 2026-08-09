/* footer function to save space */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="greek-key" aria-hidden="true"></div>   
        <div class="footer-container">
          <div class="footer-col footer-brand-col">
            <img src="assets/athena-dark.png" alt="Athena Logo" class="footer-logo">
            <h3>Athena</h3>
            <p class="tagline">Greek coffee, Turkish Style with warm company, timeless tradition.</p>
            <span class="est">Est. 1965</span>
          </div>
          <div class="footer-col">   
            <h4>Navigation</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="reservation.html">Reservation</a></li>
              <li><a href="reviews.html">Reviews</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">  
            <h4>Hours & Location</h4>
            <p>Mon–Sun · 7:00–22:00</p>
            <p>Athens · Greece</p>
            <a href="https://www.google.com/maps/place/Athens,+Greece/@37.99083,23.6971397,11012m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14a1bd1f067043f1:0x2736354576668ddd!8m2!3d37.9838096!4d23.7275388!16zL20vMG4yeg?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D" 
               target="_blank" rel="noopener" class="map-link">View Map ↗</a>
          </div>
          <div class="footer-col">   
            <h4>Newsletter</h4>
            <p>Join our table for updates and stories.</p>
            <form class="footer-newsletter">
              <input type="email" placeholder="Email address" required>
              <button type="submit">Subscribe</button>
            </form>
            <div class="social-links">
              <a href="https://www.instagram.com/" aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com/" aria-label="Facebook">FB</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© <span data-year>${new Date().getFullYear()}</span> ATHENA GREEK COFFEE HOUSE</p>
          <a href="#main-content" class="back-to-top">↑ Back to Top</a>
        </div>
      </footer>
    `;
  }
}
customElements.define("site-footer", SiteFooter);