import React, { useEffect, useState } from 'react';
import ordersIcon from '../../../../images/orders.png';
import approvedIcon from '../../../../images/approved.png';
import statusIcon from '../../../../images/status.png';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';
import useAxios from '../../../../hooks/useAxios';

const ManageAllOrders = () => {
	const [allOrders, setAllOrders] = useState([]);
	const [pendingTotal, setPendingTotal] = useState(0);
	const [approvedTotal, setApprovedTotal] = useState(0);
	const { admin } = useAxios();
	const [triggerFetching, setTriggerFetching] = useState(true);

	// fetching all the orders
	useEffect(() => {
		admin
			.get('/orders')
			.then((response) => {
				const orders = response.data;
				setTriggerFetching(false);
				setAllOrders(orders);

				// calculating pending total
				setPendingTotal(
					orders.filter(
						(orderItem) => orderItem.order_status === 'pending'
					).length
				);
				// calculating approved total
				setApprovedTotal(
					orders.filter(
						(orderItem) => orderItem.order_status === 'approved'
					).length
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [triggerFetching]);

	// updating the status
	const handleStatus = (status, _id) => {
		console.log(status, _id);
		const update = { status };

		admin
			.put(`/status/${_id}`, update)
			.then((response) => {
				setTriggerFetching(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// deleting order
	const handleDeleteOrder = (_id) => {
		console.log(_id);
		const confirm = window.confirm('are you sure to delete?');

		if (confirm) {
			admin
				.delete(`/order/${_id}`)
				.then((response) => {
					setTriggerFetching(true);
					console.log(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<div className='space-y-4 flex flex-col items-start'>
			<div className='w-full space-y-4'>
				<h5 className='text-xl font-bold capitalize'>
					Orders Statistics
				</h5>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{/* orders count */}
					<div className='rounded-lg border p-4 flex space-x-4 justify-center items-center'>
						<img className='h-14' src={ordersIcon} alt='orders' />
						<div className=''>
							<h5 className='text-4xl font-bold'>
								{allOrders.length}
							</h5>
							<h5 className='font-medium text-xl text-gray-400'>
								Orders
							</h5>
						</div>
					</div>
					{/* pending count */}
					<div className='rounded-lg border p-4 flex space-x-4 justify-center items-center'>
						<img className='h-14' src={statusIcon} alt='orders' />
						<div className=''>
							<h5 className='text-4xl font-bold'>
								{pendingTotal}
							</h5>
							<h5 className='font-medium text-xl text-gray-400'>
								Total Pending
							</h5>
						</div>
					</div>
					{/* approved count */}
					<div className='rounded-lg border p-4 flex space-x-4 justify-center items-center'>
						<img className='h-14' src={approvedIcon} alt='orders' />
						<div className=''>
							<h5 className='text-4xl font-bold'>
								{approvedTotal}
							</h5>
							<h5 className='font-medium text-xl text-gray-400'>
								Total Approved
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full space-y-4'>
				<h5 className='text-xl font-bold capitalize'>Orders</h5>
				{allOrders && (
					<AllOrdersTable
						orders={allOrders}
						handleStatus={handleStatus}
						handleDeleteOrder={handleDeleteOrder}
					/>
				)}
			</div>
		</div>
	);
};

export default ManageAllOrders;
