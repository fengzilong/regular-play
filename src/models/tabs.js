export default {
	name: 'tabs',
	state: {
		source: [
			{ key: 'console', icon: '&#xe6ad;', label: 'Console' },
			{ key: 'code', icon: '&#xe629;', label: 'Code' },
		],
		selected: 'console',
	},
	reducers: {
		select( state, payload ) {
			state.selected = payload;
		}
	},
};
