import axios from 'axios';
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from './types';

export const loginUser = dataToSubmit => async dispatch => {
  // console.log('dataToSubmit', dataToSubmit);
  const { data } = await axios.post('/api/users/login', dataToSubmit);
  // console.log('data', data);
  dispatch({
    type: LOGIN_USER,
    payload: data,
  });
  return data;
};

export const registerUser = dataToSubmit => async dispatch => {
  const { data } = await axios.post('/api/users/register', dataToSubmit);
  dispatch({
    type: REGISTER_USER,
    payload: data,
  });
  return data;
};

export const logoutUser = () => async dispatch => {
  const { data } = await axios.get('/api/users/logout');
  dispatch({
    type: REGISTER_USER,
    payload: data,
  });
  return data;
};

export const auth = () => async dispatch => {
  const { data } = await axios.get('/api/users/auth');
  dispatch({
    type: AUTH_USER,
    payload: data,
  });
  return data;
};
