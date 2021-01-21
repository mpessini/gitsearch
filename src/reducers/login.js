import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  username: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { username: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
