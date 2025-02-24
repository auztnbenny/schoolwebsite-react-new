import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaNewspaper } from 'react-icons/fa';
import '../../styles/admin/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div 
            className="dashboard-card"
            onClick={() => handleNavigate('/admin/add-testimonial')}
          >
            <div className="icon">
              <FaUserGraduate />
            </div>
            <h2>Testimonials</h2>
            <p>Add and manage student testimonials</p>
          </div>
          
          <div 
            className="dashboard-card"
            onClick={() => handleNavigate('/admin/add-news')}
          >
            <div className="icon">
              <FaNewspaper />
            </div>
            <h2>News</h2>
            <p>Add and manage school news</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
