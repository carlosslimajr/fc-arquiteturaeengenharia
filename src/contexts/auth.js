import Router from 'next/router';
import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';
import api from '../services/api';
import { AuthReducer } from './reducers/auth_reducer';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const getToken = useCallback(() => {
    const token = Cookie.get('TOKEN');
    return token;
  }, []);

  const [authData, dispatch] = useReducer(AuthReducer, {
    loading: false,
    me: null,
    token: getToken(),
  });

  const login = useCallback(async (content = {}) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post('/users/login', content);
      if (data.success) {
        dispatch({ type: 'SET_ME', data });
        const companyData = await api.get('/companies', {
          headers: { Authorization: data.data.token },
        });
        Cookie.set('TOKEN', JSON.stringify(data.data.token), {
          secure: true,
          expires: 1,
        });
        if (companyData) {
          Cookie.set('INFO', JSON.stringify(companyData.data.data), {
            secure: true,
            expires: 1,
          });
        }
        Router.push('/home');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const logout = useCallback(async () => {
    Cookie.remove('TOKEN');
    Cookie.remove('INFO');
    dispatch({ type: 'CLEAR' });
    Router.push('/login');
  }, []);

  const verifyToken = useCallback(
    async myToken => {
      dispatch({ type: 'SET_LOADING', loading: true });

      try {
        const { data } = await api.post('/users/verify-token', {
          token: myToken,
        });

        if (data.success) {
          dispatch({ type: 'SET_ME', data });
        } else {
          if (data.message) {
            console.log(data.message);
          }
          logout();
        }
      } catch (err) {
        logout();
      }
      dispatch({ type: 'SET_LOADING', loading: false });
    },
    [logout],
  );

  return (
    <AuthContext.Provider
      value={{
        ...authData,
        login,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
