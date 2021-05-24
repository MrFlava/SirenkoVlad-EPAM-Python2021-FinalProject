import axios from 'axios';
import { stopSubmit } from 'redux-form';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from './types';

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  return axios.get('auth/users/me')
    .then(({ data }) => {
      tokenConfig(getState);
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// REGISTER USER
export const register = ({ username, email, password }) => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  return axios.post('auth/users/', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_FAIL
      });
      dispatch(stopSubmit('registerForm', err.response.data));
    });
};

// LOGIN USER
export const login = ({ username, password }) => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios.post('auth/token/login/', body, config)
    .then(({ data }) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
      tokenConfig(getState);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL
      });
      dispatch(stopSubmit('loginForm', err.response.data));
    })
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios.post('auth/token/logout/', null, tokenConfig(getState));
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

// helper function
export const tokenConfig = getState => {
  // Get token
  const token = getState().auth.auth_token;


  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};
