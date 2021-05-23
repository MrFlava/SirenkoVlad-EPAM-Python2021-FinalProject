import axios from 'axios';
import { GET_EMPLOYEES_LIST, GET_EMPLOYEE, DELETE_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/types';


// Get employees list
export const getEmployees = () => dispatch => {
    axios.get('api/employees/')
        .then(result => {
            dispatch({
                type: GET_EMPLOYEES_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// Get employee
export const getEmployee = id => async dispatch => {
  axios.get(`/api/employees/${id}/retrieve`).then(
    result => {
        dispatch({
          type: GET_EMPLOYEE,
          payload: res.data
        });
    }).catch(error => console.log(error));
};

// Delete employee
export const deleteEmployee = (id) => dispatch => {
    axios.delete(`api/employees/${id}/delete`)
        .then(result => {
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id
            });
        }).catch(error => console.log(error));
};

//Update provider
// export const editProvider = (id, formValues) => dispatch => {
//   axios.patch(`/api/providers/${id}/update`, formValues)
//   .then(result => {
//       dispatch({
//         type: UPDATE_PROVIDER,
//         payload: result.data
//       });
//     }).catch(error => console.log(error));
//
// };

//Add employee
export const addEmployee = (employee) => dispatch => {
    axios.post('api/employees/create', employee)
        .then(result => {
            dispatch({
                type: ADD_EMPLOYEE,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
