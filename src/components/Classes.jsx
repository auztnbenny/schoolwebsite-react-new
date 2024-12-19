import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Classes.css';
import Choice from './Choice';
import Video from './Video';

const Classes = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const sliderRef = useRef(null);

  const news = [
    {
      image: '/assets/images/PTM.jpg',
      title: 'Parent-Teacher Meeting (PTM)',
      description: "Discussing student's progress and well-being. Saturday, 26/10/2024",
      time: '08:30 AM - 11:00 AM'
    },
    {
      image: '/assets/images/children_day.jpg',
      title: 'Children Day',
      description: '"Today\'s children shape India\'s future; how we raise them defines our nation\'s destiny." Pandit Jawaharlal Nehru November 14, 2024',
      time: '8.30 AM - 12:00PM'
    },
    {
      image: '/assets/images/DaanUtsav.jpg',
      title: 'Daan Utsav',
      description: 'Daan Utsav promotes the spirit of giving, encouraging students to share resources with underprivileged communities. November 23, 2024',
      time: '09:00 AM - 11:00 AM'
    },
    // Add more news items as needed
  ];

  const slideNext = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      const maxPosition = -((news.length - 1) * width);
      setCurrentPosition(prev => Math.max(prev - width, maxPosition));
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      setCurrentPosition(prev => Math.min(prev + width, 0));
    }
  };

  return (
    <div className="class-wrap" style={{ background: "url('/assets/images/class-bg.jpg') no-repeat top", backgroundSize: "cover" }}>
      <div className="container">
        <div className="title">
          <h1>Our Latest News</h1>
        </div>
        
        <div className="class-slider-container">
          <button 
            className="nav-button prev" 
            onClick={slidePrev}
            disabled={currentPosition === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="class-slider" ref={sliderRef}>
            <div 
              className="class-slider-track" 
              style={{
                transform: `translateX(${currentPosition}px)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {news.map((newsItem, index) => (
                <div key={index} className="class_box">
                  <div className="class_Img">
                    <img src={newsItem.image} alt={newsItem.title} />
                    <div className="time_box">
                      <span>{newsItem.time}</span>
                    </div>
                  </div>
                  <div className="path_box">
                    <h3>
                      <a href="#">{newsItem.title}</a>
                    </h3>
                    <p>{newsItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-button next" 
            onClick={slideNext}
            disabled={currentPosition <= -(news.length - 1) * sliderRef.current?.clientWidth}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <Choice />
      <Video />
    </div>
  );
};

export default Classes;