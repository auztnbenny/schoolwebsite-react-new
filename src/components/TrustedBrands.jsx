import React from 'react';
import '../styles/TrustedBrands.css';

const TrustedBrands = () => {
  const brands = [
    {
      id: 1,
      name: 'Piccaso',
      logoUrl: '../assets/images/comany.png'
    },
    {
      id: 2,
      name: 'Booster',
      logoUrl: '../assets/images/comany.png'
    },
    {
      id: 3,
      name: 'Jumpkins',
      logoUrl: '../assets/images/comany.png'
    },
    {
      id: 4,
      name: 'Sky Cloud',
      logoUrl: '../assets/images/comany.png'
    },
    {
      id: 5,
      name: 'Talk & Action',
      logoUrl: '../assets/images/comany.png'
    },
    {
      id: 6,
      name: 'Jumpkins Music',
      logoUrl: '../assets/images/comany.png'
    }
  ];

  return (
    <section className="trusted-brands">
      <div className="trusted-container">
        {/* Left Content */}
        <div className="trust-content">
          <h2 className="trust-heading">
            Trusted By 2,880+ World-Class Brands And Organizations Of All Sizes.
          </h2>
          <p className="trust-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim 
            sagittis dignissim. Praesent egestas, urna quis auctor iaculis, lacus tortor porta ligula.
          </p>
        </div>

        {/* Right Content - Brand Logos */}
        <div className="brands-grid">
          {brands.map(brand => (
            <div key={brand.id} className="brand-item">
              <img 
                src={brand.logoUrl} 
                alt={brand.name} 
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;