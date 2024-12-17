// src/components/Teachers.jsx
import React from 'react';
import '../styles/Teachers.css';
import Sanjukta from '../assets/images/SANJUKTA2.jpg';
import Sunita from '../assets/images/PSUNITAPAUL2.jpg';
import Geeta from '../assets/images/GEETASETHI2.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Teachers() {
  const teachers = [
    { image: Sanjukta, name: 'Sanjukta' },
    { image: Sunita, name: 'P Sunita Paul' },
    { image: Geeta, name: 'Geeta Sethi' },
  ];

  return (
    <div className="class-wrap">
      <div className="container">
        <div className="title">
          <h1>Our Teachers</h1>
        </div>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {teachers.map((teacher, index) => (
            <div className="item" key={index}>
              <div className="class_box">
                <div className="class_Img">
                  <img src={teacher.image} alt={teacher.name} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Teachers;