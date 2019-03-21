import { USER_NPUT_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_NPUT_CHANGE:
      return {
        ...state,
        [action.prop]: action.value,
      };
    default:
      return state;
  }
}
