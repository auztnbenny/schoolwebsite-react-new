import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SliderComponent from './components/SliderComponent';
import Categories from './components/Categories';
// import AboutUsnew from './components/Aboutusnew';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Enroll from './components/Enroll';
import Teachers from './components/Teachers';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import History from './components/pages/about/history'; // Import the History component
import Choice from './components/Choice';
import Aboutus from './components/pages/about/aboutus';
import Blog from './components/pages/about/blog';
import Video from './components/Video';
import Vision from './components/pages/about/vision';
import Contact from './components/pages/contact';
import CBSE from './components/pages/cbsedisclosure';
import President from './components/pages/about/president';
import Principal from './components/pages/about/principal';
import ClassSchedule from './components/pages/academics/classschedule';
import About from './components/About';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services'; 
import StatsCounter from './components/StatsCounter';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <SliderComponent />
            <Categories />
            <About />
            {/* <TrustedBrands /> */}
            <Services />
            {/* <StatsCounter /> */}
            <Testimonials />
            <Teachers />
            <Classes />
            <ContactInfo />
            <Footer />
            {/* <Gallery />
            <Enroll />
            <Newsletter /> */}
            
          </div>
        } />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cbse" element={<CBSE />} />
        <Route path="/classschedule" element={<ClassSchedule />} />
        <Route path="/president" element={<President />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Vision" element={<Vision />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;