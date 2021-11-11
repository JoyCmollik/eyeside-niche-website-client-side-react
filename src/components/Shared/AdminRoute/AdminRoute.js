import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user, isAdmin, isLoading } = useAuth();
	if (isLoading) {
		return <p className='absolute top-2/4 right-2/4'>Loading....</p>;
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
