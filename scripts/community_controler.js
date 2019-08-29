/* eslint-disable */
const CommunityController = {
	create: (community) => {
		socket.emit('community_create', community);
	},
	join: (community) => {
		socket.emit('community_join', community);
	},
	update: (community) => {
		socket.emit('community_update', community);
	},
	search: (name) => {
		const request = {
			name
		}
		socket.emit('community_search', request);
	},
	load: (id) => {
		const community = {
			id
		}
		socket.emit('community_create', community);
	},

	loads: (id) => {
		const community = {
			id
		}
		socket.emit('community_loads');
	}
}
