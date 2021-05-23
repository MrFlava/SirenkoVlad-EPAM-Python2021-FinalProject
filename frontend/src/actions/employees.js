import axios from 'axios';
import { GET_EMPLOYEES_LIST, GET_EMPLOYEE, DELETE_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/types';

import { tokenConfig } from './auth';

// Get employees list
export const getEmployees = () => (dispatch, getState) => {
    axios.get('api/employees/', tokenConfig(getState))
        .then(result => {
            dispatch({
                type: GET_EMPLOYEES_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// Get employee
export const getEmployee = id => (dispatch, getState) => {
  console.log(id);
  return axios.get(`/api/employees/${id}/retrieve`, tokenConfig(getState))
    .then(({ data }) => data)
    .catch(error => console.log(error));
};

// Delete employee
export const deleteEmployee = (id) => (dispatch, getState) => {
    axios.delete(`api/employees/${id}/delete`, tokenConfig(getState))
        .then(result => {
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id
            });
        }).catch(error => console.log(error));
};

//Update employee
export const editEmployee = (id, formValues) => (dispatch, getState) => {
  axios.patch(`/api/employees/${id}/update`, formValues, tokenConfig(getState))
  .then(result => {
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: result.data
      });
    }).catch(error => console.log(error));

};

//Add employee
export const addEmployee = (employee) => (dispatch, getState) => {
    axios.post('api/employees/create', employee, tokenConfig(getState))
        .then(result => {
            dispatch({
                type: ADD_EMPLOYEE,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
