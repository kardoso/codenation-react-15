import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile">
      <article className="profile-data">
        <div className="user">
          <img className="user__thumb" src={avatar} alt={username} />
          <p className="user__name">
            {name}<span>@{username}</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default UserProfile;
