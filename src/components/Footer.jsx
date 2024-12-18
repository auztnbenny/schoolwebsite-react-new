// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapSigns, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <div className="footer-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer_logo">
                <img src={logo} alt="Footer Logo" />
              </div>
              <p>Saint Arnold's School: Empowering Minds, Nurturing Futures and is committed to providing quality education.</p>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <h3>Quick links</h3>
              <ul className="footer-links">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <h3>Office Hours</h3>
              <ul className="hourswrp">
                <li>
                  Monday <span>07:50 - 01:30</span>
                </li>
                <li>
                  Tuesday <span>07:50 - 01:30</span>
                </li>
                <li>
                  Wednesday <span>07:50 - 01:30</span>
                </li>
                <li>
                  Thursday <span>07:50 - 01:30</span>
                </li>
                <li>
                  Friday <span>07:50 - 01:30</span>
                </li>
                <li>
                  Saturday <span>07:50 - 01:30</span>
                </li>
                <li>
                  Sunday <span>Closed</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="footer_info">
                <h3>Get in Touch</h3>
                <ul className="footer-adress">
                  <li className="footer_address">
                    <FaMapSigns /> <span>Salajpur-Belda, P.O. Khatnagar</span>
                  </li>
                  <li className="footer_email">
                    <FaEnvelope />{' '}
                    <span>
                      <a href="mailto:sassalajpur@gmail.com">sassalajpur@gmail.com</a>
                    </span>
                  </li>
                  <li className="footer_phone">
                    <FaPhoneAlt />{' '}
                    <span>
                      <a href="tel:+919547104549">+91 9547104549 / +91 9800959397 / 03229291024</a>
                    </span>
                  </li>
                </ul>
                <div className="social-icons footer_icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100088397433758">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@saintarnoldschool">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom text-center">
        <div className="container">
          <div className="copyright-text">
            Copyright © 2025{' '}
            <a href="https://www.arnoldschoolsalajpur.in">Arnoldschoolsalajpur.in</a> &nbsp; All Rights Reserved Powered by
            digitalweb.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;