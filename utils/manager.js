var fs = require("fs");
module.exports.importStyleScript = function importStyleScript(){
  createHierarchy("styles",fs.readdirSync("./styles",{withFileTypes:true}))
}

function createHierarchy(path,dirs){
  if(dirs.length===0){
    return true;
  }
  else{
    for(var i=0;i<dirs.length;i++){
      let newPath = path+"/"+dirs[i].name;
      let newPathSource = "../"+newPath;
      let newPathDestination = "../"+"build"+"/"+newPath;
      fs.copyFile(newPathSource,newPathDestination,async (err)=>{
        if (err) throw err;
          return true;
        });
      }
    }
  }
