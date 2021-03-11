import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import Menu from './Menu';
import TaskList from '../containers/TaskList';

const Home = ({ currentUser }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Menu uid={currentUser.uid} />
          </div>
          <div className="col">
            <Switch>
              <Route exact path={`${path}/project/:projectId`}>
                <TaskList />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <button className="btn btn-primary d-block mx-auto" onClick={() => firebaseApp.auth().signOut()}>Sign Out</button>
    </>
  );
};

export default Home;