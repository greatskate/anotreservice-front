MOCKSERVICE= {
  url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
  profil_name:"Stephane",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  uev:150,
  time:"1h30",
  square:"Lille"}

MOCKCONVERSATION = {
  url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
  profil_name:"Stephane",
  last_message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  time:"1h30",
}

MOCKCOMMENTARY = {profil_name:"Stephane",text:"Genial experience avec moi meme !"}

MOCKCOMMUNITY_SMALL = {
  name:"Jardinage et potager",
  description:"Bonjour, ici se retrouvent tous les fans de potager et de jardinage, conseils,services zefzefzefze zefzefzef zfefethyre",
  members:256,
  partages:178,
  square:"Lille"
}
const MOCKCOMMUNITY= {
  name:"Jardinage et potager",
  owner_name:"Sebastien",
  members:256,
  square:"Lille",
  messages:[MOCKSERVICE,MOCKSERVICE,MOCKSERVICE]
}


function loadCommunities(){
  let communities = [MOCKCOMMUNITY_SMALL,MOCKCOMMUNITY_SMALL,MOCKCOMMUNITY_SMALL]
  return communities;
}

function loadCommunity(){
  let community = Object.assign({},MOCKCOMMUNITY);
  let messagesHTML = ""
  for (var i=0;i<community.messages.length;i++){
    messagesHTML += service(MOCKCOMMUNITY.messages[i])
  }
  community.messages = messagesHTML;
  return community;
}
function loadCommentaries(idProfil){
  let commentaries = [MOCKCOMMENTARY,MOCKCOMMENTARY,MOCKCOMMENTARY]
  return commentaries;
}
function loadServices(){
  let services = [MOCKSERVICE,MOCKSERVICE,MOCKSERVICE]
  return services;
}

function loadService(){
  let service = MOCKSERVICE
  return service;
}
function loadConversations(){
  let conversations = [MOCKCONVERSATION,MOCKCONVERSATION,MOCKCONVERSATION]
  return conversations;
}
