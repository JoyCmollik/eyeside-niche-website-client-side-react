import React from 'react';
import ordersIcon from '../../../../images/orders.png';
import approvedIcon from '../../../../images/approved.png';
import statusIcon from '../../../../images/status.png';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';

const ManageAllOrders = () => {
	return (
		<div className='space-y-4 flex flex-col items-start'>
			<div className='w-full'>
				<h5 className='text-xl font-bold capitalize'>
					Orders Statistics
				</h5>
				<div className='grid grid-cols-3 gap-4'>
					{/* orders count */}
					<div className='rounded-lg border p-4 flex space-x-4 justify-center items-center'>
						<img className='h-14' src={ordersIcon} alt='orders' />
						<div className=''>
							<h5 className='text-4xl font-bold'>47</h5>
							<h5 className='font-medium text-xl text-gray-400'>
								Orders
							</h5>
						</div>
					</div>
					{/* pending count */}
					<div className='rounded-lg border p-4 flex space-x-4 justify-center items-center'>
						<img className='h-14' src={statusIcon} alt='orders' />
						<div className=''>
							<h5 className='text-4xl font-bold'>47</h5>
							<h5 className='font-medium text-xl text-gray-400'>
								Total Pending
							</h5>
						</div>
					</div>
					{/* approved count */}
					<div className='rounded-lg border p-4 flex space-x-4 justify-center items-center'>
						<img className='h-14' src={approvedIcon} alt='orders' />
						<div className=''>
							<h5 className='text-4xl font-bold'>47</h5>
							<h5 className='font-medium text-xl text-gray-400'>
								Total Approved
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<h5 className='text-xl font-bold capitalize'>Orders</h5>
				<AllOrdersTable />
			</div>
		</div>
	);
};

export default ManageAllOrders;
