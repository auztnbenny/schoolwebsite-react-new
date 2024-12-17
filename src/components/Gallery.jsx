import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  const slides = images.map(src => ({ src }));

  return (
    <div className="gallery-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="gallery_box">
              <div className="gallery_left">
                <div className="title">
                  <h1>Photo Gallery</h1>
                </div>
                <p>"In a photo gallery, memories become timeless, and stories are told without words."</p>
                <div className="readmore">
                  <a href="https://www.arnoldschoolsalajpur.in/Albums/Photos.html">View All Gallery</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {images.map((img, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="galleryImg">
                    <img 
                      src={img} 
                      alt={`Gallery ${idx + 1}`}
                      onClick={() => {
                        setIndex(idx);
                        setOpen(true);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}

export default Gallery;