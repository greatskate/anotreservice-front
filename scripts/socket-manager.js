/* eslint-disable */


function connect(email, password) {
  socket.emit('user_login', {email, password});
}

function register(firstname,lastname,email,cemail, password,address,cp,city ) {
	socket.emit('user_create', { firstname,lastname,email,cemail, password,address,cp,city });
}
