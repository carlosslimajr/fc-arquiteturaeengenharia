import Router from 'next/router';
import { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const exportData = useCallback(async (idCampaign, params = {}, token) => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/tasks/build-xlsx?campaign_id=${idCampaign}`,
        {
          headers: { Authorization: token },
          params,
        },
      );

      if (data.success) {
        Router.push(data.file);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }

    setLoading(false);
  }, []);

  const sendTestMessage = useCallback(async (content = {}, token) => {
    setLoading(true);
    try {
      const { data } = await api.post('/tasks/send-test-message', content, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Mensagem de teste enviada com sucesso');
        return {
          success: true,
        };
      }
      toast.error(data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    setLoading(false);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        loading,
        exportData,
        sendTestMessage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
