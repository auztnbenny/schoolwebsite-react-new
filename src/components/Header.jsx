// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header-wrap">
      <Container fluid>
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Logo" className="logo-default" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="index.html">Home</Nav.Link>
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="History.html">History</NavDropdown.Item>
              <NavDropdown.Item href="vision.html">Vision</NavDropdown.Item>
              <NavDropdown.Item href="Presidents-Message.html">President's Message</NavDropdown.Item>
              <NavDropdown.Item href="Principals-Message.html">Principal's Message</NavDropdown.Item>
              <NavDropdown.Item href="smc.html">SMC</NavDropdown.Item>
              <NavDropdown.Item href="shc.html">SHC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admission" id="admission-dropdown">
              <NavDropdown.Item href="guidelines.html">Guidelines</NavDropdown.Item>
              <NavDropdown.Item href="e-Admission.html">E-Admission</NavDropdown.Item>
              <NavDropdown.Item href="enrolments.html">Enrolments</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item href="syllabus.html">Syllabus</NavDropdown.Item>
              <NavDropdown.Item href="rules-&-regulations.html">Rules & Regulations</NavDropdown.Item>
              <NavDropdown.Item href="class-schedule.html">Class Schedule</NavDropdown.Item>
              <NavDropdown.Item href="exam-schedule.html">Exam Schedule</NavDropdown.Item>
              <NavDropdown.Item href="results.html">Results</NavDropdown.Item>
              <NavDropdown.Item href="school-fees.html">School Fees</NavDropdown.Item>
              <NavDropdown.Item href="school-uniform.html">School Uniform</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Institution" id="institution-dropdown">
              <NavDropdown.Item href="school-anthem.html">School Anthem</NavDropdown.Item>
              <NavDropdown.Item href="governing-body.html">Governing Body</NavDropdown.Item>
              <NavDropdown.Item href="staff.html">Staff</NavDropdown.Item>
              <NavDropdown.Item href="infrastructure.html">Infrastructure</NavDropdown.Item>
              <NavDropdown.Item href="school-bus.html">School Bus</NavDropdown.Item>
              <NavDropdown.Item href="activity.html">Activity</NavDropdown.Item>
              <NavDropdown.Item href="child-protection-policy.html">Child Protection Policy</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gallery" id="gallery-dropdown">
              <NavDropdown.Item href="https://www.arnoldschoolsalajpur.in/Albums/Photos.html">Photos</NavDropdown.Item>
              <NavDropdown.Item href="https://www.arnoldschoolsalajpur.in/Albums/Videos.html">Videos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact.html">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="Cbse-Disclosure.html" className="cbse-disclosure">CBSE-Disclosure</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;