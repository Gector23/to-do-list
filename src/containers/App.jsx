import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authChange } from '../actions/auth';
import { Route, Switch, Redirect } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import SingUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import PrivatRoute from './PrivatRoute';

const App = ({ auth, authChange }) => {
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      authChange(user);
    });
  }, [authChange]);

  return (
    auth.isFetching ?
      (
        <span>Loading...</span>
      ) : (
        <Switch>
          <Route exact path="/sign-in">
            <SignIn currentUser={auth.user} />
          </Route>
          <Route exact path="/sign-up">
            <SingUp currentUser={auth.user} />
          </Route>
          <PrivatRoute path="/app">
            <Home currentUser={auth.user} />
          </PrivatRoute>
          <Route exact path="/">
            <Redirect to={`/app`} />
          </Route>
        </Switch>
      )
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  authChange
};

export default connect(mapStateToProps, mapDispatchToProps)(App);