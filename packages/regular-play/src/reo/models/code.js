export default {
	name: 'code',
	state: {
		current: ''
	},
	reducers: {
		set( state, payload ) {
			state.current = payload;
		}
	},
};
