import { useState } from 'react';
import { PostType } from '../../types/post';

const usePosts = (): [PostType[], () => Promise<void>, boolean] => {
	const [posts, setPosts] = useState<Array<PostType>>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getPosts = async () => {
		setLoading(true);
		const thisDate = new Date();

		const dataMocked: Array<PostType> = [
			{
				title: 'hola',
				description: 'mundo',
				createdAt: thisDate,
				imgUrl: '/hola.com',
				owner: 'Juanito',
				text: 'fjdlkasfjdaslfkdjaslfkda',
			},
			{
				title: 'Jeje no ps si',
				description: 'mmm zy',
				createdAt: thisDate,
				imgUrl: '/adios.com',
				owner: 'Pepe',
				text: 'jfdklsafjdklsafawoivda',
			},
		];

		posts.length <= 0
			? setPosts(dataMocked)
			: setPosts(prev => [...prev, ...dataMocked]);

		setLoading(false);
	};

	return [posts, getPosts, loading];
};

export default usePosts;
