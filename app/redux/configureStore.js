import { combineReducers } from 'redux';
import { homeReducer, userReducer } from './reducers';

const configureStore = combineReducers({
  home: homeReducer,
  user: userReducer,
});
export default configureStore;
