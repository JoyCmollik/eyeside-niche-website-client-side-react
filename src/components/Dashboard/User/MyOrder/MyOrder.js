import React from 'react';

const MyOrder = ({ myOrder, handleCancelOrder }) => {
	const {
		_id,
		order_time,
		order_product_quantity,
		order_status,
		order_product_title,
		order_total_price,
		payment,
	} = myOrder;

	return (
		<div className='w-full border rounded-lg p-2 space-y-2'>
			{/* heading */}
			<div className='lg:flex space-y-2 lg:space-y-0 justify-between'>
				{/* left heading */}
				<div className='flex justify-between lg:justify-start space-x-4'>
					<div className=''>
						<h5 className='uppercase text-sm text-gray-500 font-light'>
							order placed
						</h5>
						<p className='text-sm'>
							{new Date(order_time).toLocaleDateString()}
						</p>
					</div>
					<div className=''>
						<h5 className='uppercase text-sm text-gray-500 font-light'>
							total price
						</h5>
						<p className='text-sm'>${order_total_price}</p>
					</div>
				</div>
				{/* right heading */}
				<div className=''>
					<h5 className='text-sm text-gray-500 font-light'>
						ORDER #{_id}
					</h5>
				</div>
			</div>
			{/* order item */}
			<div className='pb-2 lg:pb-0 space-y-2 lg:space-y-0 lg:flex justify-between items-center bg-white rounded-lg shadow text-gray-500 px-2 border'>
				{/* detail */}
				<div className='pb:2 lg:pb-0 space-y-2 lg:space-y-0 lg:flex items-center space-x-4'>
					<img
						className='object-cover h-28'
						src='https://demo1leotheme.b-cdn.net/leo_oobliss_demo/84-home_default/brown-bear-printed-sweater.jpg'
						alt='glass img'
					/>
					<h5 className='text-lg'>{order_product_title}</h5>
					<p>QTY: {order_product_quantity}</p>
				</div>
				{/* actions */}
				<div className='flex items-center space-x-4'>
					<div>
						{payment ? (
							<p className='bg-green-100 text-green-500 rounded-lg px-4 py-2'>
								paid
							</p>
						) : (
							<p className='bg-purple-100 text-purple-500 rounded-lg px-4 py-2'>
								payment pending
							</p>
						)}
					</div>
					<button
						onClick={() => handleCancelOrder(_id)}
						className='bg-red-100 text-red-500 rounded-lg px-4 py-2'
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyOrder;
