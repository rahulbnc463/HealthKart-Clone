import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_REQUEST,
} from "./actionTypes";

const initialState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
    user:{}
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload, user: payload };
        case USER_LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case USER_LOGOUT_REQUEST:
            return initialState
        default:
            return state;
    }
};
