import { useState, useEffect } from 'react';
import {
	getCart,
	setCart,
	addToCart,
	removeFromCart,
	cartItemQuantity,
} from '../utilities/cartLocalStorage';

const useCart = () => {
	const [itemCart, setItemCart] = useState({});
	const [isCartUpdated, setIsCartUpdated] = useState(true);

	useEffect(() => {
		if (isCartUpdated) {
			const currCart = getCart();

			if (currCart) {
				setItemCart(currCart);
			}

			setIsCartUpdated(false);
		}
	}, [isCartUpdated]);

	const addItemToCart = (itemId) => {
		console.log(itemId);
		addToCart(itemId);
		setIsCartUpdated(true);
	};

	const removeItemFromCart = (itemId) => {
		removeFromCart(itemId);
		setIsCartUpdated(true);
	};

	const updateQuantityInCart = (itemId, quantity) => {
		cartItemQuantity(itemId, quantity);
		setIsCartUpdated(true);
	};

	const resetCart = () => {
		setCart({});
		setIsCartUpdated(true);
	};

	return {
		itemCart,
		addItemToCart,
		removeItemFromCart,
		updateQuantityInCart,
		resetCart,
	};
};

export default useCart;
