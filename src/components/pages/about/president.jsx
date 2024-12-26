import React from 'react';
import './history.css';
// Correct the import paths for Newsletter and Footer components
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const President = () => {
  return (
    <>
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
                <div className="class_left">
                  <div className="class_Img">
                    <img src="/assets/images/Infrastructure.jpg" alt="History" /> {/* Ensure the image path is correct */}
                  </div>
                  <h3 style={{ fontFamily: 'Times New Roman' }}>President's Message</h3><br />
                  {/* <p>Realising the need for quality education in Belda and Dantan region of West Medinipur district of West Bengal, specially focusing on tribal and economically weaker sections of the society, Fr. Telesphore Bilung SVD and Fr. Petrus Kullu SVD sketched out a plan to set up an English Medium school.  Fr. Telesphore Bilung, then President of the Society of the Divine Word extended full support to Fr. Petrus Kullu to purchase a land in view of setting up a new school campus.  Fr. Petrus Kullu SVD, with the support of some local people purchased 9 acres of land at Amadan – Salajpur in 2015.    In the following year, Fr. Lawrence D’ Almeida took initiative to begin the pre-primary level and officially began the school on 5th April, 2016 at Gonpada, in an already existing Dibyo Bani Niketan Hostel building.</p>
                  <p>After completing all the legal procedures related to land and building, on 23rd September, 2020   Fr. Petrus Kullu SVD, the President of the Society of the Divine Word blessed the foundation stone and the Sub Divisional Officer of Kharagpur Shri. Vaibhav Choudhary IAS, laid the foundation stone in the presence of school parents, well-wishers and other dignitaries. </p>
                  <p>Fr. Lawrence D’ Almeida SVD, as its first principal served for two years and Fr. Petrus Kullu SVD as the first manager served the school for four years.  Fr. Binoy Augastine SVD served the school as principal from June 2018 to June 2019. Fr. Saroj Kumar Hess was appointed as the first treasurer to Saint Arnold’s School. In the year 2019, Fr. Naveen Prashanth Pinto SVD was appointed as the new principal of the school along with the added responsibility of establishing the new campus at Salajpur.  Year 2020 became a tough year to move ahead with the academic activities as pandemic disrupted the entire schooling system. Growth became stagnant and strength of the school started dwindling.  Nevertheless, we never lost our hopes and continued with our efforts to get ready with the first block.  On 6th April, 2022 the first block with initial 16 class rooms were made ready for the regular classes. Br. Elegius Minz SVD joined the administration as school treasurer in the place of Fr. Saroj Kumar Hess SVD. </p>
                  <p>Today, School emphasizes on holistic development of children considering every possible extra-curricular activity. School has well-equipped computer lab, opportunity for music, dance, art and craft, school band etc.  Outdoor games and sports facility is the immediate priority to provide students with greater scope for physical exercise.  On the whole, a good academic mix with value based education is the thrust of Saint Arnold’s School. <br />
                  </p> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-widgets widget_category">
                  <h4>Highlights</h4>
                  <ul className="property_sec">
                    <li className="highlight-item">
                      <div className="highlight-img">
                        <img src="/assets/images/gallery-1.jpg" alt="Gallery 1" /> {/* Ensure the image path is correct */}
                      </div>
                      <div className="highlight-info">
                        <h4><a href="#">English Classroom</a></h4>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                      </div>
                    </li>
                    <li className="highlight-item">
                      <div className="highlight-img">
                        <img src="/assets/images/gallery-2.jpg" alt="Gallery 2" /> {/* Ensure the image path is correct */}
                      </div>
                      <div className="highlight-info">
                        <h4><a href="#">English Classroom</a></h4>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                      </div>
                    </li>
                    <li className="highlight-item">
                      <div className="highlight-img">
                        <img src="/assets/images/gallery-3.jpg" alt="Gallery 3" /> {/* Ensure the image path is correct */}
                      </div>
                      <div className="highlight-info">
                        <h4><a href="#">English Classroom</a></h4>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="single-widgets widget_category archives-widget">
                  <h4>Archives</h4>
                  <ul className="categories">
                    <li><a href="#">May 2020 </a></li>
                    <li><a href="#">February 2019 </a></li>
                    <li><a href="#">August 2018 </a></li>
                  </ul>
                </div>
                <div className="single-widgets tags-widget">
                  <h4>Tags</h4>
                  <ul className="tags">
                    <li><a href="#">School</a></li>
                    <li><a href="#">Study</a></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#">Parents</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Teachers</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Meetings</a></li>
                    <li><a href="#">Design</a></li>
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

export default President;

