import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import projectIconic from '../assets/project-iconic.jpg';

const slides = [
  {
    image: hero1,
    title: ["Where every land whispers —", "we craft Land Stories."]
  },
  {
    image: hero2,
    title: ["Every land holds a story —", "we are the storytellers."]
  },
  {
    image: projectIconic,
    title: ["Unique lands. Timeless tales.", "We are Land Stories."]
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`slide ${index === current ? 'active' : ''}`}
        >
          <div 
            className="slide-bg" 
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="slide-overlay" />
          <div className="slide-content-wrapper">
            <div className="container">
              <div className="slide-content">
                <h1 className="slide-title">
                  {slide.title.map((line, idx) => (
                    <span key={idx}>{line}</span>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-controls-container container">
        <div className="slider-arrows">
          <button 
            className="slider-arrow" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="slider-arrow" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
