/* eslint-disable */
function initProfil(){
  nameUserProfil = document.getElementById("name_user_profil");
  squareUserProfil = document.getElementById("square_user_profil");
  buttonSwitchAdminUserProfil = document.getElementById("button_switch_admin_user_profil");
  buttonSwitchMemberUserProfil = document.getElementById("button_switch_member_user_profil");
  listCommunitiesAdminUserProfil = document.getElementById("list_communities_admin_user_profil");
  listCommunitiesMemberUserProfil = document.getElementById("list_communities_member_user_profil");

  nameUserProfil.innerHTML = State.user.firstname
  squareUserProfil.innerHTML = State.user.city
  buttonSwitchAdminUserProfil.addEventListener("click",switchAdminUserProfil)
  buttonSwitchMemberUserProfil.addEventListener("click",switchMemberUserProfil)
  switchAdminUserProfil()
  socket.emit("communities_admin_load",State.user)
  socket.emit("communities_member_load",State.user)
}

function switchMemberUserProfil(){
  buttonSwitchMemberUserProfil.classList.add("active");
  buttonSwitchAdminUserProfil.classList.remove("active");
  listCommunitiesMemberUserProfil.style.display = "";
  listCommunitiesAdminUserProfil.style.display = "none";
}

function switchAdminUserProfil(){
  buttonSwitchAdminUserProfil.classList.add("active");
  buttonSwitchMemberUserProfil.classList.remove("active");
  listCommunitiesMemberUserProfil.style.display = "none";
  listCommunitiesAdminUserProfil.style.display = "";
}
