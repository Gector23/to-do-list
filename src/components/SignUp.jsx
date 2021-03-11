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
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-8 col-md-6 m-auto text-center">
              <form onSubmit={handleSignUp}>
                <input className="form-control mb-3" name="email" type="email" placeholder="Email" />
                <input className="form-control mb-3" name="password" type="password" placeholder="Password" />
                <button className="btn btn-primary" type="submit">Sing Up</button>
              </form>
              <Link className="btn btn-link" to="sign-in" replace >Sign In</Link>
            </div>
          </div>
        </div>
      )
  );
};

export default SignUp;