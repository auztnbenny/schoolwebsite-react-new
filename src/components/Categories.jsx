import React, { useState } from 'react';
import '../styles/Categories.css';
import { GraduationCap, BookOpen, Library, Users } from 'lucide-react';

function Categories() {
  const categories = [
    {
      icon: <GraduationCap className="category-icon" />,
      title: 'Expert Teachers',
      description: 'Expert teachers are the cornerstone of exceptional education, blending profound subject knowledge with pedagogical finesse to inspire and empower students. They possess a unique alchemy of skills, including a deep understanding of their subject matter, mastery of diverse teaching strategies, and unwavering dedication to their students'
    },
    {
      icon: <BookOpen className="category-icon" />,
      title: 'Quality Education',
      description: 'Quality education is holistic, addressing not only academic needs but also social, emotional, and physical well-being. It promotes values of empathy, tolerance, respect and nurturing compassionate and responsible global citizens. Quality education goes beyond rote memorization, encouraging students to explore, question, and discover.'
    },
    {
      icon: <Library className="category-icon" />,
      title: 'Best Curriculum',
      description: 'We are committed to provide blend of academic and extra-curricular programs that keep our students ever competitive in the fast-moving world. A team of experts will always study the directives and the policies recommended by the board and the Department of Education to restructure the curriculum and bring in timely changes and newness in learning.'
    },
    {
      icon: <Users className="category-icon" />,
      title: 'Our Community',
      description: "Saint Arnold's Community is a large and widely spread community. Over a period of time, the Saint Arnold's group of institutions have built up this strong community with wider networking through committed teachers, good students, and very supportive parents. The school community aims at building a larger community that makes a strong nation."
    }
  ];

  return (
    <div className="categories-section">
      <div className="team-headerr">
        <span className="team-labelr">WHY CHOOSE US</span>
        <h2 className="team-titler">Discover Our Excellence</h2>
      </div>
      <div className="categories-container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-content">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;