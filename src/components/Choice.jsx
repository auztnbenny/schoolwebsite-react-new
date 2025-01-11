import React from 'react';
import '../styles/Choice.css';

const Choice = () => {
  return (
    <div className="choice-wrap">
      <div className="container">
        <div className="title">
          <h1>We Are The Best <span>Choice For Your Child</span></h1>
        </div>
        <p style={{ fontSize: '18px' }}>
          <i>
            <strong>
              <u style={{ fontSize: '25px' }}>At our care your child will be:</u>
            </strong>
            <br />
            Empowered in values, Energized in talent, Enlightened with knowledge, Excelling in one's career.....
          </i>
        </p>
        <div className="readmore">
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Choice;