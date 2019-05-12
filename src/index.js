import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael"
  },
  allStoreEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps="whatever" />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
