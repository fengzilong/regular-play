const path = require( 'path' );
const makeWebpackConfig = require( './make-webpack-config' );
const server = require( './server' );
const _ = require( './utils' );

const DEFAULT_PORT = 9000;

module.exports = function( options ) {
	options = options || {};

	const webpackConfig = makeWebpackConfig( {
		entry: _.cwd( './play/index.js' ),
		dist: _.cwd( './dist-play' ),
	} );

	server( webpackConfig, {
		port: options.port || DEFAULT_PORT,
	} );
};
