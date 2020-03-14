import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ThunkMiddlerware from "redux-thunk";
import reducers from "./reducers";

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddlerware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
)(createStore);

const reducer = combineReducers(reducers);

export default function configStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}
