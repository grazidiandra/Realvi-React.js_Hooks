import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Commits from '../Components/Commits';
import Repositories from '../Components/Repositories';

const Router = ({ avatar, repo, error, submitHandler, searchRepos, input }) => {
  return (
  <BrowserRouter>
    <Switch>  
      <Route exact path='/' render={() => <Repositories repo={repo} avatar={avatar} input={input} error={error} submitHandler={submitHandler} searchRepos={searchRepos} />} />
      <Route path='/repos/:value/:name' component={Commits}/>
    </Switch>
  </BrowserRouter>
  )
}

export default Router;
