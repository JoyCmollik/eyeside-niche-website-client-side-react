import React from 'react';
import Rating from '@mui/material/Rating';
import { FaQuoteLeft } from 'react-icons/fa';

const Review = () => {
	return (
		<div className='space-y-2 p-4 shadow border rounded-lg w-full'>
			<img
				className='object-cover rounded-full h-16'
				src='https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
				alt='user'
			/>
			<div className='flex justify-between items-center'>
				<h5 className='text-lg'>Frank Klin</h5>
				<Rating value={0} readOnly />
			</div>

			<p className='text-sm text-gray-500'>
				<span className='mr-1 text-xl'>
					<FaQuoteLeft />
				</span>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Provident accusamus.
				</span>
			</p>
		</div>
	);
};

export default Review;
