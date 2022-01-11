import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../../images/mobile-login-animate.svg';
import { Alert } from '@mui/material';

const Register = () => {
	const [userInput, setUserInput] = useState({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});
	const { handleRegisterUser, isLoading, error } = useAuth();
	const history = useHistory();

	const handleInputs = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		// storing value
		const newUserInput = { ...userInput };
		newUserInput[field] = value;

		// update data
		setUserInput(newUserInput);

		console.log(newUserInput);
	};

	const handleRegister = (e) => {
		if (userInput.password1 === userInput.password2) {
			handleRegisterUser(
				userInput.name,
				userInput.email,
				userInput.password1,
				history
			);
		} else {
			alert('passwords do not match');
		}

		e.preventDefault();
	};

	return (
		<div className='h-screen lg:grid grid-cols-2 text-sm'>
			<div className='h-full flex justify-center items-center'>
				<div className='w-full space-y-4' style={{ maxWidth: '400px' }}>
					<h4 className='text-4xl'>Register</h4>
					<form
						className='flex flex-col space-y-4'
						onSubmit={handleRegister}
					>
						<div className='flex flex-col space-y-1'>
							<label className='ml-2 font-semibold'>Name*</label>
							<input
								className='w-full rounded-3xl py-2 border text-black px-4 focus-within:ring-1 outline-none focus-within:ring-primary'
								name='name'
								onBlur={handleInputs}
								type='text'
								placeholder='your name'
								required
							/>
						</div>
						<div className='flex flex-col space-y-1'>
							<label className='ml-2 font-semibold'>Email*</label>
							<input
								className='w-full rounded-3xl py-2 border text-black px-4 focus-within:ring-1 outline-none focus-within:ring-primary'
								name='email'
								onBlur={handleInputs}
								type='email'
								placeholder='email@email.com'
								required
							/>
						</div>
						<div className='flex flex-col space-y-1'>
							<label className='ml-2 font-semibold'>
								Password*
							</label>
							<input
								className='w-full rounded-3xl py-2 border text-black px-4 focus-within:ring-1 outline-none focus-within:ring-primary'
								name='password1'
								onBlur={handleInputs}
								type='password'
								placeholder='secret password'
								required
							/>
						</div>
						<div className='flex flex-col space-y-1'>
							<label className='ml-2 font-semibold'>
								Confirm Password*
							</label>
							<input
								className='w-full rounded-3xl py-2 border text-black px-4 focus-within:ring-1 outline-none focus-within:ring-primary'
								name='password2'
								onBlur={handleInputs}
								type='password'
								placeholder='confirm password'
								required
							/>
						</div>
						<button
							className='w-full flex justify-center items-center rounded-3xl py-2 border text-black px-4 bg-primary uppercase text-white checked:bg-brand'
							type='submit'
						>
							{isLoading ? 'registering...' : 'register'}
						</button>
						{error && <Alert severity='error'>{error}</Alert>}
					</form>
					<p>
						Already have an account?{' '}
						<Link to='/login'>
							<span className='text-primary'>Please Login</span>
						</Link>
					</p>
				</div>
			</div>
			<div className='hidden lg:block'>
				<img className='h-full object-cover' src={loginImage} alt='' />
			</div>
		</div>
	);
};

export default Register;
