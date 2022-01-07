import React from 'react';

const CartCosting = () => {
	return (
		<ul className='space-y-2 border rounded font-light p-4'>
			{/* calculations */}
			<li className='flex justify-between items-center'>
				<p>4 items</p>
				<p>$68.80</p>
			</li>
			<li className='flex justify-between items-center pb-4'>
				<p>Shipping</p>
				<p>$7.00</p>
			</li>
			<li className='flex justify-between items-center'>
				<p>Total (tax excl.)</p>
				<p>$75.80</p>
			</li>
			<li className='flex justify-between items-center'>
				<p>Total (tax incl.)</p>
				<p>$7.00</p>
			</li>
			<li className='flex justify-between items-center'>
				<p>Taxes</p>
				<p>$0.00</p>
			</li>
			<li className='pt-4 flex justify-center items-center'>
				<button className='btn bg-black text-sm text-white'>
					proceed to checkout
				</button>
			</li>
		</ul>
	);
};

export default CartCosting;
