import React, { useRef, useState } from 'react';
import Rating from '@mui/material/Rating';

const Review = () => {
	const commentRef = useRef('');
	const [rating, setRating] = useState(4);

	const handleReviewSubmit = () => {
		// TODO: send review to server
	};

	return (
		<div className='space-y-4 flex flex-col items-start'>
			<h5 className='text-xl font-bold capitalize'>write your review</h5>
			<div className='flex flex-col items-start space-y-4 rounded-lg shadow p-4 border'>
				<textarea
					className='outline-none border-b-2'
					ref={commentRef}
					cols='40'
					rows='5'
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
