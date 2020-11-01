import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = ({ id }) => {
	return (
		<div className='dash-buttons'>
			<Link to={`profile/${id}`} className='btn btn-light'>
				<i className='fas fa-eye text-primary'></i> View Profile
			</Link>
			<Link to='edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> Edit Profile
			</Link>
			<Link to='add-experience' className='btn btn-light'>
				<i className='fab fa-black-tie text-primary'></i> Add Experience
			</Link>
			<Link to='add-education' className='btn btn-light'>
				<i className='fas fa-graduation-cap text-primary'></i> Add Education
			</Link>
		</div>
	);
};

export default DashboardActions;
