export const DefaultValues = {
  loading: false,
  paginateTemplate: {},
  listTemplates: [],
  dataTemplate: {},
  allTemplates: [],
};
export const TemplateReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_LIST':
      nextState.listTemplates = action.data.data;
      nextState.paginateTemplate = action.data.paginate;
      break;
    case 'SET_ONE':
      nextState.dataTemplate = action.data.data;
      break;
    case 'SET_ALL':
      nextState.allTemplates = action.data;
      break;
    case 'REMOVE_ITEM':
      nextState.listTemplates = nextState.listTemplates.filter(item => {
        return item.id === action.id;
      });
      break;

    default:
      break;
  }

  return nextState;
};
