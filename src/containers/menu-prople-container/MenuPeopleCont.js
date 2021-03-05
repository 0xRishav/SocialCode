import React from 'react';
import { Menu, People } from '../../components';
import './MenuPeopleCont.css';

function MenuPeopleCont() {
	return (
		<div className="MenuPeopleCont">
			<h3 style={{ marginBottom: '10px' }} className="">
				RSocial
			</h3>
			<Menu />
			<People />
		</div>
	);
}

export default MenuPeopleCont;
