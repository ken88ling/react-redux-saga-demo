import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers } from "redux";

function productReducer(state = [], action) {
  return state;
}
function userReducer(state = "", action) {
  switch (action.type) {
    case "updateUser":
      return action.payload;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});
const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "Ken"
  }
};
store.dispatch(updateUserAction);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
