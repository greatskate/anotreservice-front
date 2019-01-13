communitiesSmallToLoad = [JARDIN_ET_POTAGER_SMALL,BRICOLAGE_SMALL]
function loadCommunities(){
  let communities = communitiesSmallToLoad;
  return communities;
}

function loadCommunity(){
  let community = Object.assign({},JARDIN_ET_POTAGER);
  let messagesHTML = ""
  for (var i=0;i<community.messages.length;i++){
    messagesHTML += service(JARDIN_ET_POTAGER.messages[i])
  }
  community.messages = messagesHTML;
  return community;
}
function loadCommentaries(idProfil){
  let commentaries = [COMMENTARY_VALERIE_1,COMMENTARY_VALERIE_2,COMMENTARY_VALERIE_3]
  return commentaries;
}
function loadServices(){
  let services = [SERVICE_BRICOLAGE_1,SERVICE_BRICOLAGE_2]
  return services;
}

function loadService(){
  let service = SERVICE_JARDIN_1
  return service;
}
function loadConversations(){
  let conversations = [CONVERSATION_VALERIE_1]
  return conversations;
}
