// import { ActionTypes } from './actionTypes';
// //import axios from '../../axiosApi';
// import axios from 'axios';

// export const fetchTasks = (offset) => {
//   console.log('offset', offset);
//   const newTask = {
//     platform: 'all',
//     task_type: 'all',
//     dates: null,
//     offset,
//     limit: 100,
//   };
//   return async (dispatch) => {
//     axios.get('/v2/jwt/task/bulk/', newTask).then((response) => {
//       console.log(response);
//       dispatch(fetchTasksSuccess(response, response.data.result.count));
//     });
//   };
// };

// // export const filterTasks = (newTask) => {
// //   return async (dispatch) => {
// //     axios.get('/v2/jwt/task/bulk/', newTask).then((response) => {
// //       ///v2/ajwt/task/action/bulk/filtered/
// //       dispatch(fetchTasksSuccess(response));
// //       console.log(response);
// //     });
// //   };
// // };

// export const massTasks = (newTask) => {
//   return async (dispatch) => {
//     axios.post('/v2/jwt/task/action/bulk/', newTask).then((response) => {
//       //dispatch(fetchTasksSuccess(response));
//       console.log(response);
//     });
//   };
// };

// export const customService = () => {
//   axios.get('/v2/jwt/custom-services/').then((response) => {
//     console.log(response);
//   });
// };

// export const newTask = (newTaskData, pay) => {
//   return async (dispatch) => {
//     // headers: { Authorization: api_key } }
//     axios
//       .post('/v2/jwt/task/', Object.assign(newTaskData, { pay }))
//       .then((response) => {
//         console.log(response);
//         dispatch(newtaskSuccess());
//       });
//   };
// };

// export const newtaskSuccess = () => {
//   return {
//     type: ActionTypes.NEW_TASK_SUCCESS,
//   };
// };

// export const fetchTasksSuccess = (response, count) => {
//   return {
//     type: ActionTypes.FETCH_TASKS_SUCCESS,
//     tasks: response.data.result.tasks,
//     count,
//   };
// };

// export const taskAction = (id, action) => {
//   const newTask = {
//     id,
//     action,
//   };
//   console.log(newTask);
//   return async (dispatch) => {
//     axios.post('/v2/jwt/task/action/', newTask).then((response) => {
//       //dispatch(fetchTasksSuccess(response));
//       console.log(response);
//     });
//   };
// };
