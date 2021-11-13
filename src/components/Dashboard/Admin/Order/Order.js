import React from 'react';

const Order = ({ order, handleStatus, handleDeleteOrder }) => {
	const {
		_id,
		user,
		order_time,
		order_product_id,
		order_product_quantity,
		order_status,
		order_product_title,
		order_total_price,
	} = order;

	const handleStatusUpdate = (e) => {
		const value = e.target.value;
		handleStatus(value, _id);
	};

	return (
		<tr>
			{/* order id plus time */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='text-sm text-gray-900'>{_id}</div>
				<div className='text-sm text-gray-500'>
					{new Date(order_time).toLocaleDateString()} (
					{new Date(order_time).toLocaleTimeString()})
				</div>
			</td>
			{/* user */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='flex-shrink-0 h-10 w-10'>
						<img
							className='h-10 w-10 rounded-full'
							src={user.user_img}
							alt=''
						/>
					</div>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							{user.name}
						</div>
						<div className='text-sm text-gray-500'>
							{user.email}
						</div>
					</div>
				</div>
			</td>
			{/* product name plus id */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{order_product_title}
				</div>
				<div className='text-sm text-gray-500'>
					Quantity: {order_product_quantity}
				</div>
			</td>
			{/* price */}
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
				${order_total_price}
			</td>
			{/* status */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<select
					onChange={handleStatusUpdate}
					className='pl-2 py-1 rounded-lg bg-green-100 text-green-700 outline-none'
				>
					<option
						selected={order_status === 'pending'}
						value='pending'
					>
						pending
					</option>
					<option
						selected={order_status === 'approved'}
						value='approved'
					>
						approved
					</option>
					<option
						selected={order_status === 'processing'}
						value='processing'
					>
						processing
					</option>
				</select>
			</td>
			{/* actions */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<button
					onClick={() => handleDeleteOrder(_id)}
					className='px-4 py-1 rounded-lg bg-red-200 text-red-500'
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Order;
