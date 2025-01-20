import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import '../styles/Classes.css';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Parent-Teacher Meeting (PTM)',
      image: '/assets/images/PTM.jpg',
      date: '08:30 AM - 11:00 AM',
      comments: '0',
      excerpt: 'Discussing students progress and well-being. Saturday, 26/10/2024'
    },
    {
      id: 2,
      title: 'Children Day',
      image: '/assets/images/children_day.jpg',
      date: '8.30 AM - 12:00PM  ',
      comments: '0',
      excerpt: 'Today\'s children shape India\'s future; how we raise them defines our nation\'s destiny." Pandit Jawaharlal Nehru November 14, 2024'
    },
    {
      id: 3,
      title: "Daan Utsav",
      image: '/assets/images/DaanUtsav.jpg',
      date: '09:00 AM - 11:00 AM',
      comments: '0',
      excerpt: 'Daan Utsav promotes the spirit of giving, encouraging students to share resources with underprivileged communities. November 23, 2024'
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        {/* Header */}
        <div className="news-header">
          <span className="section-label">BLOG & NEWS</span>
          <h2 className="section-title">Latest News</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
          </p>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {newsItems.map((news) => (
            <div key={news.id} className="news-card">
              {/* Image */}
              <div className="news-image-container">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="news-image"
                />
              </div>

              {/* Content */}
              <div className="news-content">
                <h3 className="news-title">{news.title}</h3>
                
                {/* Meta Info */}
                <div className="news-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{news.date}</span>
                  </div>
                  <div className="meta-item">
                    <MessageCircle size={16} />
                    <span>{news.comments} Comments</span>
                  </div>
                </div>

                <p className="news-excerpt">{news.excerpt}</p>
                
                <button className="read-more-btn">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;