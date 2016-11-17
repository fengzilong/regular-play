export default {
	setActors( { commit }, payload ) {
		commit( 'app/setActors', payload );
	},
	log( { commit }, payload ) {
		commit( 'console/log', payload );
	},
	clearLogs( { commit }, payload ) {
		commit( 'console/clear' );
	},
	switchTab( { commit }, payload ) {
		commit( 'tabs/select', payload );
	},
	toggleTabs( { commit } ) {
		commit( 'layout/toggleTabs' );
	},
	setCode( { commit }, payload ) {
		commit( 'code/set', payload );
	},
};
