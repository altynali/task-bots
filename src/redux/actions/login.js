// import { ActionTypes } from './actionTypes';
// import axios from 'axios';

// export const login = (username, password) => {
//   console.log(localStorage.getItem('access_token'));
//   return async (dispatch) => {
//     await axios
//       .post('/v2/jwt/auth/token/obtain/', {
//         username,
//         password,
//       })
//       .then((response) => {
//         axios.defaults.headers['Authorization'] = 'JWT ' + response.data.access;

//         const access_token = response.data.access;
//         const refresh_token = response.data.refresh;

//         localStorage.setItem('access_token', access_token);
//         localStorage.setItem('refresh_token', refresh_token);

//         axios
//           .get('/v2/jwt/auth/user/')
//           .then((res) => {
//             const userData = res.data;
//             dispatch(loginSuccess(userData));
//           })
//           .catch((error) => {
//             dispatch(loginFail(error));
//           });
//       });
//   };
// };

// export const loginSuccess = (access_token, refresh_token, userData) => {
//   return {
//     type: ActionTypes.LOGIN,
//     access_token,
//     refresh_token,
//     userData,
//   };
// };

// export const loginFail = (error) => {
//   return {
//     type: ActionTypes.FETCH_FAIL,
//     error,
//   };
// };
