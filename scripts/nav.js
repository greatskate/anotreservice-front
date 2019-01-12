/* eslint-disable */

function initNav()
{
  pages = document.getElementsByClassName("page");
  menus = document.getElementsByClassName("menu");
  for (let i = 0; i < menus.length; i += 1){
    menus[i].addEventListener("click",eventClickShowPage);
  }
  showPage("home")
}

function eventClickShowPage(){
  restorePages();
  for (var i = 0; i < pages.length;i += 1){
    if (this.dataset.page === pages[i].dataset.page){
      pages[i].style.display = "block";
    }
    else{
      pages[i].style.display = "none";
    }
  }
}
function showPage(page){
  for (var i=0; i<pages.length;i++){
    if (page === pages[i].dataset.page){
      pages[i].style.display = "block";
    }
    else{
      pages[i].style.display = "none";
    }
  }
}
