import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className='foo'>About Us</h2>
          <p>PowerGrid Insights empowers utilities and authorities to enhance grid resilience through data-driven decision-making.</p>
        </div>
        <div className="footer-section contact">
          <h2 className='foo'>Contact Us</h2>
          <p>Email: info@powersafe.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section links">
          <h2 className='foo'>Quick Links</h2>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2 className='foo'>Follow Us</h2>
          <ul>
            <li><a href="https://www.facebook.com/powersafe">Facebook</a></li>
            <li><a href="https://twitter.com/powersafe">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/powersafe">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/powersafe">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GridWeather Risk. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
