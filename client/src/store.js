import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk, reduxLogger];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
