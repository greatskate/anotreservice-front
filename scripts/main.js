/* eslint-disable */
window.addEventListener("load",initMain)

function initMain(){
  logged = false;
  loggedComponents = document.getElementsByClassName("logged");
  pages = document.getElementsByClassName("page");
  login();
  load();
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

function load(){
  serviceOnHome = document.getElementById("serviceOnHome");
  conversationsList = document.getElementById("conversationsList");
  historyList = document.getElementById("historyList");
  commentariesList = document.getElementById("commentariesList");
  let service1 = service({
    url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
    profil_name:"Stephane",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    uev:150,
    time:"1h30",
    square:"Lille"})
  serviceOnHome.outerHTML = service1;
  let conversation1 = conversation({
    url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
    profil_name:"Stephane",
    last_message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    time:"1h30",
  })
  let commentary1 = commentary({profil_name:"Stephane",text:"Genial experience avec moi meme !"})
  conversationsList.innerHTML =
   conversation1 +
   conversation1 +
   conversation1 +
   conversation1 +
   conversation1
  ;
  historyList.innerHTML =
  service1 +
  service1 +
  service1 +
  service1 +
  service1 +
  service1;

  commentariesList.innerHTML =
  commentary1 +
  commentary1 +
  commentary1 +
  commentary1 +
  commentary1

}
