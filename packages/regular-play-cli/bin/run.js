const { dev, build } = require( '../lib' )

module.exports = function ( options ) {
	if ( options.mode === 'production' ) {
		build( options )
	} else {
		dev( options )
	}
}
