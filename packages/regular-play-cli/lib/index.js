const webpack = require( 'webpack' )
const path = require( 'path' )
const generateWebpackConfig = require( './webpack/generate' )
const serve = require( './serve' )

exports.dev = function( options = {} ) {
	serve( generateWebpackConfig( options ), { port: options.port } )
}

exports.build = function( options = {} ) {
	var compiler = webpack( generateWebpackConfig( options ) )
	compiler.run( function ( err, stats ) {
		if ( err ) {
			return console.log( err )
		}
	} )
}
