import React from 'react';
import './aboutus.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Aboutus = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Inner Content Start */}
      <div className="innerContent-wrap">
        <div className="container">
          <div className="blog_inner bloggridWrp">
            <div className="row">
              <div className="col-lg-8">
                <div className="content-section">
                  <div className="main-image-container">
                    <img src="/assets/images/Infrastructure.jpg" alt="Infrastructure" className="main-image" />
                  </div>
                  
                  <div className="content-block">
                    <h2 className="section-title">About Saint Arnold Janssen</h2>
                    <p className="content-text">
                      Saint Arnold Janssen (1837-1909) was born on November 5th, in Goch, Germany to a devout catholic couple, one of the eleven siblings. He was a great educationist and philanthropist. As a priest he served as a high-school teacher in mathematics and science. He is the founder of the society of the Divine Word or Societas Verbi Divini (SVD) in Latin, a Catholic International Society whose members are involved in education, social welfare, justice and peace, communication, medical care and spiritual development of the humankind in about 80 countries.
                    </p>

                    <h2 className="section-title">Journey of Saint Arnold's School</h2>
                    <p className="content-text">
                      Saint Arnold's School Salajpur is an initiative of the Society of the Divine Word, situated at Salajpur, P.O. Khatnagar, Dist: West Medinipur to cater to the educational needs of the people. The journey of Saint Arnold's School began in the year 2016 at Gonpada with a single and prime purpose of imparting quality education to rural masses.
                    </p>

                    <h2 className="section-title">Aim of Saint Arnold's School</h2>
                    <p className="content-text">
                      Saint Arnold's School aims at making a unique campus that would facilitate holistic development of every child. It focuses on making the school a full-fledged School in next 5 years. In response to the new challenges in the educational environment, the management has been very creative in designing programs and activities that suit the children's growing interest in multi-areas.
                    </p>

                    <div className="features-section">
                      <h3 className="features-title">Our Key Features</h3>
                      <ul className="features-list">
                        <li>Qualified and talented teaching staff</li>
                        <li>Responsible and caring supporting staff</li>
                        <li>Personal attention to children</li>
                        <li>Remedial classes to weak children</li>
                        <li>Activity based learning</li>
                        <li>Regular talent hunt competitions</li>
                        <li>Computer, Karate, Aerobics, Yoga classes</li>
                        <li>Children's Park</li>
                        <li>Audio-visual rooms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sidebar-widgets">
                  {/* Highlights Widget */}
                  <div className="widget highlights-widget">
                    <h3 className="widget-title">Highlights</h3>
                    <div className="highlights-container">
                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-1.jpg" alt="Modern Facilities" />
                        </div>
                        <div className="highlight-content">
                          <h4>Modern Facilities</h4>
                          <p>State-of-the-art infrastructure</p>
                        </div>
                      </div>

                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-2.jpg" alt="Quality Education" />
                        </div>
                        <div className="highlight-content">
                          <h4>Quality Education</h4>
                          <p>Excellence in academics</p>
                        </div>
                      </div>

                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-3.jpg" alt="Sports Activities" />
                        </div>
                        <div className="highlight-content">
                          <h4>Sports Activities</h4>
                          <p>Comprehensive physical education</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Archives Widget */}
                  <div className="widget archives-widget">
                    <h3 className="widget-title">Archives</h3>
                    <ul className="archive-list">
                      <li><a href="#">May 2020</a></li>
                      <li><a href="#">February 2019</a></li>
                      <li><a href="#">August 2018</a></li>
                    </ul>
                  </div>

                  {/* Tags Widget */}
                  <div className="widget tags-widget">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tags-cloud">
                      <a href="#" className="tag">School</a>
                      <a href="#" className="tag">Study</a>
                      <a href="#" className="tag">English</a>
                      <a href="#" className="tag">Sports</a>
                      <a href="#" className="tag">Art</a>
                      <a href="#" className="tag">Teachers</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Aboutus;