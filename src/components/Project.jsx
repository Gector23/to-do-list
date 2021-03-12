import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const Project = ({ projectId, projectData, onProjectDelete }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/app/project/${projectId}`);
  };

  return (
    <div className="d-flex mb-2">
      <div className="flex-grow-1" onClick={handleClick}>
        <span>{projectData.name}</span>
      </div>
      <Button type="danger" onClick={() => onProjectDelete(projectId)} />
    </div>
  );
};

export default Project;