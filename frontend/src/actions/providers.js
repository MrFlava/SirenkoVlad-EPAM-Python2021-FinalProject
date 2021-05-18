import axios from 'axios';
import { GET_PROVIDERS_LIST, ADD_PROVIDER, DELETE_PROVIDER, UPDATE_PROVIDER } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get providers list
export const getProviders = () => dispatch => {
    axios.get('api/providers/')
        .then(result => {
            dispatch({
                type: GET_PROVIDERS_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// //Delete provider
// export const deleteTodo = (id) => dispatch => {
//     axios.delete(`api/todo/${id}/`)
//         .then(result => {
//             dispatch({
//                 type: DELETE_TODO,
//                 payload: id
//             });
//         }).catch(error => console.log(error));
// };
//
// //Toggle provider
// export const toggleTodo = (todo) => dispatch => {
//     todo.done = !todo.done;
//     axios.put(`api/todo/${todo.id}/`, todo)
//         .then(result => {
//             dispatch({
//                 type: TOGGLE_TODO,
//                 payload: result.data
//             });
//         }).catch(error => console.log(error));
// };
//
// //Add provider
// export const addTodo = (todo) => dispatch => {
//     axios.post('api/todo/', todo)
//         .then(result => {
//             dispatch({
//                 type: ADD_TODO,
//                 payload: result.data
//             });
//         }).catch(error => console.log(error));
// };
