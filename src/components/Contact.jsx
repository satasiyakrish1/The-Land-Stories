import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact({ onPageChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-hero">
        <div className="container">
          <div className="contact-breadcrumbs">
            <span className="brc-home" onClick={() => onPageChange('home')}>Home</span>
            <span className="brc-divider">/</span>
            <span className="brc-current">Contact Us</span>
          </div>
          <h1 className="contact-hero-title">
            Stay Connected <span>With Us</span>
          </h1>
        </div>
      </div>

      <div className="container contact-main-grid">
        <div className="contact-intro-col reveal-up">
          <p className="contact-intro-text">
            Have a project you’re ready to bring to life? At The Land Stories, we design with purpose and not just to build spaces, but to shape experiences with environmental and social meaning. If you're working on something meaningful then we'd love to hear from you. Reach out to us.
          </p>

          <div className="contact-info-cards">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrap">
                <Mail size={22} />
              </div>
              <div className="card-content">
                <h4>Email <span className="card-coordinate">// 01</span></h4>
                <a href="mailto:thelandstories@gmail.com">thelandstories@gmail.com</a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrap">
                <Phone size={22} />
              </div>
              <div className="card-content">
                <h4>Phone Number <span className="card-coordinate">// 02</span></h4>
                <a href="tel:+919737031996">+91 97370 31996</a>
              </div>
            </div>

            {/* Ahmedabad Address */}
            <div className="contact-info-card">
              <div className="card-icon-wrap">
                <MapPin size={22} />
              </div>
              <div className="card-content" style={{ width: '100%' }}>
                <h4>Ahmedabad Office <span className="card-coordinate">// 23.0440° N, 72.5441° E</span></h4>
                <p>
                  Happy Home Apartment, 15/71, ISRO Colony, Shastrinagar, Naranpura, Ahmedabad, Gujarat 380013
                </p>
                <a 
                  href="https://share.google/IgNbDznHlYZqjBTJc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="get-direction-btn"
                >
                  Get Direction →
                </a>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.44754388656!2d72.5441639!3d23.0440615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848bc96d5eef%3A0xc3cfbfdc9ee15e98!2sHappy%20Home%20Apartment!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="160" 
                  style={{ border: 0, marginTop: '15px', borderRadius: '4px', filter: 'grayscale(100%)' }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Ahmedabad Office Location Map"
                ></iframe>
              </div>
            </div>

            {/* USA Address */}
            <div className="contact-info-card">
              <div className="card-icon-wrap">
                <MapPin size={22} />
              </div>
              <div className="card-content" style={{ width: '100%' }}>
                <h4>USA Office <span className="card-coordinate">// 42.2458° N, 71.8239° W</span></h4>
                <p>28 Clement Street, Worcester, Massachusetts - 01603</p>
                <a 
                  href="https://g.co/kgs/qm1Qi2g" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="get-direction-btn"
                >
                  Get Direction →
                </a>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.0305886616053!2d-71.8239088!3d42.2458641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40669ab36181f%3A0xda5911ab1c11bf88!2s28%20Clement%20St%2C%20Worcester%2C%20MA%2001603%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="160" 
                  style={{ border: 0, marginTop: '15px', borderRadius: '4px', filter: 'grayscale(100%)' }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="USA Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col reveal-up">
          <div className="contact-form-box">
            <h3 className="form-title">Send Us A Message</h3>
            
            {submitted ? (
              <div className="form-success-message">
                <p>Thank you for reaching out! We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="form-row-half">
                  <div className="input-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <select 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Career">Career Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="input-group">
                  <textarea 
                    name="message" 
                    rows="6" 
                    placeholder="Your Message..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Submit Now</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
