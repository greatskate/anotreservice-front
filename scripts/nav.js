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
    showPage(this.dataset.page);
}
function showPage(page){
  restorePages();
  let returnPage = null
  for (var i=0; i<pages.length;i++){
    if (page === pages[i].dataset.page){
      pages[i].style.display = "block";
      returnPage = pages[i];
    }
    else{
      pages[i].style.display = "none";
    }
  }
  return returnPage
}
