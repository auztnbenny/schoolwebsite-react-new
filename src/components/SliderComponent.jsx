import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SliderComponent.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <div className="tp-banner-container">
      <div className="tp-banner">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="slide">
            <img src="src/assets/images/slider01.jpg" alt="Slide 1" className="slide-image" />
            <div className="slide-content">
              <h2 className="slidertext2 animated fadeInDown">Education Bright Future</h2>
              <p className="slidertext3 animated fadeInUp">
                Education illuminates the path to a brighter future, offering skills and opportunities for personal and societal growth. A quality education shapes a promising future.
              </p>
              <div className="buttons">
                <a href="https://www.arnoldschoolsalajpur.in/sample-01.html" className="slidertext4 animated fadeInLeft">
                  <i className="fas fa-edit"></i> Enroll Today
                </a>
                <a href="#" className="slidertext5 animated fadeInRight">
                  <i className="far fa-calendar-alt"></i> Schedule a Tour
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <img src="/images/slider02.jpg" alt="Slide 2" className="slide-image" />
            <div className="slide-content">
              <h2 className="slidertext2 animated fadeInDown">Saint Arnold's School</h2>
              <p className="slidertext3 animated fadeInUp">
                At the heart of our school beats an energy that fuels learning and growth. With confidence as our compass, we navigate challenges, embracing opportunities to excel.
              </p>
              <div className="buttons">
                <a href="#" className="slidertext4 animated fadeInLeft">
                  <i className="fas fa-edit"></i> Enroll Today
                </a>
                <a href="#" className="slidertext5 animated fadeInRight">
                  <i className="far fa-calendar-alt"></i> Schedule a Tour
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide">
            <img src="/images/slider03.jpg" alt="Slide 3" className="slide-image" />
            <div className="slide-content">
              <h2 className="slidertext2 animated fadeInDown">Saint Arnold Janssen</h2>
              <p className="slidertext3 animated fadeInUp">
                "Through prayer and action, we can transform lives and communities." <br />
                "May our hearts be open to the needs of others, and may our hands be ready to serve."
              </p>
              <div className="buttons">
                <a href="#" className="slidertext4 animated fadeInLeft">
                  <i className="fas fa-edit"></i> Enroll Today
                </a>
                <a href="#" className="slidertext5 animated fadeInRight">
                  <i className="far fa-calendar-alt"></i> Schedule a Tour
                </a>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide">
            <img src="/images/slider04.jpg" alt="Slide 4" className="slide-image" />
            <div className="slide-content">
              <h2 className="slidertext2 animated fadeInDown">Saint Arnold's School</h2>
              <p className="slidertext3 animated fadeInUp">
                "Through prayer and action, we can transform lives and communities." <br />
                <u>Mahatma Gandhi</u>
              </p>
              <div className="buttons">
                <a href="#" className="slidertext4 animated fadeInLeft">
                  <i className="fas fa-edit"></i> Enroll Today
                </a>
                <a href="#" className="slidertext5 animated fadeInRight">
                  <i className="far fa-calendar-alt"></i> Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;