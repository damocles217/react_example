import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import Home from './Home';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container!);
});

afterEach(() => {
	unmountComponentAtNode(container!);
	container?.remove();
	container = null;
});

test('Home Component render', () => {
	act(() => {
		render(<Home />);
	});

	expect(
		screen.getByText("Hi there, This is a skill's show"),
	).toBeInTheDocument();

	expect(
		screen.getByText("It's a simple social network for posting and comment"),
	).toBeInTheDocument();
});
