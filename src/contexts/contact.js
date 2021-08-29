/* eslint-disable camelcase */
import { createContext, useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import { ContactReducer, DefaultValue } from './reducers/contact_reducer';

export const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const [dataReducer, dispatch] = useReducer(ContactReducer, DefaultValue);

  const loadListContacts = useCallback(
    async (campaign_id, params = {}, token) => {
      dispatch({ type: 'SET_LOADING', loading: true });
      try {
        const { data } = await api.get(`/contacts?campaign_id=${campaign_id}`, {
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
    },
    [],
  );

  return (
    <ContactContext.Provider value={{ ...dataReducer, loadListContacts }}>
      {children}
    </ContactContext.Provider>
  );
};
