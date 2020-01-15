import React, { useState, useEffect } from 'react';
// import { userParams } from 'react-router';
import api from '../../service/Api';
import Search from '../SearchCommits';
import { ContainerCommits, ListCommits, StyledLink, Alert } from './style';


const Commits = (props) => {
  const [commits, setCommits] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  // const { value, name } = useParams();
  
  useEffect(() => {
    const { value, name } = props.match.params;
    api.get(`/repos/${value}/${name}/commits`)
    .then(response => {
        setCommits(response.data)
    })
    .catch(() => setError('No commits'))
  }, [props.match.params])

  const searchCommits = e => {
    let { value } = e.target;
    setInput(value)
  }

  const setCommit = value => {
    const commitsCopy = [...commits];
    return commitsCopy.filter(e => e.commit.message.toLowerCase().includes(value.toLowerCase()))
  }

  return (
    <ContainerCommits className='commits-conatiner'>
      <Search placeholder={'Search Commit'} method={searchCommits} value={input}/>
      <ListCommits className='commits-list'>
      <Alert>{error}</Alert> 
        {setCommit(input).slice(0, 20).map((e, idx) => <li key={idx}>{e.commit.message}</li>)}
      </ListCommits>
      <StyledLink  to='/' className='commits-btn'>BACK TO PROFILE</StyledLink>
    </ContainerCommits>
  );
}

export default Commits;
