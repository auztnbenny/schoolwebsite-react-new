import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      comment: "Saint Arnold’s School, Salajpur is a reputed educational institution known for its commitment to holistic development, blending academics with extracurricular activities. My daughter Anisah Israr study in Class- V and my son Aaqib Israr study in class KG- I. Saint Arnold’s School offers a perfect blend of academics, extracurricular activities, and character-building initiatives which have contributed to my children’s holistic development. The Principal, Vice Principal and all teachers are very cordial, helpful, approachable, ensuring that every student feels supported and encouraged. The school’s environment promotes inclusivity, making students from diverse backgrounds feel welcomed and respected. The school’s focus on values like teamwork, empathy, and responsibility has positively influenced to the students’ personalities. I am grateful to Saint Arnold’s School for providing fitting environment to my children for proceeding in their studies in a smooth manner. Special thanks to the Principal, Vice Principal, all teachers and other staff for running this institution in good discipline and order to promote best education to students.",
      name: "Miftahul Israr",
      designation: "Parent",
      image: "/assets/images/MIFTAHUL_ISRAR.jpg",
      rating: 5
    },
    {
      id: 2,
      comment: "I am Paramita Maity, the mother of Rohit Maity. He was admitted to Class III at Saint Arnold's School. Currently he is studying in Class VII. Since he joined the school, I have observed a remarkable improvement in my son. The school's teaching style, environment, and discipline are exceptional. The education provided is very good, and the classroom teaching methods are excellent. The school also has a good transportation system. Saint Arnold's School has gained my full trust. I am very satisfied with my son's education at Saint Arnold's School. I believe that every student studying at Saint Arnold's School will have a bright future.",
      name: "Paramita Maity",
      designation: "Parent",
      image: "/assets/images/PARAMITA_MAITY.jpg",
      rating: 5
    },
    {
      id: 3,
      comment: "Working as a teacher at Saint Arnold’s School, I can confidently say that this is an exceptional place to work and grow as an educator. The school’s commitment to fostering a positive and inclusive learning environment is truly inspiring. We are encouraged to be innovative in our teaching methods and to focus on each student’s individual needs, helping them reach their highest potential. The support from the administration and the collaboration among staff make it a community where everyone feels valued and heard. It’s rewarding to see students not only excel academically but also grow as compassionate and well-rounded individuals. I am also impressed by the quality of the school’s infrastructure. The classrooms are spacious, well-ventilated and equipped with modern technology that enhances the learning experience for both students and teachers. The availability of dedicated spaces, such as science labs, art rooms, and sports facilities, allows us to provide a well-rounded education that goes beyond the traditional classroom setup. The library is a hub of knowledge, offering a wide range of resources that support both teaching and independent learning. The school’s commitment to maintaining a clean, safe and inspiring environment makes it a wonderful place to teach and motivate our students to engage more actively in their education. I’m proud to be a part of a school that prioritizes the success and well-being of both its students and teachers and enhances the learning journey.",
      name: "Miss. Liya Monia Biswas",
      designation: "Faculty",
      image: "/assets/images/english.jpg",
      rating: 5
    },
    {
      id: 4,
      comment: "You feel happy when you get what you look for. This has been my experience with Saint Arnold’s School. I was on a look out for a school that could provide good academic programme along with character formation of my child. I am delighted with the progress of my son who is well accompanied by the teachers and others in the school. I come across teaching faculty and the management is people friendly and quick to respond to student’s and parents’ concern.",
      name: "Jayanta Pramanik",
      designation: "Parent",
      image: "/assets/images/JAYANTA_PRAMANIK.jpg",
      rating: 5
    },
    {
      id: 5,
      comment: "Saint Arnold's School is an excellent educational institution with a futuristic approach forming the young minds. As a teacher of this school, I can confidently say that modern teaching methods are used by the skillful and competent teachers which shape the future of the students. There are good facilities and many more are being added to the list. The number of training and theme-based workshops are conducted at regular intervals to enhance the teaching skills of teachers. The support and cooperation of Principal as well as Management is a motivating factor to perform better. I am very glad to associate myself with Saint Arnold’s School to form the students and be a part of nation building.",
      name: "Mrs. Lilly Banerjee Bhattacharya",
      designation: "Faculty",
      image: "/assets/images/Lilly.jpg",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(testimonials.length / 2) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(testimonials.length / 2) - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonials-wrap">
      <div className="container">
        <div className="title">
          <p>Testimonials</p>
          <h1>What Parents Say</h1>
        </div>

        <div className="testimonials-row">
          {testimonials.slice(currentSlide * 2, currentSlide * 2 + 2).map((testimonial, index) => (
            <div className="testimonials-col" key={testimonial.id}>
              <div className="testimonials_sec">
                <div className="client_box">
                  <div className="clientImg"><img alt="" src={testimonial.image} /></div>
                  <ul className="unorderList starWrp" style={{ display: 'flex', justifyContent: 'center' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <li key={i}><FontAwesomeIcon icon={faStar} /></li>
                    ))}
                  </ul>
                </div>
                <p style={{ textAlign: 'justify' }}>{testimonial.comment}</p>
                <h3>{testimonial.name}<span>{testimonial.designation}</span></h3>
                <div className="quote_icon"><FontAwesomeIcon icon={faQuoteRight} /></div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button className={`owl-dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}></button>
          <button className={`owl-dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}></button>
          <button className={`owl-dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;