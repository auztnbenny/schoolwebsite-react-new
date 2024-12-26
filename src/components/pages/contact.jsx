import React from 'react';
import './contact.css';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>
      {/* Inner Heading End */}

      {/* Inner Content Start */}
      <div className="innerContent-wrap contact-wrap">
        <div className="container">
          <div className="cont_info">
            <div className="row">
              <div className="col-lg-3 col-md-6 md-mb-30">
                <div className="address-item style">
                  <div className="address-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="address-text">
                    <h3 className="contact-title">Call Us</h3>
                    <ul className="unorderList">
                      <li><a href="tel:9547104549">9547104549</a></li>
                      <li><a href="tel:9800959397">9800959397</a></li>
                      <li><a href="tel:03229291024">03229291024</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 md-mb-30">
                <div className="address-item style">
                  <div className="address-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="address-text">
                    <h3 className="contact-title">Mail Us</h3>
                    <ul className="unorderList">
                      <li><a href="mailto:sassalajpur@gmail.com">sassalajpur@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 sm-mb-30">
                <div className="address-item">
                  <div className="address-icon">
                    <i className="far fa-clock"></i>
                  </div>
                  <div className="address-text">
                    <h3 className="contact-title">Opening Hours</h3>
                    <ul className="unorderList">
                      <li>Mon - Fri : 10am to 2pm</li>
                      <li>Sat - Sun : Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="address-item">
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="address-text">
                    <h3 className="contact-title">Address</h3>
                    <p>
                      Salajpur-Belda, P.O. Khatnagar
                      Dist:- Paschim Medinipur,
                      West Bengal-721451
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7">
              {/* Register Start */}
              <div className="login-wrap">
                <div className="contact-info login_box">
                  <div className="contact-form loginWrp registerWrp">
                    <form id="contactForm" noValidate>
                      <h3>Get In Touch</h3>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="firstName" className="form-control" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="lastName" className="form-control" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="phone" className="form-control" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea className="form-control" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button type="submit" className="default-btn btn send_btn">Submit <span></span></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Register End */}
            </div>
            <div className="col-lg-5">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.393865905897!2d87.30531537453102!3d22.03452407987855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d3b8613690f93%3A0x6d8b87e6e0e75057!2sSt.%20Arnold%20School%2C%20Belda!5e0!3m2!1sen!2sus!4v1698830024330!5m2!1sen!2sus"
                  width="100%"
                  height="511"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                ></iframe>
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

export default Contact;

