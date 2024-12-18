import React from 'react';
import '../styles/Teachers.css';

const TeachersSlider = () => {
  const teachers = [
    {
      image: '/src/assets/images/SANJUKTA2.jpg'
    },
    {
      image: '/src/assets/images/PSUNITAPAUL2.jpg'
    },
    // {
    //   image: '/images/P SUNITA PAUL2.jpg'
    // },
    {
      image: 'src/assets/images/GEETASETHI2.jpg'
    }
  ];

  const slideLeft = () => {
    const slider = document.getElementById('teacherSlider');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    const slider = document.getElementById('teacherSlider');
    slider.scrollLeft = slider.scrollLeft + 300;
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

          <div className="teacher-slider" id="teacherSlider">
            {teachers.map((teacher, index) => (
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