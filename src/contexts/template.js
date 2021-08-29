import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { DefaultValues, TemplateReducer } from './reducers/template_reducer';

export const TemplateContext = createContext(null);

export const TemplateProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(TemplateReducer, DefaultValues);

  const loadListTemplates = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/templates', {
        headers: { Authorization: token },
        params: { ...params, status: 'approved' },
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

  const createTemplate = useCallback(async (content = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post('/templates', content, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Campanha criada com sucesso!');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const loadOneTemplate = useCallback(async (id, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get(`/templates/${id}`, {
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

  const editTemplate = useCallback(async (id, content = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: false });
    try {
      const { data } = await api.put(`/templates/${id}`, content, {
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
    dispatch({ type: 'SET_LOADING', loading: true });
  }, []);

  const removeTemplate = useCallback(async (id, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.delete(`/templates/${id}`, {
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

  const getTemplatesTwilio = useCallback(async token => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/templates/get-twilio-templates', {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Sincronizado com sucesso!');
        loadListTemplates({}, token);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    dispatch({ type: 'SET_LOADING', loading: false });
  });

  return (
    <TemplateContext.Provider
      value={{
        ...dataReducer,
        loadListTemplates,
        createTemplate,
        loadOneTemplate,
        editTemplate,
        removeTemplate,
        getTemplatesTwilio,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
