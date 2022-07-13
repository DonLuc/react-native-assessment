import {STORE_NAME} from '../constants';
const initialState = {
  username: '',
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_NAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
export default appReducer;
