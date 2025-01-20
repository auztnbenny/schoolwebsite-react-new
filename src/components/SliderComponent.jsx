import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Edit, Calendar } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/SliderComponent.css';

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slider-arrow next" onClick={onClick}>
        <ChevronRight size={24} />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slider-arrow prev" onClick={onClick}>
        <ChevronLeft size={24} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: () => setIsAnimating(true),
    afterChange: (index) => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }
  };

  const sliderData = [
    {
      image: '/assets/images/slider01.png',
      label: 'WELCOME TO',
      title: 'Education Bright Future',
      description: 'Education illuminates the path to a brighter future, offering skills and opportunities for personal and societal growth.',
      buttons: [
        { text: 'Enroll Today', icon: <Edit size={18} /> },
        { text: 'Schedule a Tour', icon: <Calendar size={18} /> }
      ]
    },
    {
      image: '/assets/images/slider02.jpg',
      label: 'DISCOVER',
      title: 'Professional Education',
      description: 'At the heart of our institution beats an energy that fuels learning and growth. With confidence as our compass, we navigate challenges.',
      buttons: [
        { text: 'Enroll Today', icon: <Edit size={18} /> },
        { text: 'Schedule a Tour', icon: <Calendar size={18} /> }
      ]
    },
    {
      image: '/assets/images/slider03.jpg',
      label: 'EXPERIENCE',
      title: "Saint Arnold's School",
      description: 'At the heart of our school beats an energy that fuels learning and growth. With confidence as our compass, we navigate challenges.',
      buttons: [
        { text: 'Enroll Today', icon: <Edit size={18} /> },
        { text: 'Schedule a Tour', icon: <Calendar size={18} /> }
      ]
    },
    {
      image: '/assets/images/slider04.jpg',
      label: 'LEARN WITH US',
      title: "Excellence in Education",
      description: "Join us in creating a future where education transforms lives and builds strong foundations for tomorrow's leaders.",
      buttons: [
        { text: 'Enroll Today', icon: <Edit size={18} /> },
        { text: 'Schedule a Tour', icon: <Calendar size={18} /> }
      ]
    }
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="slide-wrapper">
            <div 
              className="slide-content"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`
              }}
            >
              <div className="slide-text">
                <span className={`slide-label ${currentSlide === index ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}>
                  {slide.label}
                </span>
                <h1 className={`slide-title ${currentSlide === index ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}>
                  {slide.title}
                </h1>
                <p className={`slide-description ${currentSlide === index ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}>
                  {slide.description}
                </p>
                <div className={`slide-buttons ${currentSlide === index ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}>
                  {slide.buttons.map((button, idx) => (
                    <button key={idx} className="hero-button">
                      {button.icon}
                      <span>{button.text}</span>
                    </button>
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