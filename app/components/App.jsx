// App main component

import React from 'react';
import '../sass/base.scss';
import WelcomeContainer from '../containers/welcomeContainer';
import Player from './Player/index.jsx';
import NotFoundComponent from './NotFoundComponent.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/welcome" component={ WelcomeContainer } />
						<Route path="/player" component={ Player }/>
						<Route path='/404' component={ NotFoundComponent }/>
						<Redirect from='*' to='/404'/>
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;