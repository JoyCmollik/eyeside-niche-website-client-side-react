import React from 'react';

const CartCosting = ({ cartCosting, handlePlaceOrder }) => {
	const { items, itemsCost, shipping, taxes, totalExcTax, totalIncTax } =
		cartCosting;

	return (
		<ul className='space-y-2 border rounded font-light p-4'>
			{/* calculations */}
			<li className='flex justify-between items-center'>
				<p>{items} items</p>
				<p>${itemsCost}</p>
			</li>
			<li className='flex justify-between items-center pb-4'>
				<p>Shipping</p>
				<p>${shipping}</p>
			</li>
			<li className='flex justify-between items-center'>
				<p>Total (tax excl.)</p>
				<p>${totalExcTax}</p>
			</li>
			<li className='flex justify-between items-center'>
				<p>Total (tax incl.)</p>
				<p>${totalIncTax}</p>
			</li>
			<li className='flex justify-between items-center'>
				<p>Taxes</p>
				<p>${taxes}</p>
			</li>
			<li className='pt-4 flex justify-center items-center'>
				<button
					onClick={handlePlaceOrder}
					className='btn bg-black text-sm text-white'
					disabled={!Boolean(items)}
				>
					confirm & proceed to checkout
				</button>
			</li>
		</ul>
	);
};

export default CartCosting;
