// Tuneshuffle app client code

import React from 'react';
import ReactDOM from 'react-dom';
import constants from '../lib/constants';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import Player from './components/Player.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';

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
		<Router>
			<Switch>
				<Route exact path="/welcome" component={Welcome}/>
			    <Route path="/player" component={Player}/>
			    <Route path='/404' component={NotFoundComponent}/>
			    <Redirect from='*' to='/404'/>
			</Switch>
		</Router>
	</Provider>, 
document.getElementById('app'));





