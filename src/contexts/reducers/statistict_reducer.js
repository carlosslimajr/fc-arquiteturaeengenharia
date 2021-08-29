export const DefaultValues = {
  loading: false,
  dataStatistic: {},
};
export const StatisticReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_ALL':
      nextState.dataStatistic = action.data.data;
      break;

    default:
      break;
  }

  return nextState;
};
