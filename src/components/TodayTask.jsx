import React from 'react';
import Button from './Button';

const TodayTask = ({ task, onCompleteTask, onCancelTask, onDeleteTask }) => {
  let dateBadgeColor;

  if (task.taskData.complete) dateBadgeColor = "badge-success";
  else dateBadgeColor = "badge-primary";

  return (
    <div className="d-flex justify-content-between align-items-center mb-2 dis">
      <div >
        <span className={`badge ${dateBadgeColor} mr-2`}>{new Date(task.taskData.date).toLocaleDateString()}</span>
        <span className={"badge badge-info mr-2"}>{task.projectName}</span>
        <span>{task.taskData.name}</span>
      </div>
      <div className="d-flex">
        {
          task.taskData.complete ? (
            <Button type="primary" onClick={() => onCancelTask(task.projectId, task.taskData)} />
          ) : (
            <Button type="success" onClick={() => onCompleteTask(task.projectId, task.taskData)} />
          )
        }
        <Button type="danger" onClick={() => onDeleteTask(task.projectId, task.taskData)} />
      </div>
    </div>
  );
};

export default TodayTask;