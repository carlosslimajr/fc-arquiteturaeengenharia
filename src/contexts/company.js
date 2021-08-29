/* eslint-disable camelcase */
import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import { CompanyReducer, DefaultValues } from './reducers/company_reducer';

export const CompanyContext = createContext(null);

export const CompanyProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(CompanyReducer, DefaultValues);

  const loadOneCompany = useCallback(async token => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/companies', {
        headers: { Authorization: token },
      });

      console.log({ data });

      if (data.success) {
        dispatch({ type: 'SET_ONE', data });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const editCompany = useCallback(async (content = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.put('/companies', content, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Dados alterados com sucesso!');
        await loadOneCompany(token);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  return (
    <CompanyContext.Provider
      value={{ ...dataReducer, loadOneCompany, editCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
