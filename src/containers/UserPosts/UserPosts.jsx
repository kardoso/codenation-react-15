import React from 'react';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    {posts?.length > 0 ?
      (<section className="user-posts">
        {posts.map(post => (
          <article key={post.id} className="post">
            <img className="post__figure" src={post.imageUrl} alt={post.id} />
          </article>
        ))
        }
      </section>)
      :
      (<div className="no-posts">
        <span className="no-posts__content">
          Este usuário ainda não publicou nada
        </span>
        <span className="no-posts__emoji" role="img" aria-label="sad-emoji">
          🙁
        </span>
      </div>)
    }
  </div >
);

export default UserPosts;
