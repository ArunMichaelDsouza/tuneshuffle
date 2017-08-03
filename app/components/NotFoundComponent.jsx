// Not found component

import React from 'react';

const NotFoundComponent = () => {
	return (
		<section className="card info-panel not-found-error text-center">
			<h1 className="card-title">404 Error!</h1>
			<div className="card-info">
				<div className="lnr lnr-warning icon-warning"></div>
				Whoops! Looks like you're lost. 
				<br/>
				Try going to the &nbsp;<a href="/welcome">welcome</a> page.
			</div>
		</section>
	);
};
	
export default NotFoundComponent;