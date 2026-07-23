import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoDark from '../assets/logo.png';
import logoWhite from '../assets/logo-white.png';

export default function Header({ currentPage, onPageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage === 'contact') {
      setActiveSection('contact');
      return;
    }
    if (currentPage === 'about') {
      setActiveSection('about');
      return;
    }
    const handleScrollActive = () => {
      const sections = ['home', 'philosophy', 'services', 'projects', 'achievements'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [currentPage]);

  const scrollToSection = (id) => {
    setIsDrawerOpen(false);
    if (id === 'contact') {
      onPageChange('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'about') {
      onPageChange('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onPageChange('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Philosophy', value: 'philosophy' },
    { label: 'Services', value: 'services' },
    { label: 'Projects', value: 'projects' },
    { label: 'Achievements', value: 'achievements' },
    { label: 'About Us', value: 'about' },
    { label: 'Contact Us', value: 'contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled || currentPage !== 'home' ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="logo-link">
              <img 
                src={isScrolled || currentPage !== 'home' ? logoDark : logoWhite} 
                alt="The Land Stories" 
              />
              <div className="logo-tagline">
                <span>Landscape</span>
                <span>Architecture</span>
                <span>Interior</span>
              </div>
            </a>
          </div>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li 
                  key={item.value} 
                  className={`nav-item ${activeSection === item.value ? 'active' : ''}`}
                >
                  <a 
                    href={`#${item.value}`} 
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.value); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button 
              className="menu-toggle" 
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} 
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <button 
          className="drawer-close" 
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <ul className="drawer-nav">
          {navItems.map((item) => (
            <li key={item.value}>
              <a 
                href={`#${item.value}`} 
                className="drawer-item"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.value); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <h4>The Land Stories</h4>
          <p> Ahmedabad, Gujarat, India</p>
          <p>+91 97370 31996</p>
          <p>thelandstories@gmail.com</p>
          
          <div className="drawer-socials">
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
      </div>
    </>
  );
}
