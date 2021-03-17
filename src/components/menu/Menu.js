import React, { useState } from 'react';
import './Menu.css';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

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
		<div className="Menu">
			<h6 style={{ fontWeight: 500, color: '#6A6A71', marginBottom: '5px' }}>
				Menu
			</h6>
			{menuOptions.map((option, index) => (
				<div
					onClick={() => handleOptionClick(option.id)}
					className="Menu__optionIconContainer"
				>
					<p
						className={
							active === option.option
								? 'Menu__menuOptionText--active Menu__menuOptionText'
								: 'Menu__menuOptionText'
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
