import React from 'react';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list">
      {users?.map(user => (
        <article className="post">
          <header className="post__header">
            <Link to={`/user/${user.id}`} className="user">
              <div className="user__thumb">
                <img src={user.avatar} />
              </div>
              <div className="user__name">
                {user.name}
              </div>
            </Link>
          </header>
        </article>
      ))}
    </section>
  );
};

export default UersList;
