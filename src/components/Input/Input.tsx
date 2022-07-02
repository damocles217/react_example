import React, { ComponentType, ChangeEvent } from 'react';
import { InputProps } from '../../../types/input';

const Input: ComponentType<InputProps> = ({
	type,
	value,
	name,
	placeholder,
	setState,
	state,
}: InputProps) => {
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	if (type === 'select')
		return (
			<select
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			>
				<option value={0}>Man</option>
				<option value={1}>Woman</option>
			</select>
		);

	return (
		<input
			type={type}
			value={value}
			name={name}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;
