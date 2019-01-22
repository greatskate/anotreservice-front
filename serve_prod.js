const express = require('express');
const app = express();

const init = () => {
	app.use(express.static(`${__dirname}/build`));

	const { PORT = 8000 } = process.env;

	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}.`)
	});
}

init();
