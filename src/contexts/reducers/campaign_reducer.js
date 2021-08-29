export const DefaultValues = {
  loading: false,
  paginateCampaign: {},
  listCampaigns: [],
  dataCampaign: {},
  allCampaigns: [],
};
export const CampaignReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_LIST':
      nextState.listCampaigns = action.data.data;
      nextState.paginateCampaign = action.data.paginate;
      break;
    case 'SET_ONE':
      nextState.dataCampaign = action.data.data;
      break;
    case 'SET_ALL':
      nextState.allCampaigns = action.data;
      break;
    case 'REMOVE_ITEM':
      nextState.listCampaigns = nextState.listCampaigns.filter(item => {
        return item.id === action.id;
      });
      break;

    default:
      break;
  }

  return nextState;
};
