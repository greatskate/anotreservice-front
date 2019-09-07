/* eslint-disable */

function initCommunities(communities) {
	communitiesListCommunities = document.getElementById('communities_list_communities');
  communitiesListCommunities.innerHTML = "";
  for (let i=0;i<communities.length;i++){
    communitiesListCommunities.innerHTML += small_community(communities[i])
  }
	communitiesEvent = document.getElementsByClassName("small_community");
	for (let i=0;i<communitiesEvent.length;i++){
		communitiesEvent[i].removeEventListener("click",displayCommunityProfil)
		communitiesEvent[i].addEventListener("click",displayCommunityProfil)
	}
}

function initCommunitiesAdmin(communities){
  listCommunitiesAdminUserProfil.innerHTML = "";
  for (let i=0;i<communities.length;i++){
    listCommunitiesAdminUserProfil.innerHTML += small_community(communities[i])
  }
	communitiesEvent = document.getElementsByClassName("small_community");
	for (let i=0;i<communitiesEvent.length;i++){
		communitiesEvent[i].removeEventListener("click",displayCommunityProfil)
		communitiesEvent[i].addEventListener("click",displayCommunityProfil)
	}
}
function initCommunitiesMember(communities){
  listCommunitiesMemberUserProfil.innerHTML = "";
  for (let i=0;i<communities.length;i++){
    listCommunitiesMemberUserProfil.innerHTML += small_community(communities[i])
  }
	communitiesEvent = document.getElementsByClassName("small_community");
	for (let i=0;i<communitiesEvent.length;i++){
		communitiesEvent[i].removeEventListener("click",displayCommunityProfil)
		communitiesEvent[i].addEventListener("click",displayCommunityProfil)
	}
}

function displayCommunityProfil(ev){
	showPage('community')
	console.log(this.dataset.id)
	socket.emit("community_load",{id:this.dataset.id,user:State.user})
}
