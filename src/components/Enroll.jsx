// src/components/Enroll.jsx
import React from 'react';
import '../styles/Enroll.css';
import phoneIcon from '/assets/images/phone_icon.png';

function Enroll() {
  return (
    <div className="choice-wrap enroll-wrap">
      <div className="container">
        <div className="title">
          <h1>Call To Enquire and Enroll Your Child</h1>
        </div>
        <div className="phonewrp">
          <img src={phoneIcon} alt="Phone Icon" />
          <a href="tel:+919547104549">+91 9547104549 / +91 9800959397 / 03229-291024</a>
        </div>
      </div>
    </div>
  );
}

export default Enroll;