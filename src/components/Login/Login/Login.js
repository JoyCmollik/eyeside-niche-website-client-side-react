import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
	const [userInput, setUserInput] = useState({
		email: '',
		password: '',
	});
	const { handleLoginUser, handleGoogleSignIn, isLoading, error } = useAuth();
	const location = useLocation();
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

	const handleLogin = (e) => {
		handleLoginUser(userInput.email, userInput.password, location, history);

		e.preventDefault();
	};
	return (
		<div className='container mx-auto'>
			<h4>register</h4>
			<form className='flex flex-col space-y-4' onSubmit={handleLogin}>
				<input
					name='email'
					onBlur={handleInputs}
					type='email'
					placeholder='email@email.com'
				/>
				<input
					name='password'
					onBlur={handleInputs}
					type='password'
					placeholder='secret password'
				/>
				<input type='submit' value='login' />
				{error && <p>{error}</p>}
			</form>
			<p>
				New user? <Link to='/register'>first register</Link>
			</p>
			<br />
			<button onClick={() => handleGoogleSignIn(location, history)}>
				Sign In With Google
			</button>
		</div>
	);
};

export default Login;
