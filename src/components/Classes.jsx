// src/components/Classes.jsx
import React from 'react';
import '../styles/Classes.css';
import PTM from '../assets/images/PTM.jpg';
import childrenDay from '../assets/images/children_day.jpg';
import DaanUtsav from '../assets/images/DaanUtsav.jpg';

function Classes() {
  const events = [
    {
      image: PTM,
      title: 'Parent-Teacher Meeting (PTM)',
      description: "Discussing student's progress and well-being. Saturday, 26/10/2024",
      time: '08:30 AM - 11:00 AM',
    },
    {
      image: childrenDay,
      title: 'Children Day',
      description:
        '"Today\'s children shape India\'s future; how we raise them defines our nation\'s destiny." - Pandit Jawaharlal Nehru November 14, 2024',
      time: '8.30 AM - 12:00PM',
    },
    {
      image: DaanUtsav,
      title: 'Daan Utsav',
      description:
        'Daan Utsav promotes the spirit of giving, encouraging students to share resources with underprivileged communities. November 23, 2024',
      time: '09:00 AM - 11:00 AM',
    },
  ];

  return (
    <div className="class-wrap">
      <div className="container">
        <div className="title">
          <h1>Our Latest News</h1>
        </div>
        <div className="owl-carousel">
          {events.map((event, index) => (
            <div className="item" key={index}>
              <div className="class_box">
                <div className="class_Img">
                  <img src={event.image} alt={event.title} />
                  <div className="time_box">
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="path_box">
                  <h3>
                    <a href="#">{event.title}</a>
                  </h3>
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Classes;