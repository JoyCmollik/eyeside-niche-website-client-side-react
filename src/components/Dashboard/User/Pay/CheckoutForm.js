import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';
import useAuth from '../../../../hooks/useAuth';
import { Alert } from '@mui/material';

const CheckoutForm = ({ order }) => {
	const stripe = useStripe();
	const elements = useElements();
	const { _id, order_costing, user_name, status } = order;
	const { client } = useAxios();
	const { user } = useAuth();
	const history = useHistory();

	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);
	const [error, setError] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	useEffect(() => {
		const data = { price: order_costing.totalIncTax };
		client
			.post('create-payment-intent', data)
			.then((response) => {
				setClientSecret(response.data.clientSecret);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [order]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		setProcessing(true);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			setProcessing(false);
			setError(error.message);
		} else {
			console.log(paymentMethod);
			setError('');
		}

		// payment intent
		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user_name,
						email: user.email,
					},
				},
			});

		if (intentError) {
			setProcessing(false);
			setError(intentError.message);
		} else {
			setProcessing(false);
			setError('');

			// generating payment object
			const payment = {
				amount: paymentIntent.amount,
				transaction: paymentIntent.client_secret.slice('_secret')[0],
				createdAt: new Date(paymentIntent.created),
				card: paymentIntent.card,
			};

			// save to database
			client
				.put(`order/${_id}`, { payment })
				.then((response) => {
					console.log(response.data);
					history.push('/dashboard/myorders');
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<div>
			<form className='space-y-4' onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>

				<button
					className='bg-primary rounded-lg px-4 py-1 text-white'
					type='submit'
					disabled={!stripe || processing}
				>
					{processing ? (
						<span>Confirming...</span>
					) : (
						<span>Pay ${order.order_costing.totalIncTax}</span>
					)}
				</button>
				{error && (
					<Alert sx={{ mt: 4 }} severity='error'>
						{error}
					</Alert>
				)}
			</form>
		</div>
	);
};

export default CheckoutForm;
