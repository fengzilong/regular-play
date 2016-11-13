export default {
	setActors( { commit }, payload ) {
		commit( 'app/setActors', payload );
	},
	log( { commit }, payload ) {
		commit( 'console/log', payload );
	},
	switchTab( { commit }, payload ) {
		commit( 'tabs/select', payload );
	}
};
