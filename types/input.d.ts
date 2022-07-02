import { Dispatch, SetStateAction } from 'react';
import { UseSignUpType } from './page';

export interface InputProps {
	type: string;
	value: any;
	name: string;
	placeholder: string;
	setState: Dispatch<SetStateAction<UseSignUpType>>;
	state: UseSignUpType;
}
