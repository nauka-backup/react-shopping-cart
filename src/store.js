import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// first parameter is reducer, second is initialState and the third are middlewares, because in actions we use asyn await to server to get the data. that way we need redux-thunk to handle it.
const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
