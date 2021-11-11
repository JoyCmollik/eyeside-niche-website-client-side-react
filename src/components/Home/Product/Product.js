import React from 'react';
import { Link } from 'react-router-dom';
import {
	FiSearch,
	FiShoppingCart,
	FiHeart,
	FiArrowRight,
} from 'react-icons/fi';

const Product = () => {
	const productLinks = [
		{ to: '/', icon: <FiSearch /> },
		{ to: '/', icon: <FiShoppingCart /> },
		{ to: '/', icon: <FiHeart /> },
		{ to: '/', icon: <FiArrowRight /> },
	];

	return (
		<div className='space-y-3 text-center'>
			<img
				src='https://demo1leotheme.b-cdn.net/leo_oobliss_demo/80-home_default/hummingbird-printed-t-shirt.jpg'
				alt='eyeglasses'
			/>
			<p className='text-gray-500'>Men</p>
			<h4 className='font-light'>Burberry Eyeglasses</h4>
			<div className='flex space-x-2 justify-center'>
				<span className='p-2 rounded-full bg-black'></span>
				<span className='p-2 rounded-full bg-red-400'></span>
				<span className='p-2 rounded-full bg-yellow-500'></span>
			</div>
			<h5 className='text-brand text-lg'>$23.90</h5>
			<div className='flex justify-center space-x-2'>
				{productLinks.map(({ to, icon }, index) => (
					<Link key={index} to={to}>
						<button className='p-3 rounded-full border border-primary text-primary text-xl hover:bg-primary hover:text-white transition duration-300'>
							{icon}
						</button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Product;
