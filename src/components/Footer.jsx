import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const pageLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/aboutus' },
    { name: 'Contact Us', url: '/contact' },
    // { name: 'Blog ', url: '/blog' }
  ];

  const information = [
    // { name: 'FAQ', url: '/faq' },
    // { name: 'Client Support', url: '/support' },
    // { name: 'Terms & Condition', url: '/terms' },
    { name: 'Privacy Police', url: '/privacy' }
  ];

  const contactInfo = [
    { icon: <Phone size={16} />, text: '+880171445729' },
    { icon: <Mail size={16} />, text: 'sassalajpur@gmail.com' },
    { icon: <MapPin size={16} />, text: 'Salajpur-Belda, P.O. Khatnagar' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://www.facebook.com/profile.php?id=100088397433758' },
    { icon: <Twitter size={20} />, url: 'https://www.youtube.com/@saintarnoldschool' },
    // { icon: <Instagram size={20} />, url: '#' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-about">
            <p className="footer-description">
            Saint Arnold's School: Empowering Minds, Nurturing Futures and is committed to providing quality education.
            </p>
            <div className="social-section">
              <h3>Social Media</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="social-link">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Page Links */}
          <div className="footer-links">
            <h3 className="footer-title">PAGE LINKS</h3>
            <ul>
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="footer-links">
            <h3 className="footer-title">INFORMATION</h3>
            <ul>
              {information.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-title">CONTACT INFO</h3>
            <ul>
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span className="contact-icone">{info.icon}</span>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="footer-container">
          <p>Copyright 2024 © All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;