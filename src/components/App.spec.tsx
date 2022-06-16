import { render, act, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

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

test('Rendering the App root', () => {
	act(() => {
		render(<App />, { container: container! });
	});

	expect(screen.getByText('mocking')).toBeInTheDocument();
});
