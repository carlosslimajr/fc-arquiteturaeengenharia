import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { DefaultValues, ChatsReducer } from './reducers/chats_reducer';

export const ChatsContext = createContext(null);

export const ChatsProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(ChatsReducer, DefaultValues);

  const loadAllChats = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get('/whats-message-groups', {
        headers: { Authorization: token },
      });

      if (data.success) {
        dispatch({ type: 'SET_ALL_CHATS', data });
      }
    } catch (err) {
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const loadConversation = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post(
        '/whats-messages',
        { group_id: params },
        {
          headers: { Authorization: token },
        },
      );

      if (data.success) {
        dispatch({ type: 'SET_ALL_CONVERSATIONS', data });
      }
    } catch (err) {
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const sendMessage = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.post('/messages/send-message', params, {
        headers: { Authorization: token },
      });

      if (data.success) {
        // dispatch({ type: 'SET_ALL_CONVERSATIONS', data });
        toast.success('Mensagem enviada');
      }
    } catch (err) {
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const finishConversation = useCallback(async (params = {}, token) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const { data } = await api.get(`/whats-message-groups/${params}`, {
        headers: { Authorization: token },
      });

      if (data.success) {
        toast.success('Conversa finalizada');
      }
    } catch (err) {
      toast.error(err.message);
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  return (
    <ChatsContext.Provider
      value={{
        ...dataReducer,
        loadAllChats,
        loadConversation,
        sendMessage,
        finishConversation,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};
