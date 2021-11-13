import React, { useEffect, useState } from 'react';
import ordersIcon from '../../../../images/orders.png';
import approvedIcon from '../../../../images/approved.png';
import statusIcon from '../../../../images/status.png';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';
import useAxios from '../../../../hooks/useAxios';
import { useSnackbar } from 'notistack';
import ConfirmDialog from '../../../Shared/ConfirmDialog/ConfirmDialog';
import { CircularProgress } from '@mui/material';

const ManageAllOrders = () => {
	const [allOrders, setAllOrders] = useState([]);
	const [pendingTotal, setPendingTotal] = useState(0);
	const [approvedTotal, setApprovedTotal] = useState(0);
	const { admin } = useAxios();
	const [triggerFetching, setTriggerFetching] = useState(true);
	const { enqueueSnackbar } = useSnackbar();
	const [open, setOpen] = useState(false);
	const [deleteId, setDeleteId] = useState(null);
	const [isNoOrder, setIsNoOrder] = useState(false);

	// fetching all the orders
	useEffect(() => {
		admin
			.get('/orders')
			.then((response) => {
				const orders = response.data;
				orders.length ? setIsNoOrder(false) : setIsNoOrder(true);
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
		const update = { status };

		admin
			.put(`/status/${_id}`, update)
			.then((response) => {
				// showing alert
				enqueueSnackbar(`Status to ${status} originated!`, {
					variant: 'info',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'right',
					},
				});
				setTriggerFetching(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// deleting order
	const handleDeleteOrder = (_id) => {
		setDeleteId(_id);
		// triggering alert dialog
		setOpen(true);
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
				{allOrders.length ? (
					<AllOrdersTable
						orders={allOrders}
						handleStatus={handleStatus}
						handleDeleteOrder={handleDeleteOrder}
					/>
				) : (
					<div className='w-full flex justify-center items-center h-96'>
						{!isNoOrder ? (
							<CircularProgress color='inherit' />
						) : (
							<p className='flex-grow self-start p-4 bg-red-100 text-red-500 rounded-lg'>
								No Order Data Available
							</p>
						)}
					</div>
				)}
			</div>
			{deleteId && (
				<ConfirmDialog
					open={open}
					deleteId={deleteId}
					setOpen={setOpen}
					setDeleteId={setDeleteId}
					setTriggerFetching={setTriggerFetching}
				/>
			)}
		</div>
	);
};

export default ManageAllOrders;
