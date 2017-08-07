// Media player component

import React from 'react';
import Wavesurfer from './Wavesurfer.jsx';
import Playlist from './Playlist.jsx';

const Player = () => {
	return (
		<section className="container">
			<Wavesurfer />
			<Playlist />
		</section>
	);
};

export default Player;