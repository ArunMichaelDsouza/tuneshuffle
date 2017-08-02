// Welcome component

import React from 'react';
import Player from './Player.jsx';
import Card from './Card.jsx';

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showAdminPane: false };
	    this.props.getAdmin();

	    this.switchIntro = this.switchIntro.bind(this);
	}

	switchIntro() {
		this.setState({ showAdminPane: true });
	}

	render() {
		const { showAdminPane } = this.state,
			intro = !showAdminPane ? (
				<Card  title="Welcome to Tuneshuffle!" text="Your offline solution to pair music streaming! Start a server, ask your friends to join in. Stream and share music together.">
					<div className="text-center">
						<button onClick={this.switchIntro} className="btn-primary-line btn-start">
							Start Streaming
							<span className="lnr lnr-music-note"></span>
						</button>
					</div>
				</Card>
			) : (
				<h1>create admin</h1>
			);

		return this.props.admin ? <Player /> : intro;
	}
}

export default Welcome;