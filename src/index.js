import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthProvider';
import { SnackbarProvider } from 'notistack';
import CartProvider from './contexts/CartProvider';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<SnackbarProvider
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
				>
					<App />
				</SnackbarProvider>
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
