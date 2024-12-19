import React, { useEffect, useRef } from 'react';
import '../styles/Teachers.css';

const TeachersSlider = () => {
  const teachers = [
    { image: '/assets/images/SANJUKTA2.jpg' },
    { image: '/assets/images/PSUNITAPAUL2.jpg' },
    { image: '/assets/images/GEETASETHI2.jpg' },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      if (slider.scrollLeft === 0) {
        slider.scrollLeft = slider.scrollWidth - slider.offsetWidth * 2;
      } else if (
        slider.scrollLeft + slider.offsetWidth >=
        slider.scrollWidth
      ) {
        slider.scrollLeft = slider.offsetWidth;
      }
    };

    slider.addEventListener('scroll', handleScroll);
    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const clonedFirst = [...teachers, ...teachers];
    slider.scrollLeft = slider.offsetWidth;
  }, [teachers]);

  const slideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 300;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 300;
  };

  return (
    <div className="teacher-wrap">
      <div className="container">
        <div className="title center_title">
          <h1>Our Teachers</h1>
        </div>

        <div className="teacher-slider-container">
          <button className="nav-btn prev" onClick={slideLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="teacher-slider" id="teacherSlider" ref={sliderRef}>
            {teachers.concat(teachers).map((teacher, index) => (
              <div key={index} className="single-teachers">
                <div className="teacherImg">
                  <img src={teacher.image} alt={`Teacher ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn next" onClick={slideRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachersSlider;
