import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/SliderComponent.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true
  };

  const sliderData = [
    {
      image: 'src/assets/images/slider01.jpg',
      title: 'Education Bright Future',
      description: 'Education illuminates the path to a brighter future, offering skills and opportunities for personal and societal growth, a quality education shapes a promising future.',
      buttons: [
        {
          text: 'Enroll Today',
          icon: 'fas fa-edit',
          link: 'https://www.arnoldschoolsalajpur.in/sample-01.html'
        },
        {
          text: 'Schedule a Tour',
          icon: 'far fa-calendar-alt',
          link: '#'
        }
      ]
    },
    // Add other slider items here
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="slider-item">
            <div 
              className="slider-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slider-content">
                <h2 className="animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  {slide.description}
                </p>
                <div className="slider-buttons">
                  {slide.buttons.map((button, idx) => (
                    <a 
                      key={idx}
                      href={button.link} 
                      className="slider-button animate__animated animate__fadeInUp"
                    >
                      <i className={button.icon}></i>
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;