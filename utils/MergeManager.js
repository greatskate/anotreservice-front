function mergeFilesInOneFile(files) {
	let result = '';
	for (let i = 0; i < files.length; i += 1) {
		result += `/* --- ${files[i].path} --- */\n`;
		result += files[i].text;
		result += '\n';
	}
	return result;
}
module.exports.mergeFilesInOneFile = mergeFilesInOneFile;
