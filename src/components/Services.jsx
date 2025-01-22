import React from 'react';
import { 
  Users, 
  Heart, 
  Focus, 
  BookOpen, 
  Trophy, 
  Monitor,
  Dumbbell,
  ParkingCircle,
  Film 
} from 'lucide-react';
import '../styles/Services.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Qualified Staff',
      description: 'Talented and experienced teaching professionals',
      Icon: Users,
      position: 'top-left'
    },
    {
      id: 2,
      title: 'Caring Support',
      description: 'Responsible and nurturing supporting staff',
      Icon: Heart,
      position: 'top-right'
    },
    {
      id: 3,
      title: 'Personal Attention',
      description: 'Individualized focus on each child\'s growth',
      Icon: Focus,
      position: 'middle-left'
    },
    {
      id: 4,
      title: 'Remedial Learning',
      description: 'Special classes for students needing extra support',
      Icon: BookOpen,
      position: 'middle-right'
    },
    {
      id: 5,
      title: 'Talent Competitions',
      description: 'Regular talent hunt and skill development events',
      Icon: Trophy,
      position: 'bottom-left'
    },
    {
      id: 6,
      title: 'Diverse Activities',
      description: 'Computer, Karate, Aerobics, and Yoga classes',
      Icon: Dumbbell,
      position: 'bottom-right'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-label">FEATURES</span>
          <h2 className="services-title">Our Key Features</h2>
          <p className="services-description">
            We are committed to providing holistic education that goes beyond traditional learning.
          </p>
        </div>

        {/* Services Layout */}
        <div className="services-layout">
          {/* Central Icon */}
          <div className="central-icon">
            <div className="globe-shield">
              <div className="shield-check"></div>
            </div>
            <h3 className="central-text">Holistic Development</h3>
          </div>

          {/* Service Items */}
          <div className="services-items">
            {features.map(({ id, title, description, Icon, position }) => (
              <div key={id} className={`service-item ${position}`}>
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        {/* <div className="additional-features">
          <h3 className="additional-features-title">More School Features</h3>
          <ul className="additional-features-list">
            <li>
              <ParkingCircle size={20} />
              <span>Children's Park</span>
            </li>
            <li>
              <Film size={20} />
              <span>Audio-visual Rooms</span>
            </li>
            <li>
              <Monitor size={20} />
              <span>Computer Classes</span>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Features;