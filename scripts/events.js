/* eslint-disable */
window.addEventListener('load', initEvent);

function initEvent() {
	buttonLogin = document.getElementById('login_button');
	buttonLogin.addEventListener('click', printLoginDialog);

	buttonSwitchRegister = document.getElementById('button_switch_register')

	buttonSwitchRegister.addEventListener('click', switchRegister)

	buttonSwitchLogin = document.getElementById('return-register-dialog');
	buttonSwitchLogin.addEventListener('click', switchLogin)
	formRegister = document.getElementById('form_register');
	formRegister.addEventListener('submit', onSubmitRegister)

	logoutButton = document.getElementById('logout_action_button');
	logoutButton.addEventListener('click', onClickLogout);

	communityCreation = document.getElementById('community_creation');
  communityCreation.addEventListener('submit',onSubmitCommunityCreation)
}

function printLoginDialog() {
	const blackScreen = document.getElementById('black_screen');
	blackScreen.style.display = 'block';
	const loginDialog = document.getElementById('login_dialog');
	loginDialog.style.display = 'block';
	blackScreen.addEventListener('click', removeLoginDialog);
}

function removeLoginDialog() {
	const blackScreen = document.getElementById('black_screen');
	blackScreen.style.display = 'none';
	const loginDialog = document.getElementById('login_dialog');
	loginDialog.style.display = 'none';
	blackScreen.removeEventListener('click', removeLoginDialog);
}

function switchLogin() {
	const loginPage = document.getElementById('login_page');
	loginPage.style.display = 'block';
	const registerPage = document.getElementById('register_page');
	registerPage.style.display = 'none';
}

function switchRegister() {
	const blackScreen = document.getElementById('login_page');
	blackScreen.style.display = 'none';
	const registerPage = document.getElementById('register_page');
	registerPage.style.display = 'block';
}

function onSubmitRegister(ev) {
	ev.preventDefault();
	console.log(ev);
}
function onClickLogin() {
	removeLoginDialog();
	login();
}
function onClickLogout() {
	logout();
	showPage('home')
}

function onSubmitCommunityCreation(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  var community = {};
  formData.forEach(function(value, key){
      community[key] = value;
  });
  community["owner"] = State.user
  CommunityController.create(community)
}
