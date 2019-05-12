import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

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

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps="whatever" />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
