import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { DefaultValues, UserReducer } from './reducers/user_reducer';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(UserReducer, DefaultValues);

  const loadListUsers = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/users/list-by-company', {
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

  const createUser = useCallback(async (params = {}) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post('/users', params);

      if (data.success) {
        toast.success('Conta criada com sucesso!');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const loadOneUser = useCallback(async (id, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    dispatch({ type: 'SET_ONE', data: {} });
    try {
      const { data } = await api.get(`/users/${id}`, {
        headers: { Authorization: token },
      });

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

  const editUser = useCallback(async (id, content = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.put(`/users/${id}`, content, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Atualizado com sucesso!');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const removeUser = useCallback(async (id, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.delete(`/users/${id}`, {
        headers: { Authorization: token },
      });

      if (data.success) {
        dispatch({ type: 'REMOVE_ITEM', id });
        toast.success('Excluído com sucesso!');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const forgotPassword = useCallback(async email => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post('/users/forgot-password', {
        email,
      });

      if (data.success) {
        toast.success('Um email de recuperação foi enviado!');
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
    <UserContext.Provider
      value={{
        ...dataReducer,
        loadListUsers,
        createUser,
        loadOneUser,
        editUser,
        removeUser,
        forgotPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
