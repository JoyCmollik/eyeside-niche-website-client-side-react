import React, { createContext } from 'react';
import useCartFunctions from '../hooks/useCartFunctions';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const allCartContexts = useCartFunctions();

	return (
		<CartContext.Provider value={allCartContexts}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
