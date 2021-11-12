import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import ExploreGlasses from './components/ExploreGlasses/ExploreGlasses/ExploreGlasses';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import GlassDetailPage from './components/ExploreGlasses/GlassDetailPage/GlassDetailPage';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route path='/home'>
						<Home />
					</Route>
					<PrivateRoute path='/explore'>
						<ExploreGlasses />
					</PrivateRoute>
					<PrivateRoute path='/eyeglass'>
						<GlassDetailPage />
					</PrivateRoute>
					<PrivateRoute path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
