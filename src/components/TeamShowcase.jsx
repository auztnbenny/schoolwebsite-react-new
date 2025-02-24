import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/TeamShowcase.css';

const TeamShowcase = () => {
  const [staffCategories, setStaffCategories] = useState({
    teaching: [],
    driving: [],
    office: [],
    support: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleImageError = (e) => {
    e.target.src = '/assets/images/noPhoto.jpg';
    e.target.onerror = null;
  };

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

      const categorizedStaff = {
        teaching: processStaffCategory(staffData, 'Teaching'),
        driving: processStaffCategory(staffData, 'DRIVING STAFF'),
        office: processStaffCategory(staffData, 'OFFICE'),
        support: processStaffCategory(staffData, 'SUPPORT STAFF')
      };

      setStaffCategories(categorizedStaff);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const processStaffCategory = (staffData, categoryType) => {
    return staffData
      .filter(staff => staff.EmployeeType === categoryType)
      .map(staff => {
        const imageUrl = staff.EMPCODE 
          ? `http://paymentbo.sassalajpur.in/PICSPAY/01/${staff.EMPCODE}.jpg`
          : '/assets/images/noPhoto.jpg';

        return {
          id: staff.EMPAUTOID,
          name: staff.EmployeeName,
          position: staff.Designation,
          department: staff.Department,
          image: imageUrl,
          contactInfo: {
            email: staff.EmailAddress || 'N/A',
            phone: staff.PhoneNo || 'N/A',
          }
        };
      });
  };

  const renderStaffSection = (staffMembers, title, description) => (
    <section className="ts-team-section">
      <div className="ts-team-container">
        <div className="ts-team-header">
          <span className="ts-team-label">OUR TEAM</span>
          <h2 className="ts-team-title">{title}</h2>
          <p className="ts-team-description">{description}</p>
        </div>

        <div className="ts-experts-grid">
          {staffMembers.map((member) => (
            <div key={member.id} className="ts-expert-combo">
              <div className="ts-expert-image-card">
                <img 
                  src={member.image}
                  alt={`${member.name}`}
                  className="ts-expert-image"
                  onError={handleImageError}
                  loading="lazy"  
                />
              </div>
              <div className="ts-expert-info-card">
                <h3 className="ts-expert-name">{member.name}</h3>
                <p className="ts-expert-position">{member.position}</p>
                
                <div className="ts-contact-info">
                  {member.contactInfo.phone !== 'N/A' && (
                    <p>Phone: {member.contactInfo.phone}</p>
                  )}
                  {member.contactInfo.email !== 'N/A' && (
                    <p>Email: {member.contactInfo.email}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (isLoading) {
    return (
      <div className="ts-loading-container">
        Loading staff data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="ts-error-container">
        Error loading staff data: {error}
      </div>
    );
  }

  return (
    <>
      {staffCategories.teaching.length > 0 && renderStaffSection(
        staffCategories.teaching,
        "Meet Our Teaching Staff",
        "Our dedicated team of educators brings expertise and passion to every classroom"
      )}
      
      {staffCategories.driving.length > 0 && renderStaffSection(
        staffCategories.driving,
        "Meet Our Driving Staff",
        "Our skilled driving team ensures safe and reliable transportation services"
      )}
      
      {staffCategories.office.length > 0 && renderStaffSection(
        staffCategories.office,
        "Meet Our Office Staff",
        "Our efficient administrative team keeps operations running smoothly"
      )}
      
      {staffCategories.support.length > 0 && renderStaffSection(
        staffCategories.support,
        "Meet Our Support Staff",
        "Our dedicated support team provides essential services across all departments"
      )}
    </>
  );
};

export default TeamShowcase;