const initialState = {
  isFetching: true
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_CHANGE":
      return {
        isFetching: false,
        user: action.user
      };
    default:
      return state;
  }
}

export default auth;