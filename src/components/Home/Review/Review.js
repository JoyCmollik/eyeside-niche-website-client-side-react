import React from 'react';
import Rating from '@mui/material/Rating';
import { FaQuoteLeft } from 'react-icons/fa';
import { Avatar } from '@mui/material';

const Review = (props) => {
	const { review_user_name, review_user_img, review_rating, review_comment } =
		props.review;
	return (
		<div className='space-y-2 p-4 shadow border rounded-lg w-full h-full'>
			<Avatar
				alt={review_user_name}
				src={review_user_img}
				sx={{ width: 40, height: 40 }}
			/>
			<div className='flex justify-between items-center'>
				<h5 className='text-lg'>
					{review_user_name.split(' ', 3).join(' ')}
				</h5>
				<Rating value={review_rating} readOnly />
			</div>

			<p className='text-sm text-gray-500'>
				<span className='mr-1 text-xl'>
					<FaQuoteLeft />
				</span>
				<span>{review_comment}</span>
			</p>
		</div>
	);
};

export default Review;
