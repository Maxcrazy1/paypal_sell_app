import {createStore, combineReducers} from 'redux';
import authReducer from './auth/reducer';

const reducers = combineReducers({
  authReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
