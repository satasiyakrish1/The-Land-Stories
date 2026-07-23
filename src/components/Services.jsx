import React from 'react';
import projectPintu2 from '../assets/project-pintu-2.jpg';
import serviceTreetops from '../assets/service-treetops.jpg';
import serviceFancy from '../assets/service-fancy.jpg';
import projectIconic from '../assets/project-iconic.jpg';

const services = [
  {
    title: "Landscape Design",
    image: projectPintu2,
    description: "Designing immersive, sustainable outdoor spaces inspired by nature and place."
  },
  {
    title: "Architecture Design",
    image: serviceTreetops,
    description: "Creating context-sensitive architecture that blends form, function, and environmental harmony."
  },
  {
    title: "Interior Design",
    image: serviceFancy,
    description: "Designing soulful, timeless interiors that reflect personality, purpose, and natural warmth."
  },
  {
    title: "Other Services",
    image: projectIconic,
    description: "Our design portfolio includes interactive playscapes, tailored outdoor furniture, sculptures, paintings, and unique light designs."
  }
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="section-title-wrap reveal-up">
          <h2 className="section-title">Our <span>Services</span></h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div 
                className="service-bg" 
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="service-overlay">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
