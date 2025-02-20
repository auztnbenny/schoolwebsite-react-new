import React, { useState } from 'react';

import '../styles/ApplicationForm.css'

const Application = () => {
  const [formData, setFormData] = useState({
    applicationNo: '',
    studentName: '',
    dateOfBirth: '',
    bloodGroup: '',
    placeOfBirth: '',
    gender: '',
    religion: '',
    caste: '',
    nationality: '',
    fatherName: '',
    fatherDesignation: '',
    motherName: '',
    motherDesignation: '',
    brothers: '',
    sisters: '',
    residentialAddress: '',
    post: '',
    dist: '',
    pin: '',
    state: '',
    motherTongue: '',
    familyMonthlyIncome: '',
    lastSchool: '',
    admissionFor: '',
    officeAddress: '',
    fatherSignature: '',
    motherSignature: '',
    guardianSignature: '',
    date: '',
    place: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        {/* <div className="school-logo">
          <img src="/assets/images/logo.png" alt="School Logo" />
        </div> */}
        {/* <div className="school-info">
          <h1>Saint Arnold's School</h1>
          <p>Salapur, P.O. Khatnagar</p>
          <p>Dist: West Medinipur, West Bengal 721451</p>
          <p>Office: 9547104549 /897922028</p>
          <p className="motto">"Form to Transform"</p>
        </div> */}
      </div>

      <h2 className="form-title">APPLICATION FORM</h2>
      <p className="fill-instruction">(Fill in Block Letters)</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>1. Application No:</label>
          <input
            type="text"
            name="applicationNo"
            maxLength="4"
            value={formData.applicationNo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>2. Student&apos;s Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>3. Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>4. Blood Group:</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>5. Place of Birth:</label>
            <input
              type="text"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>6. Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>7. Religion:</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>8. Caste:</label>
            <div className="radio-group">
              {['SC', 'ST', 'OBC', 'General'].map(caste => (
                <label key={caste}>
                  <input
                    type="radio"
                    name="caste"
                    value={caste}
                    checked={formData.caste === caste}
                    onChange={handleChange}
                  />
                  {caste}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Siblings Information */}
        <div className="form-row">
          <div className="form-group">
            <label>9. Brother's Name:</label>
            <input
              type="text"
              name="brothers"
              value={formData.brothers}
              onChange={handleChange}
              placeholder="Enter brother's name"
            />
          </div>
          <div className="form-group">
            <label>10. Sister's Name:</label>
            <input
              type="text"
              name="sisters"
              value={formData.sisters}
              onChange={handleChange}
              placeholder="Enter sister's name"
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="address-section">
          <div className="form-group">
            <label>11. Residential Address:</label>
            <textarea
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleChange}
              placeholder="Enter complete residential address"
              rows="3"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Post:</label>
              <input
                type="text"
                name="post"
                value={formData.post}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>District:</label>
              <input
                type="text"
                name="dist"
                value={formData.dist}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>PIN:</label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                maxLength="6"
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="form-row">
          <div className="form-group">
            <label>12. Mother Tongue:</label>
            <input
              type="text"
              name="motherTongue"
              value={formData.motherTongue}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>13. Family Monthly Income:</label>
            <input
              type="text"
              name="familyMonthlyIncome"
              value={formData.familyMonthlyIncome}
              onChange={handleChange}
              placeholder="Enter monthly income"
            />
          </div>
        </div>

        {/* School Information */}
        <div className="form-row">
          <div className="form-group">
            <label>14. School Last Attended:</label>
            <input
              type="text"
              name="lastSchool"
              value={formData.lastSchool}
              onChange={handleChange}
              placeholder="Enter previous school name"
            />
          </div>
          <div className="form-group">
            <label>15. Admission Seeking For:</label>
            <input
              type="text"
              name="admissionFor"
              value={formData.admissionFor}
              onChange={handleChange}
              placeholder="Enter class/grade"
            />
          </div>
        </div>

        <div className="signature-section">
          <div className="form-group">
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherSignature"
              value={formData.fatherSignature}
              onChange={handleChange}
              placeholder="Enter father's name"
              className="signature-input"
            />
          </div>
          <div className="form-group">
            <label>Mother's Name:</label>
            <input
              type="text"
              name="motherSignature"
              value={formData.motherSignature}
              onChange={handleChange}
              placeholder="Enter mother's name"
              className="signature-input"
            />
          </div>
          <div className="form-group">
            <label>Guardian's Name:</label>
            <input
              type="text"
              name="guardianSignature"
              value={formData.guardianSignature}
              onChange={handleChange}
              placeholder="Enter guardian's name"
              className="signature-input"
            />
          </div>
        </div>

        <div className="date-place">
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Place:</label>
            <input
              type="text"
              name="place"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Application;