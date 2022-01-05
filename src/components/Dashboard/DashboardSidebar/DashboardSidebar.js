import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { BsFillCreditCard2FrontFill, BsBagCheckFill } from 'react-icons/bs';
import {
	MdRateReview,
	MdAdminPanelSettings,
	MdLibraryAdd,
	MdLogout,
	MdOutlineShoppingCart,
} from 'react-icons/md';
import { FaUsersCog, FaHome } from 'react-icons/fa';

const DashboardSidebar = ({ setIsDrawerOpen, url }) => {
	const { isAdmin, handleSignOut } = useAuth();
	const userLinks = [
		{ icon: <FaHome />, to: '/home', text: 'Home' },
		{
			icon: <MdOutlineShoppingCart />,
			to: `${url}/cart`,
			text: 'Cart',
		},
		{ icon: <BsFillCreditCard2FrontFill />, to: `${url}`, text: 'Pay' },
		{ icon: <BsBagCheckFill />, to: `${url}/myorders`, text: 'My Orders' },
		{ icon: <MdRateReview />, to: `${url}/review`, text: 'Review' },
	];
	const adminLinks = [
		{ icon: <FaHome />, to: '/home', text: 'Home' },
		{
			icon: <FaUsersCog />,
			to: `${url}`,
			text: 'Manage All Orders',
		},
		{
			icon: <MdAdminPanelSettings />,
			to: `${url}/makeadmin`,
			text: 'Make Admin',
		},
		{
			icon: <MdLibraryAdd />,
			to: `${url}/addproduct`,
			text: 'Add a Product',
		},
	];

	return (
		<div
			className='h-screen w-28 md:w-full flex flex-col justify-between items-center px-4 space-y-4 bg-light md:bg-white'
			style={{ zIndex: '9999' }}
		>
			<div className=''>
				<div className='py-4 mb-10'>
					<h1 className='hidden md:block text-2xl'>
						eye<span className='text-primary'>Side</span>
					</h1>
					<button
						className='md:hidden'
						onClick={() => setIsDrawerOpen(false)}
					>
						Close
					</button>
				</div>
				<div
					onClick={() => setIsDrawerOpen(false)}
					className='flex flex-col space-y-2'
				>
					{/* user links */}
					{!isAdmin &&
						userLinks.map(({ icon, to, text }, index) => (
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
					{/* admin links */}
					{isAdmin &&
						adminLinks.map(({ icon, to, text }, index) => (
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

export default DashboardSidebar;
