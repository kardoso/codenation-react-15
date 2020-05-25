import React, { useCallback, useState } from "react";

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [videoCurrentTime, setVideoCurrentTime] = useState(null);

  const updateProgress = useCallback(() => {
    if (metadata?.duration !== null && videoCurrentTime !== null) {
      const elapsedTime = ((videoCurrentTime / metadata.duration) * 100);

      return `${elapsedTime.toFixed(2)}%`;
    }

    return '0%';
  }, [metadata, videoCurrentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <div className="story__header">
          <div className="user">
            <img src={user?.avatar || 'https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png'}
              className="user__thumb" alt={user?.username || "userPhoto"} />
            <div className="user__name">
              <span>{user?.name}</span>
            </div>
          </div>
          <button onClick={handleClose} className="story__close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="story__progress">
          <div style={{ width: updateProgress() }} className="story__progress__elapsed"></div>
        </div>
        <div className="story__video__wrapper">
          <video
            className="video-player"
            src={story.videoUrl}
            autoPlay
            loop
            playsInline
            onTimeUpdate={e => setVideoCurrentTime(e.target.currentTime)}
            onLoadedMetadata={e => {
              setMetadata({
                duration: e.target.duration,
                videoHeight: e.target.videoHeight,
                videoWidth: e.target.videoWidth
              });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
