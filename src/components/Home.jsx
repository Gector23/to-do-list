import React from 'react';
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import Menu from './Menu';
import Today from '../containers/Today';
import ProjectTasks from '../containers/ProjectTasks';

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
                  <Route exact path={path}>
                    <Redirect to={`${path}/today`} />
                  </Route>
                  <Route exact path={`${path}/today`}>
                    <Today uid={currentUser.uid} />
                  </Route>
                  <Route exact path={`${path}/project/:projectId`}>
                    <ProjectTasks uid={currentUser.uid} />
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