const getCart = () => {
	const cartLs = localStorage.getItem('cart');
	return JSON.parse(cartLs);
};

const setCart = (newCart) => {
	localStorage.setItem('cart', JSON.stringify(newCart));
};

const addToCart = (itemId) => {
	console.log(itemId);
	let currCart = getCart();
	let newCart = {};

	// conditions to keep in mind => i) if the cart is empty
	if (!currCart) {
		setCart(newCart);
		currCart = getCart();
	}

	newCart = { ...currCart };

	// conditions => i) cart doesn't contain the item ii) cart already contains the item, increase quantity
	if (!currCart.hasOwnProperty(itemId)) {
		newCart[itemId] = 1;
	} else {
		newCart[itemId] += 1;
	}

	setCart(newCart);
};

const cartItemQuantity = (itemId, quantity) => {
	let currCart = getCart();
	let newCart = { ...currCart };

	newCart[itemId] = quantity;
	setCart(newCart);

	return getCart();
};

const removeFromCart = (itemId) => {
	const currCart = getCart();
	let newCart = { ...currCart };
	delete newCart[itemId];
	setCart(newCart);

	return getCart();
};

export { addToCart, removeFromCart, getCart, setCart, cartItemQuantity };
