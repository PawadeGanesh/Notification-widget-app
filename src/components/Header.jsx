import React from 'react';
import { useHistory, Redirect, withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import { connect } from 'react-redux';

const Header = ({ notificationList }) => {
	const history = useHistory();

	const userName = sessionStorage.getItem('userName');
	const isLoginPage = window.location.pathname === '/';
	if (userName && isLoginPage) {
		return <Redirect to="/main" />;
	}
	if (!userName && !isLoginPage) {
		return <Redirect to="/" />;
	}

	const handleLogout = () => {
		sessionStorage.removeItem('userName');
		history.push('/');
	};

	return (
		<div>
			{userName && (
				<Navbar style={{ backgroundColor: '#d5dcde' }} light expand="sm">
					<div className="container">
						<NavbarBrand href="/main">
							<b>Notification App</b>
						</NavbarBrand>
						<span style={{ float: 'right' }}>
							{userName && <strong>Welcome, {userName}</strong>}
							<button
								type="button"
								className="btn btn-primary right ml-3"
								onClick={() => {
									history.push('/notify');
								}}
							>
								Notifications
								<span className="badge badge-light ml-3">{notificationList.length}</span>
							</button>
							<button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={handleLogout}>
								SignOut
							</button>
						</span>
					</div>
				</Navbar>
			)}
		</div>
	);
};

export default withRouter(
	connect((state) => ({
		notificationList: state.notifyReducer.notifications,
	}))(Header)
);
