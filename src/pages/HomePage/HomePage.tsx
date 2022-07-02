import React, { ComponentType, Fragment } from 'react';
import PostList from '../../components/PostList/PostList';
import Home from '../../components/Home/Home';
import Page from '../../components/shared/page/Page';

const HomePage: ComponentType = () => {
	return (
		<Page>
			<Fragment>
				<Home />
				<PostList />
			</Fragment>
		</Page>
	);
};

export default HomePage;
