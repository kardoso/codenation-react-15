import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <article className="post" data-testid="post">
      <div className="post__header">
        <div className="user">
          <Link to={`/user/${userInfo.id}`} className="user__thumb">
            <img src={userInfo.avatar} alt="" />
          </Link>

          <Link to={`/user/${userInfo.id}`} className="user__name">
            {userInfo.name}
          </Link>
        </div>
        <button className="post__context" onClick={() => setIsFollowing(!isFollowing)}>
          <span className={'follow-btn' + (isFollowing ? " is-following" : "")}>
            {isFollowing ? "Seguindo" : "Seguir"}
          </span>
        </button>
      </div>
      <div className="post__figure">
        <img src={postInfo.imageUrl} alt={postInfo.id} />
      </div>
      <nav className="post__controls">
        <button className="post__control" onClick={() => setLiked(!liked)}>
          <i className={(liked ? "fas" : "far") + " fa-heart"}></i>
        </button>
        <div className="post__status">
          <div className="user">
            <span>curtido por <Link to="/">
              {postInfo.comments[0].name}
            </Link> e mais <Link to="/">{postInfo.comments.length + (liked ? 1 : 0)} pessoas</Link>.</span>
          </div>
        </div>
      </nav>
    </article >
  );
};

export default Post;
