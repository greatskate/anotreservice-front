window.addEventListener("load",initMain)

function initMain(){
  logged = false;
  loggedComponents = document.getElementsByClassName("logged");
  pages = document.getElementsByClassName("page");
  logout();
}

function login(){
  for (var i= 0;i<loggedComponents.length;i++){
    loggedComponents[i].style.display = "block";
  }
  if(!logged){
    for (var i= 0;i<pages.length;i++){
      pages[i].style.bottom = "";
    }
  }
}

function logout(){
  for (var i= 0;i<loggedComponents.length;i++){
    loggedComponents[i].style.display = "none";
  }
  if(!logged){
    for (var i= 0;i<pages.length;i++){
      pages[i].style.bottom = "0px";
    }
  }

}
