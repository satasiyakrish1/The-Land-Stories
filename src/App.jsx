import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path === '/about-us' || path === '/about') return 'about';
    if (path === '/contact-us' || path === '/contact') return 'contact';
    return 'home';
  };

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(getInitialPage);

  const navigate = (page) => {
    setCurrentPage(page);
    const path = page === 'about' ? '/about-us' : page === 'contact' ? '/contact-us' : '/';
    window.history.pushState({}, '', path);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '');
      if (path === '/about-us' || path === '/about') {
        setCurrentPage('about');
      } else if (path === '/contact-us' || path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Clean up existing ScrollTriggers to prevent orphans on page transition
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Set initial states for elements to animate to prevent flash of content
    gsap.set('.reveal-up', { y: 60, opacity: 0 });
    gsap.set('.services-grid > *, .projects-grid > *, .partners-grid > *, .gallery-grid > *, .achievements-grid > *', { y: 40, opacity: 0 });

    // Single elements fade-in-up reveal
    const reveals = document.querySelectorAll('.reveal-up');
    reveals.forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Stagger grid elements
    const grids = document.querySelectorAll('.services-grid, .projects-grid, .partners-grid, .gallery-grid, .achievements-grid');
    grids.forEach((grid) => {
      gsap.to(grid.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoading, currentPage]);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="animate-fade-in">
          <Header currentPage={currentPage} onPageChange={navigate} />
          {currentPage === 'home' ? (
            <>
              <HeroSlider />
              <Philosophy />
              <Services />
              <Projects />
              <Achievements />
              <Testimonials />
              <Gallery />
            </>
          ) : currentPage === 'about' ? (
            <About onPageChange={navigate} />
          ) : (
            <Contact onPageChange={navigate} />
          )}
          <Footer />
          <ScrollTop />
        </div>
      )}
    </>
  );
}

export default App;
