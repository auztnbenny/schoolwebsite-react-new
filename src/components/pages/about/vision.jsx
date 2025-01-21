import React from 'react';
import './history.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Vision = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Vision</h1>
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
                    <img src="/assets/images/vision.jpg" alt="Vision" className="main-image" />
                  </div>
                  <h2 className="section-title">Vision</h2>
                  
                  <div className="vision-content">
                    <div className="motto">
                      <h3>Motto</h3>
                      <p className="highlight-text">"Learn Lead Liberate"</p>
                    </div>

                    <div className="vision-statement">
                      <h3>Vision Statement</h3>
                      <p className="highlight-text">"To Transform the World into a Just, Equitable and Harmonious place for Dignified Human Existence through Education."</p>
                    </div>

                    <div className="mission-statement">
                      <h3>Mission Statement</h3>
                      <p>To provide holistic development to students enabling them to grow as:</p>
                      <ul className="mission-list">
                        <li>Persons of character</li>
                        <li>Persons of right conscience</li>
                        <li>Persons of compassion</li>
                        <li>Persons of competence</li>
                      </ul>
                      <p>Who will take their responsible place in the society as agents of change ushering in a new order that is open, inclusive, eco-friendly and sensitive to vulnerable in the society.</p>
                    </div>

                    <div className="objectives">
                      <h3>Objectives</h3>
                      <ul className="objectives-list">
                        <li>The objective of the institution is to impart quality and value-based education.</li>
                        <li>To form young minds with good character, promote leadership skills and prepare them to shoulder the responsibilities, maintaining a high standard of honor and probity in private and public life.</li>
                        <li>We seek to promote Spiritual, Moral, Intellectual, Physical and Social awareness in students which are essential factors of holistic development.</li>
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

export default Vision;