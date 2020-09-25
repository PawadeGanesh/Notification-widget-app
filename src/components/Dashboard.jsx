import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ notificationList }) => {
	return (
		<div className="container my-5">
			<p>
				<h1>WELCOME</h1>
				<h3>
					You have <span>{notificationList.length}</span> pending Notification
				</h3>
				<h5>To check the Notifications click on Notification button</h5>
			</p>
		</div>
	);
};

export default connect((state) => ({ notificationList: state.notifyReducer.notifications }))(Dashboard);
