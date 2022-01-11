import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ myOrder, handleCancelOrder }) => {
	const {
		_id,
		order_createdAt,
		orderedItems,
		status,
		order_product_title,
		order_costing,
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
							{new Date(order_createdAt).toLocaleString()}
						</p>
					</div>
					<div className=''>
						<h5 className='uppercase text-sm text-gray-500 font-light'>
							total price
						</h5>
						<p className='text-sm'>${order_costing.totalIncTax}</p>
					</div>
				</div>
				{/* right heading */}
				<div className='flex flex-col items-end space-y-2'>
					<h5 className='text-sm text-gray-500 font-light'>
						ORDER #{_id}
					</h5>
					<p className='text-xs px-4 py-1 bg-green-100 text-green-400 rounded-lg'>
						{status}
					</p>
				</div>
			</div>
			{/* order item */}
			<div className='py-2 space-y-2 lg:space-y-0 lg:flex justify-between items-center bg-white rounded-lg shadow text-gray-500 px-2 border'>
				{/* detail */}
				<div className='lg:pb-0 space-y-2 lg:space-y-0 lg:flex items-center space-x-4'>
					<h5 className='text-lg'>{order_product_title}</h5>
					<p>QTY: {orderedItems.length} items</p>
				</div>
				{/* actions */}
				<div className='flex items-center space-x-4'>
					<div>
						{payment ? (
							<p className='bg-blue-100 text-blue-500 text-sm rounded-lg px-4 py-2'>
								payment confirmed
							</p>
						) : (
							<Link to={`/dashboard/pay/${_id}`}>
								<button className='capitalize bg-primary text-white rounded-lg px-4 py-2'>
									proceed to pay
								</button>
							</Link>
						)}
					</div>
					{!payment && (
						<button
							onClick={() => handleCancelOrder(_id)}
							className='bg-red-100 text-red-500 rounded-lg px-4 py-2'
						>
							Cancel
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default MyOrder;
