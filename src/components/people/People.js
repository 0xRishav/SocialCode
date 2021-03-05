import React, { useState } from 'react';
import './People.css';

function People() {
	const [users, setUsers] = useState([
		{
			profilePhotoLink:
				'https://images.unsplash.com/photo-1595238793138-caeffc776186?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
			name: 'Kaushal Amrutiya',
			userName: 'kaushal_amrutiya',
		},
		{
			profilePhotoLink:
				'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80',
			name: 'Julian Wan',
			userName: 'julianwan',
		},
		{
			profilePhotoLink:
				'https://images.unsplash.com/photo-1612721785778-20e3bb526247?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
			name: 'Rakibul Hasan',
			userName: 'rikepsycho',
		},
		{
			profilePhotoLink:
				'https://images.unsplash.com/photo-1593439411281-6500cf61961c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
			name: 'Raamin ka',
			userName: 'raaminka',
		},
		{
			profilePhotoLink:
				'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
			name: 'Ankita Sharma',
			userName: 'ankita_sharma',
		},
	]);
	return (
		<div className="People">
			<h6 style={{ fontWeight: 500, color: '#6A6A71', marginBottom: '20px' }}>
				People
			</h6>
			{users.map((user) => (
				<div className="User__userContainer">
					<img
						className="User__peopleComponentUserImage"
						src={user.profilePhotoLink}
						alt={`${user.name}ProfilePhoto`}
					/>
					<div className="User__nameUsernameContainer">
						<h4 style={{ fontWeight: '600' }}>{user.name}</h4>
						<p style={{ fontSize: '0.7rem', color: '#b0b0b3' }}>
							@{user.userName}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default People;
