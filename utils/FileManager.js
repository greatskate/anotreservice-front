
const fs = require('fs');
const { File } = require('./objects/File');

async function getFilesDirectoryRecursive(path, files) {
	const dirs = fs.readdirSync(path, { withFileTypes: true })

	if (dirs.length === 0) {
		return true;
	}

	let newFiles = [];
	for (let i = 0; i < dirs.length; i += 1) {
		const directoryName = typeof (dirs[i]) === 'string'
			? dirs[i]
			: dirs[i].name;
		const newPath = `${path}/${directoryName}`;
		const isDirectory = fs.lstatSync(newPath).isDirectory()
		if (isDirectory) {
			newFiles = newFiles.concat(await getFilesDirectoryRecursive(newPath, newFiles));
		} else {
			const text = fs.readFileSync(newPath, 'utf8');
			const file = new File(newPath, text);
			newFiles = newFiles.concat(file);
		}
	}
	return files.concat(newFiles);
}

async function getAllFilesByDirectory(dir) {
	return getFilesDirectoryRecursive(dir, []);
}

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
