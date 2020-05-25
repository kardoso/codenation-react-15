import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [fetchedUsers, setFetchedUsers] = useState(0);

  // Get users
  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => { setUsers(data); });
  }, []);

  // Get stories
  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((res) => res.json())
      .then(data => {
        setStories(data);
      });
  }, [users]);

  // Get Posts
  useEffect(() => {
    if (fetchedUsers === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[fetchedUsers].id}/posts`)
      .then((res) => res.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setFetchedUsers(fetchedUsers + 1);
      });
  }, [users, fetchedUsers]);


  return (
    <div data-testid="feed-route">
      {stories.length > 0 &&
        <Stories stories={stories} getUserHandler={(userId) => users.find(user => userId === user.id)} />
      }

      {users.length === fetchedUsers ?
        <Posts posts={posts} getUserHandler={(userId) => users.find(user => userId === user.id)} />
        :
        <Loading />
      }
    </div>
  );
};

export default FeedRoute;
