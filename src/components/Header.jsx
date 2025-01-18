import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'HOME', path: '/' },
    { title: 'ABOUT US', path: '/about' },
    {
      title: 'SERVICES',
      path: '/services',
      dropdown: [
        { title: 'Service 1', path: '/service1' },
        { title: 'Service 2', path: '/service2' },
        { title: 'Service 3', path: '/service3' }
      ]
    },
    {
      title: 'PAGE',
      path: '/page',
      dropdown: [
        { title: 'Page 1', path: '/page1' },
        { title: 'Page 2', path: '/page2' },
        { title: 'Page 3', path: '/page3' }
      ]
    },
    {
      title: 'BLOG',
      path: '/blog',
      dropdown: [
        { title: 'Blog 1', path: '/blog1' },
        { title: 'Blog 2', path: '/blog2' },
        { title: 'Blog 3', path: '/blog3' }
      ]
    },
    { title: 'CONTACT', path: '/contact' }
  ];

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.dropdown ? 'dropdown' : ''}`}>
                <Link to={item.path} className="nav-link">
                  {item.title}
                  {item.dropdown && <ChevronDown size={14} className="dropdown-icon" />}
                </Link>
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <li key={dropIndex}>
                        <Link to={dropItem.path}>{dropItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="header-buttons">
            <button className="search-button">
              <Search size={20} />
            </button>
            <button className="mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;