import React, { ComponentType, Fragment, memo, useEffect } from 'react';
import usePosts from '../../hooks/usePosts';
import Post from '../Post/Post';
import style from './postlist.module.scss';

const PostList: ComponentType = () => {
	const [posts, getPosts] = usePosts();

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className={style.content}>
			<div className={style.title}>Posts list</div>
			{posts.map((value, index) => {
				return (
					<Fragment key={index}>
						<Post data={value} />
						<hr />
					</Fragment>
				);
			})}
		</div>
	);
};

export default memo(PostList);
