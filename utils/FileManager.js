var File = require("./objects/File").File
var fs = require("fs");


/*
  Take a directory name in parameter
  Return all the files with his path
  Exemple:
  > getAllFilesByDirectory("utils")
    - [
    File {
      path: 'utils/FileManager.js',
      text: 'var File = require(" ... \n}\n'
    }
    File {
      path: 'utils/manager.js',
      text: 'var fs = require("fs");\nmodu ... n      }\n    }\n  }\n'
    }
    ...
  ]
*/
module.exports.getAllFilesByDirectory = getAllFilesByDirectory;





async function getAllFilesByDirectory(dir){
  return await getFilesDirectoryRecursive(dir,[]);
}

async function getFilesDirectoryRecursive(path,files){
  let dirs = fs.readdirSync(path,{withFileTypes:true})

  if(dirs.length===0){
    return true;
  }
  else{
    let newFiles = [];
    for(var i=0;i<dirs.length;i++){
      let newPath = path+"/"+dirs[i].name;
      if (dirs[i].isDirectory()){
        newFiles = newFiles.concat(await getFilesDirectoryRecursive(newPath,newFiles));
      }
      else{
          text = await fs.readFileSync(newPath,'utf8');
          let file = new File(newPath,text);
          newFiles = newFiles.concat(file);
      }
    }
    return files.concat(newFiles);
  }
}
