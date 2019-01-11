const fs = require('fs');


function getParams(text) {
	if (text.includes('[@')) {
		let result = `${text.substring(0, text.indexOf('[@'))}`;
		const param = text.substring(text.indexOf('[@') + 2, text.indexOf(']'));
		const endResult = text.substring(text.indexOf(']') + 1, text.length);
		result += `'+ object.${param}+'${endResult}`;
		return getParams(result);
	}

	return `'${text}'`;
}


function replaceAll(text, char, by) {
	if (text.length === 1) {
		return '';
	}
	const result = `${text.substring(0, text.indexOf(char))}`;
	const endResult = `${text.substring(text.indexOf(char) + char.length, text.length)}`;
	return `${result} ${by} ${replaceAll(endResult, char, by)}`;
}

function create(object) {
	const text = fs.readFileSync(`./components/objects/${object}.html`, 'utf8');
	let result = '';
	result += `function ${object}(object){ \n  return `
	let returnValue = getParams(text);
	returnValue = replaceAll(returnValue, '\n', '\'+ \n\'');
	result += returnValue.substring(0, returnValue.length - 5);
	result += '}\n';
	fs.appendFile('./build/scripts/creator.js', result, (err) => {
		if (err) throw err;
	});
}

function loadObject() {
	const dirs = fs.readdirSync('components/objects');
	for (let i = 0; i < dirs.length; i += 1) {
		create(dirs[i].substring(0, dirs[i].length - 5));
	}
}

module.exports.loadObject = loadObject;
