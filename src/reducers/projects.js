const projects = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PROJECTS":
      return {
        ...Object.fromEntries(action.projectSnapshots.map(projectSnapshot => [projectSnapshot.id, projectSnapshot.data()]))
      };
    case "ADD_PROJECT":
      return {
        ...JSON.parse(JSON.stringify(state)),
          [action.projectSnapshot.id]: action.projectSnapshot.data()
      };
    case "DELETE_PROJECT":
      return {
        ...Object.fromEntries(Object.entries(state).filter(([projectId]) => projectId !== action.projectId))
      };
    case "UPDATE_PROJECT":
      return {
        ...JSON.parse(JSON.stringify(state)),
          [action.projectId]: {
            ...state[action.projectId],
            ...action.data
          }
      };
    default:
      return state;
  }
}

export default projects;