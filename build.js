var fs = require("fs");


function searchComponents(){
  text = fs.readFileSync("./index.html","utf8");
  result = getFirstComponent(text);
  return result
}

function getFirstComponent(text){
  if (text.includes("{%")){

    result = text.substring(0,text.indexOf("{%"));
    component = text.substring(text.indexOf("{%")+2,text.indexOf("%}"));
    endResult = text.substring(text.indexOf("%}")+2,text.length);
    componentToSearch = component.split('"')[1];
    contentComponent = fs.readFileSync("./components/"+componentToSearch,"utf8");
    result += contentComponent;
    result += endResult;
    return getFirstComponent(result);
  }
  else{
    return text;
  }
}
function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};
async function build(){
  await deleteFolderRecursive("./build");
  await fs.mkdirSync("build");
  content = await searchComponents();
  generatedImport = await importStyleScript();
  result = content.split("<head>")
  finalContent = result[0]+"<head>\n"+generateImport+"\n"+result[1]

  fs.appendFile('./build/index.html', finalContent, function (err) {
    if (err) throw err;
    console.log('Build Completed!');
  });

}
function importStyleScript(){
  var styles = fs.readdirSync("./styles",{withFileTypes:true});
  var scripts = fs.readdirSync("./scripts",{withFileTypes:true});
  createHierarchy("styles",styles);
  createHierarchy("scripts",scripts);
  generateImport="";
  for(var i=0;i<styles.length;i++){
    generateImport += importStyle(styles[i].name);
  }
  for(var i=0;i<scripts.length;i++){
    generateImport += importScript(scripts[i].name);
  }
  return generateImport;
}

async function createHierarchy(path,dirs){
  await fs.mkdirSync("build/"+path);
    for(var i=0;i<dirs.length;i++){
      let newPath = path+"/"+dirs[i].name;
      let newPathSource = "./"+newPath;
      let newPathDestination = "./build"+"/"+newPath;
      fs.copyFile(newPathSource,newPathDestination,async (err)=>{
        if (err) throw err;
          return true;
        });
      }
  }

function importStyle(style){
  return '<link rel="stylesheet" href="./styles/'+style+'">\n'
}
function importScript(script){
  return '<script src="./scripts/'+script+'"></script>\n'
}


build();
