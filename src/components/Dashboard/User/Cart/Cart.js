import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { HiChevronLeft } from 'react-icons/hi';
import CartCosting from './CartCosting';
import useCart from '../../../../hooks/useCart';
import useAxios from '../../../../hooks/useAxios';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const initialCartCosting = {
	items: 0,
	itemsCost: 0,
	shipping: 0,
	totalExcTax: 0,
	totalIncTax: 0,
	taxes: 0,
};

const Cart = () => {
	const [cartProducts, setCartProducts] = useState([]);
	const [cartCosting, setCartCosting] = useState(initialCartCosting);
	const { client } = useAxios();
	const { user } = useAuth();
	const { itemCart } = useCart();
	const history = useHistory();

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

					handleCartCosting(currCartWithQuantity);
					setCartProducts(currCartWithQuantity);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [itemCart]);

	// updating product quantity and changing costings
	const handleProductQuantity = (id, quantity) => {
		const newCartProducts = cartProducts.map((product) => {
			if (product._id === id) {
				product.product_quantity = quantity;
			}
			return product;
		});

		handleCartCosting(newCartProducts);
		setCartProducts(() => newCartProducts);
	};

	const handleCartCosting = (newCartProducts) => {
		const newCartCosting = { ...cartCosting };
		let itemsTotal = newCartProducts.reduce(
			(prev, curr) => curr.product_price * curr.product_quantity + prev,
			0
		);

		newCartCosting.items = newCartProducts.reduce(
			(prev, curr) => curr.product_quantity + prev,
			0
		);
		newCartCosting.itemsCost = itemsTotal.toPrecision(4);
		newCartCosting.shipping = (itemsTotal * 0.025).toPrecision(4);
		newCartCosting.taxes = (itemsTotal * 0.1).toPrecision(4);
		newCartCosting.totalExcTax = (
			Number(newCartCosting.itemsCost) + Number(newCartCosting.shipping)
		).toPrecision(4);
		newCartCosting.totalIncTax = (
			Number(newCartCosting.totalExcTax) + Number(newCartCosting.taxes)
		).toPrecision(4);

		setCartCosting(() => newCartCosting);
	};

	const handlePlaceOrder = () => {
		const orderedItems = cartProducts.map((item) => {
			let currItem = {
				item_id: item._id,
				item_quantity: item.product_quantity,
			};
			return currItem;
		});

		const order = {
			orderedItems,
			user_uid: user.uid,
			user_avatar: user.photoURL,
			user_name: user.displayName,
			order_costing: cartCosting,
			order_createdAt: new Date(),
			status: 'pending',
			payment_status: 'unpaid',
		};

		client
			.post('order', order)
			.then((response) => {
				const insertedId = response.data.insertedId;
				console.log(response);
				history.replace(`/dashboard/pay/${insertedId}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='space-y-4 lg:space-y-0 lg:grid grid-cols-12 gap-4'>
			{/* shopping items */}
			<div className='col-span-8 space-y-4 mb-4'>
				<div className='border rounded space-y-4'>
					<h4 className='text-xl font-medium uppercase px-4 py-2 border-b'>
						shopping cart
					</h4>
					<div className='space-y-8 w-full'>
						{cartProducts &&
							cartProducts.map((product) => (
								<CartItem
									key={product._id}
									product={product}
									handleProductQuantity={
										handleProductQuantity
									}
								/>
							))}
					</div>
				</div>
				<div>
					<Link to='/explore'>
						<button className='btn bg-black text-sm text-white space-x-1 flex items-center'>
							<HiChevronLeft className='text-xl' />{' '}
							<span>continue shopping</span>
						</button>
					</Link>
				</div>
			</div>
			<div className='col-span-4 space-y-4'>
				<CartCosting
					cartCosting={cartCosting}
					handlePlaceOrder={handlePlaceOrder}
				/>
			</div>
		</div>
	);
};

export default Cart;
