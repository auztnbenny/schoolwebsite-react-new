import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrap">
      <Container fluid>
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-lg-3 col-md-12 navbar-light">
            <div className="logo">
              <a href="index.html">
                <img alt="Logo" className="logo-default" src={logo} />
              </a>
            </div>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
          </div>

          {/* Navigation Section */}
          <div className="col-lg-6 col-md-12">
            <Navbar expand="lg" className="navbar-light">
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mx-auto nav-list">
                  <Nav.Link as={Link} to="/" className="nav-item nav-link">
                    Home
                  </Nav.Link>
                  <NavDropdown title="About" id="about-dropdown" className="nav-item nav-link">
                    <NavDropdown.Item as={Link} to="/History">History</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Vision">Vision</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/president">President's Message</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/principal">Principal's Message</NavDropdown.Item>
                    <NavDropdown.Item href="smc.html">SMC</NavDropdown.Item>
                    <NavDropdown.Item href="shc.html">SHC</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Admission" id="admission-dropdown" className="nav-item nav-link">
                    <NavDropdown.Item href="guidelines.html">Guidelines</NavDropdown.Item>
                    <NavDropdown.Item href="e-Admission.html">E-Admission</NavDropdown.Item>
                    <NavDropdown.Item href="enrolments.html">Enrolments</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Academics" id="academics-dropdown" className="nav-item nav-link">
                    <NavDropdown.Item href="syllabus.html">Syllabus</NavDropdown.Item>
                    <NavDropdown.Item href="rules-&-regulations.html">Rules & Regulations</NavDropdown.Item>
                    <NavDropdown.Item href="class-schedule.html">Class Schedule</NavDropdown.Item>
                    <NavDropdown.Item href="exam-schedule.html">Exam Schedule</NavDropdown.Item>
                    <NavDropdown.Item href="results.html">Results</NavDropdown.Item>
                    <NavDropdown.Item href="school-fees.html">School Fees</NavDropdown.Item>
                    <NavDropdown.Item href="school-uniform.html">School Uniform</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Institution" id="institution-dropdown" className="nav-item nav-link">
                    <NavDropdown.Item href="school-anthem.html">School Anthem</NavDropdown.Item>
                    <NavDropdown.Item href="governing-body.html">Governing Body</NavDropdown.Item>
                    <NavDropdown.Item href="staff.html">Staff</NavDropdown.Item>
                    <NavDropdown.Item href="infrastructure.html">Infrastructure</NavDropdown.Item>
                    <NavDropdown.Item href="school-bus.html">School Bus</NavDropdown.Item>
                    <NavDropdown.Item href="activity.html">Activity</NavDropdown.Item>
                    <NavDropdown.Item href="child-protection-policy.html">Child Protection Policy</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Gallery" id="gallery-dropdown" className="nav-item nav-link">
                    <NavDropdown.Item as={Link} to="/gallery">Photos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/gallery">Videos</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact" className="nav-item nav-link">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          {/* CBSE Disclosure Section */}
          <div className="col-lg-3 col-md-12 text-end">
            <div className="header_info">
              <a href="Cbse-Disclosure.html" className="btn-disclosure">
                CBSE-Disclosure
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
