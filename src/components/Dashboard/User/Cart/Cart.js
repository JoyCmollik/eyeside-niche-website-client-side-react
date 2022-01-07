import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { HiChevronLeft } from 'react-icons/hi';
import CartCosting from './CartCosting';
import useCart from '../../../../hooks/useCart';
import useAxios from '../../../../hooks/useAxios';

const Cart = () => {
	const [cartProducts, setCartProducts] = useState([]);
	const { client } = useAxios();
	const { itemCart } = useCart();

	useEffect(() => {
		if (itemCart) {
			client
				.post('cart/products', { itemCart })
				.then((response) => {
					const currCart = response.data;

					// updating quantity in the products
					const currCartWithQuantity = currCart.map((product) => {
						product.product_quantity = itemCart[product._id];
						return product;
					});

					console.log(currCartWithQuantity);

					setCartProducts(currCartWithQuantity);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [itemCart]);

	return (
		<div className='space-y-4 lg:space-y-0 lg:grid grid-cols-12 gap-4'>
			{/* shopping items */}
			<div className='col-span-8 space-y-4'>
				<div className='border rounded space-y-4'>
					<h4 className='text-xl font-medium uppercase px-4 py-2 border-b'>
						shopping cart
					</h4>
					<div className='space-y-8 w-full'>
						{cartProducts &&
							cartProducts.map((product) => (
								<CartItem key={product._id} product={product} />
							))}
					</div>
				</div>
				<button className='btn bg-black text-sm text-white space-x-1 flex items-center'>
					<HiChevronLeft className='text-xl' />{' '}
					<span>continue shopping</span>
				</button>
			</div>
			<div className='col-span-4 space-y-4'>
				<CartCosting />
			</div>
		</div>
	);
};

export default Cart;
