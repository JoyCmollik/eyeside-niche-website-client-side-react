import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
	'pk_test_51KFbQIFkFQgnjBXjiZwuTJ3R00qTPgdvb8UdvXcPPA1dQnqO8QSsejSVuvyEv6lCz3rJKEICV3jfxQLm8GBAGdBu006qoNXyuL'
);

const Pay = () => {
	const { _id } = useParams();
	const [order, setOrder] = useState(null);
	const { client } = useAxios();
	console.log(_id);

	useEffect(() => {
		client
			.get(`order/${_id}`)
			.then((response) => {
				setOrder(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='w-full shadow text-center p-4 rounded-lg'>
			{order && (
				<Elements stripe={stripePromise}>
					<CheckoutForm order={order} />
				</Elements>
			)}
		</div>
	);
};

export default Pay;
