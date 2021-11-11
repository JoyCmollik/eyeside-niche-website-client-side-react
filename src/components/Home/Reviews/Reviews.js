import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Review from '../Review/Review';

const Reviews = () => {
	return (
		<div className='container mx-auto space-y-10'>
			<SectionTitle
				title='Customer Reviews'
				subtitle='see what our customers are saying as we provided them with the bests.'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
				<Review />
				<Review />
				<Review />
				<Review />
			</div>
		</div>
	);
};

export default Reviews;
