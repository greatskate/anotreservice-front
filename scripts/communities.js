/* eslint-disable */

function initCommunities(){
  communitiesSmalls = document.getElementsByClassName("community_small");
  communitySearchForms = document.getElementsByClassName("community_search_form")
  communityHomeFinder = document.getElementById("community_home_finder");
  buttonJoinForLogin = null
  loadEventCommunities();
  for (var i=0; i<communitySearchForms.length;i++){
    communitySearchForms[i].addEventListener("submit",eventSubmitCommunitySearchForm)
  }
}
function openCommunity(){
  page = showPage("community");
  page.innerHTML = community(
    loadCommunity()
  )
  if(buttonJoinForLogin === null){
    buttonJoinForLogin = document.getElementById("button_join_for_login");
    console.log("test")
    buttonJoinForLogin.addEventListener("click",openLoginDialog);
  }
}

function eventSubmitCommunitySearchForm(e){
  e.preventDefault();
  let communitiesLoaded = loadCommunities();
  let communitiesHTML =""
  for (var i=0;i<communitiesLoaded.length;i++){
    communitiesHTML += community_small(communitiesLoaded[i])
  }
  communityHomeFinder.innerHTML = communitiesHTML;
  loadEventCommunities();
}

function loadEventCommunities(){
  for (var i=0; i<communitiesSmalls.length;i++){
    communitiesSmalls[i].removeEventListener("click",openCommunity)
  }

    for (var i=0; i<communitiesSmalls.length;i++){
      communitiesSmalls[i].addEventListener("click",openCommunity)
    }
}
