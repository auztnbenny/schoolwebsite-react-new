import '../styles/Teachers.css';

const Staffs = () => {
  const teachingExperts = [
    {
      id: 1,
      name: 'SANJUKTA',
      position: 'CEO Reactive',
      image: '/assets/images/Teachingstaffs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const nonTeachingExperts = [
    {
      id: 1,
      name: 'Our Drivers',
      position: '',
      image: 'assets/images/Driversgroup.jpg',
    },
    {
      id: 2,
      name: 'Our Office Staff',
      position: '',
      image: '/assets/images/Officestaff.jpg',
    },
    {
      id: 3,
      name: 'Our Supporting Staff',
      position: '',
      image: '/assets/images/SupportingStaff.jpg',
    },
  ];

  return (
    <section className="team-section">
      {/* Teaching Staff Section */}
      <div className="team-container">
        <div className="team-header">
          <span className="team-label">OUR TEAM</span>
          <h2 className="team-title">Teaching Staffs</h2>
        </div>
        <div className="experts-grid">
          {teachingExperts.map((expert) => (
            <div key={expert.id} className="expert-combo">
              <div className="expert-image-card">
                <img src={expert.image} alt={expert.name} className="expert-image"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Teaching Staff Section */}
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Non Teaching Staffs</h2>
        </div>
        <div className="non-teaching-grid">
          {nonTeachingExperts.map((expert) => (
            <div key={expert.id} className="expert-combo">
              <div className="expert-image-card non-teaching-card">
                <img src={expert.image} alt={expert.name} className="expert-image"/>
                <div className="staff-info">
                  <h3>{expert.name}</h3>
                  <p>{expert.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staffs;