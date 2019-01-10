const fs = require('fs');


function getFirstComponent(text) {
	if (text.includes('{%')) {
		let result = text.substring(0, text.indexOf('{%'));
		const component = text.substring(text.indexOf('{%') + 2, text.indexOf('%}'));
		const endResult = text.substring(text.indexOf('%}') + 2, text.length);
		const componentToSearch = component.split('"')[1];
		const contentComponent = fs.readFileSync(`./components/${componentToSearch}`, 'utf8');
		result += contentComponent;
		result += endResult;
		return getFirstComponent(result);
	}

	return text;
}

function searchComponents() {
	const text = fs.readFileSync('./index.html', 'utf8');
	const result = getFirstComponent(text);
	return result;
}

function deleteFolderRecursive(path) {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach((file) => {
			const curPath = `${path}/${file}`;
			if (fs.lstatSync(curPath).isDirectory()) { // recurse
				deleteFolderRecursive(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
}

function importStyle(style) {
	return `<link rel="stylesheet" href="./styles/${style}">\n`
}
function importScript(script) {
	return `<script src="./scripts/${script}"></script>\n`
}

async function createHierarchy(path, dirs) {
	await fs.mkdirSync(`build/${path}`);
	for (let i = 0; i < dirs.length; i += 1) {
		const directory = dirs[i];
		const directoryName = typeof (directory) === 'string'
			? directory
			: directory.name;
		const newPath = `${path}/${directoryName}`;
		const newPathSource = `./${newPath}`;
		const newPathDestination = `./build/${newPath}`;
		fs.copyFile(newPathSource, newPathDestination, async (err) => {
			if (err) throw err;
			return true;
		});
	}
}

function importStyleScript() {
	const styles = fs.readdirSync('./styles', { withFileTypes: true });
	const scripts = fs.readdirSync('./scripts', { withFileTypes: true });
	createHierarchy('styles', styles);
	createHierarchy('scripts', scripts);
	let generatedImport = '';
	for (let i = 0; i < styles.length; i += 1) {
		const style = styles[i];
		generatedImport += importStyle(
			typeof (style) === 'string'
				? style
				: styles[i].name
		);
	}
	for (let i = 0; i < scripts.length; i += 1) {
		const script = scripts[i];
		generatedImport += importScript(
			typeof (script) === 'string'
				? script
				: script.name
		);
	}
	return generatedImport;
}

async function build() {
	await deleteFolderRecursive('./build');
	await fs.mkdirSync('build');
	const content = await searchComponents();
	const generatedImport = await importStyleScript();
	const result = content.split('<head>')
	const finalContent = `${result[0]}<head>\n${generatedImport}\n${result[1]}`

	fs.appendFile('./build/index.html', finalContent, (err) => {
		if (err) throw err;
		console.log('Build Completed!');
	});
}

build();
