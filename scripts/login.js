/* eslint-disable */

function initLogin(){
  login_button = document.getElementById("login_button")
  login_dialog = document.getElementById("login_dialog");
  login_darken_layer_dialog = document.getElementById("login_darken_layer_dialog");
  login_button_container = document.getElementById("login_button_container");
  login_submit = document.getElementById("login_submit");

  login_button.addEventListener("click",openLoginDialog);
  login_darken_layer_dialog.addEventListener("click",closeLoginDialog);
  login_button_container.addEventListener("click",closeLoginDialog);
  login_submit.addEventListener("click",loginEvent)

}

function openLoginDialog(){
  if(!logged){
		login_dialog.style.opacity = 1;
		login_dialog.style['pointer-events'] = 'all';
  }
  else{
    logout();
  }
}

function closeLoginDialog(){
	login_dialog.style.opacity = 0;
	login_dialog.style['pointer-events'] = 'none';
}

function loginEvent(){
  closeLoginDialog();
  login();
}
