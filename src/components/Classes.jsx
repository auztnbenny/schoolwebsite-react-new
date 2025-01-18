import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import '../styles/Classes.css';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Top 5 Cybersecurity Threats In 2021',
      image: '/assets/images/PTM.jpg',
      date: 'July 13, 2022',
      comments: '0',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at viverra est. Donec aliquam nibh nec mollis pharetra. Ut non...'
    },
    {
      id: 2,
      title: 'The Essentials Of Cyber Security Solutions',
      image: '/assets/images/children_day.jpg',
      date: 'July 13, 2022',
      comments: '0',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at viverra est. Donec aliquam nibh nec mollis pharetra. Ut non...'
    },
    {
      id: 3,
      title: "How To Raise Your Organization's Game To...",
      image: '/assets/images/DaanUtsav.jpg',
      date: 'July 13, 2022',
      comments: '0',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at viverra est. Donec aliquam nibh nec mollis pharetra. Ut non...'
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