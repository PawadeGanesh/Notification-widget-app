import React, { useState, useEffect } from 'react';
import { Collapse, FormGroup, Label, Input } from 'reactstrap';

const CollapsibleNotification = ({ title, collapse, children }) => {
	const [isCollapse, setIsCollapse] = useState(collapse);
	const [icon, setIcon] = useState('fa fa-chevron-down');
	const toggle = () => {
		setIsCollapse(!isCollapse);
		setIcon((state) => {
			return state === 'fa fa-chevron-down' ? 'fa fa-chevron-right' : 'fa fa-chevron-down';
		});
	};

	const animate = (collapse) => {
		setIsCollapse(collapse);
		setIcon((state) => {
			return state === 'fa fa-chevron-down' ? 'fa fa-chevron-right' : 'fa fa-chevron-down';
		});
	};

	useEffect(() => {
		animate(!collapse);
	}, [collapse]);

	return (
		<div className="coll-panel">
			<button type="button" className="coll-panel-btn btn-primary btn-block text-left">
				<i className={icon} />
				<FormGroup check>
					<Label check>
						<Input type="checkbox" onClick={() => toggle()} />
						{title}
					</Label>
				</FormGroup>
			</button>
			<Collapse className="border text-left p-2" isOpen={isCollapse}>
				{children}
			</Collapse>
		</div>
	);
};

export default CollapsibleNotification;
