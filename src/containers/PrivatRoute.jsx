import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivatRoute = ({ currentUser, children, ...rest }) => {
  return <Route {...rest} render={() => !!currentUser ? (children) : (<Redirect to="/sign-in" />)} />;
};

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

export default connect(mapStateToProps)(PrivatRoute);