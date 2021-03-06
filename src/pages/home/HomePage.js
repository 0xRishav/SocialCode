import React from 'react';
import { CreatePost } from '../../components';
import { MenuPeopleCont } from '../../containers';
import './HomePage.css';

function HomePage() {
	return (
		<div className="HomePage">
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<MenuPeopleCont />
				<CreatePost />
			</div>
		</div>
	);
}

export default HomePage;
