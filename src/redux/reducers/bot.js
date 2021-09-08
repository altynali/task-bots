import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  bots: [],
};
const bot = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BOT_SUCCESS:
      return {
        ...state,
        bots: action.bots,
      };
    default:
      return state;
  }
};

export default bot;
