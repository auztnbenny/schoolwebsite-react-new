import React from 'react';
import '../styles/Video.css';

const Video = () => {
  // YouTube Video ID
  const videoId = 'hWRNhkfPZZ4';

  // Construct thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="video-wrap">
      <div className="container">
        <div className="title">
          <h1>Watch Our Video</h1>
        </div>
        <div className="video">
          {/* Video Thumbnail */}
          <img src={thumbnailUrl} alt="Video Thumbnail" />
          {/* Play Button */}
          <div className="playbtn">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
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
