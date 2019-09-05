/* eslint-disable */
const UserController = {
	register: (user) => {
		console.log({ user });
		socket.emit('user_create', user);
	},
	login: (user) => {
		socket.emit('user_login', user);
	  //login();
	},
	logout: (user) => {
		socket.emit('user_logout', user);
	},
	update: (user) => {
		socket.emit('user_update', user);
	},
	load: (id) => {
		const user = {
			id
		}
		socket.emit('user_load', user);
	}
}
