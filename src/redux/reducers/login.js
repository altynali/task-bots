import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  userData: false,
  errorLogin: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        userData: action.userData,
        errorLogin: null,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errorLogin: action.error,
      };
    default:
      return state;
  }
};

export default login;
