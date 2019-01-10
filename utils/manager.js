const fs = require('fs');
const { getAllFilesByDirectory } = require('./FileManager')
const { mergeFilesInOneFile } = require('./MergeManager')


async function createStyle() {
	const files = await getAllFilesByDirectory('styles');
	const text = await mergeFilesInOneFile(files);
	fs.appendFile('./build/style.css', text, (err) => {
		if (err) throw err;
	});
}

module.exports.createStyle = createStyle;
