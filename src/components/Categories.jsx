// src/components/Categories.jsx
import React from 'react';
import '../styles/Categories.css';
import teacher from '../assets/images/teacher.png';
import book from '../assets/images/book.png';
import support from '../assets/images/support.png';
import scholarship from '../assets/images/scholarship.png';

function Categories() {
  const categories = [
    {
      icon: teacher,
      title: 'Expert Teachers',
      description:
        'Expert teachers are the cornerstone of exceptional education, blending profound subject knowledge with pedagogical finesse to inspire and empower students.',
    },
    {
      icon: book,
      title: 'Quality Education',
      description:
        'Quality education is holistic, addressing not only academic needs but also social, emotional, and physical well-being.',
    },
    {
      icon: support,
      title: 'Best Curriculum',
      description:
        'We are committed to providing a blend of academic and extra-curricular programs that keep our students competitive in the fast-moving world.',
    },
    {
      icon: scholarship,
      title: 'Our Community',
      description:
        'Saint Arnold’s Community is a large and widely spread community with committed teachers, good students, and supportive parents.',
    },
  ];

  return (
    <div className="our-course-categories-two">
      <div className="container">
        <div className="categories_wrap">
          <ul className="row">
            {categories.map((category, index) => (
              <li className="col-lg-3 col-md-6" key={index}>
                <div className="categories-course">
                  <div className="item-inner">
                    <div className="cours-icon">
                      <span className="coure-icon-inner">
                        <img src={category.icon} alt={category.title} />
                      </span>
                    </div>
                    <div className="cours-title">
                      <h4> {category.title} </h4>
                      <p>{category.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;