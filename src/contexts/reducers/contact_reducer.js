export const DefaultValue = {
  loading: false,
  paginateContact: {},
  listContacts: [],
  campaignName: '',
};

export const ContactReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_LIST':
      nextState.listContacts = action.data.data.reportsData;
      nextState.paginateContact = action.data.paginate;
      nextState.campaignName = action.data.data.campaignName;
      break;

    default:
      break;
  }

  return nextState;
};
