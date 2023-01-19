import {
  GET_HEALTH_DATA_FAILURE,
  GET_HEALTH_DATA_REQUEST,
  GET_HEALTH_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  health:[],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HEALTH_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_HEALTH_DATA_SUCCESS:
      return { ...state, isLoading: false, health: payload };
    case GET_HEALTH_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
