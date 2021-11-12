import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Reviews from '../Reviews/Reviews';
import Overview from '../Overview/Overview';

const Home = () => {
	return (
		<div>
			<Header />
			<div className='space-y-10 xl:space-y-20'>
				<Banner />
				<FeaturedProducts />
				<Overview />
				<Reviews />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
