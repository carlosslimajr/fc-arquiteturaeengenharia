export const DefaultValues = {
  loading: false,
  paginateLinks: {},
  listLinks: [],
  dataLink: {},
  allLinks: [],
};

export const LinkReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_LIST':
      nextState.listLinks = action.data.data;
      nextState.paginateLinks = action.data.paginate;
      break;
    case 'SET_ONE':
      nextState.dataLink = action.data.data;
      break;
    case 'SET_ALL':
      nextState.allLinks = action.data;
      break;
    default:
      break;
  }

  return nextState;
};
