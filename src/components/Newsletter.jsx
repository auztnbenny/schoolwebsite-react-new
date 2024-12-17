// src/components/Newsletter.jsx
import React from 'react';
import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title">
              <h1>Newsletter</h1>
            </div>
            <p></p>
          </div>
          <div className="col-lg-6">
            <div className="news-info">
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                  <div className="form_icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <button type="submit" className="signup">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;