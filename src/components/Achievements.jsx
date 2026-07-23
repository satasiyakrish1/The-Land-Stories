import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 30, suffix: "+", title: "Completed Projects" },
  { target: 1200, suffix: "K+", title: "Sq. Ft. Area Design" },
  { target: 12, suffix: "+", title: "Cities, Countless Stories" },
  { target: 10, suffix: "+", title: "Years of Experience" }
];

function CounterItem({ target, suffix, title }) {
  const numRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        },
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.innerText = Math.floor(obj.val);
          }
        }
      });
    }, cardRef);

    return () => ctx.revert();
  }, [target]);

  return (
    <div className="achievement-card" ref={cardRef}>
      <div className="card-blueprint-dots"></div>
      <div className="achievement-card-inner">
        <div className="achievement-number-wrap">
          <span className="num" ref={numRef}>0</span>
          <span className="suffix">{suffix}</span>
        </div>
        <div className="achievement-divider"></div>
        <div className="achievement-title">{title}</div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="achievements-layout">
          {/* Left: Editorial Intro Column */}
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

          {/* Right: Asymmetrical Grid of Achievements */}
          <div className="achievements-grid-wrapper">
            <div className="achievements-grid">
              {stats.map((stat, index) => (
                <CounterItem 
                  key={index}
                  target={stat.target}
                  suffix={stat.suffix}
                  title={stat.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
