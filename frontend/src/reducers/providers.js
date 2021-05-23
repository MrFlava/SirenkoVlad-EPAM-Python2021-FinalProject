import {  GET_PROVIDERS_LIST, ADD_PROVIDER, DELETE_PROVIDER, GET_PROVIDER ,UPDATE_PROVIDER  } from '../actions/types';

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
        case DELETE_PROVIDER:
            return {
                ...state,
                providers: state.providers.filter(provider => provider.id != action.payload)
            };
        case GET_PROVIDER:
        case UPDATE_PROVIDER:
            return {
              ...state,
              [action.payload.id]: action.payload
            };
        case ADD_PROVIDER:
            return {
                ...state,
                providers: [...state.providers, action.payload]
            };
        default:
            return state;
    }
};
