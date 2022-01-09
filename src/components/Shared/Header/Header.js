import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Avatar } from '@mui/material';
import useCart from '../../../hooks/useCart';

const Header = () => {
	const { user, handleSignOut } = useAuth();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { itemCart } = useCart();

	return (
		<header className='container mx-auto flex justify-between items-center px-4 md:px-0 py-4'>
			<div
				className={`fixed bg-white ${
					isDrawerOpen ? 'left-0 top-0' : '-left-full top-0'
				} transition-all duration-500 md:hidden`}
				style={{ zIndex: '9999' }}
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
			</div>
			<div className='flex justify-between items-center space-x-4'>
				{/* cart */}
				<Link to='/dashboard/cart'>
					<button className='relative'>
						<p className='text-xs text-white bg-primary rounded-full p-2 absolute -top-2 -right-2'>
							<span className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
								{Object.keys(itemCart).length}
							</span>
						</p>
						<HiOutlineShoppingCart className='text-2xl' />
					</button>
				</Link>

				{/* user profile */}
				{user?.displayName && (
					<div className='flex justify-between items-center space-x-1 border rounded-3xl px-1'>
						<Avatar
							sx={{ width: 25, height: 25 }}
							src={user?.photoURL}
							alt={user?.displayName}
						/>
						<p className='font-lora px-2 py-1'>
							{user.displayName.split(' ', 3).join(' ')}
						</p>
					</div>
				)}

				{/* login */}
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
