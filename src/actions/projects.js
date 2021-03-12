export const addLocalProjects = projectSnapshots => ({
  type: "ADD_PROJECTS",
  projectSnapshots
});

export const addLocalProject = projectSnapshot => ({
  type: "ADD_PROJECT",
  projectSnapshot
});

export const deleteLocalProject = projectId => ({
  type: "DELETE_PROJECT",
  projectId
});

export const updateLocalProject = (projectId, data) => ({
  type: "UPDATE_PROJECT",
  projectId,
  data
});

export const getProjects = userProjectsRef => {
  return async dispatch => {
    try {
      const projectsSnapshot = await userProjectsRef.get();

      return dispatch(addLocalProjects(projectsSnapshot.docs));
    } catch (error) {
      alert(error);
    }
  };
};

export const getProject = projectsRef => {
  return async dispatch => {
    try {
      const projectSnapshot = await projectsRef.get();

      return dispatch(addLocalProject(projectSnapshot));
    } catch (error) {
      alert(error);
    }
  };
};

export const addProject = (userProjectsRef, projectName) => {
  return async dispatch => {
    try {
      const projectRef = await userProjectsRef.add({
        name: projectName,
        tasks: [],
        completeTasks: []
      });

      return dispatch(getProject(projectRef));
    } catch (error) {
      alert(error);
    }
  };
};

export const deleteProject = (userProjectsRef, projectId) => {
  return async dispatch => {
    try {
      await userProjectsRef.doc(projectId).delete();

      return dispatch(deleteLocalProject(projectId));
    } catch (error) {
      alert(error);
    }
  };
};

export const updateProject = (userProjectsRef, projectId, data) => {
  return async dispatch => {
    try {
      await userProjectsRef.doc(projectId).update(data);

      return dispatch(updateLocalProject(projectId, data));
    } catch (error) {
      alert(error);
    }
  };
};