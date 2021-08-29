export const DefaultValues = {
  loading: false,
  chatsData: [],
  conversationsData: [],
};
export const ChatsReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_ALL_CHATS':
      nextState.chatsData = action.data.data;
      break;
    case 'SET_ALL_CONVERSATIONS':
      nextState.conversationsData = action.data.data;
      break;

    default:
      break;
  }

  return nextState;
};
