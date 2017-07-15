// Tuneshuffle app client code

import React from 'react';
import ReactDOM from 'react-dom';
import constants from '../lib/constants';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

const initialState = { users: [] };

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

 const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(allReducers, initialState, enhancer);

store.dispatch({ type: 'INIT_STORE', payload: initialState });

ReactDOM.render(
	<Provider store={store}>
		<div> { constants.APP_TITLE } </div>
	</Provider>, document.getElementById('app'));