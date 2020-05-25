import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <article className="profile-data">
        <div className="user">
          <img className="user__thumb" src={avatar || 'https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png'} alt={username} />
          <p className="user__name">
            {name}<span>@{username}</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default UserProfile;
