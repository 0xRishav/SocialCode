import { useContext, useEffect, useState } from 'react';
import './App.css';
import { UserContext } from './contexts/user';
import { SignInPage, HomePage } from './pages';

function App() {
	const [user, setUser] = useContext(UserContext).user;

	return (
		<div className="App">
			{true ? <HomePage /> : <SignInPage />}

			{/* <h1>Hey there, Welcome to SocialCode</h1> */}
		</div>
	);
}

export default App;
