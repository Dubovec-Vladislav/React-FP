import { authApi } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
  errorMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching, }
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage, }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching, });
export const setErrorMessage = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage, });

export function authMe() {
  return (dispatch) => {
    authApi.authMe().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        let isAuth = true;
        dispatch(setAuthUserData(id, login, email, isAuth));
      }
    });
  };
};

export function loginMe(email, password, rememberMe) {
  return (dispatch) => {
    authApi.loginMe(email, password, rememberMe).then(data => {
      console.log(data);
      if (data.resultCode === 0) {
        dispatch(authMe())
      } else {
        dispatch(setErrorMessage(data.messages));
      }
    });
  };
};

export function logoutMe() {
  return (dispatch) => {
    authApi.logoutMe().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;