import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { MdLogout } from 'react-icons/md';
import { FaUsersCog, FaHome } from 'react-icons/fa';
import { GiSunglasses } from 'react-icons/gi';

const MobileNavbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
	const { user, handleSignOut } = useAuth();
	const links = [
		{ icon: <FaHome />, to: '/home', text: 'Home' },
		{
			icon: <GiSunglasses />,
			to: '/explore',
			text: 'Explore Glasses',
		},
	];
	const privateLinks = [
		{
			icon: <FaUsersCog />,
			to: '/dashboard',
			text: 'Dashboard',
		},
	];

	return (
		<div
			className={`h-screen shadow-inner w-28 md:w-full flex flex-col justify-between items-center px-4 space-y-4 bg-light md:bg-white`}
		>
			<div className=''>
				<div className='py-4 mb-10'>
					<h1 className='hidden md:block text-2xl'>
						eye<span className='text-primary'>Side</span>
					</h1>
					<button onClick={() => setIsDrawerOpen(false)}>
						Close
					</button>
				</div>
				<div
					onClick={() => setIsDrawerOpen(false)}
					className='flex flex-col space-y-2'
				>
					{/* user links */}
					{links.map(({ icon, to, text }, index) => (
						<NavLink
							activeClassName='border-brand text-brand'
							className='md:space-x-2 flex flex-col md:flex-row items-center text-gray-500 border border-white hover:bg-red-100 hover:text-brand transition duration-300 rounded-lg p-1 md:px-4 md:py-2'
							key={index}
							exact
							to={to}
						>
							<span className='text-xl'>{icon}</span>
							<span className='text-xs text-center md:text-base md:text-left'>
								{text}
							</span>
						</NavLink>
					))}
					{/* user links */}
					{user &&
						privateLinks.map(({ icon, to, text }, index) => (
							<NavLink
								activeClassName='border-brand text-brand'
								className='md:space-x-2 flex flex-col md:flex-row items-center text-gray-500 border border-white hover:bg-red-100 hover:text-brand transition duration-300 rounded-lg p-1 md:px-4 md:py-2'
								key={index}
								exact
								to={to}
							>
								<span className='text-xl'>{icon}</span>
								<span className='text-xs text-center md:text-base md:text-left'>
									{text}
								</span>
							</NavLink>
						))}
				</div>
			</div>
			<div
				onClick={() => setIsDrawerOpen(false)}
				className='pb-10 w-full'
			>
				<button
					onClick={handleSignOut}
					className='md:space-x-2 flex flex-col md:flex-row justify-center items-center text-gray-500 border border-white hover:bg-red-100 hover:text-brand transition duration-300 rounded-lg p-1 md:px-4 md:py-2'
				>
					<span className='text-xl'>
						<MdLogout />
					</span>
					<span className='text-xs text-center md:text-base md:text-left'>
						Log Out
					</span>
				</button>
			</div>
		</div>
	);
};

export default MobileNavbar;
