import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Review from '../User/Review/Review';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddAProduct from '../Admin/AddAProduct/AddAProduct';

const Dashboard = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { path, url } = useRouteMatch();

	return (
		<div className='grid grid-cols-12 md:h-screen'>
			{/* mobile sidebar */}
			<div
				className={`absolute left-0 top-0 bg-white transform ${
					isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-all duration-500 md:hidden`}
			>
				<DashboardSidebar
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
					url={url}
				/>
			</div>
			{/* desktop sidebar */}
			<div
				className={`hidden md:block md:col-span-3 xl:col-span-2 transition-all duration-500`}
			>
				<DashboardSidebar
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
					url={url}
				/>
			</div>
			<div className='col-span-12 md:col-span-9 xl:col-span-10 border-l-4 px-4 space-y-4'>
				<DashboardHeader
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
				<div className=''>
					<Switch>
						<Route exact path={`${path}`}>
							<Pay />
						</Route>
						<Route path={`${path}/myorders`}>
							<MyOrders />
						</Route>
						<Route path={`${path}/review`}>
							<Review />
						</Route>
						<AdminRoute path={`${path}/makeadmin`}>
							<MakeAdmin />
						</AdminRoute>
						<AdminRoute path={`${path}/manageorders`}>
							<ManageAllOrders />
						</AdminRoute>
						<AdminRoute path={`${path}/addproduct`}>
							<AddAProduct />
						</AdminRoute>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
