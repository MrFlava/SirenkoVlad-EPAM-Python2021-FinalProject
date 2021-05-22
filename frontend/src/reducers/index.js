import { combineReducers } from 'redux';
import providers from './providers';
import employees from './employees';

export default combineReducers({
  employees, 
  providers
});
