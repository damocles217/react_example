import React, { ComponentType, FormEvent } from 'react';
import useSignup from '../../hooks/useSignup';
import Input from '../Input/Input';
import style from './signup.module.scss';

const Signup: ComponentType = () => {
	const [signUp, setSignUp, fetchSignUp] = useSignup();

	const nameInput = [
		'name',
		'lastname',
		'email',
		'password',
		'confirm_password',
		'gender',
	];
	const placeholderInput = [
		'Name',
		'Lastname',
		'Email',
		'Password',
		'Confirm your password',
		'Gender',
	];

	const typeInput = ['text', 'text', 'email', 'password', 'password', 'select'];

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		fetchSignUp();
	};

	return (
		<div id={style['signup-container']}>
			<h3>Registrate {`;)`}</h3>
			<form onSubmit={handleSubmit}>
				{nameInput.map((value, index) => (
					<Input
						name={value}
						value={signUp[`${value}`]}
						type={typeInput[index]}
						key={index}
						setState={setSignUp}
						state={signUp}
						placeholder={placeholderInput[index]}
					/>
				))}
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Signup;
