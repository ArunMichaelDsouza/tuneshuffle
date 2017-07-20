// Welcome component

import React from 'react';

class Welcome extends React.Component {
	constructor(props) {
		super(props);	
		this.state = { showWelcome: true };
		
	    this.props.getAdmin();
	}

	render() {
		return (
			<section className="card intro-panel">
				<div className="logo"></div>
				<h1 className="card-title text-center">Welcome to Tuneshuffle!</h1>
				<div className="card-info">
					Your offline solution to pair music streaming! Start a server, ask your friends to join in. Stream and share music together.
				</div>
				<div className="text-center">
					<button className="btn-primary-line btn-start">
						Start Streaming
						<span className="lnr lnr-music-note"></span>
					</button>
				</div>
			</section>
		);
	}
}

export default Welcome;