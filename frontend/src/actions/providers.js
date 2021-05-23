import axios from 'axios';
import { GET_PROVIDERS_LIST, GET_PROVIDER, ADD_PROVIDER, DELETE_PROVIDER, UPDATE_PROVIDER } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

import { tokenConfig } from './auth';

// Get providers list
export const getProviders = () => (dispatch, getState) => {
    return axios.get('api/providers/', tokenConfig(getState))
        .then(result => {
            dispatch({
                type: GET_PROVIDERS_LIST,
                payload: result.data.sort((a, b) => a.id - b.id)
            });
        }).catch(error => console.log(error));
};

// Get provider
export const getProvider = id => (dispatch, getState) => {
    return axios.get(`/api/providers/${id}/retrieve`, tokenConfig(getState)).then(
        ({ data }) => data
      ).catch(error => console.log(error));
};

// Delete provider
export const deleteProvider = (id) => (dispatch, getState) => {
    axios.delete(`api/providers/${id}/delete`, tokenConfig(getState))
        .then(result => {
            dispatch({
                type: DELETE_PROVIDER,
                payload: id
            });
        }).catch(error => console.log(error));
};

// Update provider
export const editProvider = (id, formValues) => (dispatch, getState) => {
  console.log('HELLO');
  axios.patch(`/api/providers/${id}/update`, formValues, tokenConfig(getState))
  .then(result => {
      dispatch({
        type: UPDATE_PROVIDER,
        payload: result.data
      });
    }).catch(error => console.log(error));

};

//Add provider
export const addProvider = (provider) => (dispatch, getState) => {
    axios.post('api/providers/create', provider, tokenConfig(getState))
        .then(result => {
            dispatch({
                type: ADD_PROVIDER,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
