import React from 'react';
import Button from './Button';

const Task = ({ taskData, onCompleteTask, onCancelTask, onToggleTask, onDeleteTask }) => {
  let badgeColor;

  if (taskData.complete) badgeColor = "badge-success";
  else {
    if (Date.now() > taskData.date + 24 * 60 * 60 * 1000) badgeColor = "badge-danger";
    else badgeColor = "badge-primary";
  }

  return (
    <div className="d-flex justify-content-between align-items-center mb-2 dis">
      <div >
        <span className={`badge ${badgeColor} mr-2`}>{new Date(taskData.date).toLocaleDateString()}</span>
        <span>{taskData.name}</span>
      </div>
      <div className="d-flex">
        {
          taskData.complete ? (
            <Button type="primary" onClick={() => onCancelTask(taskData)} />
          ) : (
            <Button type="success" onClick={() => onCompleteTask(taskData)} />
          )
        }
        <Button type="danger" onClick={() => onDeleteTask(taskData.id)} />
      </div>
    </div>
  );
};

export default Task;