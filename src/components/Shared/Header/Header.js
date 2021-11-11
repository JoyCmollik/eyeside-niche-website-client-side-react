import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
	const { user, handleSignOut } = useFirebase();

	return (
		<header className='container mx-auto flex justify-between items-center py-4'>
			<div className='logo'>
				<h1 className='text-2xl font-bold'>EyeSide</h1>
			</div>

			{/* links */}
			<div className='flex space-x-4 items-center'>
				<NavLink to='/home'>Home</NavLink>
				<NavLink to='/explore'>explore glasses</NavLink>
				{user && <NavLink to='dashboard'>dashboard</NavLink>}
			</div>

			{/* dynamic links */}
			<div className='flex items-center space-x-4'>
				{user ? (
					<button onClick={handleSignOut}>signout</button>
				) : (
					<NavLink to='login'>LOGIN/REGISTER</NavLink>
				)}
				{user?.displayName && (
					<p className='bg-gray-400 rounded-3xl px-2 py-1'>
						{user.displayName}
					</p>
				)}
			</div>
		</header>
	);
};

export default Header;
