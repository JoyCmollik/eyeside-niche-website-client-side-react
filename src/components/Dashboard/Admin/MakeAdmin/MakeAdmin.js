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
		<div className='space-y-4 flex flex-col items-start'>
			<h5 className='text-xl font-bold capitalize'>Make Admin</h5>
			<div className='flex flex-col items-start space-y-4 rounded-lg shadow p-4 border w-11/12 lg:w-7/12'>
				<form
					className='flex flex-col space-y-4 w-full'
					onSubmit={handleMakeAdmin}
				>
					<input
						className='border px-4 py-1 mt-4 outline-none rounded-lg'
						type='email'
						placeholder='admin@admin.com'
						ref={emailRef}
					/>
					<input
						className='uppercase px-4 py-1 rounded-lg text-white bg-black'
						type='submit'
						value='make admin'
					/>
				</form>
			</div>
		</div>
	);
};

export default MakeAdmin;
