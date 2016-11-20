const path = require( 'path' );
const makeWebpackConfig = require( './make-webpack-config' );
const server = require( './server' );
const _ = require( './utils' );

const DEFAULT_PORT = 9000;
const DEFAULT_ENTRY = './play/index.js';
const DEFAULT_DIST = './dist-play';

module.exports = function( options ) {
	options = options || {};

	const port = options.port;
	const entry = options.entry;
	const dist = options.dist;

	const webpackConfig = makeWebpackConfig( {
		entry: _.cwd( entry || DEFAULT_ENTRY ),
		dist: _.cwd( dist || DEFAULT_DIST ),
	} );

	server( webpackConfig, {
		port: port || DEFAULT_PORT,
	} );
};
