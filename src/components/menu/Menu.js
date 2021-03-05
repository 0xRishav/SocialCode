import React, { useState } from 'react';
import './Menu.css';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { white } from '@material-ui/core/colors';

function Menu() {
	const menuOptions = [
		{
			option: 'Feed',
			icon: DynamicFeedIcon,
			id: 0,
		},
	];
	const [active, setActive] = useState('Feed');
	const handleOptionClick = (i) => {
		menuOptions.forEach((option) => {
			if (option.id === i) {
				setActive(option.option);
			}
		});
	};
	return (
		<div style={{ padding: '50px' }} className="menu">
			<h5 style={{ fontWeight: 500, color: '#6A6A71', marginBottom: '20px' }}>
				Menu
			</h5>
			{menuOptions.map((option, index) => (
				<div
					onClick={() => handleOptionClick(option.id)}
					className="option-icon-container"
				>
					<p
						className={
							active === option.option
								? 'active menu-option-text'
								: 'menu-option-text'
						}
					>
						{option.option}
					</p>
					<option.icon
						style={{
							color: active === option.option ? 'white' : '#B0B0B3',
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default Menu;
