import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoWhite from '../assets/logo-white.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-col animate-fade-in-up">
          <div className="logo-wrap footer-logo-wrap">
            <img 
              className="footer-logo" 
              src={logoWhite} 
              alt="The Land Stories Logo" 
            />
            <div className="logo-tagline footer-tagline">
              <span>Landscape</span>
              <span>Architecture</span>
              <span>Interior</span>
            </div>
          </div>
          <p className="footer-desc">
            At The Land Stories, we believe that every landscape holds memories, meanings, and quiet narratives waiting to unfold. We craft landscapes that speak gently and profoundly to the people who walk them.
          </p>
          <div className="drawer-socials" style={{ marginTop: '10px' }}>
            <a href="https://www.instagram.com/the_land_stories/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578608588496" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/the-land-stories/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="http://www.youtube.com/@thelandstories" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className="footer-col animate-fade-in-up">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div className="footer-col animate-fade-in-up">
          <h4 className="footer-title">Contact Info</h4>
          <div className="contact-item">
            <MapPin className="contact-icon" size={20} />
            <span className="contact-text">
              Happy Home Apartment, 15/71, ISRO Colony, Shastrinagar, Naranpura, Ahmedabad, Gujarat 380013
            </span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={20} />
            <span className="contact-text">
              <a href="tel:+919737031996">+91 97370 31996</a>
            </span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={20} />
            <span className="contact-text">
              <a href="mailto:thelandstories@gmail.com">thelandstories@gmail.com</a>
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>The Land Stories © copyright {currentYear}. All Rights Reserved.</p>
        <p>
          Design & Developed by <a href="https://krishsatasiya.netlify.app/" target="_blank" rel="noopener noreferrer">Krish Satasiya</a>
        </p>
      </div>
    </footer>
  );
}
