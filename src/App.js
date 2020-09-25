import React, { lazy, Suspense } from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const Header = lazy(() => import('./components/Header'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Notification = lazy(() => import('./components/Notification'));
const LoginForm = lazy(() => import('./components/Login'));
const Loader = () => <div className="page-loader">Loading...</div>;

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<Loader />}>
					<Header />
					<Switch>
						<Route exact path="/" component={LoginForm} />
						<Route exact path="/main" component={Dashboard} />
						<Route exact path="/notify" component={Notification} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
