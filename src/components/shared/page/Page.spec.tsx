import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Page from './Page';
import Home from '../../Home/Home';

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

test('Rendering the Page component', () => {
	act(() => {
		render(<Page />, { container: container! });
	});

	act(() => {
		render(
			<Page>
				<Home />
			</Page>,
			{ container: container! },
		);
	});

	expect(
		screen.getByText("Hi there, This is a skill's show"),
	).toBeInTheDocument();
});
