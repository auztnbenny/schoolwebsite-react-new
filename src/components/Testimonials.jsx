import React, { useState } from 'react';
import '../styles/Testimonials.css';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Testimonial #1",
      designation: "Designation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, leo sit amet aliquet sollicitudin, nulla mi viverra mi, a sodales magna sem quis sem. Phasellus finibus lectus ac ligula gravida vulputate.",
      image: "/assets/images/MIFTAHUL_ISRAR.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Testimonial #2",
      designation: "Designation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, leo sit amet aliquet sollicitudin, nulla mi viverra mi, a sodales magna sem quis sem. Phasellus finibus lectus ac ligula gravida vulputate.",
      image: "/assets/images/MIFTAHUL_ISRAR.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Testimonial #3",
      designation: "Designation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, leo sit amet aliquet sollicitudin, nulla mi viverra mi, a sodales magna sem quis sem. Phasellus finibus lectus ac ligula gravida vulputate.",
      image: "/assets/images/MIFTAHUL_ISRAR.jpg",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">What Client Says About Us</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
          </p>
          <button className="see-more-btn">SEE MORE</button>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Star Rating */}
              <div className="star-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index}
                    size={20}
                    className="star-icon"
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="testimonial-content">
                {testimonial.content}
              </p>

              {/* Profile Section */}
              <div className="profile-section">
                <div className="profile-info">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="profile-image"
                  />
                  <div className="profile-text">
                    <h4 className="profile-name">{testimonial.name}</h4>
                    <p className="profile-designation">{testimonial.designation}</p>
                  </div>
                </div>
                <Quote className="quote-icon" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;