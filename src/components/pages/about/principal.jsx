import React from 'react';
import './history.css';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Principal = () => {
  return (
    <>
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
                <div className="class_left">
                  <div className="class_Img">
                    <img src="/assets/images/Infrastructure.jpg" alt="History" /> {/* Ensure the image path is correct */}
                  </div>
                  <h3 style={{ fontFamily: 'Times New Roman' }}>Principal's Message</h3><br />
                  <p>A famous Chinese proverb says, “If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.” Indeed, it is very true and inevitable fact that the strength of a super power nation rests in the hands of educated citizens and empowered women. Today the best wealth or the resource that one could have is education.  Education forms and inspires students, the nation builders to explore horizons beyond their own, develop their mental resilience and discover the bonds of mutuality that cut across differences of culture, ethnicity and religious background.  </p>
                  <p>Generally, education is a process of learning or the process of acquiring knowledge, skills, values, beliefs and good habits.  Down the ages, the entire process of learning has evolved to a new culture of learning, incorporating the required changes of the time, place and culture. The visionaries and the promoters of Saint Arnold’s School are exposed to the local and international contexts and the realities that help them to design programs and curriculum which enable their students to answer the concerns of the time and face the future challenges with confidence.  Our main focus is to make studying and working at Saint Arnold’s School a pleasurable one and leave indelible marks in the minds of people.  The alarming signs of the time challenge the educators to go beyond traditional teaching practices and adapt to newer pedagogy that will make the younger generations more responsible, innovative, who will knit the communities and build a better and strong nation. </p>
                  <p>Over 50 years, Saint Arnold’s Schools in India have been committed to enhance way of life and improve the prospects of our future generations.  Saint Arnold’s School Salajpur is an institution with a difference, aims at shaping rural talents and illumining rural India.  This new School with a moto, “Form to Transform” and a vision, “To transform the world into a just, equitable and harmonious place for dignified human existence through education” march forward with a mission; “To provide holistic development to students enabling them to grow as; <br />
                    &#8594; persons of character <br />
                    &#8594; persons of right conscience <br />
                    &#8594; persons of true compassion<br />
                    &#8594; persons of competence </p>
                  <p>who will take their responsible place in the society as agents of change, ushering in a new order, that is open, inclusive, eco-friendly and sensitive to vulnerable in the society.”</p>
                  <p>Dear students, parents and friends, I wish, you understand education in present time but not belittling our rich culture, values and the good principles handed down to us.  Education without human values and success without hard work are never a pleasurable thing. Therefore, our guidance, teaching and training will always be in promoting most needed values to the society.  Let our children be partners in building a happy, healthy nation and creating opportunities for oneself and others. <br />
                    <br />
                    Finally, as the head of the institution, I would emphasize on our uncompromising commitment to Quality - in every aspect of learning, building bonds of relationship, creating responsible citizens and above all, good human personalities to our families and the country.  I wish that every child at Saint Arnold’s be a high-flier and game changer. </p>
                  <p>Yours sincerely,<br />
                    <strong>Fr. Naveen Prashanth Pinto SVD</strong><br />
                    <em>Principal</em><br />
                  </p>
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

export default Principal;

