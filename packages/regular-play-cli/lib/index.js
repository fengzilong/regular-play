const webpack = require( 'webpack' );
const path = require( 'path' );
const generateWebpackConfig = require( './webpack/generate' );
const serve = require( './serve' );
const _ = require( './utils' );

const DEFAULT_PORT = 9000;
const DEFAULT_ENTRY = _.cwd( './play/index.js' );
const DEFAULT_DIST = _.cwd( './dist-play' );
const DEFAULT_PREVIEW_TEMPLATE = _.dir( './index.html' );

function getConfig( options = {} ) {
	const entry = options.entry
		? _.cwd( options.entry )
		: DEFAULT_ENTRY;
	const dist = options.dist
		? _.cwd( options.dist )
		: DEFAULT_DIST;
	const previewTemplate = options.previewTemplate
		? _.cwd( options.previewTemplate )
		: DEFAULT_PREVIEW_TEMPLATE;
	const mobilePreviewTemplate = options.mobilePreviewTemplate
		? _.cwd( options.mobilePreviewTemplate )
		: DEFAULT_PREVIEW_TEMPLATE;
	const resolveFallback = options.resolveFallback
		? _.cwd( options.resolveFallback )
		: [];

	return generateWebpackConfig( {
		entry,
		dist,
		previewTemplate,
		mobilePreviewTemplate,
		resolveFallback,
	} );
}

exports.dev = function( options = {} ) {
	const port = options.port || DEFAULT_PORT;
	serve( getConfig( options ), { port } );
};

exports.build = function( options = {} ) {
	var compiler = webpack( getConfig( options ) );
	compiler.run( function ( err, stats ) {
		if ( err ) {
			return console.log( err );
		}
	} )
}
