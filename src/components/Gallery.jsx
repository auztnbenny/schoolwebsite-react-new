import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';
// import Newsletter from '../../Newsletter';
import Footer from './Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/assets/images/gallery-1.jpg',
      title: 'English Classroom'
    },
    {
      id: 2,
      src: '/assets/images/gallery-2.jpg',
      title: 'School Campus'
    },
    {
      id: 3,
      src: '/assets/images/gallery-3.jpg',
      title: 'Science Lab'
    },
    {
      id: 4,
      src: '/assets/images/gallery-4.jpg',
      title: 'Sports Activities'
    },
    {
      id: 5,
      src: '/assets/images/gallery-5.jpg',
      title: 'Art Room'
    },
    {
      id: 6,
      src: '/assets/images/gallery-6.jpg',
      title: 'Computer Lab'
    }
  ];

  const openLightbox = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    setCurrentImageIndex(null);
  }, []);

  const navigateImage = useCallback((direction) => {
    if (currentImageIndex !== null) {
      let newIndex = currentImageIndex + direction;
      
      // Wrap around logic
      if (newIndex < 0) {
        newIndex = galleryImages.length - 1;
      } else if (newIndex >= galleryImages.length) {
        newIndex = 0;
      }

      setSelectedImage(galleryImages[newIndex]);
      setCurrentImageIndex(newIndex);
    }
  }, [currentImageIndex, galleryImages]);

  return (
    <div className="dark-theme">
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Photo Gallery</h1>
        </div>
      </div>
      {/* Inner Heading End */}

      <div className="gallery-wrap innerContent-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="gallery-info">
                <h2 className="gallery-title">Photo Gallery</h2>
                <p className="gallery-description">"In a gallery, memories become timeless, and stories are told without words."</p>
                {/* <button className="view-all-btn">View All Gallery</button> */}
              </div>
            </div>
            
            <div className="col-lg-9">
              <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="gallery-item">
                    <div className="image-wrapper">
                      <img src={image.src} alt={image.title} />
                      <div className="overlay">
                        <button 
                          className="zoom-button"
                          onClick={() => openLightbox(image, index)}
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
          <div className="lightbox" onClick={closeLightbox}>
            <button 
              className="lightbox-nav-button prev-button" 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div 
              className="lightbox-content" 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeLightbox}>
                ×
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="lightbox-title">{selectedImage.title}</div>
            </div>
            
            <button 
              className="lightbox-nav-button next-button" 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>

      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Gallery;