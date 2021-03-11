import React from 'react';
import { useHistory } from 'react-router-dom';

const Project = ({ projectId, projectData, onProjectDelete }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/app/project/${projectId}`);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span className="flex-grow-1" onClick={handleClick}>{projectData.name}</span>
      <button type="button" className="btn btn-sm btn-outline-danger d-flex align-items-center" onClick={() => onProjectDelete(projectId)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
};

export default Project;