window.addEventListener("load",init);

function init(){
  initNav()
  socket = io('http://localhost:8080');
  logged = false;
  loggedsElement = document.getElementsByClassName("logged");
  for (var i=0;i<loggedsElement.length;i++){
    loggedsElement[0].style.display="none";
  }
}

function login(){
  logged = true;
  for (var i=0;i<loggedsElement.length;i++){
    loggedsElement[0].style.display="";
  }
}
