import { createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

export default createStore(rootReducer);
