import React from 'react';
import { Menu, People } from '../../components';
import './MenuPeopleCont.css';

function MenuPeopleCont() {
	return (
		<div className="MenuPeopleCont">
			<h3 style={{ marginBottom: '10px' }} className="">
				RSocial
			</h3>
			<div className="MenuPeopleCont__menuPeopleWrapper">
				<Menu />
				<People />
			</div>

		</div>
	);
}

export default MenuPeopleCont;
