export const DefaultValues = {
  loading: false,
  paginateUser: {},
  listUsers: [],
  dataUser: {},
  allUsers: [],
};
export const UserReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_LIST':
      nextState.listUsers = action.data.data;
      nextState.paginateUser = action.data.paginate;
      break;
    case 'SET_ONE':
      nextState.dataUser = action.data.data;
      break;
    case 'SET_ALL':
      nextState.allUsers = action.data;
      break;
    case 'REMOVE_ITEM':
      nextState.listUsers = nextState.listUsers.filter(item => {
        return item.id === action.id;
      });
      break;

    default:
      break;
  }

  return nextState;
};
