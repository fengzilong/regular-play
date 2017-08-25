export default {
	name: 'editor',
	state: {
		props: {},
		data: {},
	},
	reducers: {
		props( state, payload ) {
			state.props = payload;
		},
		data( state, payload ) {
			state.data = payload;
		},
	},
};
