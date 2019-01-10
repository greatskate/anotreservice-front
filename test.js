var { getAllFilesByDirectory } = require("./utils/FileManager");
var { mergeFilesInOneFile } = require("./utils/MergeManager");
var fs = require("fs");

async function test(){
  let files = await getAllFilesByDirectory("styles");
  let text = await mergeFilesInOneFile(files);
  fs.appendFile("./test/style.css",text,(err) => {
		if (err) throw err;
	});
}
test();
