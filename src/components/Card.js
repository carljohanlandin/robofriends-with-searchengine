import React from 'react';


const Card = ({ id, name, email }) => {
	// ovan visar kortaste sättet att komma åt id, name, email från Robots.js.
	// det härstammar från de två kommentarsraderna nedan.
	// destructuring prop: 
	// const Card = (props) => {
	// const { id, name, email } = props där props är input argument till
	// funktionen Card;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;