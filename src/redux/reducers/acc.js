import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  accs: [],
};
const acc = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ACC_SUCCESS:
      return {
        ...state,
        accs: action.accs,
      };
    default:
      return state;
  }
};

export default acc;
