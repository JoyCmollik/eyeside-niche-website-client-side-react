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
	const [isCartUpdated, setIsCartUpdated] = useState(false);

	useEffect(() => {
		const currCart = getCart();
		console.log(currCart);
		if (currCart) {
			setItemCart(currCart);
		}

		setIsCartUpdated(true);
	}, [isCartUpdated]);

	const addItemToCart = (itemId) => {
		console.log(itemId);
		addToCart(itemId);
		setIsCartUpdated(false);
	};

	const removeItemFromCart = (itemId) => {
		removeFromCart(itemId);
		setIsCartUpdated(false);
	};

	const updateQuantityInCart = (itemId, quantity) => {
		cartItemQuantity(itemId, quantity);
		setIsCartUpdated(false);
	};

	return {
		itemCart,
		addItemToCart,
		removeItemFromCart,
		updateQuantityInCart,
	};
};

export default useCart;
