import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { HiPlus, HiMinus } from 'react-icons/hi';
import useCart from '../../../../hooks/useCart';

const CartItem = ({ product, handleProductQuantity }) => {
	const {
		product_title,
		product_price,
		product_colors,
		product_quantity,
		product_img,
	} = product;
	const [selectedColor, setSelectedColor] = useState(product_colors[0]);
	const [quantity, setQuantity] = useState(product_quantity);
	const { removeItemFromCart } = useCart();

	const handleQuantityOperation = (operation, quantity = 1) => {
		let newQuantity;
		if (operation === 'inc') {
			newQuantity = product_quantity + 1;
		} else if (operation === 'dec' && product_quantity - 1) {
			newQuantity = product_quantity - 1;
		} else {
			newQuantity = Number(quantity);
		}

		handleProductQuantity(product._id, newQuantity);
		setQuantity(() => newQuantity);
	};

	return (
		<article className='flex items-start justify-around px-8 space-x-8'>
			<img
				className='w-28 object-cover'
				src={product_img}
				alt='eye wear'
			/>
			<div className='flex-grow lg:flex items-start lg:justify-around lg:space-x-4 space-y-2 lg:space-y-0'>
				<div className='lg:space-y-2 w-2/4'>
					<h4 className='font-medium'>{product_title}</h4>
					<h2 className='text-xl font-bold text-primary'>
						${product_price}
					</h2>
					{/* colors */}
					<div className='flex space-x-4 items-center'>
						<h5 className='text-sm'>Choose color:</h5>
						<div className='flex space-x-2'>
							{product_colors.map((color, index) => (
								<button
									key={index}
									onClick={() => setSelectedColor(color)}
									className={`${
										selectedColor === color &&
										'ring-2 ring-primary'
									} rounded-full p-0.5`}
								>
									<span
										className={`block p-2 rounded-full ${color}`}
									></span>
								</button>
							))}
						</div>
					</div>
				</div>
				<div className='flex-grow flex items-start justify-between lg:justify-around'>
					{/* quantity */}
					<div className='p-2 shadow flex justify-between items-center space-x-4 border'>
						<button
							onClick={() => handleQuantityOperation('dec')}
							className=''
						>
							<HiMinus />
						</button>
						<input
							onChange={(e) => setQuantity(e.target.value)}
							onBlur={() =>
								handleQuantityOperation('set', quantity)
							}
							className='bg-transparent outline-none w-4'
							type='text'
							value={quantity}
						/>
						<button onClick={() => handleQuantityOperation('inc')}>
							<HiPlus />
						</button>
					</div>
					{/* final price of single item */}
					<h5 className='text-lg font-medium'>
						${(product_price * quantity).toPrecision(4)}
					</h5>
					{/* delete button */}
					<button
						onClick={() => removeItemFromCart(product._id)}
						className='text-xl'
					>
						<MdDelete />
					</button>
				</div>
			</div>
		</article>
	);
};

export default CartItem;
