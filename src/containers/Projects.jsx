import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects, addProject, deleteProject } from '../actions/projects';
import { firestore } from '../firebase';
import Project from '../components/Project';

const Projects = ({ uid, projects, getProjects, addProject, deleteProject }) => {
  useEffect(() => {
    getProjects(firestore.collection("users").doc(uid).collection("projects"));
  }, [uid, getProjects]);

  const handleAddProject = event => {
    event.preventDefault();

    const { name } = event.target.elements;

    addProject(firestore.collection("users").doc(uid).collection("projects"), name.value);

    event.target.reset();
  };

  const handleDeleteProject = projectId => {
    deleteProject(firestore.collection("users").doc(uid).collection("projects"), projectId);
  };

  return (
    <div className="mb-3">
      <form className="mb-3" onSubmit={handleAddProject}>
        <div className="input-group input-group-sm">
          <input className="form-control" type="text" name="name" placeholder="Project name" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </div>
      </form>
      <div>
        {
          Object.entries(projects).map(([projectId, projectData]) => (
            <Project key={projectId} projectId={projectId} projectData={projectData} onProjectDelete={handleDeleteProject} />
          ))
        }
      </div>
    </div>

  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  getProjects,
  addProject,
  deleteProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);