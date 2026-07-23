import React from 'react';
import philosophyVideo from '../assets/philosophy-ramoliya.mp4';

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container philosophy-grid">
        <div className="video-column reveal-up">
          <div className="video-wrapper">
            {/* Top & Side Dimension Measurement Lines */}
            <div className="dimension-line dimension-top">
              <span className="dimension-tick left"></span>
              <span className="dimension-text">24.50 m</span>
              <span className="dimension-tick right"></span>
            </div>
            <div className="dimension-line dimension-left">
              <span className="dimension-tick top"></span>
              <span className="dimension-text">13.80 m</span>
              <span className="dimension-tick bottom"></span>
            </div>

            <video
              className="video-element"
              src={philosophyVideo}
              loop
              muted
              autoPlay
              playsInline
            />
          </div>
        </div>

        <div className="philosophy-content reveal-up">
          <div className="section-title-wrap philosophy-title-measure" style={{ textAlign: 'left', marginBottom: '25px' }}>
            <h2 className="section-title">Our <span>Philosophy</span></h2>
          </div>
          <p>
            At <em><strong>The Land Stories</strong></em>, we believe that every landscape holds memories, meanings, and quiet narratives waiting to unfold. Land is not a blank canvas; it is alive with history, culture, texture, and spirit. Our role is not merely to design, but to listen.
          </p>
          <p>
            We begin with observation, empathy, and reverence, understanding the essence of a place before shaping it. Through contours, plantings, materials, and movement, we craft landscapes that speak gently, profoundly to the people who inhabit them.We blur the lines between built and natural, present and past, function and feeling. Every design is a dialogue between the land and those who walk it – a story in motion, authored in collaboration with the earth.
          </p>
        </div>
      </div>
    </section>
  );
}
