
import { combineReducers } from 'redux';

import nav from './nav';
import user from './user';
import room from './room';

export default combineReducers({
  nav,
  user,
  room,
});
