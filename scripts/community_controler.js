const CommunityController = {
  create:(community)=>{
    socket.emit("community_create",community);
  },
  join:(community)=>{
    socket.emit("community_join",community);

  },
  update:(community)=>{
    socket.emit("community_update",community);

  },
  search:(name)=>{
    let request={
      name:name
    }
    socket.emit("community_search",request);

  },
  load:(id)=>{
    let community={
      id:id
    }
    socket.emit("community_create",community);

  }
}
