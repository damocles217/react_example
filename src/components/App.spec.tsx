import * as React from 'react';
import { render, act, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

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

test('Rendering the App root', () => {
	act(() => {
		render(<App />, { container: container! });
	});

	expect(
		screen.getByText(`Hi there, This is a skill's show`),
	).toBeInTheDocument();
});
