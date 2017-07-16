import React from 'react';

const Welcome = () => {
	return (
		<section className="card intro-panel">
			<div className="logo"></div>
			<h1 className="card-title text-center">Welcome to Tuneshuffle!</h1>
			<div className="card-info">
				Your offline solution to pair music streaming! Start a server, ask your friends to join in. Stream and share music together.
			</div>
			<div className="text-center">
				<button className="btn-primary-line btn-start">Start Streaming</button>
			</div>
		</section>
	);
};

export default Welcome;