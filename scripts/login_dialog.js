/* eslint-disable */
const LOGIN_INPUT_IDS = {
	email: 'login-email',
	password: 'login-password'
}

const handleLoginSubmit = () => {
	const values = Object.entries(LOGIN_INPUT_IDS).reduce((acc, [key, id]) => {
		acc[key] = document.getElementById(id).value;
		return acc;
	}, {});
	UserController.login(values);
}
