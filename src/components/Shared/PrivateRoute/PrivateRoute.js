import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
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
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
