import React from 'react';
import { firebaseApp } from '../firebase';

const Home = () => {
  return <button onClick={() => firebaseApp.auth().signOut()}>Sign Out</button>;
};

export default Home;