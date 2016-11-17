export default {
	name: 'console',
	state: {
		logs: [],
		mergedLogs: [],
	},
	reducers: {
		log( state, payload ) {
			state.logs.push( payload );

			const last = state.mergedLogs[ state.mergedLogs.length - 1 ];
			if ( last && JSON.stringify( last.content ) === JSON.stringify( payload ) ) {
				last.count = last.count + 1;
			} else {
				state.mergedLogs.push( {
					content: payload,
					count: 1,
				} );
			}
		},
		clear( state ) {
			state.logs.length = 0;
			state.mergedLogs.length = 0;
		}
	},
}
