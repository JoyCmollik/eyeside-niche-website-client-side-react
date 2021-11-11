import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
	const { user, handleSignOut } = useFirebase();

	return (
		<header className='container mx-auto flex justify-between items-center py-4'>
			<div className='logo'>
				<h1>EyeSide</h1>
			</div>

			{/* links */}
			<div className='flex space-x-2 items-center'>
				<NavLink to='/home'>Home</NavLink>
				<NavLink to='/explore'>explore glasses</NavLink>
				<NavLink to='login'>login</NavLink>
				{user && <button onClick={handleSignOut}>signout</button>}
				{user?.displayName && <p>{user.displayName}</p>}
			</div>
		</header>
	);
};

export default Header;
