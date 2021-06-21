import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import allReducer from "./reducers/rootReducers";
import rootSaga from "./sagas.js/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store