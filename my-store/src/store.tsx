import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./store/reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const enhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);

export default store;