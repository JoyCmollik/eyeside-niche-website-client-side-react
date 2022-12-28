import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Review from '../Review/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';
import useAxios from '../../../hooks/useAxios';

// install Swiper modules
SwiperCore.use([Autoplay]);

const Reviews = () => {
	const [reviews, setReviews] = useState();
	const { client } = useAxios();

	useEffect(() => {
		client.get('/reviews').then((response) => {
			setReviews(response.data);
		});
	}, []);

	return (
		<div className='container mx-auto space-y-10'>
			<SectionTitle
				title='Customer Reviews'
				subtitle='see what our customers are saying as we provided them with the bests.'
			/>
			<Swiper
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				grabCursor={true}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
			>
				{reviews &&
					reviews.map((review) => (
						<SwiperSlide key={review._id}>
							<Review review={review} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default Reviews;
