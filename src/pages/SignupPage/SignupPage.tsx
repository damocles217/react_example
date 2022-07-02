import React, { ComponentType } from 'react';
import Page from '../../components/shared/page/Page';
import Signup from '../../components/Signup/Signup';

const SignupPage: ComponentType = () => {
	return (
		<Page>
			<Signup />
		</Page>
	);
};

export default SignupPage;
