import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminForms.css';

const AddNews = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API call logic here
    console.log('News data:', formData);
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h1>Add News</h1>
        <button onClick={() => navigate('/admin/dashboard')}>Back</button>
      </nav>
      <div className="dashboard-content">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button 
              type="button" 
              onClick={() => navigate('/admin/dashboard')} 
              className="form-submit-btn form-back-btn"
            >
              Cancel
            </button>
            <button type="submit" className="form-submit-btn">
              Add News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
