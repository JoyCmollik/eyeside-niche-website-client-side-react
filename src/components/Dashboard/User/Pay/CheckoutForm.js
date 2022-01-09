import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log(error);
		} else {
			console.log(paymentMethod);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
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
					disabled={!stripe}
				>
					Pay ${order.order_costing.totalIncTax}
				</button>
			</form>
		</div>
	);
};

export default CheckoutForm;
