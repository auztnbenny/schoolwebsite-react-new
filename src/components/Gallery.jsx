import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'src/assets/images/gallery-1.jpg',
      title: 'Gallery Image 1'
    },
    {
      id: 2,
      src: 'src/assets/images/gallery-2.jpg',
      title: 'Gallery Image 2'
    },
    {
      id: 3,
      src: 'src/assets/images/gallery-3.jpg',
      title: 'Gallery Image 3'
    },
    {
      id: 4,
      src: 'src/assets/images/gallery-4.jpg',
      title: 'Gallery Image 4'
    },
    {
      id: 5,
      src: 'src/assets/images/gallery-5.jpg',
      title: 'Gallery Image 5'
    },
    {
      id: 6,
      src: 'src/assets/images/gallery-6.jpg',
      title: 'Gallery Image 6'
    }
  ];

  return (
    <div>
      <div className="video-wrap">
        {/* ...existing code for Watch Our Video section... */}
      </div>
      
      <div className="gallery-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="gallery-info">
                <h1>Photo Gallery</h1>
                <p>"In a photo gallery, memories become timeless, and stories are told without words."</p>
                <button className="view-all">View All Gallery</button>
              </div>
            </div>
            
            <div className="col-lg-9">
              <div className="gallery-grid">
                {galleryImages.map((image) => (
                  <div key={image.id} className="gallery-item">
                    <div className="image-wrapper">
                      <img src={image.src} alt={image.title} />
                      <div className="overlay">
                        <button 
                          className="zoom-button"
                          onClick={() => setSelectedImage(image)}
                        >
                          <FontAwesomeIcon icon={faSearchPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;