import React from 'react';
import { Link } from 'react-router-dom';
import {
	FiSearch,
	FiShoppingCart,
	FiHeart,
	FiArrowRight,
} from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import useCart from '../../../hooks/useCart';

const Product = ({ product }) => {
	const {
		_id,
		product_title,
		product_img,
		product_colors,
		product_category,
		product_price,
	} = product;
	const { itemCart, addItemToCart } = useCart();

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
				<button className='btn-rounded'>
					<FiSearch />
				</button>
				<button
					onClick={() => addItemToCart(_id)}
					className='btn-rounded'
					disabled={itemCart.hasOwnProperty(_id)}
				>
					{!itemCart.hasOwnProperty(_id) ? (
						<FiShoppingCart />
					) : (
						<BsCartCheck />
					)}
				</button>
				<button className='btn-rounded'>
					<FiHeart />
				</button>
				<Link to={`/eyeglass/${_id}`}>
					<button className='btn-rounded'>
						<FiArrowRight />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Product;
