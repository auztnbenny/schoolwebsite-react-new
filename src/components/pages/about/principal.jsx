import React from 'react';
import './principal.jsx';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Principal = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Principal's Message</h1>
        </div>
      </div>
      {/* Inner Heading End */}

      {/* Inner Content Start */}
      <div className="innerContent-wrap">
        <div className="container">
          <div className="blog_inner bloggridWrp">
            <div className="row">
              <div className="col-lg-8">
                <div className="class_left content-section">
                  <div className="class_Img">
                    <img src="/assets/images/Infrastructure.jpg" alt="Principal" className="main-image" />
                  </div>
                  <h2 className="section-title">Principal's Message</h2>
                  <div className="principal-content">
                    <p>A famous Chinese proverb says, "If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people." Indeed, it is very true and inevitable fact that the strength of a super power nation rests in the hands of educated citizens and empowered women. Today the best wealth or the resource that one could have is education. Education forms and inspires students, the nation builders to explore horizons beyond their own, develop their mental resilience and discover the bonds of mutuality that cut across differences of culture, ethnicity and religious background.</p>
                    
                    <p>Generally, education is a process of learning or the process of acquiring knowledge, skills, values, beliefs and good habits. Down the ages, the entire process of learning has evolved to a new culture of learning, incorporating the required changes of the time, place and culture. The visionaries and the promoters of Saint Arnold's School are exposed to the local and international contexts and the realities that help them to design programs and curriculum which enable their students to answer the concerns of the time and face the future challenges with confidence.</p>
                    
                    <p>Over 50 years, Saint Arnold's Schools in India have been committed to enhance way of life and improve the prospects of our future generations. Saint Arnold's School Salajpur is an institution with a difference, aims at shaping rural talents and illumining rural India. This new School with a motto, "Form to Transform" and a vision, "To transform the world into a just, equitable and harmonious place for dignified human existence through education" march forward with a mission to provide holistic development to students enabling them to grow as:</p>
                    
                    <ul className="mission-list">
                      <li>Persons of character</li>
                      <li>Persons of right conscience</li>
                      <li>Persons of true compassion</li>
                      <li>Persons of competence</li>
                    </ul>
                    
                    <p>Who will take their responsible place in the society as agents of change, ushering in a new order, that is open, inclusive, eco-friendly and sensitive to vulnerable in the society.</p>
                    
                    <p>Dear students, parents and friends, I wish you understand education in present time while not belittling our rich culture, values and the good principles handed down to us. Education without human values and success without hard work are never a pleasurable thing.</p>
                    
                    <p className="signature">
                      Yours sincerely,<br />
                      <strong>Fr. Naveen Prashanth Pinto SVD</strong><br />
                      <em>Principal</em>
                    </p>
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
                          <img src="/assets/images/gallery-1.jpg" alt="English Classroom" />
                        </div>
                        <div className="highlight-content">
                          <h4>English Classroom</h4>
                          <p>Modern learning environment</p>
                        </div>
                      </div>

                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-2.jpg" alt="School Facilities" />
                        </div>
                        <div className="highlight-content">
                          <h4>School Facilities</h4>
                          <p>Comprehensive learning spaces</p>
                        </div>
                      </div>

                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-3.jpg" alt="Campus Life" />
                        </div>
                        <div className="highlight-content">
                          <h4>Campus Life</h4>
                          <p>Vibrant educational experience</p>
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
                      <a href="#" className="tag">Parents</a>
                      <a href="#" className="tag">Sports</a>
                      <a href="#" className="tag">News</a>
                      <a href="#" className="tag">Teachers</a>
                      <a href="#" className="tag">Art</a>
                      <a href="#" className="tag">Meetings</a>
                      <a href="#" className="tag">Design</a>
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

export default Principal;