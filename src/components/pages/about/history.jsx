import React from 'react';
import './history.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const History = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>History</h1>
        </div>
      </div>

      {/* Inner Content Start */}
      <div className="innerContent-wrap">
        <div className="container">
          <div className="blog_inner bloggridWrp">
            <div className="row">
              <div className="col-lg-8">
                <div className="class_left content-section">
                  <div className="class_Img">
                    <img src="/assets/images/History.jpg" alt="History" className="main-image" />
                  </div>
                  <h2 className="section-title">History</h2>
                  <div className="history-content">
                    <p>Realising the need for quality education in Belda and Dantan region of West Medinipur district of West Bengal, specially focusing on tribal and economically weaker sections of the society, Fr. Telesphore Bilung SVD and Fr. Petrus Kullu SVD sketched out a plan to set up an English Medium school.</p>
                    
                    <p>Fr. Telesphore Bilung, then President of the Society of the Divine Word extended full support to Fr. Petrus Kullu to purchase a land in view of setting up a new school campus. Fr. Petrus Kullu SVD, with the support of some local people purchased 9 acres of land at Amadan – Salajpur in 2015.</p>
                    
                    <p>After completing all the legal procedures related to land and building, on 23rd September, 2020 Fr. Petrus Kullu SVD, the President of the Society of the Divine Word blessed the foundation stone and the Sub Divisional Officer of Kharagpur Shri. Vaibhav Choudhary IAS, laid the foundation stone in the presence of school parents, well-wishers and other dignitaries.</p>
                    
                    <p>Today, School emphasizes on holistic development of children considering every possible extra-curricular activity. School has well-equipped computer lab, opportunity for music, dance, art and craft, school band etc. Outdoor games and sports facility is the immediate priority to provide students with greater scope for physical exercise.</p>
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
                          <img src="/assets/images/gallery-1.jpg" alt="Modern Classrooms" />
                        </div>
                        <div className="highlight-content">
                          <h4>Modern Classrooms</h4>
                          <p>State-of-the-art learning environments</p>
                        </div>
                      </div>

                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-2.jpg" alt="Sports Facilities" />
                        </div>
                        <div className="highlight-content">
                          <h4>Sports Facilities</h4>
                          <p>Comprehensive outdoor activities</p>
                        </div>
                      </div>

                      <div className="highlight-card">
                        <div className="highlight-image">
                          <img src="/assets/images/gallery-3.jpg" alt="Computer Lab" />
                        </div>
                        <div className="highlight-content">
                          <h4>Computer Lab</h4>
                          <p>Digital learning infrastructure</p>
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

export default History;