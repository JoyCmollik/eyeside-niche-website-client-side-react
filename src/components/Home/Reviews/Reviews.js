import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Review from '../Review/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

const Reviews = () => {
	return (
		<div className='container mx-auto space-y-10'>
			<SectionTitle
				title='Customer Reviews'
				subtitle='see what our customers are saying as we provided them with the bests.'
			/>
			<Swiper
				loop={true}
				autoplay={{
					delay: 3500,
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
				<SwiperSlide>
					<Review />
				</SwiperSlide>
				<SwiperSlide>
					<Review />
				</SwiperSlide>
				<SwiperSlide>
					<Review />
				</SwiperSlide>
				<SwiperSlide>
					<Review />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Reviews;
