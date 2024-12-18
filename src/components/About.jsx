import React from 'react';
import aboutImg from '../assets/images/aboutImg.png';
import education from '../assets/images/education.png';
import classIcon from '../assets/images/class.png';
import academy from '../assets/images/academy.png';
import '../styles/About.css';

function About() {
  const features = [
    {
      icon: education,
      title: 'Special Education',
      description: 'Special education tailors teaching to empower students with disabilities, unlocking their full potential.',
    },
    {
      icon: classIcon,
      title: 'Sports and Games',
      description: "Sports and games boost students' health, teamwork, stress relief, fitness, and social skills.",
    },
    {
      icon: academy,
      title: 'Traditional Academics',
      description: "We emphasize foundational knowledge, skills, and values essential for a well-rounded education.",
    },
  ];

  return (
    <div className="about-wrap" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="aboutImg">
              <img src={aboutImg} alt="About" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_box">
              <div className="title">
                <h1>
                  Learning <span>Platform</span>
                </h1>
              </div>
              <p>
                E-learning platforms revolutionize education, offering vast resources, flexible learning, interactive tools, and online
                collaboration, enhancing student engagement, communication, and convenience.
              </p>
              <ul className="edu_list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <div className="learing-wrp">
                      <div className="edu_icon">
                        <img src={feature.icon} alt={feature.title} />
                      </div>
                      <div className="learn_info">
                        <h3
                          className={feature.title === 'Special Education' ? 'special-education' : ''}
                          style={{ color: 'red' }}
                        >
                          {feature.title}
                        </h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
