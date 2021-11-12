import React from 'react';

const Pay = ({ isOpen, setIsOpen }) => {
	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>open</button>
			<h4>Payment is coming soon!</h4>
		</div>
	);
};

export default Pay;
