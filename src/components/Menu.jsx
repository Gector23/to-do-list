import React from 'react';
import Links from './Links';
import Projects from '../containers/Projects';

const Menu = ({ uid }) => {
  return (
    <aside>
      <Links />
      <Projects uid={uid} />
    </aside>
  );
};

export default Menu;