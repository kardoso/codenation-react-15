import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container">
    <section className="feed">
      {posts.map((post) => (
        <Post
          postInfo={post}
          userInfo={getUserHandler(post.userId)}
          key={post.id}
        />
      ))
      }
    </section>
  </div>
);

export default Posts;
