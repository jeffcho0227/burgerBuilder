import * as actionTypes from '../actions/actionTypes.js';
import { updateObj } from '../utility.js';

const initState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const authStart = (state, action) => {
  return updateObj(state, {error: null, loading: true} );
}

const authSuccess = (state, action) => {
  console.log(action, 'from auth reducers');
  return updateObj( state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  } );
};

const authFail = (state, action) => {
  return updateObj(state, {
    error: action.error,
    loading: false
  } );
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_FAIL:
      return authFail(state, action)
    default: 
      return state;
  }
};

export default reducer;