window.addEventListener("load",initScrollPage);

function initScrollPage(){
  pages = document.getElementsByClassName("page");
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

    if (page.scrollTop < 100){
      mainHeader.style.height = (200 - (page.scrollTop))+"px"
      page.style.top = (200 - (page.scrollTop))+"px"
      title.style.top = (30 - (page.scrollTop/5))+"%";
      title.style.fontSize = (70 - ((page.scrollTop/5)))+"px";
      buttonLogin.style.width = (80-((page.scrollTop/5)))+"px";
      buttonLogin.style.height = (80-((page.scrollTop/5)))+"px";
      agenda.style.width = (80-((page.scrollTop/5)))+"px";
      agenda.style.height = (80-((page.scrollTop/5)))+"px";
    }
    else{

        mainHeader.style.height = (100)+"px"
        page.style.top = (100)+"px"
        title.style.top = 20+"%";
        buttonLogin.style.width = 60+"px";
        buttonLogin.style.height = 60+"px";
        title.style.fontSize = (50)+"px";
        agenda.style.width = 60+"px";
        agenda.style.height = 60+"px";
    }
}
function restorePages(){
  for (var i=0;i<pages.length;i++){
    pages[i].scrollTop=0;
    updateScroll(pages[i]);
  }
}
