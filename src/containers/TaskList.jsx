import React from 'react';
import { useParams } from 'react-router-dom';

const TaskList = () => {
  const { projectId } = useParams();
  
  console.log(projectId);

  return (
    null
  );
};

export default TaskList;