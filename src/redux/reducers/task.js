import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  tasks: null,
  tasksLoaded: false,
  newTaskUploaded: false,
  count: 0,
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS_SUCCESS:
      return {
        tasks: action.tasks,
        tasksLoaded: true,
        newTaskUploaded: false,
        count: action.count,
      };
    case ActionTypes.NEW_TASK_SUCCESS:
      return {
        ...state,
        newTaskUploaded: true,
      };
    default:
      return state;
  }
};

export default task;
