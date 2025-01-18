import React from 'react';
import { 
  Network, 
  Globe, 
  Database, 
  Cloud, 
  Server, 
  MonitorCheck 
} from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Network Security',
      description: 'We bring the right people together to challenge established thinking.',
      Icon: Network,
      position: 'top-left'
    },
    {
      id: 2,
      title: 'Web Security',
      description: 'We bring the right people together to challenge established thinking.',
      Icon: Globe,
      position: 'top-right'
    },
    {
      id: 3,
      title: 'Database Security',
      description: 'We bring the right people together to challenge established thinking.',
      Icon: Database,
      position: 'middle-left'
    },
    {
      id: 4,
      title: 'Cloud Security',
      description: 'We bring the right people together to challenge established thinking.',
      Icon: Cloud,
      position: 'middle-right'
    },
    {
      id: 5,
      title: 'IT Infrastructure',
      description: 'We bring the right people together to challenge established thinking.',
      Icon: Server,
      position: 'bottom-left'
    },
    {
      id: 6,
      title: 'Monitoring Security',
      description: 'We bring the right people together to challenge established thinking.',
      Icon: MonitorCheck,
      position: 'bottom-right'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-label">SERVICES</span>
          <h2 className="services-title">What We Offers</h2>
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
          </p>
        </div>

        {/* Services Layout */}
        <div className="services-layout">
          {/* Central Icon */}
          <div className="central-icon">
            <div className="globe-shield">
              <div className="shield-check"></div>
            </div>
            <h3 className="central-text">Reactive Services</h3>
          </div>

          {/* Service Items */}
          <div className="services-items">
            {services.map(({ id, title, description, Icon, position }) => (
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
      </div>
    </section>
  );
};

export default Services;