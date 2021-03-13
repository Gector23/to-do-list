import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Links = () => {
  const { pathname } = useLocation();

  const active = pathname.split("/").includes("today");

  return (
    <div className="list-group mb-3">
      <Link className={`list-group-item list-group-item-action ${active ? "active text-white" : "text-primary"} py-1 px-2`} to="/app/today">Today</Link>
    </div>
  );
};

export default Links;