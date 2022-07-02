import { act, render, screen } from '@testing-library/react';
import * as React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Signup from './Signup';

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

test('Signup Component rendering', () => {
	act(() => {
		render(<Signup />, { container: container! });
	});

	expect(screen.getByText('Registrate ;)')).toBeInTheDocument();
});
