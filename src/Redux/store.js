import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from './AuthReducer/reducer'
import { reducer as productReducer } from './ProductReducer/reducer'
import { cartReducer } from "./CartReducer/reducer"

let rootReducer = combineReducers({ productReducer, authReducer, cartReducer });
export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);