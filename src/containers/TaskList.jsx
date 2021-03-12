import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from '../actions/projects';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import CreateTask from '../components/CreateTask';
import Task from '../components/Task';

const TaskList = ({ uid, projects, updateProject }) => {
  const { projectId } = useParams();

  const currentProject = projects[projectId];

  const handleAddTask = taskData => {
    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, {
      tasks: [
        ...currentProject.tasks,
        taskData
      ]
    });
  };

  const handleCompleteTask = taskData => {
    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, {
      tasks: currentProject.tasks.filter(task => task.id !== taskData.id),
      completeTasks: [
        ...JSON.parse(JSON.stringify(currentProject.completeTasks)),
        {
          ...taskData,
          complete: true
        }
      ]
    });
  };

  const handleCancelTask = taskData => {
    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, {
      tasks: [
        ...JSON.parse(JSON.stringify(currentProject.tasks)),
        {
          ...taskData,
          complete: false
        }
      ],
      completeTasks: currentProject.completeTasks.filter(task => task.id !== taskData.id)
    });
  };

  const handleDeleteTask = taskId => {
    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, {
      tasks: currentProject.tasks.filter(task => task.id !== taskId)
    });
  };

  return (
    !currentProject ? (
      <div className="text-primary text-center">Project not found</div>
    ) : (
      <>
        <CreateTask projectId={projectId} onAddTask={handleAddTask} />
        {
          JSON.parse(JSON.stringify(currentProject.tasks)).sort((a, b) => a.date - b.date).map(task => (
            <Task key={task.id} taskData={task} onCompleteTask={handleCompleteTask} onCancelTask={handleCancelTask} onDeleteTask={handleDeleteTask} />
          ))
        }
        {
          !currentProject.completeTasks.length ? null : (
            <>
              <div className="text-primary text-center">Completed tasks</div>
              {JSON.parse(JSON.stringify(currentProject.completeTasks)).sort((a, b) => a.date - b.date).map(task => (
                <Task key={task.id} taskData={task} onCompleteTask={handleCompleteTask} onCancelTask={handleCancelTask} onDeleteTask={handleDeleteTask} />
              ))}
            </>
          )
        }
      </>
    )
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  updateProject
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);