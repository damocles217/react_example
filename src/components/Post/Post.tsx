import React, { ComponentType } from 'react';
import { PostType } from '../../../types/post';
import style from './post.module.scss';

const Post: ComponentType<{ data: PostType }> = ({
	data,
}: {
	data: PostType;
}) => {
	return (
		<div className={style.post}>
			<h3 className={style.title}>{data.title}</h3>
			<h4 className={style.desc}>{data.description}</h4>
			<p className={style.owner}>
				{data.owner} - {data.createdAt.toDateString()}
			</p>
			<p>{data.text}</p>
			<div>{data.imgUrl}</div>
		</div>
	);
};

export default Post;
