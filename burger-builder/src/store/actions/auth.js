import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import apiKey from '../../apiKey/firbaseApiKey.js';

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

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    let authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    if (!isSignup) {
      URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    }
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