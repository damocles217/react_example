import React from 'react';
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import HomePage from './HomePage';

jest.mock('../components/Home/Home', () => ({
	default: () => <div id="mock">mocking</div>,
}));

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

	expect(container?.querySelector('#mock')?.textContent).toBe('mocking');
});
