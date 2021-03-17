import React from 'react';
import { SignInBtn, WavingHand } from '../../components';
import './SignInPage.css';

function SignInPage() {
	return (
		<div className="SignInPage">
			<h3 className="SignInPage__logo">RSocial</h3>
			<div className="SignInPage__headingButtonContainer">
				<h1 className="SignInPage__heading">
					Hey
					<WavingHand />, Welcome to RSocial.
				</h1>
				<SignInBtn />
			</div>
		</div>
	);
}

export default SignInPage;
