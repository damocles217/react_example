import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import HomePage from './HomePage';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container!);

	container!.remove();
	container = null;
});

test('Home page rendering', () => {
	act(() => {
		render(<HomePage />, { container: container! });
	});

	expect(
		screen.getByText(`Hi there, This is a skill's show`),
	).toBeInTheDocument();
});
