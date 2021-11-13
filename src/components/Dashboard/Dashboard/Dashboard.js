import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddAProduct from '../Admin/AddAProduct/AddAProduct';
import useAuth from '../../../hooks/useAuth';
import GiveReview from '../User/GiveReview/GiverReview';

const Dashboard = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { path, url } = useRouteMatch();
	const { isAdmin } = useAuth();

	return (
		<div className='grid grid-cols-12 md:h-screen'>
			{/* mobile sidebar */}
			<div
				className={`absolute bg-white ${
					isDrawerOpen ? 'left-0 top-0' : '-left-full top-0'
				} transition-all duration-500 md:hidden`}
			>
				<DashboardSidebar setIsDrawerOpen={setIsDrawerOpen} url={url} />
			</div>
			{/* desktop sidebar */}
			<div
				className={`hidden md:block md:col-span-3 xl:col-span-2 transition-all duration-500`}
			>
				<DashboardSidebar setIsDrawerOpen={setIsDrawerOpen} url={url} />
			</div>
			<div className='col-span-12 md:col-span-9 xl:col-span-10 px-4 space-y-4 overflow-x-auto'>
				<DashboardHeader
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
				<Switch>
					{!isAdmin && (
						<div className=''>
							<Route exact path={`${path}`}>
								<Pay />
							</Route>
							<Route path={`${path}/myorders`}>
								<MyOrders />
							</Route>
							<Route path={`${path}/review`}>
								<GiveReview />
							</Route>
						</div>
					)}
					{isAdmin && (
						<div className=''>
							<AdminRoute exact path={`${path}`}>
								<ManageAllOrders />
							</AdminRoute>
							<AdminRoute path={`${path}/makeadmin`}>
								<MakeAdmin />
							</AdminRoute>
							<AdminRoute path={`${path}/addproduct`}>
								<AddAProduct />
							</AdminRoute>
						</div>
					)}
				</Switch>
			</div>
		</div>
	);
};

export default Dashboard;
