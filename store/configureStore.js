import {createStore, combineReducers} from 'redux';
import appReducer from '../reducers/appReducer';
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers({count: countReducer, app: appReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
