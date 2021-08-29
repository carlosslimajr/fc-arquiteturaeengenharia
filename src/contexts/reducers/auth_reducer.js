export const AuthReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_ME':
      nextState.me = action.data;
      nextState.token = action.data.token;
      break;
    case 'CLEAR':
      nextState.me = null;
      nextState.token = null;
      break;
    default:
      break;
  }

  return nextState;
};

export default AuthReducer;
