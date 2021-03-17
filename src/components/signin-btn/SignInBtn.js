import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';
import './SignInBtn.css';

function SignInBtn() {
	const [user, setUser] = useContext(UserContext).user;

	const handleSignInClick = async () => {
		const signnedInUser = await signInWithGoogle();
		if (signnedInUser) {
			setUser(signnedInUser);
		}
	};

	return (
		<button onClick={handleSignInClick} className="SignInBtn">
			Sign In with Google
		</button>
	);
}

export default SignInBtn;
