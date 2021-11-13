import React from 'react';
import { Link } from 'react-router-dom';
import {
	FiSearch,
	FiShoppingCart,
	FiHeart,
	FiArrowRight,
} from 'react-icons/fi';

const Product = ({ product }) => {
	const {
		_id,
		product_title,
		product_img,
		product_colors,
		product_category,
		product_price,
	} = product;

	const productLinks = [
		{ to: `/eyeglass/${_id}`, icon: <FiSearch /> },
		{ to: `/eyeglass/${_id}`, icon: <FiShoppingCart /> },
		{ to: `/eyeglass/${_id}`, icon: <FiHeart /> },
		{ to: `/eyeglass/${_id}`, icon: <FiArrowRight /> },
	];

	return (
		<div className='space-y-3 text-center'>
			<img src={product_img} alt='eyeglasses' />
			<p className='text-gray-500 text-sm'>{product_category}</p>
			<h4 className='font-light'>{product_title}</h4>
			<div className='flex space-x-2 justify-center'>
				{product_colors.map((color, index) => (
					<span key={index} className={`p-2 rounded-full ${color}`} />
				))}
			</div>
			<h5 className='text-brand text-lg'>${product_price}</h5>
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
