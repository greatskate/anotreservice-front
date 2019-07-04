window.addEventListener("load",init);

function init(){
  initNav();
  initCommunities();
  socket = io('https://cotien-server.herokuapp.com/');
  logged = false;
  loggedsElement = document.getElementsByClassName("logged");
  unloggedsElement = document.getElementsByClassName("unlogged");
  for (var i=0;i<loggedsElement.length;i++){
    loggedsElement[i].style.display="none";
  }
  for (var i=0;i<unloggedsElement.length;i++){
    unloggedsElement[0].style.display="";
  }
  socket.on('connected', () => {
    console.log('Received connection callback.');
    onClickLogin();
  });
}

function login(){
  logged = true;
  for (var i=0;i<loggedsElement.length;i++){
    loggedsElement[i].style.display="";
  }
  for (var i=0;i<unloggedsElement.length;i++){
    unloggedsElement[i].style.display="none";
  }
}

function logout(){
  logged = false;
  for (var i=0;i<loggedsElement.length;i++){
    loggedsElement[i].style.display="none";
  }
  for (var i=0;i<unloggedsElement.length;i++){
    unloggedsElement[i].style.display="";
  }
}
