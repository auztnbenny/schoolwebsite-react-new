// import React from 'react';

// const StaffSection = () => {
//   const nonTeachingStaff = [
//     {
//       id: 1,
//       title: 'Administrative Staff',
//       image: '/assets/images/SANJUKTA2.jpg',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       id: 2,
//       title: 'Support Staff',
//       image: '/api/placeholder/400/300',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       id: 3,
//       title: 'Maintenance Staff',
//       image: '/api/placeholder/400/300',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     }
//   ];

//   return (
//     <section className="team-section">
//       <div className="team-container">
//         {/* Teaching Staff Section */}
//         <div className="team-category">
//           <div className="team-header">
//             <span className="team-label">OUR STAFF</span>
//             <h2 className="team-title">Teaching Staff</h2>
//             <p className="team-description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
//             </p>
//           </div>
          
//           <div className="teaching-staff-image">
//             <div className="expert-image-card full-width">
//               <img 
//                 src="/api/placeholder/1200/400" 
//                 alt="Teaching Staff"
//                 className="expert-image"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Non-Teaching Staff Section */}
//         <div className="team-category mt-80">
//           <div className="team-header">
//             <span className="team-label">OUR TEAM</span>
//             <h2 className="team-title">Non-Teaching Staff</h2>
//             <p className="team-description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
//             </p>
//           </div>

//           <div className="experts-grid-full">
//             {nonTeachingStaff.map((staff) => (
//               <div key={staff.id} className="expert-combo-full">
//                 <div className="expert-image-card">
//                   <img 
//                     src={staff.image} 
//                     alt={staff.title}
//                     className="expert-image"
//                   />
//                 </div>
//                 <div className="expert-info-card">
//                   <h3 className="expert-name">{staff.title}</h3>
//                   <p className="expert-description">{staff.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StaffSection;