import React, { useRef } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxios from '../../../../hooks/useAxios';

const MakeAdmin = () => {
	const emailRef = useRef();
	const { token } = useAuth();
	const { admin } = useAxios();

	const handleMakeAdmin = (e) => {
		const email = emailRef.current.value;

		admin
			.put(
				'/addadmin',
				{ email },
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				console.log(response.data);
			});

		e.preventDefault();
	};

	return (
		<div className='h-full flex justify-center items-center'>
			<div className='p-4 bg-white rounded shadow-lg'>
				<h4>Makeadmin</h4>
				<form onSubmit={handleMakeAdmin}>
					<input
						className='border px-4 py-1 mt-4'
						type='email'
						placeholder='admin@admin.com'
						ref={emailRef}
					/>
					<input type='submit' value='make admin' />
				</form>
			</div>
		</div>
	);
};

export default MakeAdmin;
