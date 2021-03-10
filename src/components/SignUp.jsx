import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

const SignUp = ({ currentUser }) => {
  const handleSignUp = async event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
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
          <form onSubmit={handleSignUp}>
            <input name="email" type="email" />
            <input name="password" type="password" />
            <button type="submit">Sing Up</button>
          </form>
          <Link to="sign-in" replace >Sign In</Link>
        </>
      )
  );
};

export default SignUp;