import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
} from "./actionTypes";

const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload };
};

const loginFailureAction = () => {
  return { type: USER_LOGIN_FAILURE };
};

// Function currying Js

export const login = (userData) => (dispatch) => {
  dispatch(loginRequestAction());

  return axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
        const user = res.user;
      dispatch(loginSuccessAction(user));
    })
    .catch((err) => {
      dispatch(loginFailureAction());
    });
};

export const Logout = () => dispatch => {
    dispatch({type: USER_LOGOUT_REQUEST})
}