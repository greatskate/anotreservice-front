const fs = require('fs');
const { getAllFilesByDirectory } = require('./utils/FileManager');
const { mergeFilesInOneFile } = require('./utils/MergeManager');

async function test() {
	const files = await getAllFilesByDirectory('styles');
	const text = await mergeFilesInOneFile(files);
	fs.appendFile('./build/style.css', text, (err) => {
		if (err) throw err;
	});
}
test();
