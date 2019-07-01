const UserController ={
  register:(user)=>{
    console.log({ user });
    socket.emit("user_create",user);
  },
  login:(user)=>{
    socket.emit("user_login",user);
  },
  logout:(user)=>{
    socket.emit("user_logout",user);
  },
  update:(user)=>{
    socket.emit("user_update",user);
  },
  load:(id)=>{
    let user={
      id:id
    }
    socket.emit("user_load",user);
  }
}
