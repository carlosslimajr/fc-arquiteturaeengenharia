import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { DefaultValues, StatisticReducer } from './reducers/statistict_reducer';

export const StatisticContext = createContext(null);

export const StatisticProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(StatisticReducer, DefaultValues);

  const loadAllStatistic = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/reports/view', {
        headers: { Authorization: token },
      });

      if (data.success) {
        dispatch({ type: 'SET_ALL', data });
      }
    } catch (err) {
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  return (
    <StatisticContext.Provider
      value={{
        ...dataReducer,
        loadAllStatistic,
      }}
    >
      {children}
    </StatisticContext.Provider>
  );
};
