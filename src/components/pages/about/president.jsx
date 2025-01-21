import React from 'react';
import './history.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const President = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>President's Message</h1>
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
                    <img src="/assets/images/Infrastructure.jpg" alt="President" className="main-image" />
                  </div>
                  <h2 className="section-title">President's Message</h2>
                  
                  <div className="president-content">
                    <p>Realising the need for quality education in Belda and Dantan region of West Medinipur district of West Bengal, specially focusing on tribal and economically weaker sections of the society, Fr. Telesphore Bilung SVD and Fr. Petrus Kullu SVD sketched out a plan to set up an English Medium school.</p>
                    
                    <p>Fr. Telesphore Bilung, then President of the Society of the Divine Word extended full support to Fr. Petrus Kullu to purchase a land in view of setting up a new school campus. Fr. Petrus Kullu SVD, with the support of some local people purchased 9 acres of land at Amadan – Salajpur in 2015.</p>
                    
                    <p>In the following year, Fr. Lawrence D' Almeida took initiative to begin the pre-primary level and officially began the school on 5th April, 2016 at Gonpada, in an already existing Dibyo Bani Niketan Hostel building.</p>
                    
                    <p>After completing all the legal procedures related to land and building, on 23rd September, 2020, Fr. Petrus Kullu SVD, the President of the Society of the Divine Word blessed the foundation stone and the Sub Divisional Officer of Kharagpur Shri. Vaibhav Choudhary IAS, laid the foundation stone in the presence of school parents, well-wishers and other dignitaries.</p>
                    
                    <div className="key-milestones">
                      <h3>Key Milestones</h3>
                      <ul>
                        <li>Fr. Lawrence D' Almeida SVD served as the first principal for two years</li>
                        <li>Fr. Petrus Kullu SVD served as the first manager for four years</li>
                        <li>Fr. Binoy Augastine SVD served as principal from June 2018 to June 2019</li>
                        <li>Fr. Saroj Kumar Hess was appointed as the first treasurer</li>
                        <li>Fr. Naveen Prashanth Pinto SVD appointed as principal in 2019</li>
                        <li>On 6th April, 2022, the first block with 16 classrooms was completed</li>
                        <li>Br. Elegius Minz SVD joined as school treasurer</li>
                      </ul>
                    </div>
                    
                    <p>Today, the School emphasizes holistic development of children, offering a comprehensive range of extra-curricular activities. The school boasts a well-equipped computer lab, opportunities for music, dance, art and craft, and a school band. Outdoor games and sports facilities are a priority, providing students with greater scope for physical exercise.</p>
                    
                    <p>The core focus remains a balanced academic approach combined with value-based education, ensuring the comprehensive growth of every student.</p>
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

export default President;