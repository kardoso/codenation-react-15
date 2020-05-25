import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('Nicky');
  const [username, setUsername] = useState('nickys');
  const [email, setEmail] = useState('nicky@gmail.com');
  const [imageUrl, setImageUrl] = useState('');
  const [submited, setSubmited] = useState(false);

  const handleSubmit = () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name,
          avatar: imageUrl,
          username,
          email
        }
      )
    }).then(setSubmited(true)).catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <section className="profile">
        <article className="profile-data">
          <div className="user">
            <img
              className="user__thumb"
              src={imageUrl === '' ? 'https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png' : imageUrl}
              alt={username} />
            <p className="user__name">
              {name}<span>@{username}</span>
            </p>
          </div>
        </article>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label >
              Nome:
              <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label >
              Usuário:
              <input type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </label>
            <label >
              Email:
              <input type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label >
              Url da Imagem de Perfil:
              <input type="text"
                placeholder="https://..."
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
            </label>
            <button onClick={handleSubmit}>Cadastrar</button>
          </div>
        </div>
      </section>

      {submited && (<SuccessMessage />)}
    </React.Fragment>
  );
};

export default UserForm;
