window.addEventListener("load",initEvent);

function initEvent(){
  buttonLogin = document.getElementById("login_button");
  buttonLogin.addEventListener("click",printLoginDialog);

  buttonSwitchRegister = document.getElementById("button_switch_register")

  buttonSwitchRegister.addEventListener("click",switchRegister)
  formRegister = document.getElementById("form_register");
  formRegister.addEventListener("submit",onSubmitRegister)

  logoutButton = document.getElementById("logout_action_button");
  logoutButton.addEventListener("click",onClickLogout);
}

function printLoginDialog(){
  let blackScreen = document.getElementById("black_screen");
  blackScreen.style.display= "block";
  let loginDialog = document.getElementById("login_dialog");
  loginDialog.style.display= "block";
  blackScreen.addEventListener("click",removeLoginDialog);
}

function removeLoginDialog(){
  let blackScreen = document.getElementById("black_screen");
  blackScreen.style.display= "none";
  let loginDialog = document.getElementById("login_dialog");
  loginDialog.style.display= "none";
  blackScreen.removeEventListener("click",removeLoginDialog);
}

function switchLogin(){
  let loginPage = document.getElementById("login_page");
  loginPage.style.display= "block";
  let registerPage = document.getElementById("register_page");
  registerPage.style.display= "none";
}

function switchRegister(){
  let blackScreen = document.getElementById("login_page");
  blackScreen.style.display= "none";
  let registerPage = document.getElementById("register_page");
  registerPage.style.display= "block";
}

function onSubmitRegister(ev){
  ev.preventDefault();
  console.log(ev);
}
function onClickLogin(){
  removeLoginDialog();
  login();
}
function onClickLogout(){
  logout();
  showPage('home')
}
