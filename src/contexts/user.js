import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
	const [user, setUser] = useState(null);
	return (
		<UserContext value={{ user: [user, setUser] }}>
			{props.children}
		</UserContext>
	);
};

