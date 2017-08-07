// Tuneshuffle app client code

import React from 'react';
import ReactDOM from 'react-dom';
import constants from '../lib/constants';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';

import './sass/base.scss';
import WelcomeContainer from './containers/welcomeContainer';
import Player from './components/Player/index.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';
import Footer from './components/Footer.jsx';

const initialState = {},
	composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose,
	enhancer = composeEnhancers(
		applyMiddleware(thunk)
	),
	store = createStore(allReducers, initialState, enhancer);

ReactDOM.render(
	<Provider store={ store }>
		<div>
			<Router>
				<Switch>
					<Route path="/welcome" component={ WelcomeContainer } />
				    <Route path="/player" component={ Player }/>
				    <Route path='/404' component={ NotFoundComponent }/>
				    <Redirect from='*' to='/404'/>
				</Switch>
			</Router>
			<Footer/>
		</div>
	</Provider>, 
document.getElementById('tuneshuffle-app'));





