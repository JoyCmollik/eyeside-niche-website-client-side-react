import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxios from '../../../../hooks/useAxios';
import MyOrder from '../MyOrder/MyOrder';
import ConfirmDialog from '../../../Shared/ConfirmDialog/ConfirmDialog';
import loading from '../../../../images/1490.png';

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const { client } = useAxios();
	const { user } = useAuth();
	const [triggerFetching, setTriggerFetching] = useState(true);
	const [open, setOpen] = useState(false);
	const [deleteId, setDeleteId] = useState(null);
	const [isNoOrder, setIsNoOrder] = useState(false);

	useEffect(() => {
		if (user) {
			client
				.get(`/myorders/${user.uid}`)
				.then((response) => {
					setTriggerFetching(false);
					setMyOrders(response.data);

					// checking if user have no order
					response.data.length
						? setIsNoOrder(false)
						: setIsNoOrder(true);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [user, triggerFetching]);

	// deleting order
	const handleCancelOrder = (_id) => {
		setDeleteId(_id);
		// triggering alert dialog
		setOpen(true);
	};

	return (
		<>
			<div className='space-y-4 flex flex-col items-start'>
				{deleteId && (
					<ConfirmDialog
						open={open}
						deleteId={deleteId}
						setOpen={setOpen}
						setDeleteId={setDeleteId}
						setTriggerFetching={setTriggerFetching}
					/>
				)}
				<h5 className='text-xl font-bold capitalize'>my orders</h5>
				{myOrders.length ? (
					myOrders.map((myOrder) => (
						<MyOrder
							key={myOrder._id}
							myOrder={myOrder}
							handleCancelOrder={handleCancelOrder}
						/>
					))
				) : (
					<div className='w-full flex justify-center items-center h-96'>
						{!isNoOrder ? (
							<img src={loading} alt='loading icon' />
						) : (
							<p className='flex-grow self-start p-4 bg-red-100 text-red-500 rounded-lg'>
								You haven't ordered anything yet!
							</p>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default MyOrders;
