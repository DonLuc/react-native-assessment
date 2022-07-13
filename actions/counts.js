import {COUNTER_CHANGE} from '../constants';
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}

export const storeNameAction = name => dispatch => {
  dispatch({
    type: 'STORE_NAME',
    payload: name,
  });
};
