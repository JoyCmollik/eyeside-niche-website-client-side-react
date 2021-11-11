import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';

const Dashboard = () => {
	const { path, url } = useRouteMatch();

	return (
		<div className='grid grid-cols-12 h-screen'>
			<div className='col-span-2 bg-black'>
				<DashboardSidebar url={url} />
			</div>
			<div className='col-span-10 bg-gray-400'>
				<Switch>
					<Route exact path={`${path}`}>
						<Pay />
					</Route>
					<Route path={`${path}/myorders`}>
						<MyOrders />
					</Route>
					<AdminRoute path={`${path}/makeadmin`}>
						<MakeAdmin />
					</AdminRoute>
				</Switch>
			</div>
		</div>
	);
};

export default Dashboard;
