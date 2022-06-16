import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Post from './Post';

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

test('Rendering the Post component', () => {
	act(() => {
		const thisDate = new Date();

		const MockPost1 = {
			title: 'hola',
			description: 'mundo',
			createdAt: thisDate,
			imgUrl: '/hola.com',
			owner: 'Juanito',
			text: 'fjdlkasfjdaslfkdjaslfkda',
		};

		render(<Post data={MockPost1} />, { container: container! });
	});

	expect(screen.getByText('hola')).toBeInTheDocument();

	act(() => {
		const thisDate = new Date();
		const MockPost2 = {
			title: 'Jeje no ps si',
			description: 'mmm zy',
			createdAt: thisDate,
			imgUrl: '/adios.com',
			owner: 'Pepe',
			text: 'jfdklsafjdklsafawoivda',
		};

		render(<Post data={MockPost2} />, { container: container! });
	});

	expect(screen.getByText('mmm zy')).toBeInTheDocument();
});
