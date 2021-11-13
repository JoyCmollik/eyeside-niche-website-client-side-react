import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
	const { user, handleSignOut } = useAuth();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<header className='container mx-auto flex justify-between items-center px-4 md:px-0 py-4'>
			<div
				className={`absolute bg-white ${
					isDrawerOpen ? 'left-0 top-0' : '-left-full top-0'
				} transition-all duration-500 md:hidden`}
			>
				<MobileNavbar
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
			</div>
			{/* hamburger */}
			<button
				className='text-primary text-2xl p-1 border border-primary rounded md:hidden'
				onClick={() => setIsDrawerOpen(!isDrawerOpen)}
			>
				<FiMenu />
			</button>
			<div className='logo'>
				<h1 className='text-2xl font-bold'>EyeSide</h1>
			</div>

			{/* links */}
			<div className='hidden md:flex space-x-4 items-center'>
				<NavLink
					className='transition duration-300 transform hover:text-primary hover:-translate-y-px'
					to='/home'
				>
					Home
				</NavLink>
				<NavLink
					className='transition duration-300 transform hover:text-primary hover:-translate-y-px'
					to='/explore'
				>
					Explore Glasses
				</NavLink>
				{user && (
					<NavLink
						className='transition duration-100 transform hover:text-primary hover:-translate-y-px'
						to='/dashboard'
					>
						Dashboard
					</NavLink>
				)}

				{user?.displayName && (
					<p className='font-lora bg-blue-50 rounded px-2 py-1'>
						{user.displayName.split(' ', 3).join(' ')}
					</p>
				)}
				{user ? (
					<button
						className='bg-brand rounded-3xl px-4 py-1 text-white'
						onClick={handleSignOut}
					>
						Signout
					</button>
				) : (
					<NavLink
						className='bg-primary rounded-lg px-4 py-1 text-white'
						to='login'
					>
						LOGIN/REGISTER
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
