import { Dispatch, SetStateAction, useState } from 'react';
import { UseSignUpType } from '../../types/page';

const useSignup = (): [
	UseSignUpType,
	Dispatch<SetStateAction<UseSignUpType>>,
	() => Promise<any>,
] => {
	const [signUp, setSignUp] = useState<UseSignUpType>({
		name: '',
		lastname: '',
		email: '',
		password: '',
		confirm_password: '',
		gender: 0,
	});

	const signUpFetch = async () => {
		console.log(signUp);
		const URL = import.meta.env.VITE_URL_USER;

		const data = await fetch(URL, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(signUp),
		});

		const parsedData = await data.json();
		return parsedData;
	};

	return [signUp, setSignUp, signUpFetch];
};

export default useSignup;
