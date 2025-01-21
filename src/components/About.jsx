import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* Left Side - Image Section */}
        <div className="about-left">
          <div className="image-container">
            <img 
              src="../assets/images/classroom1.jpg"
              alt="Business person with security interface" 
              className="main-image"
            />
            {/* Experience Badge */}
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="exp-text">Experience</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="about-right">
          {/* Section Label */}
          <div className="section-label">
            ABOUT US
          </div>

          {/* Main Heading */}
          <h2 className="section-heading">
          About Saint Arnold’s School
          </h2>

          {/* Main Description */}
          <p className="main-description">
          Saint Arnold’s School aims at making a unique campus that would facilitate holistic development of every child. It focuses on making the school a full-fledged School in next 5 years. In response to the new challenges in the educational environment, the management has been very creative in designing programs and activities that suit the children’s growing interest in multi-areas.
          </p>

          {/* Quote Section */}
          <div className="quote-section">
            <p>
            The new school campus presents a clean, green, friendly and healthy environment. It has well-furnished classrooms with CCTV surveillance, well-designed computer and science labs to explore and gain experiential knowledge. Since, the school is in the rural set up, it will have good sports and games facilities like football, volleyball, basketball, cricket, badminton etc., to unravel the hidden rural talents.
            </p>
          </div>

          {/* Call to Action Button */}
          <button className="read-more-btn" onClick={() => navigate('/aboutus')}>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;