import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { useSnackbar } from 'notistack';
import useAxios from '../../../hooks/useAxios';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 700,
	boxShadow: 24,
	p: 4,
};

const OrderModal = (props) => {
	const { isOrderOpen, setIsOrderOpen, selectedColor, quantity, product } =
		props;
	const { register, handleSubmit } = useForm();
	const { user } = useAuth();
	const { enqueueSnackbar } = useSnackbar();
	const { client } = useAxios();

	// sending order data to server
	const onSubmit = (data) => {
		let order = {};

		// setting the ordered user
		order.user = { ...data };
		order.user.user_img = user.photoURL;
		order.user.user_uid = user.uid;

		// setting order info
		order.order_time = new Date().toLocaleString();
		order.order_product_id = product._id;
		order.order_product_title = product.product_title;
		order.order_product_quantity = quantity;
		order.order_status = 'pending';
		order.order_total_price = parseFloat(product.product_price) * quantity;

		client
			.post('/placeorder', order)
			.then((response) => {
				// alert
				enqueueSnackbar('Order Placed Successfully!', {
					variant: 'success',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'right',
					},
				});
				setIsOrderOpen(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Modal
			open={isOrderOpen}
			onClose={() => setIsOrderOpen(false)}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={isOrderOpen}>
				<div className='rounded-lg bg-white p-4 w-full' style={style}>
					<div className='grid grid-cols-1 lg:grid-cols-2'>
						<div className=''>
							<img src={product?.product_img} alt='product' />
							<h4 className='text-lg text-center text-gray-500'>
								{product?.product_title}
							</h4>
						</div>
						<div className='bg-light p-4 rounded-lg'>
							<form
								className='flex flex-col space-y-2'
								onSubmit={handleSubmit(onSubmit)}
							>
								{/* name */}
								<div className='flex flex-col'>
									<h5 className='uppercase text-gray-500 font-light'>
										name
									</h5>
									<input
										className='modal-input'
										defaultValue={user.displayName}
										{...register('name')}
									/>
								</div>
								{/* email */}
								<div className='flex flex-col'>
									<h5 className='uppercase text-gray-500 font-light'>
										email
									</h5>
									<input
										className='modal-input'
										defaultValue={user.email}
										{...register('email')}
									/>
								</div>
								{/* quantity */}
								<div className='flex flex-col'>
									<h5 className='uppercase text-gray-500 font-light'>
										quantity
									</h5>
									<input
										className='modal-input'
										defaultValue={quantity}
										type='number'
										disabled
									/>
								</div>
								{/* color */}
								<div className='flex space-x-4 items-center'>
									<h5 className='uppercase text-gray-500 font-light'>
										color
									</h5>
									{selectedColor ? (
										<span
											className={`block ring-2 ring-primary p-3 rounded-full ${selectedColor}`}
										></span>
									) : (
										<span className='text-sm text-red-400'>
											color not selected
										</span>
									)}
								</div>

								<input
									className='border bg-primary text-white uppercase px-4 py-2 rounded-lg shadow'
									type='submit'
									value='confirm order'
								/>
							</form>
						</div>
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default OrderModal;
