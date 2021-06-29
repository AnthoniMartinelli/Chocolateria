import { combineReducers, createStore } from "@reduxjs/toolkit";

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

const rootReducer = combineReducers({});

export default createStore(rootReducer);
