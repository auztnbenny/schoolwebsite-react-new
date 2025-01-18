import React from 'react';
import '../styles/StatsCounter.css';

const StatsCounter = () => {
  const stats = [
    {
      id: 1,
      number: '2,500+',
      label: 'Cyber Projects'
    },
    {
      id: 2,
      number: '1,800+',
      label: 'Clients Protection'
    },
    {
      id: 3,
      number: '100%',
      label: 'Services Guarantee'
    },
    {
      id: 4,
      number: '50+',
      label: 'Team Expert'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-item">
              <h2 className="stat-number">
                {stat.number}
              </h2>
              <p className="stat-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;