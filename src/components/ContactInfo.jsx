import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import '../styles/ContactInfo.css';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      info: 'Salajpur-Belda, P.O. Khatnagar'
    },
    {
      icon: <Phone size={24} />,
      title: 'Our Number',
      info: ' +91 9547104549 / +91 9800959397 / 03229291024'
    },
    {
      icon: <Mail size={24} />,
      title: 'Our Mail',
      info: ' sassalajpur@gmail.com'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <span className="section-label">CONTACT US</span>
            <h2 className="section-title">Contact Information</h2>
            <p className="section-description">
            Saint Arnold's School: Empowering Minds, Nurturing Futures and is committed to providing quality education.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail, index) => (
                <div key={index} className="contact-item">
                  <div className="icon-circle">
                    {detail.icon}
                  </div>
                  <div className="contact-text">
                    <h3>{detail.title}</h3>
                    <p>{detail.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-full">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <input 
                  type="tel" 
                  placeholder="Your Phone Number"
                  className="form-input"
                />
                <input 
                  type="email" 
                  placeholder="Your Mail"
                  className="form-input"
                />
              </div>

              <div className="form-full">
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="form-input"
                />
              </div>

              <div className="form-full">
                <textarea 
                  placeholder="Your Message"
                  className="form-input message"
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                SEND MAIL
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;