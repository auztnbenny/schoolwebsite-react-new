import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/TeamShowcase.css';

const TeamShowcase = () => {
  const members = [
    {
      id: 1,
      name: 'SANJUKTA',
      position: 'CEO Reactive',
      image: '/assets/images/SANJUKTA2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'PSUNITAPAUL',
      position: 'CEO Reactive',
      image: '/assets/images/PSUNITAPAUL2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'GEETASETHI',
      position: 'CEO Reactive',
      image: '/assets/images/GEETASETHI2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'GEETASETHI',
      position: 'CEO Reactive',
      image: '/assets/images/GEETASETHI2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        {/* Header */}
        <div className="showcase-header">
          {/* <span className="showcase-label">OUR TEAM</span> */}
          <h2 className="showcase-title">Teaching Staffs</h2>
          <p className="showcase-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
          </p>
        </div>

        {/* Team Grid */}
        <div className="members-grid">
          {members.map((member) => (
            <div key={member.id} className="member-wrapper">
              {/* Image Card */}
              <div className="member-image-box">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
              </div>

              {/* Info Card */}
              <div className="member-info-box">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.position}</p>
                <p className="member-bio">{member.description}</p>
                
                {/* Social Links */}
                <div className="social-icons">
                  <a href={member.social.facebook} className="social-item">
                    <Facebook size={16} />
                  </a>
                  <a href={member.social.twitter} className="social-item">
                    <Twitter size={16} />
                  </a>
                  <a href={member.social.instagram} className="social-item">
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

export default TeamShowcase;