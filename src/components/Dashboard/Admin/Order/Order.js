import React from 'react';
import { Avatar } from '@mui/material';

const Order = ({ order, handleStatus, handleDeleteOrder }) => {
	const {
		_id,
		user_name,
		user_avatar,
		user_uid,
		orderedItems,
		order_costing,
		order_createdAt,
		status,
		payment,
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
					{new Date(order_createdAt).toLocaleDateString()} (
					{new Date(order_createdAt).toLocaleTimeString()})
				</div>
			</td>
			{/* user */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='flex-shrink-0 h-10 w-10'>
						<Avatar
							alt={user_name}
							src={user_avatar}
							sx={{ width: 40, height: 40 }}
						/>
					</div>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							{user_name}
						</div>
						<div className='text-sm text-gray-500'>
							#uid {user_uid}
						</div>
					</div>
				</div>
			</td>
			{/* payment status & quantity */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<div>
					{payment ? (
						<p className='px-4 py-1 text-xs bg-blue-100 text-blue-400 rounded-lg'>
							payment received
						</p>
					) : (
						<p className='px-4 py-1 text-xs bg-purple-100 text-purple-400 rounded-lg'>
							payment pending
						</p>
					)}
				</div>
			</td>
			{/* price */}
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500  flex flex-col items-start space-y-1'>
				<p className='font-bold'>${order_costing.totalIncTax}</p>
				<div className='text-sm text-gray-500'>
					Quantity: {orderedItems.length}
				</div>
			</td>
			{/* status */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<select
					onChange={handleStatusUpdate}
					defaultValue={status}
					className={`pl-2 py-1 rounded-lg outline-none ${
						(status === 'pending' &&
							'bg-yellow-100 text-yellow-700') ||
						(status === 'approved' &&
							'bg-green-100 text-green-700') ||
						(status === 'processing' &&
							'bg-indigo-100 text-indigo-700')
					}`}
				>
					<option value='pending'>pending</option>
					<option value='approved'>approved</option>
					<option value='processing'>processing</option>
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
