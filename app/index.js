// Tuneshuffle app client code

import React from 'react';
import ReactDOM from 'react-dom';
import constants from '../lib/constants';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import App from './components/App.jsx';

const initialState = {},
	composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose,
	enhancer = composeEnhancers(
		applyMiddleware(thunk)
	),
	store = createStore(allReducers, initialState, enhancer);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, 
document.getElementById('tuneshuffle-app'));





