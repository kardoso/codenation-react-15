import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = (props) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let username = (props.match.params.username);
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${username}`)
      .then(res => res.json())
      .then(data => setUser(data[0]));
  }, []);

  useEffect(() => {
    user &&
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err));
  }, [user]);

  return (
    <div data-testid="profile-route">
      {user ? (
        <div>
          <UserProfile avatar={user.avatar} name={user.name} username={user.username} />
          <UserPosts posts={posts} />
        </div>
      ) :
        (<Loading />)
      }
    </div>
  );
};

export default ProfileRoute;
