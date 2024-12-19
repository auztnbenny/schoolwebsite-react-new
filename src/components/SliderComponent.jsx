import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/SliderComponent.css';


const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="tp-rightarrow" onClick={onClick}>
        <span className="tp-arr-iwrapper">&#xf105;</span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="tp-leftarrow" onClick={onClick}>
        <span className="tp-arr-iwrapper">&#xf104;</span>
      </div>
    );
  };

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: handleAfterChange,
  };

  const sliderData = [
    {
      image: '/assets/src/slider01.png',
      title: 'Education Bright Future',
      description: 'Education illuminates the path to a brighter future, offering skills and opportunities for personal and societal growth. A quality education shapes a promising future.',
      buttons: [
        { text: 'Enroll Today', icon: 'fas fa-edit', link: 'https://www.arnoldschoolsalajpur.in/sample-01.html' },
        { text: 'Schedule a Tour', icon: 'far fa-calendar-alt', link: '#' },
      ],
    },
    {
      image: '/assets/images/slider02.jpg',
      title: "Saint Arnold's School",
      description: 'At the heart of our school beats an energy that fuels learning and growth. With confidence as our compass, we navigate challenges, embracing opportunities to excel.',
      buttons: [
        { text: 'Enroll Today', icon: 'fas fa-edit', link: '#' },
        { text: 'Schedule a Tour', icon: 'far fa-calendar-alt', link: '#' },
      ],
    },
    {
      image: '/assets/images/slider03.jpg',
      title: "Saint Arnold's School",
      description: 'At the heart of our school beats an energy that fuels learning and growth. With confidence as our compass, we navigate challenges, embracing opportunities to excel.',
      buttons: [
        { text: 'Enroll Today', icon: 'fas fa-edit', link: '#' },
        { text: 'Schedule a Tour', icon: 'far fa-calendar-alt', link: '#' },
      ],
    },
    {
      image: '/assets/images/slider04.jpg',
      title: "Saint Arnold's School",
      description: 'At the heart of our school beats an energy that fuels learning and growth. With confidence as our compass, we navigate challenges, embracing opportunities to excel.',
      buttons: [
        { text: 'Enroll Today', icon: 'fas fa-edit', link: '#' },
        { text: 'Schedule a Tour', icon: 'far fa-calendar-alt', link: '#' },
      ],
    },
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
                <h2 className={`animate-title ${currentSlide === index ? 'animate-in' : ''}`}>{slide.title}</h2>
                <p className={`animate-description ${currentSlide === index ? 'animate-in' : ''}`}>{slide.description}</p>
                <div className={`slider-buttons animate-buttons ${currentSlide === index ? 'animate-in' : ''}`}>
                  {slide.buttons.map((button, idx) => (
                    <a
                      key={idx}
                      href={button.link}
                      className="slider-button"
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
