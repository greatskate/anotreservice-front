/* eslint-disable */

function initCommunities(){
  communities_smalls = document.getElementsByClassName("community_small");
  for (var i=0; i<communities_smalls.length;i++){
    communities_smalls[i].addEventListener("click",openCommunity)
  }
}
function openCommunity(){
  console.log(this);
  for (var i=0; i<pages.length;i++){
    if ("community" === pages[i].dataset.page){
       restorePages();
      pages[i].style.display = "block";
      pages[i].innerHTML = community(
        loadCommunity()
      )
    }
    else{
      pages[i].style.display = "none";
    }
  }
}
