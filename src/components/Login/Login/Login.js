import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import loginImage from '../../../images/mobile-login-animate.svg';
import google from '../../../images/google.png';

const Login = () => {
	const [userInput, setUserInput] = useState({
		email: '',
		password: '',
	});
	const { handleLoginUser, handleGoogleSignIn, isLoading, error, setError } =
		useAuth();
	const location = useLocation();
	const history = useHistory();

	const handleInputs = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		setError('');

		// storing value
		const newUserInput = { ...userInput };
		newUserInput[field] = value;

		// update data
		setUserInput(newUserInput);

		console.log(newUserInput);
	};

	const handleLogin = (e) => {
		handleLoginUser(userInput.email, userInput.password, location, history);

		e.preventDefault();
	};
	return (
		<div className='h-screen lg:grid grid-cols-2 text-sm'>
			<div className='h-full flex justify-center items-center'>
				<div className='w-full space-y-4' style={{ maxWidth: '400px' }}>
					<h4 className='text-4xl'>Login</h4>
					<button
						className='w-full rounded-3xl py-2 border text-black flex justify-center items-center space-x-2'
						onClick={() => handleGoogleSignIn(location, history)}
					>
						<img className='h-7' src={google} alt='google' />
						<span>Sign In With Google</span>
					</button>
					<p className='text-xs text-gray-500 text-center'>
						or sign in with email
					</p>
					<form
						className='flex flex-col space-y-4'
						onSubmit={handleLogin}
					>
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
								className='w-full rounded-3xl py-2 border text-black px-4 focus-within:ring-1 outline-none focus-within:ring-primary active:bg-brand'
								name='password'
								onBlur={handleInputs}
								type='password'
								placeholder='secret password'
								required
							/>
						</div>
						<button
							className='w-full flex justify-center items-center rounded-3xl py-2 border text-black px-4 bg-primary uppercase text-white checked:bg-brand'
							type='submit'
						>
							{isLoading && (
								<CircularProgress
									sx={{ mr: 1, fontSize: '10px' }}
									color='inherit'
								/>
							)}
							login
						</button>
						{error && <p>{error}</p>}
					</form>
					<p>
						Not registered yet?{' '}
						<Link to='/register'>
							<span className='text-primary'>
								Create an Account
							</span>
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

export default Login;
