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
				<Card title="Lets make you the Admin!" text="Tuneshuffle needs an admin to control and manage the streaming media, just enter your name to become the admin!">
					<form>
						<div className="text-center">
							<div className="input-wrapper">
								<input className="input-name" type="text" placeholder="Enter your name" required />
							</div>
							<button className="btn-primary-line btn-start">
								Create Admin
								<span className="lnr lnr-user"></span>
							</button>
						</div>
					</form>
				</Card>
			);

		return this.props.admin ? <Player /> : intro;
	}
}

export default Welcome;