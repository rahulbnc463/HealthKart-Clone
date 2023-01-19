import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from './AuthReducer/reducer'

let rootReducer = combineReducers({  authReducer });
export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);