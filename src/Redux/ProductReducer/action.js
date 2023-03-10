
import axios from "axios";
import {
  GET_HEALTH_DATA_FAILURE,
  GET_HEALTH_DATA_REQUEST,
  GET_HEALTH_DATA_SUCCESS,
} from "./actionTypes";

const GetShoesDataRequest = () => {
  return {
    type: GET_HEALTH_DATA_REQUEST,
  };
};

const GetShoesDataSuccess = (payload) => {
  return {
    type: GET_HEALTH_DATA_SUCCESS,
    payload,
  };
};

const GetShoesDataFailure = () => {
  return {
    type: GET_HEALTH_DATA_FAILURE,
  };
};

export const getHealth = (param) => (dispatch) => {
  dispatch(GetShoesDataRequest());
  axios
    .get(`https://healthcartapi.onrender.com/Health`, param)
    .then((res) => {
      dispatch(GetShoesDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetShoesDataFailure());
    });
};


export const FetchProduct = (query) => {
  return axios.get(`https://healthcartapi.onrender.com/Health?q=${query}`)
}