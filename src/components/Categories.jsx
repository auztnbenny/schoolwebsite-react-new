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
        'Expert teachers are the cornerstone of exceptional education, blending profound subject knowledge with pedagogical finesse to inspire and empower students. They possess a unique alchemy of skills, including a deep understanding of their subject matter, mastery of diverse teaching strategies, and unwavering dedication to their students',
    },
    {
      icon: book,
      title: 'Quality Education',
      description:
        'Quality education is holistic, addressing not only academic needs but also social, emotional, and physical well-being. It promotes values of empathy, tolerance, respect and nurturing compassionate and responsible global citizens. Quality education goes beyond rote memorization, encouraging students to explore, question, and discover.',
    },
    {
      icon: support,
      title: 'Best Curriculum',
      description:
        'We are committed to provide blend of academic and extra-curricular programs that keep our students ever competitive in the fast-moving world. A team of experts will always study the directives and the policies recommended by the board and the Department of Education to restructure the curriculum and bring in timely changes and newness in learning.',
    },
    {
      icon: scholarship,
      title: 'Our Community',
      description:
        'Saint Arnold’s Community is a large and widely spread community. Over a period of time, the Saint Arnold’s group of institutions have built up this strong community with wider networking through committed teachers, good students, and very supportive parents. The school community aims at building a larger community that makes a strong nation.',
    },
  ];

  return (
    <div className="our-course-categories-two">
      <div className="container">
        <div className="categories_wrap">
          <ul className="row">
            {categories.map((category, index) => (
              <li className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
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