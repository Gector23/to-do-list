import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import Menu from './Menu';
import TaskList from '../containers/TaskList';

const Home = ({ currentUser }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-4 col-lg-3">
            <Menu uid={currentUser.uid} />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-md-10 mx-md-auto">
                <Switch>
                  <Route exact path={`${path}/project/:projectId`}>
                    <TaskList uid={currentUser.uid} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary d-block mx-auto" onClick={() => firebaseApp.auth().signOut()}>Sign Out</button>
    </>
  );
};

export default Home;