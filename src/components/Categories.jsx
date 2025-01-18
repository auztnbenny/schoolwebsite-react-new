import React from 'react';
import '../styles/Categories.css';
import { Headphones, ShieldCheck, LockKeyhole, Award } from 'lucide-react';

function Categories() {
  const categories = [
    {
      icon: <Headphones  className="category-icon" />,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: <ShieldCheck className="category-icon" />,
      title: 'Security Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: <LockKeyhole className="category-icon" />,
      title: 'Data Privacy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: <Award className="category-icon" />,
      title: 'Industry Certified',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];

  return (
    <div className="categories-section">
      <div className="categories-container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon-wrapper">
                {category.icon}
              </div>
              <div className="category-content">
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