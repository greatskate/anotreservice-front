/* eslint-disable */

function initCommunities(communities) {
	communitiesListCommunities = document.getElementById('communities_list_communities');
  communitiesListCommunities.innerHTML = "";
  for (let i=0;i<communities;i++){
    communitiesListCommunities.innerHTML += small_community(communities[i])
  }
}
