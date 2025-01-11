import React from 'react';
import './blog.css';
// Correct the import paths for Newsletter and Footer components
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Blog = () => {
  return (
    <>
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
                  <div className="title">
                    <h1>Our Blog</h1>
                  </div>
                  <ul className="row unorderList">
                    <li className="col-lg-4">
                      <div className="blog_box">
                        <div className="blogImg">
                          <img src="/assets/images/blog1.jpg" alt="blog" />
                          <div className="time_box"><span>08:00 am - 10:00 am</span></div>
                        </div>
                        <div className="path_box">
                          <h3><a href="#">Education Programs</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor gravida.</p>
                        </div>
                      </div>
                    </li>
                    <li className="col-lg-4">
                      <div className="blog_box">
                        <div className="blogImg">
                          <img src="/assets/images/blog2.jpg" alt="blog" />
                          <div className="time_box"><span>08:00 am - 10:00 am</span></div>
                        </div>
                        <div className="path_box">
                          <h3><a href="#">Games Program</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur.</p>
                        </div>
                      </div>
                    </li>
                    <li className="col-lg-4">
                      <div className="blog_box">
                        <div className="blogImg">
                          <img src="/assets/images/blog3.jpg" alt="blog" />
                          <div className="time_box"><span>08:00 am - 10:00 am</span></div>
                        </div>
                        <div className="path_box">
                          <h3><a href="#">Labs Programs</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur.</p>
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

      {/* Newsletter Start */}
      <Newsletter />
      {/* Newsletter End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Blog;

