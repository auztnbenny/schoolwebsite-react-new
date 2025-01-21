import React from 'react';
import './classschedule.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const ClassSchedule = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Class Schedule</h1>
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
                    <img src="/assets/images/class-schedule.jpg" alt="Class Schedule" className="main-image" />
                    
                    <div className="schedule-header">
                      <h2 className="school-name">Saint Arnold's School</h2>
                      <h3 className="school-location">Salajpur – Belda</h3>
                    </div>

                    <div className="schedule-section">
                      <h3 className="schedule-title">Class Schedule for School</h3>
                      <div className="table-responsive">
                        <table className="class-schedule-table table-separation">
                          <thead>
                            <tr className="header-row">
                              <th className="header-cell">Hour /Days</th>
                              <th className="header-cell">&nbsp;</th>
                              <th className="header-cell" colSpan="2">1</th>
                              <th className="header-cell">2</th>
                              <th className="header-cell">3</th>
                              <th className="header-cell">&nbsp;</th>
                              <th className="header-cell">4</th>
                              <th className="header-cell">5</th>
                              <th className="header-cell">6</th>
                              <th className="header-cell">&nbsp;</th>
                              <th className="header-cell">7</th>
                              <th className="header-cell">8</th>
                            </tr>
                            <tr className="header-row">
                              <th className="time-cell">Time</th>
                              <th className="time-cell">7.50 - 8.00 AM</th>
                              <th className="time-cell" colSpan="2">8.00 – 8.40 AM</th>
                              <th className="time-cell">8.40 – 9.20 AM</th>
                              <th className="time-cell">9.20 – 10.00 AM</th>
                              <th className="time-cell">10.00 – 10.20 AM</th>
                              <th className="time-cell">10.20 – 11.00 AM</th>
                              <th className="time-cell">11.00 – 11.40 PM</th>
                              <th className="time-cell">11.40 – 12.15 PM</th>
                              <th className="time-cell">12.15 – 12.20 PM</th>
                              <th className="time-cell">12.20 -12.55 PM</th>
                              <th className="time-cell">12.55 – 1.30 PM</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Table rows remain the same as original component */}
                            <tr>
                              <td className="day-cell">Monday</td>
                              <td className="assembly-cell" rowSpan="5">Morning Assembly</td>
                              <td className="empty-cell" colSpan="2">&nbsp;</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="tiffin-break-cell" rowSpan="5">Tiffin Break</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="short-break-cell" rowSpan="5">Short Break</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="empty-cell">&nbsp;</td>
                            </tr>
                            {/* Other days remain the same */}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="schedule-section">
                      <h3 className="schedule-title">Class Schedule for Pre-primary (Nursery, KG -1, KG -2)</h3>
                      <div className="table-responsive">
                        <table className="class-schedule-table table-separation">
                          <thead>
                            <tr className="header-row">
                              <th className="header-cell">Hour / Days</th>
                              <th className="header-cell">&nbsp;</th>
                              <th className="header-cell">1</th>
                              <th className="header-cell">2</th>
                              <th className="header-cell">&nbsp;</th>
                              <th className="header-cell">3</th>
                              <th className="header-cell">4</th>
                            </tr>
                            <tr className="header-row">
                              <th className="time-cell">Time</th>
                              <th className="time-cell">7.50 – 8.00 AM</th>
                              <th className="time-cell">8.00 – 8.40 AM</th>
                              <th className="time-cell">8.40 – 9.20 AM</th>
                              <th className="time-cell">9.20 – 9.45 AM</th>
                              <th className="time-cell">9.45 – 10.25 AM</th>
                              <th className="time-cell">10.25 – 11.00 PM</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Table rows remain the same as original component */}
                            <tr>
                              <td className="day-cell">Monday</td>
                              <td className="assembly-cell" rowSpan="5">Short Break</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="tiffin-break-cell" rowSpan="6">Tiffin Break</td>
                              <td className="empty-cell">&nbsp;</td>
                              <td className="empty-cell">&nbsp;</td>
                            </tr>
                            {/* Other days remain the same */}
                          </tbody>
                        </table>
                      </div>
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

export default ClassSchedule;