import * as React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, act, screen } from '@testing-library/react';
import SignupPage from './SignupPage';
import { jest } from '@jest/globals';

jest.mock('../../components/Signup/Signup', () => ({
	default: () => <div id="mocked">mocked</div>,
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

test('SignupPage render', () => {
	act(() => {
		render(<SignupPage />, { container: container! });
	});

	expect(screen.getByText('Registrate ;)')).toBeInTheDocument();
});
