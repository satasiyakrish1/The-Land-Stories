import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import projectTreetops from '../assets/project-treetops.jpg';
import projectArtefino from '../assets/project-artefino.jpg';
import projectAkash from '../assets/project-akash.jpg';
import partner1 from '../assets/partner-1.jpg';
import partner2 from '../assets/partner-2.jpg';
import partner3 from '../assets/partner-3.jpg';
import partner4 from '../assets/partner-4.png';
import partner5 from '../assets/partner-5.png';
import partner6 from '../assets/partner-6.png';
import partner7 from '../assets/partner-7.png';
import partner8 from '../assets/partner-8.jpg';

const testimonials = [
  {
    text: "I want to express our very sincere thanks and appreciation to Shailendra. My project around our farmhouse is beyond our dreams. They were very professional and great to work with. I again want to thank you shail and team💫",
    author: "Jaydip Joshi",
    position: "Ahmedabad",
    image: projectTreetops
  },
  {
    text: "What an amazing architect!! Beautifully designed! Brilliant work! Commendable time management. Mr. Shail has given fully justice to the requirements. The best in the town. 👏🏽",
    author: "Mohit Kathrotiya",
    position: "Ahmedabad",
    image: projectArtefino
  },
  {
    text: "One of the best places to make your house, the entire team is so creative and supportive.",
    author: "Jayesh Rajput",
    position: "Ahmedabad",
    image: projectAkash
  }
];

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Testimonials Section */}
      <section className="testimonials-split-section">
        <div className="testimonials-split-container">
          
          {/* Left Side: Dynamic Project Image */}
          <div className="testimonials-split-image-wrap">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`testimonials-split-img ${index === current ? 'active' : ''}`}
                style={{ backgroundImage: `url('${t.image}')` }}
              ></div>
            ))}
            <div className="testimonials-image-overlay"></div>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="testimonials-split-content">
            <div className="content-inner">
              <span className="testimonials-tag">// COLLABORATOR FEEDBACK</span>
              <h2 className="testimonials-heading">What Our Clients Say</h2>
              
              <div className="testimonial-slide-container">
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className={`testimonial-editorial-slide ${index === current ? 'active' : ''}`}
                  >
                    <div className="quote-mark">“</div>
                    <p className="testimonial-quote">"{t.text}"</p>
                    <div className="testimonial-client-meta">
                      <h4 className="client-name">{t.author}</h4>
                      <span className="client-location">{t.position}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="testimonial-controls">
                <div className="testimonial-arrows-editorial">
                  <button onClick={prevTestimonial} className="arrow-btn" aria-label="Previous">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextTestimonial} className="arrow-btn" aria-label="Next">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Partners / Clients Section */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-intro reveal-up">
            <h4>Our Clients</h4>
            <p>
              At our core, we believe in design. When vision meets faithful execution, the result is nothing short of life-affirming. We're grateful to work with clients and collaborators who share this belief.
            </p>
          </div>

          <div className="partners-carousel-wrap">
            <div className="partners-track">
              {[...partners, ...partners].map((logoUrl, index) => (
                <div key={index} className="partner-logo-wrap">
                  <img src={logoUrl} alt={`Client logo ${(index % partners.length) + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
