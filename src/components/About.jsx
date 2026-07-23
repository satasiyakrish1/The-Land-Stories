import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutHero from '../assets/project-treetops.jpg';
import shailendra from '../assets/shailendra.jpg';
import aboutStudio from '../assets/about-studio.jpg';
import partner1 from '../assets/partner-1.jpg';
import partner2 from '../assets/partner-2.jpg';
import partner3 from '../assets/partner-3.jpg';
import partner4 from '../assets/partner-4.png';
import partner5 from '../assets/partner-5.png';
import partner6 from '../assets/partner-6.png';
import partner7 from '../assets/partner-7.png';
import partner8 from '../assets/partner-8.jpg';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 15);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div className="achievement-card" ref={ref}>
      <div className="card-blueprint-dots"></div>
      <div className="achievement-card-inner">
        <div className="achievement-number-wrap">
          <span className="num">{count}</span>
          <span className="suffix">{suffix}</span>
        </div>
        <div className="achievement-divider"></div>
        <div className="achievement-title">{suffix === 'K+' ? 'Sq. Ft. Area Design' : target === 30 ? 'Completed Projects' : target === 12 ? 'Cities, Countless Stories' : 'Years of Experience'}</div>
      </div>
    </div>
  );
}

export default function About({ onPageChange }) {
  const pageRef = useRef(null);

  const stats = [
    { target: 30, suffix: '+', title: 'Completed Projects' },
    { target: 1200, suffix: 'K+', title: 'Sq. Ft. Area Design' },
    { target: 12, suffix: '+', title: 'Cities, Countless Stories' },
    { target: 10, suffix: '+', title: 'Years of Experience' }
  ];

  const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-page .about-hero .about-breadcrumbs',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
      );
      gsap.fromTo('.about-page .about-hero .about-hero-title',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo('.about-page .about-hero .hero-subtitle',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={pageRef}>

      {/* Hero Banner */}
      <section
        className="about-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(${aboutHero})` }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="about-hero-text" style={{ textAlign: 'center' }}>
            <div className="about-breadcrumbs" style={{ justifyContent: 'center' }}>
              <span className="brc-home" onClick={() => onPageChange('home')}>Home</span>
              <span className="brc-divider">/</span>
              <span className="brc-current">About Us</span>
            </div>
            <h1 className="about-hero-title">
              About <span>Us</span>
            </h1>
            <p className="hero-subtitle">Landscape Architecture · Interior Design · Architectural Planning</p>
          </div>
        </div>
      </section>

      {/* Studio Introduction */}
      <section className="section about-studio-section">
        <div className="container">
          <div className="about-studio-grid">
            <div className="about-studio-text reveal-up">
              <div className="section-title-wrap" style={{ textAlign: 'left', marginBottom: '20px' }}>
                <span className="subtitle-mono">// OUR STUDIO</span>
                <h2 className="section-title" style={{ marginTop: '10px' }}>The Land <span>Stories</span></h2>
              </div>
              <p className="about-body-text">
                The Land Stories is a multidisciplinary design studio based in Ahmedabad, India, with a second studio recently opened in Massachusetts, USA. We offer integrated services across landscape architecture, interior design, and architectural planning. Founded by Shailendrasingh Jadon, our practice is rooted in a deep respect for nature, storytelling, and contextual design.
              </p>
              <p className="about-body-text">
                Every project—whether a private garden, a farmhouse, or a public plaza—is seen as an opportunity to craft a narrative through space, material, and emotion. We collaborate closely with our clients to create environments that are not only aesthetically refined, but also deeply meaningful and enduring.
              </p>
              <div className="about-location-tags">
                <div className="about-loc-tag">
                  <span className="about-loc-dot" />
                  Ahmedabad, India
                </div>
                <div className="about-loc-tag">
                  <span className="about-loc-dot" />
                  Massachusetts, USA
                </div>
              </div>
            </div>
            <div className="about-studio-img reveal-up">
              <div className="project-frame aspect-portrait">
                <div className="frame-border-draw"></div>
                <img className="project-image" src={aboutStudio} alt="The Land Stories Studio" />
                <span className="project-number">EST</span>
                <span className="project-blueprint-tag">2014</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section about-founder-section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="about-founder-grid">
            <div className="about-founder-img reveal-up">
              <div className="project-frame aspect-portrait">
                <div className="frame-border-draw"></div>
                <img className="project-image" src={shailendra} alt="Shailendra Jadon" style={{ filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'} />
                <span className="project-number">01</span>
                <span className="project-blueprint-tag">FOUNDER</span>
              </div>
            </div>
            <div className="about-founder-text reveal-up">
              <div className="section-title-wrap" style={{ textAlign: 'left', marginBottom: '20px' }}>
                <span className="subtitle-mono">// MEET THE FOUNDER</span>
                <h2 className="section-title" style={{ marginTop: '10px' }}>Shailendra <span>Jadon</span></h2>
              </div>
              <div className="about-founder-role">Architect · Landscape Designer · Educator</div>
              <p className="about-body-text">
                Shailendra is a seasoned architect with over a decade of experience in architecture, interior design, and landscape design. His design approach is rooted in storytelling—believing that every land holds a narrative, he listens to the voices of nature and translates the spirit of a place into thoughtful, responsive design.
              </p>
              <p className="about-body-text">
                A postgraduate in Landscape Architecture from CEPT University, Shailendra has also contributed to academia by teaching in several universities across Gujarat. He has led studios in both landscape design and architectural design, nurturing the next generation of designers.
              </p>
              <blockquote className="about-quote-block">
                <div className="about-quote-mark">"</div>
                <p>Every land has a story to tell. We should listen to the voices of nature and translate the spirit of the place into a design idea.</p>
                <cite>— Shailendra Jadon</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements — reuse home page pattern */}
      <section className="section achievements-section">
        <div className="container">
          <div className="achievements-layout">
            <div className="achievements-intro reveal-up">
              <span className="achievements-tag">// MEASURING EXCELLENCE</span>
              <h2 className="achievements-heading">Milestones in Architectural Storytelling</h2>
              <p className="achievements-description">
                Every line we draw, every landscape we craft, and every structure we raise shapes the stories of communities. Our metrics represent years of creative dedication and ecological harmony.
              </p>
              <div className="architecture-compass-decor">
                <div className="decor-line"></div>
                <div className="decor-circle"></div>
              </div>
            </div>
            <div className="achievements-grid-wrapper">
              <div className="achievements-grid">
                {stats.map((stat, index) => (
                  <AnimatedCounter key={index} target={stat.target} suffix={stat.suffix} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section about-partners-section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="section-title-wrap reveal-up">
            <span className="subtitle-mono">// TRUSTED BY</span>
            <h2 className="section-title">Valued <span>Partnerships</span></h2>
          </div>

          <div className="about-partners-logos reveal-up">
            {partnerLogos.map((logo, idx) => (
              <div className="about-partner-card" key={idx}>
                <img src={logo} alt={`Partner logo ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
