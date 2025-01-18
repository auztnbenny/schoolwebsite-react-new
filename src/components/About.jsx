import React from 'react';
import '../styles/About.css';

const About = () => {
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
            The Perfect Solution For All The Protection Question
          </h2>

          {/* Main Description */}
          <p className="main-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim 
            sagittis dignissim. Praesent egestas, urna quis auctor iaculis, lacus tortor porta ligula. 
            Curabitur faucibus mattis tellus, eget sollicitudin nunc ultricies ut.
          </p>

          {/* Quote Section */}
          <div className="quote-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus 
              cursus magna, id vehicula justo eleifend ut. Cras id ipsum magna.
              Curabitur faucibus mattis tellus, eget sollicitudin nunc ultricies ut.
            </p>
          </div>

          {/* Call to Action Button */}
          <button className="read-more-btn">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;