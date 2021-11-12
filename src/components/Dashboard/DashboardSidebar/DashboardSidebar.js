import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashboardSidebar = ({ url }) => {
	const { isAdmin } = useAuth();

	return (
		<div className='w-full p-4 text-white flex flex-col space-y-4'>
			<h1>Dashboard Sidebar</h1>
			<NavLink to={`${url}`}>Pay</NavLink>
			<NavLink to={`${url}/myorders`}>My Orders</NavLink>
			<NavLink to={`${url}/review`}>Review</NavLink>
			{isAdmin && (
				<NavLink to={`${url}/manageorders`}>Manage All Orders</NavLink>
			)}
			{isAdmin && <NavLink to={`${url}/makeadmin`}>Make Admin</NavLink>}
			{isAdmin && (
				<NavLink to={`${url}/addproduct`}>Add a Product</NavLink>
			)}
		</div>
	);
};

export default DashboardSidebar;
