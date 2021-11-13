import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthProvider';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
			>
				<App />
			</SnackbarProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
