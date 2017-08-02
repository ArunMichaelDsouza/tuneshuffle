// Card component

import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { props } = this;

		return (
			<section className="card intro-panel">
				{
					props.showLogo ? (<div className="logo"></div>) : ''
				}
				<h1 className="card-title text-center">{ props.title }</h1>
				<div className="card-info">
					{ props.text }
				</div>
				{ props.children }
			</section>
		);
	}
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	showLogo: PropTypes.bool.isRequired
};

Card.defaultProps = {
	title: 'This is dummy title',
	text: 'This is dummy text',
	showLogo: true
};

export default Card;