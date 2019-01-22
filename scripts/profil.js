/* eslint-disable */


function initProfil() {
  profilAdmin = document.getElementById("profil_admin");
  profilMember = document.getElementById("profil_member");
  listCommunityInProfil = document.getElementById("listCommunityInProfil");
  profilAdmin.addEventListener("click",switchCommunitiesAdmin);
  profilMember.addEventListener("click",switchCommunitiesMember);
}

function switchCommunitiesAdmin(){

  let communitiesLoaded = loadCommunitiesAdmin();
  let communitiesHTML =""
  for (var i=0;i<communitiesLoaded.length;i++){
    communitiesHTML += community_small(communitiesLoaded[i])
  }
  listCommunityInProfil.innerHTML = communitiesHTML;
}
function switchCommunitiesMember(){

  let communitiesLoaded = loadCommunities();
  let communitiesHTML =""
  for (var i=0;i<communitiesLoaded.length;i++){
    communitiesHTML += community_small(communitiesLoaded[i])
  }
  listCommunityInProfil.innerHTML = communitiesHTML;
}
