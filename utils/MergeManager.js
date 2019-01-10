module.exports.mergeFilesInOneFile = function(files){
  result="";
  for (var i = 0;i<files.length;i++){
    result += "/* --- "+files[i].path+" --- */\n";
    result += files[i].text;
    result +="\n";
  }
  return result;
}
