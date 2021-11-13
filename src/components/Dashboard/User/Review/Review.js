import React, { useRef, useState } from 'react';
import Rating from '@mui/material/Rating';
import useAuth from '../../../../hooks/useAuth';
import useAxios from '../../../../hooks/useAxios';

const Review = () => {
	const commentRef = useRef('');
	const [rating, setRating] = useState(0);
	const { user } = useAuth();
	const { client } = useAxios();

	const handleReviewSubmit = () => {
		// TODO: send review to server
		const data = {};
		data.review_user_img = user.photoURL;
		data.review_user_name = user.displayName;
		data.review_rating = rating;
		data.review_comment = commentRef.current.value;

		console.log(data);
	};

	return (
		<div className='space-y-4 flex flex-col items-start'>
			<h5 className='text-xl font-bold capitalize'>write your review</h5>
			<div className='w-full flex flex-col items-start space-y-4 rounded-lg shadow p-4 border'>
				<textarea
					className='outline-none border-b-2 w-full h-28'
					ref={commentRef}
					placeholder='Write your comment here...'
					style={{ resize: 'none' }}
					required
				></textarea>
				<Rating
					name='simple-controlled'
					value={rating}
					precision={0.5}
					onChange={(event, newRating) => {
						setRating(newRating);
					}}
				/>
				<button
					onClick={handleReviewSubmit}
					className='uppercase px-4 py-1 rounded-lg text-white bg-black'
				>
					submit
				</button>
			</div>
		</div>
	);
};

export default Review;
