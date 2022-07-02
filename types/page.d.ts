export interface PagePropsType {
	children?: JSX.Element;
}

export interface UseSignUpType {
	[key: string]: string | number;
	name: string;
	lastname: string;
	email: string;
	password: string;
	confirm_password: string;
	gender: number;
}
