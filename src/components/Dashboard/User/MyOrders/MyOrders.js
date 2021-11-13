import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxios from '../../../../hooks/useAxios';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState(null);
	const { client } = useAxios();
	const { user } = useAuth();
	const [triggerFetching, setTriggerFetching] = useState(true);

	useEffect(() => {
		if (user) {
			client
				.get(`/myorders/${user.uid}`)
				.then((response) => {
					setTriggerFetching(false);
					setMyOrders(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [user, triggerFetching]);

	const handleCancelOrder = (_id) => {
		console.log(_id);
		const confirm = window.confirm('are you sure to delete?');

		if (confirm) {
			client
				.delete(`/admin/order/${_id}`)
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
			<h5 className='text-xl font-bold capitalize'>my orders</h5>
			{myOrders &&
				myOrders.map((myOrder) => (
					<MyOrder
						key={myOrder._id}
						myOrder={myOrder}
						handleCancelOrder={handleCancelOrder}
					/>
				))}
		</div>
	);
};

export default MyOrders;
