import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import { DefaultValues, LinkReducer } from './reducers/link_reducer';

export const LinkContext = createContext(null);

export const LinkProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(LinkReducer, DefaultValues);

  const loadListLinks = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/shorted', {
        headers: { Authorization: token },
        params,
      });

      if (data.success) {
        dispatch({ type: 'SET_LIST', data });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const editLink = useCallback(async (id, urlCode = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.put(`/shorted/${id}`, urlCode, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Link atualizado com sucesso!');
        return { success: true };
      }
      toast.error(data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.message0);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  return (
    <LinkContext.Provider
      value={{
        ...dataReducer,
        loadListLinks,
        editLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
