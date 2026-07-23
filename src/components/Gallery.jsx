import React from 'react';
import gal21 from '../assets/gal-21.jpg';
import gal22 from '../assets/gal-22.jpg';
import gal23 from '../assets/gal-23.jpg';
import gal24 from '../assets/gal-24.jpg';

const galleryImages = [
  gal21,
  gal22,
  gal23,
  gal24
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-row gallery-grid">
        {galleryImages.map((imgUrl, index) => (
          <div key={index} className="gallery-item">
            <img 
              className="gallery-img" 
              src={imgUrl} 
              alt={`Gallery detail ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
