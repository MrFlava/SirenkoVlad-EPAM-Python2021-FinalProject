import { GET_EMPLOYEES_LIST, GET_EMPLOYEE, DELETE_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/types';

const initialState = {
    employees: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEES_LIST:
            return {
                ...state,
                employees: action.payload
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id != action.payload)
            };
        case GET_EMPLOYEE:
        case UPDATE_EMPLOYEE:
            return {
              ...state,
              [action.payload.id]: action.payload
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        default:
            return state;
    }
};
