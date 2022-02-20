import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from './types';

const initialState = {};

const user = (state = initialState, action) => {
  // console.log('action.payload', action.payload);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        register: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logout: action.payload,
      };
    case AUTH_USER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default user;
