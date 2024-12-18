import React from 'react';
import Header from './components/Header';
import SliderComponent from './components/SliderComponent';
import Categories from './components/Categories';
import About from './components/About';
import Classes from './components/Classes';
import Testimonials from './components/Testimonials';
import Enroll from './components/Enroll';
import Teachers from './components/Teachers';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Video from './components/Video';
import Choice from './components/Choice';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SliderComponent />
      <Categories />
      <About />
      <Classes />
      {/* <Choice /> 
      <Video />  */}
      <Gallery /> {/* Ensure Gallery component is rendered below Video */}
      <Testimonials />
      <Enroll />
      <Teachers />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;