import React from 'react';
import { firebaseApp } from '../firebase';

const Header = () => {
  return (
    <div className="navbar bg-light mb-4">
      <div className="container">
        <div className="navbar-brand mr-auto">TO DO LIST</div>
        <button className="btn btn-link pr-0" onClick={() => firebaseApp.auth().signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;