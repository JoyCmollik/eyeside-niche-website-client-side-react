import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 700,
	boxShadow: 24,
	p: 4,
};

const OrderModal = ({ isOrderOpen, setIsOrderOpen }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	const { user } = useAuth();

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
							<img
								src='https://demo1leotheme.b-cdn.net/leo_oobliss_demo/79-large_default/hummingbird-printed-t-shirt.jpg'
								alt='product'
							/>
							<h4 className='text-lg text-center text-gray-500'>
								Armani Exchange AX4029
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
										{...register('user_name')}
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
										{...register('user_email')}
									/>
								</div>
								{/* quantity */}
								<div className='flex flex-col'>
									<h5 className='uppercase text-gray-500 font-light'>
										quantity
									</h5>
									<input
										className='modal-input'
										defaultValue={1}
										type='number'
										{...register('product_quantity')}
									/>
								</div>
								{/* color */}
								<div className='flex space-x-4 items-center'>
									<h5 className='uppercase text-gray-500 font-light'>
										color
									</h5>
									<div className='flex space-x-2'>
										<button className='ring-2 ring-primary rounded-full p-0.5'>
											<span className='block p-3 rounded-full bg-black'></span>
										</button>
										<button>
											<span className='block p-3 rounded-full bg-red-400'></span>
										</button>
										<button>
											<span className='block p-3 rounded-full bg-yellow-500'></span>
										</button>
									</div>
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
