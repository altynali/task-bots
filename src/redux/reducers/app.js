import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  loaded: false,
  globalData: null,
  user: null,
  services: null,
  error: null,
  tasks_stats: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_GLOBAL:
      return {
        ...state,
        globalData: action.globalData,
        loaded: true,
        error: null,
      };
    case ActionTypes.FETCH_SUCCESS_END:
      let globalData = Object.assign(state.globalData, {
        custom_services: action.custom_services,
      });
      return {
        ...state,
        loaded: true,
        user: action.user,
        services: action.services,
        tasks_stats: action.tasks_stats,
        globalData,
        error: null,
      };
    case ActionTypes.FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loaded: true,
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        loaded: false,
        error: null,
      };
    default:
      return state;
  }
};

export default app;
