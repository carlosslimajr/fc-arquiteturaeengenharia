import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import Router from 'next/router';
import api from '../services/api';
import { DefaultValues, CampaignReducer } from './reducers/campaign_reducer';

export const CampaignContext = createContext(null);

export const CampaignProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(CampaignReducer, DefaultValues);

  const loadListCampaigns = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/campaigns', {
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

  const createCampaign = useCallback(async (content = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post('/campaigns', content, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Campanha criada com sucesso!');
        Router.push('/campaigns');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const loadOneCampaign = useCallback(async (id, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get(`/campaigns/${id}`, {
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

  const editCampaign = useCallback(async (id, content = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.put(`/campaigns/${id}`, content, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Atualizado com sucesso!');
        Router.push('/campaigns');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const removeCampaign = useCallback(async (id, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.delete(`/campaigns/${id}`, {
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

  return (
    <CampaignContext.Provider
      value={{
        ...dataReducer,
        loadListCampaigns,
        createCampaign,
        loadOneCampaign,
        editCampaign,
        removeCampaign,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
