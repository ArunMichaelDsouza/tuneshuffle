// Tuneshuffle app client code

import React from 'react';
import ReactDOM from 'react-dom';
import constants from '../lib/constants';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import Player from './components/Player.jsx';

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
			<div>
		     	<ul>
		        	<li><Link to="/welcome">welcome</Link></li>
		        	<li><Link to="/player">player</Link></li>
		      	</ul>

		      <hr/>

		      <Route exact path="/welcome" component={Welcome}/>
		      <Route path="/player" component={Player}/>
		    </div>
		  </Router>
	</Provider>, document.getElementById('app'));