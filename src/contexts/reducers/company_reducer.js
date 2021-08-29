export const DefaultValues = {
  loading: false,
  dataCompany: {},
};
export const CompanyReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_ONE':
      nextState.dataCompany = action.data.data;
      break;

    default:
      break;
  }

  return nextState;
};
