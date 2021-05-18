import {  GET_PROVIDERS_LIST, ADD_PROVIDER, DELETE_PROVIDER, UPDATE_PROVIDER  } from '../actions/types';

const initialState = {
    providers: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROVIDERS_LIST:
            return {
                ...state,
                providers: action.payload
            };
        // case DELETE_TODO:
        //     return {
        //         ...state,
        //         todos: state.todos.filter(todo => todo.id != action.payload)
        //     };
        // case TOGGLE_TODO:
        //     return {
        //         ...state,
        //         todos: [...state.todos]
        //     };
        // case ADD_TODO:
        //     return {
        //         ...state,
        //         todos: [...state.todos, action.payload]
        //     };
        default:
            return state;
    }
};
