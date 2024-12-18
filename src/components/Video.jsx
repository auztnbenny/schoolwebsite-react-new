import React from 'react';
import '../styles/Video.css';

const Video = () => {
  return (
    <div className="video-wrap">
      <div className="container">
        <div className="title center_title">
          <h1>Watch Our Video</h1>
        </div>
        
        <div className="video">
          <div className="playbtn">
            <a 
              href="https://www.youtube.com/watch?v=hWRNhkfPZZ4"
              data-fancybox=""
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;