import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/Teachers.css';

const TeachersSlider = () => {
  const experts = [
    {
      id: 1,
      name: 'Jhon Doe',
      position: 'CEO Reactive',
      image: '/assets/images/GEETASETHI23.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Jhon Doe',
      position: 'CEO Reactive',
      image: '/assets/images/GEETASETHI23.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Jhon Doe',
      position: 'CEO Reactive',
      image: '/assets/images/GEETASETHI23.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Jhon Doe',
      position: 'CEO Reactive',
      image: '/assets/images/GEETASETHI23.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <span className="team-label">OUR TEAM</span>
          <h2 className="team-title">Meet The Expert</h2>
          <p className="team-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
          </p>
        </div>

        {/* Expert Grid */}
        <div className="experts-grid">
          {experts.map((expert) => (
            <div key={expert.id} className="expert-combo">
              {/* Image Card */}
              <div className="expert-image-card">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="expert-image"
                />
              </div>

              {/* Info Card */}
              <div className="expert-info-card">
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-position">{expert.position}</p>
                <p className="expert-description">{expert.description}</p>
                
                {/* Social Links */}
                <div className="social-links">
                  <a href={expert.social.facebook} className="social-link">
                    <Facebook size={16} />
                  </a>
                  <a href={expert.social.twitter} className="social-link">
                    <Twitter size={16} />
                  </a>
                  <a href={expert.social.instagram} className="social-link">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSlider;