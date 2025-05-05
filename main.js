// Simple footer loader
const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-section">
        <h4>RiseAndTell</h4>
        <p>Stories that shape, voices that rise.</p>
      </div>
      <div class="footer-section">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Collaborate</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h5>Support</h5>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h5>Connect</h5>
        <div class="social-icons">
          <a href="#"><img src="icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="icons/twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 RiseAndTell. All rights reserved.</p>
    </div>
  `;
  document.body.appendChild(footer);
};

createFooter();
