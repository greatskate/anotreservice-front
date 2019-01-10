require('colors');
const express = require('express');
const watchman = require('fb-watchman');

const { build } = require('./build');

const app = express();

const subscriptionName = 'anotreservice_watchman_sub';

let lastBuild = null;

const makeSubscription = (client, watch, relativePath) => {
	const sub = {
		expression: ['allof', ['match', '*']],
		fields: ['name', 'size', 'mtime_ms', 'exists', 'type']
	};
	if (relativePath) {
		sub.relative_root = relativePath;
	}
	client.command(['subscribe', watch, subscriptionName, sub],
		(error, resp) => {
			if (error) {
				console.error('failed to subscribe: ', error);
				return;
			}
			console.log('👀 Watching files changes...'.green);
		});
	client.on('subscription', (resp) => {
		if (resp.subscription !== subscriptionName) return;

		resp.files.forEach((file) => {
			const { name } = file;
			const currentTime = (new Date()).getTime();
			if (currentTime - 500 >= lastBuild) {
				console.log(`ℹ️  Detected change (${`${name}`.cyan}) since last build: ${'Rebuilding'.yellow}...`);
				build();
				lastBuild = currentTime;
			}
		});
	});
}

const init = () => build()
	.then(() => {
		lastBuild = (new Date()).getTime();
		app.use(express.static(`${__dirname}/build`));

		app.listen(8000, () => {
			console.log('App listening on port 8000.')
		});

		const client = new watchman.Client();
		let watch = null;

		// https://facebook.github.io/watchman/docs/nodejs.html
		client.capabilityCheck({ optional: [], required: ['relative_root'] },
			(error) => {
				if (error) {
					console.log(error);
					client.end();
					return;
				}
				client.command(['watch-project', __dirname],
					(error, resp) => {
						if (error) {
							console.error('Error initiating watch:'.red, error);
							return;
						}
						if ('warning' in resp) {
							console.log('Warning: '.red, resp.warning);
						}
						({
							watch
						} = resp);
						console.log('✅  Watch has been set up.'.green);
						makeSubscription(client, watch);
					});
			});
	});

init();
