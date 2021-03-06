import { useContext, useEffect, useState } from 'react';
import './App.css';
import { UserContext } from './contexts/user';
import { SignInPage, HomePage } from './pages';

function App() {
	const [user, setUser] = useContext(UserContext).user;

	return (
		<div className="App">
			{true ? <HomePage /> : <SignInPage />}
		</div>
	);
}

export default App;
