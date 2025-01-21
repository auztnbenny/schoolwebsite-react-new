import React from 'react';
import './blog.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Blog = () => {
  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>
      {/* Inner Heading End */}

      {/* Inner Content Start */}
      <div className="innerContent-wrap">
        <div className="container">
          <div className="blog_inner bloggridWrp">
            <div className="row">
              <div className="blog-wrap flight-wrap">
                <div className="container">
                  <div className="blog-section-title">
                    <h2>Our Blog</h2>
                  </div>
                  <ul className="row blog-list">
                    <li className="col-lg-4">
                      <div className="blog-card">
                        <div className="blog-image">
                          <img src="/assets/images/blog1.jpg" alt="Education Programs" />
                          <div className="blog-time-badge">08:00 am - 10:00 am</div>
                        </div>
                        <div className="blog-content">
                          <h3><a href="#">Education Programs</a></h3>
                          <p>Explore innovative approaches to learning and educational development in our comprehensive programs.</p>
                        </div>
                      </div>
                    </li>
                    <li className="col-lg-4">
                      <div className="blog-card">
                        <div className="blog-image">
                          <img src="/assets/images/blog2.jpg" alt="Games Program" />
                          <div className="blog-time-badge">08:00 am - 10:00 am</div>
                        </div>
                        <div className="blog-content">
                          <h3><a href="#">Games Program</a></h3>
                          <p>Discover how our interactive games enhance learning, teamwork, and critical thinking skills.</p>
                        </div>
                      </div>
                    </li>
                    <li className="col-lg-4">
                      <div className="blog-card">
                        <div className="blog-image">
                          <img src="/assets/images/blog3.jpg" alt="Labs Programs" />
                          <div className="blog-time-badge">08:00 am - 10:00 am</div>
                        </div>
                        <div className="blog-content">
                          <h3><a href="#">Labs Programs</a></h3>
                          <p>Dive into our state-of-the-art laboratory facilities and hands-on scientific exploration.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inner Content End */}

      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Blog;