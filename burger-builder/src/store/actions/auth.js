import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import URL from '../../apiKey/firbaseApiKey.js';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };  
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    let authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    console.log(authData)
    
    axios.post(URL, authData)
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      })

  };
};