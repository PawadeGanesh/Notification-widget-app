import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import CollapsibleNotification from './collapsibleNotification';

const Notification = ({ notificationList }) => {
	const [collapse, setCollapse] = useState(true);
	const [title, setTitle] = useState('Read All');
	const [icon, setIcon] = useState('fa fa-chevron-right');
	const collapseAll = () => {
		setCollapse(!collapse);
		setIcon((state) => {
			return state === 'fa fa-chevron-right' ? 'fa fa-chevron-down' : 'fa fa-chevron-right';
		});
		setTitle((state) => {
			return state === 'Read All' ? 'Unread All' : 'Read All';
		});
	};
	console.log(notificationList);
	return (
		<div className="container my-2">
			<button type="button" className="btn-warning mt-4 mb-3 float-left">
				<i className={icon} />
				<FormGroup check>
					<Label check>
						<Input type="checkbox" onClick={collapseAll} />
						{title}
					</Label>
				</FormGroup>
			</button>
			{notificationList &&
				notificationList.map((d) => {
					return (
						<div key={d.id}>
							<CollapsibleNotification title={d.title} collapse={collapse}>
								<span>{d.desc}</span>
							</CollapsibleNotification>
							<br />
						</div>
					);
				})}
		</div>
	);
};
export default connect((state) => ({ notificationList: state.notifyReducer.notifications }))(Notification);
