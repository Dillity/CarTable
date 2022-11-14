import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import tableReducer from "../reducers/tableReducer/tableReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    table: tableReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

type reducersType = typeof reducers;
export type appStateType = ReturnType<reducersType>

export default store;