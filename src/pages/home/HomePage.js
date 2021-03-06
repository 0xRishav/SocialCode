import React from 'react';
import { CreatePost, Post } from '../../components';
import { MenuPeopleCont } from '../../containers';
import './HomePage.css';

function HomePage() {
	return (
		<div className="HomePage">
			<div style={{ display: 'flex', alignItems: 'center', padding: '100px' }}>
				<MenuPeopleCont />
				{/* <CreatePost /> */}
				<Post />
			</div>
		</div>
	);
}

export default HomePage;
