// import axios from 'axios';
// import { ActionTypes } from './actionTypes';

// export const getBots = () => {
//   return async (dispatch) => {
//     axios.get('/v2/jwt/soft/').then((response) => {
//       dispatch(botsSuccess(response));
//       //console.log(response);
//     });
//   };
// };
// export const botsSuccess = (response) => {
//   return {
//     type: ActionTypes.BOT_SUCCESS,
//     bots: response.data.soft,
//   };
// };
