import React, { useState } from 'react';
import api from '../../service/Api';
import Header from '../Header';
import Router from '../../Router/Router';

const Home = () => {
  const [repo, setRepo] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    api.get(`/users/${input}/repos`)
    .then(response => {
      setRepo(response.data);
      setAvatar(response.data[0].owner);
      setError('');
    })
    .catch(() => setError('User not found!'));
  }

  const searchRepos = e => {
    let { value } = e.target;
    setInput(value)
  }

  return (
    <div>
      <Header />
      <Router repo={repo} avatar={avatar} input={input} error={error} submitHandler={submitHandler} searchRepos={searchRepos} />
    </div>
  );
}



export default Home;