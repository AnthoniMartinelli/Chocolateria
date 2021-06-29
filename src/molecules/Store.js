import { combineReducers, createStore } from "@reduxjs/toolkit";
import analyticsReducer from "../atoms/firebase/analytics";
import initializeReducer from "../atoms/firebase/initialize";
import authReducer from "../atoms/firebase/auth";

// eslint-disable-next-line no-unused-vars
const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  // If the "action" is actually a function instead...
  if (typeof action === "function") {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
};

const rootReducer = combineReducers({
  initialize: initializeReducer,
  analytics: analyticsReducer,
  auth: authReducer,
});

export default createStore(rootReducer);
