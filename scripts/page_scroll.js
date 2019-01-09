window.addEventListener("load",initScrollPage);

function initScrollPage(){
  pages = document.getElementsByClassName("page")
  mainHeader = document.getElementById("mainHeader");
  title = document.getElementById("title");
  buttonLogin = document.getElementsByClassName("login")[0];
  agenda = document.getElementById("agenda");
  scroll = 0;
  for (var i=0;i<pages.length;i++){
    pages[i].addEventListener("scroll",eventScrollPage);
  }
}

function eventScrollPage(){
  updateScroll(this);
}
function updateScroll(page){

    if (page.scrollTop < 50){
      mainHeader.style.height = (100 - page.scrollTop)+"px"
      page.style.top = (100 - page.scrollTop)+"px"
      title.style.top = (30 - (page.scrollTop/5))+"%";
      title.style.fontSize = (35 - (page.scrollTop/5))+"px";
      buttonLogin.style.width = (40-(page.scrollTop/5))+"px";
      buttonLogin.style.height = (40-(page.scrollTop/5))+"px";
      agenda.style.width = (40-(page.scrollTop/5))+"px";
      agenda.style.height = (40-(page.scrollTop/5))+"px";
    }
    else{

        mainHeader.style.height = (100 - 50)+"px"
        page.style.top = (100 - 50)+"px"
        title.style.top = 20+"%";
        buttonLogin.style.width = 30+"px";
        buttonLogin.style.height = 30+"px";
        title.style.fontSize = (25)+"px";
        agenda.style.width = 30+"px";
        agenda.style.height = 30+"px";
    }
}
function restorePages(){
  for (var i=0;i<pages.length;i++){
    pages[i].scrollTop=0;
    updateScroll(pages[i]);
  }
}
