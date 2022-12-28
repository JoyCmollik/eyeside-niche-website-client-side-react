import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user, isAdmin, isLoading } = useAuth();
	if (isLoading) {
		return (
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={true}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
		);
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user && isAdmin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/home',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
