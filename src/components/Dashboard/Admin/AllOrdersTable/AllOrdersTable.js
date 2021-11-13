import React, { useState } from 'react';
import Order from '../Order/Order';

const headingList = [
	'Order ID',
	'User',
	'Product',
	'Price',
	'Status',
	'Actions',
];
const people = [
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
];

const AllOrdersTable = ({ orders, handleStatus, handleDeleteOrder }) => {
	return (
		<div className='overflow-x-auto flex flex-col'>
			<div className='-my-2 sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='overflow-hidden border border-gray-200 sm:rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									{headingList.map((heading, index) => (
										<th
											key={index}
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											{heading}
										</th>
									))}
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{orders.map((order) => (
									<Order
										key={order._id}
										order={order}
										handleStatus={handleStatus}
										handleDeleteOrder={handleDeleteOrder}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllOrdersTable;
