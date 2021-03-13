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
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-7 col-md-5 m-auto text-center">
              <form onSubmit={handleSignIn}>
                <input className="form-control mb-3" name="email" type="email" placeholder="Email" />
                <input className="form-control mb-3" name="password" type="password" placeholder="Password" />
                <button className="btn btn-primary" type="submit">Sing In</button>
              </form>
              <Link className="btn btn-link" to="sign-up" replace >Sign Up</Link>
            </div>
          </div>
        </div>
      )
  );
};

export default SignIn;