import { act, render, screen } from '@testing-library/react';
import React, { Fragment, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Input from './Input';

let container: HTMLDivElement | null = null;

function TestInput() {
	const [state, setState] = useState({
		name: 'value',
		lastname: 'value',
		email: 'value@email.com',
		password: 'value1234',
		confirm_password: 'value1234',
		gender: 1,
	});
	return (
		<Fragment>
			<Input
				name={'hi'}
				type={'text'}
				placeholder={'Hi'}
				state={state}
				value={state.name}
				setState={setState}
			/>
		</Fragment>
	);
}

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container!);
});

afterEach(() => {
	unmountComponentAtNode(container!);
	container?.remove();
	container = null;
});

test('Rendering the input component', () => {
	act(() => {
		render(<TestInput />, {
			container: container!,
		});
	});

	expect(screen.getByPlaceholderText('Hi')).toBeInTheDocument();
});
