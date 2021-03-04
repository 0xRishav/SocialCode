import React from 'react';
import { SignInBtn, WavingHand } from '../../components';
import './SignInPage.css';

function SignInPage() {
	return (
		<div className="sign-in-page">
			<h4 className="logo">RSocial</h4>
			<div className="heading-button-container">
				<h1 className="sign-in-page-heading">
					Hey
					<WavingHand />, Welcome to RSocial.
				</h1>
				<SignInBtn />
			</div>
		</div>
	);
}

export default SignInPage;
