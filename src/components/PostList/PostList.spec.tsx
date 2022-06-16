import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import PostList from './PostList';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container!);
	container?.remove();

	container = null;
});

test('Render Post list', async () => {
	const thisDate = new Date();
	const MockPosts = [
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

	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(MockPosts),
		}),
	) as jest.Mock;

	await act(async () => {
		render(<PostList />, { container: container! });
	});

	expect(screen.getByText('hola')).toBeInTheDocument();
	expect(screen.getByText('mmm zy')).toBeInTheDocument();
});
