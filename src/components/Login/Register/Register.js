import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
		<div className='container mx-auto'>
			<h4>register</h4>
			<form className='flex flex-col space-y-4' onSubmit={handleRegister}>
				<input
					name='name'
					onBlur={handleInputs}
					type='text'
					placeholder='your name'
				/>
				<input
					name='email'
					onBlur={handleInputs}
					type='email'
					placeholder='email@email.com'
				/>
				<input
					name='password1'
					onBlur={handleInputs}
					type='password'
					placeholder='secret password'
				/>
				<input
					name='password2'
					onBlur={handleInputs}
					type='password'
					placeholder='confirm password'
				/>
				<input type='submit' value='register' />
				{error && <p>{error}</p>}
			</form>
			<p>
				Existing user? <Link to='/login'>please login</Link>
			</p>
		</div>
	);
};

export default Register;
