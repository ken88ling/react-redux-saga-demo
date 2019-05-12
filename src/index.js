import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers } from "redux";

function productReducer(state = [], action) {
  return state;
}
function userReducer(state = "", action) {
  return state;
}

const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});
const store = createStore(allReducers, {
  products: [{ name: "iPhone" }],
  user: "Michael"
});
//console.log(store.getState());

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
