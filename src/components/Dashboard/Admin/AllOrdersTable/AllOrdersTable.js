import React, { useState } from 'react';

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

const AllOrdersTable = () => {
	const [status, setStatus] = useState('pending');

	const handleStatus = (e) => {
		setStatus(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className='w-full flex flex-col'>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
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
								{people.map((person) => (
									<tr key={person.email}>
										{/* order id plus time */}
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='text-sm text-gray-900'>
												289374kldfjklsdjfkldsjfk
											</div>
											<div className='text-sm text-gray-500'>
												11/12/2021
											</div>
										</td>
										{/* user */}
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='flex-shrink-0 h-10 w-10'>
													<img
														className='h-10 w-10 rounded-full'
														src={person.image}
														alt=''
													/>
												</div>
												<div className='ml-4'>
													<div className='text-sm font-medium text-gray-900'>
														{person.name}
													</div>
													<div className='text-sm text-gray-500'>
														{person.email}
													</div>
												</div>
											</div>
										</td>
										{/* product name plus id */}
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='text-sm text-gray-900'>
												Full Rim Metal Eyeglasses
											</div>
											<div className='text-sm text-gray-500'>
												Quantity: 4
											</div>
										</td>
										{/* price */}
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
											$459
										</td>
										{/* status */}
										<td className='px-6 py-4 whitespace-nowrap'>
											<select
												onChange={handleStatus}
												className='pl-2 py-1 rounded-lg bg-green-100 text-green-700 outline-none'
												value={status}
											>
												<option value='pending'>
													pending
												</option>
												<option value='approved'>
													approved
												</option>
												<option value='processing'>
													processing
												</option>
											</select>
										</td>
										{/* actions */}
										<td className='px-6 py-4 whitespace-nowrap'>
											<button className='px-4 py-1 rounded-lg bg-red-200 text-red-500'>
												Delete
											</button>
										</td>
									</tr>
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
