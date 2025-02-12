import React, { useState } from 'react';
import '../styles/Testimonials.css';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Miftahul Israr",
      designation: "Parent",
      content: "Saint Arnold's School, Salajpur is a reputed educational institution known for its commitment to holistic development, blending academics with extracurricular activities. My daughter Anisah Israr study in Class- V and my son Aaqib Israr study in class KG- I.",
      fullContent: "Saint Arnold's School, Salajpur is a reputed educational institution known for its commitment to holistic development, blending academics with extracurricular activities. My daughter Anisah Israr study in Class- V and my son Aaqib Israr study in class KG- I. The school's dedication to maintaining high academic standards while nurturing individual talents has been remarkable. The teachers are highly qualified and show genuine care for each student's progress.",
      image: "/assets/images/MIFTAHUL_ISRAR.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Paramita Maity",
      designation: "Parent",
      content: "I am Paramita Maity, the mother of Rohit Maity. He was admitted to Class III at Saint Arnold's School. Currently he is studying in Class VII. Since he joined the school, I have observed a remarkable improvement in my son. The school's teaching style, environment, and discipline are exceptional.",
      fullContent: "I am Paramita Maity, the mother of Rohit Maity. He was admitted to Class III at Saint Arnold's School. Currently he is studying in Class VII. Since he joined the school, I have observed a remarkable improvement in my son. The school's teaching style, environment, and discipline are exceptional. The teachers are dedicated and provide individual attention to each student. The school's focus on both academic excellence and character development has helped shape my son into a confident and responsible student.",
      image: "/assets/images/PARAMITA_MAITY.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Miss. Liya Monia Biswas",
      designation: "Faculty",
      content: "Working as a teacher at Saint Arnold's School, I can confidently say that this is an exceptional place to work and grow as an educator. The school's commitment to fostering a positive and inclusive learning environment is truly inspiring.",
      fullContent: "Working as a teacher at Saint Arnold's School, I can confidently say that this is an exceptional place to work and grow as an educator. The school's commitment to fostering a positive and inclusive learning environment is truly inspiring. We are encouraged to be innovative in our teaching methods and are provided with continuous professional development opportunities. The collaborative atmosphere among faculty members and the support from administration make it possible to give our best to our students every day.",
      image: "/assets/images/english.jpg",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">What Parents Says About Us</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* <div className="star-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index}
                    size={20}
                    className="star-icon"
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                ))}
              </div> */}
              <div className="profile-section">
                <div className="profile-info">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="profile-image"
                  />
                  <div className="profile-text">
                    <h4 className="profile-name">{testimonial.name}</h4>
                    <p className="profile-designation">{testimonial.designation}</p>
                  </div>
                </div>
                <Quote className="quote-icon" size={32} />
              </div>

              <div className="testimonial-content-wrapper">
                <p className="testimonial-content-short">{testimonial.content}</p>
                <p className="testimonial-content-full">{testimonial.fullContent}</p>
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;