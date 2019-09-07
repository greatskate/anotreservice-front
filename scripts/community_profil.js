/* eslint-disable */
function initCommunity(){
  nameCommunityProfil = document.getElementById("name_community_profil")
  nameOwnerCommunityProfil = document.getElementById("name_owner_community_profil");
  squareCommunityProfil = document.getElementById("square_community_profil");
  memberNumberCommunityProfil = document.getElementById("members_number_community_profil");
  buttonJoinCommunityProfil = document.getElementById("button_join_community_profil");
  buttonJoinCommunityProfil.addEventListener("click",joinCommunityProfil)

}

function joinCommunityProfil(ev){
  ev.preventDefault()
  CommunityController.join(buttonJoinCommunityProfil.dataset.id,State.user);
}
