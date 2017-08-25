const UseConfig = require( 'use-config' )

module.exports = function () {
	// load user config from config file
	const useConfig = new UseConfig( { name: 'play' } )

	return useConfig.load().then( function ( res ) {
		if ( !res.path ) {
			return {}
		}

		return res.config || {}
	} ).catch( function ( err ) {
		console.error( err )
	} );

}
