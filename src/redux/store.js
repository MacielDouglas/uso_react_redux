// const { createStore } = require('redux');
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
