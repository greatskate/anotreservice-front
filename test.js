
const { create } = require('./utils/ObjectCreator');

async function test() {
	create('service');
	create('conversation');
}
test();
