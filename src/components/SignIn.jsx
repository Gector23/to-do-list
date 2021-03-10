import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

const SignIn = ({ currentUser }) => {
  const handleSignIn = async event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  return (
    currentUser ?
      (
        <Redirect to={"/app"} />
      ) : (
        <>
          <form onSubmit={handleSignIn}>
            <input name="email" type="email" />
            <input name="password" type="password" />
            <button type="submit">Sing In</button>
          </form>
          <Link to="sign-up" replace >Sign Up</Link>
        </>
      )
  );
};

export default SignIn;