import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from '../actions/projects';
import { firestore } from '../firebase';
import TodayTask from '../components/TodayTask';

const Today = ({ uid, projects, updateProject }) => {

  const handleCompleteTask = (projectId, taskData) => {
    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, {
      tasks: projects[projectId].tasks.filter(task => task.id !== taskData.id),
      completeTasks: [
        ...JSON.parse(JSON.stringify(projects[projectId].completeTasks)),
        {
          ...taskData,
          complete: true
        }
      ]
    });
  };

  const handleCancelTask = (projectId, taskData) => {
    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, {
      tasks: [
        ...JSON.parse(JSON.stringify(projects[projectId].tasks)),
        {
          ...taskData,
          complete: false
        }
      ],
      completeTasks: projects[projectId].completeTasks.filter(task => task.id !== taskData.id)
    });
  };

  const handleDeleteTask = (projectId, taskData) => {
    let update = taskData.complete ? {
      completeTasks: projects[projectId].completeTasks.filter(task => task.id !== taskData.id)
    } : {
      tasks: projects[projectId].tasks.filter(task => task.id !== taskData.id)
    };

    updateProject(firestore.collection("users").doc(uid).collection("projects"), projectId, update);
  };

  const tasks = Object.entries(projects).reduce((tasks, [projectId, projectData]) => (
    [
      ...tasks,
      ...projectData.tasks.map(task => ({
        projectId,
        projectName: projectData.name,
        taskData: task
      })).filter(task => new Date(task.taskData.date - 24 * 60 * 60 * 1000) < new Date(task.taskData.date) && new Date(task.taskData.date + 24 * 60 * 60 * 1000) > new Date(task.taskData.date))
    ]
  ), []);

  const completeTasks = Object.entries(projects).reduce((completeTasks, [projectId, projectData]) => (
    [
      ...completeTasks,
      ...projectData.completeTasks.map(completeTask => ({
        projectId,
        projectName: projectData.name,
        taskData: completeTask
      })).filter(task => new Date(task.taskData.date - 24 * 60 * 60 * 1000) < new Date(task.taskData.date) && new Date(task.taskData.date + 24 * 60 * 60 * 1000) > new Date(task.taskData.date))
    ]
  ), []);

  return (
    <>
      <h4 className="mb-3">Today</h4>
      {
        JSON.parse(JSON.stringify(tasks)).sort((a, b) => a.taskData.date - b.taskData.date).map(task => (
          <TodayTask key={task.taskData.id} task={task} onCompleteTask={handleCompleteTask} onCancelTask={handleCancelTask} onDeleteTask={handleDeleteTask} />
        ))
      }
      {
        !completeTasks.length ? null : (
          <>
            <div className="text-primary text-center">Completed tasks</div>
            {JSON.parse(JSON.stringify(completeTasks)).sort((a, b) => a.taskData.date - b.taskData.date).map(task => (
              <TodayTask key={task.taskData.id} task={task} onCompleteTask={handleCompleteTask} onCancelTask={handleCancelTask} onDeleteTask={handleDeleteTask} />
            ))}
          </>
        )
      }
    </>
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  updateProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);