import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/TeamShowcase.css';

const TeamShowcase = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const formData = new FormData();
      formData.append('title', 'GetStaffListERPQI');
      formData.append('description', 'Checking');
      formData.append('Reqdisptype', '0');
      formData.append('ReqEmpType', '');
      formData.append('ReqEmpDept', '');
      formData.append('ReqEmpAccCat', '');
      formData.append('ReqDesig', '');
      formData.append('ReqEmpCategory', '');

      const response = await fetch(
        'http://paymentbo.sassalajpur.in/WebServiceQuickInfo.aspx',
        {
          method: 'POST',
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch staff data');
      }

      let data = await response.text();
      const jsonPart = data.split('||JasonEnd')[0];
      const staffData = JSON.parse(jsonPart);
      console.log(staffData,'data')

      const teachingStaff = staffData
        .filter(staff => staff.EmployeeType === 'Teaching')
        .map(staff => ({
          id: staff.EMPAUTOID,
          name: staff.EmployeeName,
          position: staff.Designation,
          department: staff.Department,
          image: staff.PHOTOFILE === 'http://paymentbo.sassalajpur.in/PICSPAY/01/${staff.EMPCODE}.jpg' 
            ? '/assets/images/noPhoto.jpg'
            : `http://paymentbo.sassalajpur.in/PICSPAY/01/${staff.EMPCODE}.jpg`,
          contactInfo: {
            email: staff.EmailAddress || null,
            phone: staff.PhoneNo || null,
          }
        }));

      setStaffMembers(teachingStaff);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="ts-loading-container">
        Loading teaching staff data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="ts-error-container">
        Error loading teaching staff data: {error}
      </div>
    );
  }

  return (
    <section className="ts-team-section">
      <div className="ts-team-container">
        {/* Header */}
        <div className="ts-team-header">
          <span className="ts-team-label">OUR TEAM</span>
          <h2 className="ts-team-title">Meet Our Teaching Staff</h2>
          <p className="ts-team-description">
            Our dedicated team of educators brings expertise and passion to every classroom
          </p>
        </div>

        {/* Experts Grid */}
        <div className="ts-experts-grid">
          {staffMembers.map((member) => {
            // console.log(member.image,'img')
            return(
            <div key={member.id} className="ts-expert-combo">
              <div className="ts-expert-image-card">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="ts-expert-image"
                />
              </div>
              <div className="ts-expert-info-card">
                <h3 className="ts-expert-name">{member.name}</h3>
                <p className="ts-expert-position">{member.position}</p>
                {/* <p className="expert-description">{member.description}</p> */}
                
                {/* Contact Info */}
                <div className="ts-contact-info">
                  {member.contactInfo.phone !== 'N/A' && (
                    <p>Phone: {member.contactInfo.phone}</p>
                  )}
                  {member.contactInfo.email !== 'N/A' && (
                    <p>Email: {member.contactInfo.email}</p>
                  )}
                </div>
                
                {/* Social Links */}
                {/* <div className="social-links">
                  <a href={member.social.facebook} className="social-link">
                    <Facebook size={20} />
                  </a>
                  <a href={member.social.twitter} className="social-link">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.instagram} className="social-link">
                    <Instagram size={20} />
                  </a>
                </div> */}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;