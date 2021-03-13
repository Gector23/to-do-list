import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Project = ({ projectId, projectData, onProjectDelete }) => {
  const { pathname } = useLocation();

  const active = pathname.split("/").includes(projectId);

  return (
    <div className="list-group">
      <div className={`list-group-item list-group-item-action ${active ? "active" : ""} d-flex mb-2 py-1 px-2`}>
        <Link className={`flex-grow-1 text-decoration-none ${active ? "text-white" : ""}`} to={`/app/project/${projectId}`}>
          {projectData.name}
        </Link>
        <Button type="danger" outline={!active} onClick={() => onProjectDelete(projectId)} />
      </div>
    </div>
  );
};

export default Project;