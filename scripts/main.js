/* eslint-disable */
window.addEventListener('load', initMain);
function initMain(){
  loggedComponents = document.getElementsByClassName("logged");
  logoutComponents = document.getElementsByClassName("logout_component");
  pages = document.getElementsByClassName("page");
  socket = io('http://localhost:8080');

	socket.on('connected', (user) => {
		console.log('Received connection callback.');
		onClickLogin();
    State.user = user
    loggedEvent()
	});
	socket.on('registred', (user) => {
		onClickLogin();
    console.log(user)
    State.user = user
    loggedEvent()
	});
  socket.on("communities_load",(communities)=>{
    console.log(communities)
    initCommunities(communities)
  })
  socket.on("communities_admin_load",(communities)=>{
    initCommunitiesAdmin(communities)
  })

  socket.on("community_loaded",(community)=>{
    console.log(community)
    nameCommunityProfil.innerHTML = community.name;
    nameOwnerCommunityProfil.innerHTML = community.owner.firstname;
    squareCommunityProfil.innerHTML = community.square
    memberNumberCommunityProfil.innerHTML = community.members_number
  })
  //load();
	logout();
  //initLogin()
  //initCommunities()
  //initNav()
	logged = false;
	showPage('home');
}
function login(){
  for (var i= 0;i<loggedComponents.length;i++){
    loggedComponents[i].style.display = "flex";
  }
  for (var i= 0;i<logoutComponents.length;i++){
    logoutComponents[i].style.display = "none";
  }
  if(!logged){
    for (var i= 0;i<pages.length;i++){
      pages[i].style.marginBottom = "";
    }
  }

  logged = true;
}

function logout(){
  for (var i= 0;i<loggedComponents.length;i++){
    loggedComponents[i].style.display = "none";
  }
  for (var i= 0;i<logoutComponents.length;i++){
    logoutComponents[i].style.display = "block";
  }
  if(logged){
    for (var i= 0;i<pages.length;i++){
      pages[i].style.marginBottom = "0px";
    }
  }

  showPage("home");
  logged = false;

}

function load(){
  serviceOnHome = document.getElementById("serviceOnHome");
  conversationsList = document.getElementById("conversationsList");
  historyList = document.getElementById("historyList");
  commentariesList = document.getElementById("commentariesList");
  listCommunityInProfil = document.getElementById("listCommunityInProfil");
  listCommunityInCommunities = document.getElementById("listCommunityInCommunities");
  //let serviceLoaded = loadService();
  //let serviceHTML = service(serviceLoaded);
  //serviceOnHome.outerHTML = serviceHTML;

  let conversationsLoaded = loadConversations();

  let conversationsHTML =""
  for (var i=0;i<conversationsLoaded.length;i++){
    conversationsHTML += conversation(conversationsLoaded[i])
  }

  conversationsList.innerHTML = conversationsHTML;

  let commentariesLoaded = loadCommentaries();
  let commentariesHTML =""
  for (var i=0;i<commentariesLoaded.length;i++){
    commentariesHTML += commentary(commentariesLoaded[i])
  }
  commentariesList.innerHTML = commentariesHTML;


  let communitiesLoaded = loadCommunities();
  let communitiesHTML =""
  for (var i=0;i<communitiesLoaded.length;i++){
    communitiesHTML += community_small(communitiesLoaded[i])
  }
  listCommunityInProfil.innerHTML = communitiesHTML;
  listCommunityInCommunities.innerHTML = communitiesHTML;
  let servicesLoaded = loadServices();
  let servicesHTML =""
  for (var i=0;i<servicesLoaded.length;i++){
    servicesHTML += service(servicesLoaded[i])
  }
  historyList.innerHTML = servicesHTML
}
