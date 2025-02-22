import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminForms.css';

const AddTestimonial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    designation: ''
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
    console.log('Testimonial data:', formData);
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h1>Add Testimonial</h1>
        <button onClick={() => navigate('/admin/dashboard')}>Back</button>
      </nav>
      <div className="dashboard-content">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Testimonial:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
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
              Add Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonial;
