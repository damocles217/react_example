import React, { ComponentType } from 'react';
import Home from '../components/Home/Home';
import Page from '../components/shared/page/Page';

const HomePage: ComponentType = () => {
	return (
		<Page>
			<Home />
		</Page>
	);
};

export default HomePage;
