// import { ActionTypes } from './actionTypes';
// //import axios from './../../axiosApi';
// import axios from 'axios';

// export const fetchStart = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: ActionTypes.LOADING,
//     });
//     await axios //axios
//       .get('/site/global/')
//       .then((response) => {
//         dispatch(globalSuccess(response));
//       })
//       .catch((error) => {
//         dispatch(fetchFail(error));
//       });
//   };
// };

// export const globalSuccess = (response) => {
//   return {
//     type: ActionTypes.FETCH_GLOBAL,
//     globalData: {
//       global: response.data.global,
//       static_url: response.data.static_url,
//       services_allowed: response.data.services_allowed,
//     },
//   };
// };

// export const fetchUserAndServices = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: ActionTypes.LOADING,
//     });
//     await axios //axios

//       .get('/v2/jwt/auth/user/')
//       .then((response) => {
//         const user = response.data.user;
//         const services = response.data.services;
//         const tasks_stats = response.data.tasks_stats;

//         axios.get('/v2/jwt/custom-services/').then((response) => {
//           const custom_services = response.data.custom_services;
//           dispatch(
//             userAndServices(user, services, custom_services, tasks_stats)
//           );
//         });
//       })
//       .catch((error) => {
//         dispatch(fetchFail(error));
//       });
//   };
// };

// export const userAndServices = (
//   user,
//   services,
//   custom_services,
//   tasks_stats
// ) => {
//   return {
//     type: ActionTypes.FETCH_SUCCESS_END,
//     user,
//     services,
//     custom_services,
//     tasks_stats,
//   };
// };

// export const fetchFail = (error) => {
//   return {
//     type: ActionTypes.FETCH_FAIL,
//     error,
//   };
// };
