import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/firebase/firebase.init';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();

	// register user
	const handleRegisterUser = (name, email, password, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setError('');
				// updating name
				updateProfile(auth.currentUser, {
					displayName: name,
				}).then(() => {});
				console.log(result.user);

				// redirecting to home
				history.replace('/home');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// login user
	const handleLoginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setError('');
				console.log(result.user);
				history.replace(location.state.from);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// handling auth state change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setIsLoading(false);
		});

		return () => unsubscribe;
	}, [auth]);

	// signout user
	const handleSignOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setError('');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		user,
		error,
		isLoading,
		handleRegisterUser,
		handleLoginUser,
		handleSignOut,
	};
};

export default useFirebase;
