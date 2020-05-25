import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const handleOpenStory = (story) => {
    const foundStory = stories.find(foundStory => foundStory.id === story.id);
    const profileData = getUserHandler(story.userId);

    setSelectedProfile(profileData);
    setSelectedHistory(foundStory);
    toggleShowStory(!showStory);
  };

  const handleCloseStory = () => {
    toggleShowStory(!showStory);
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map(story => {
              const profileData = getUserHandler(story.userId);

              return (
                <button
                  key={story.id}
                  className={`user__thumb ${story.id == 1 && 'user__thumb--hasNew'}`}
                  onClick={() => handleOpenStory(story)}
                >
                  <div className="user__thumb__wrapper">
                    <img src={profileData?.avatar || 'https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png'} alt={profileData?.name} />
                  </div>
                </button>
              );
            })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={handleCloseStory}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
