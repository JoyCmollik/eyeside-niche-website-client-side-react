import React, { useRef, useState } from 'react';
import Rating from '@mui/material/Rating';
import useAuth from '../../../../hooks/useAuth';
import { useSnackbar } from 'notistack';
import useAxios from '../../../../hooks/useAxios';

const GiveReview = () => {
	const commentRef = useRef('');
	const [rating, setRating] = useState(0);
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();
	const { client } = useAxios();

	const handleReviewSubmit = () => {
		// send review to server
		const data = {};
		data.review_user_img = user.photoURL;
		data.review_user_name = user.displayName;
		data.review_rating = rating;
		data.review_comment = commentRef.current.value;

		client
			.post('/addreview', data)
			.then((response) => {
				commentRef.current.value = '';
				setRating(0);
				// alert
				enqueueSnackbar('Your review has been received!', {
					variant: 'success',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'right',
					},
				});
			})
			.catch((error) => {
				console.log(error);
			});
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

export default GiveReview;
