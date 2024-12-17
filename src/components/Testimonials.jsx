// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Testimonials.css';
import Miftahul from '../assets/images/MIFTAHUL_ISRAR.jpg';
import Paramita from '../assets/images/PARAMITA_MAITY.jpg';
import English from '../assets/images/english.jpg';
import Jayanta from '../assets/images/JAYANTA_PRAMANIK.jpg';
import Lilly from '../assets/images/Lilly.jpg';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      image: Miftahul,
      name: 'Miftahul Israr',
      role: 'Parent',
      review:
        '“Saint Arnold’s School, Salajpur is a reputed educational institution known for its commitment to holistic development...',
    },
    {
      image: Paramita,
      name: 'Paramita Maity',
      role: 'Parent',
      review:
        'I am Paramita Maity, the mother of Rohit Maity. He was admitted to Class III at Saint Arnold\'s School...',
    },
    {
      image: English,
      name: 'Miss. Liya Monia Biswas',
      role: 'Faculty',
      review:
        '“Working as a teacher at Saint Arnold’s School, I can confidently say that this is an exceptional place to work...',
    },
    {
      image: Jayanta,
      name: 'Jayanta Pramanik',
      role: 'Parent',
      review:
        '“You feel happy when you get what you look for. This has been my experience with Saint Arnold’s School...',
    },
    {
      image: Lilly,
      name: 'Mrs. Lilly Banerjee Bhattacharya',
      role: 'Faculty',
      review:
        '“Saint Arnold\'s School is an excellent educational institution with a futuristic approach forming the young minds...',
    },
  ];

  return (
    <div className="testimonials-wrap">
      <div className="container">
        <div className="title">
          <p>Testimonials</p>
          <h1>What Parents Say</h1>
        </div>
        <div className="owl-carousel testimonials_list">
          {testimonials.map((testi, index) => (
            <div className="item" key={index}>
              <div className="testimonials_sec">
                <div className="client_box">
                  <div className="clientImg">
                    <img src={testi.image} alt={testi.name} />
                  </div>
                  <ul className="starWrp">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <FaStar />
                      </li>
                    ))}
                  </ul>
                </div>
                <p>{testi.review}</p>
                <h3>
                  {testi.name} <span>{testi.role}</span>
                  {testi.role === 'Parent' && <a href="Testimonials.html">Read more</a>}
                </h3>
                <div className="quote_icon">
                  <FaQuoteLeft />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;