// src/components/Newsletter.jsx
import React from 'react';
import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter-wrap">
      <div className="container">
        <div className="newsletter-row">
          <h1>Newsletter</h1>
          <form>
            <div className="form-row">
              <div className="input-with-icon">
                <i className="fas fa-envelope"></i>
                <input type="email" className="form-control" name="email" placeholder="Email Address" required />
              </div>
              <button type="submit" className="signup">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;