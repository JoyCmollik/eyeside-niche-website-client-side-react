import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
	return (
		<div className='space-y-4 text-center'>
			<h4 className='capitalize text-4xl'>{title}</h4>
			<p className='text-gray-400 capitalize'>{subtitle}</p>
		</div>
	);
};

export default SectionTitle;
