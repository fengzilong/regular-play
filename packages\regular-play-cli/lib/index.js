const path = require( 'path' );
const makeWebpackConfig = require( './make-webpack-config' );
const server = require( './server' );
const _ = require( './utils' );

const DEFAULT_PORT = 9000;
const DEFAULT_ENTRY = _.cwd( './play/index.js' );
const DEFAULT_DIST = _.cwd( './dist-play' );
const DEFAULT_MOBILE_PREVIEW_TEMPLATE = _.dir( './template.html' );

module.exports = function( options ) {
	options = options || {};

	const port = options.port;
	const entry = options.entry;
	const dist = options.dist;
	const mobilePreviewTemplate = options.mobilePreviewTemplate;

	const webpackConfig = makeWebpackConfig( {
		entry: entry
			? _.cwd( entry )
			: DEFAULT_ENTRY,
		dist: dist
			? _.cwd( dist )
			: DEFAULT_DIST,
		mobilePreviewTemplate: mobilePreviewTemplate
			? _.cwd( mobilePreviewTemplate )
			: DEFAULT_MOBILE_PREVIEW_TEMPLATE,
	} );

	server( webpackConfig, {
		port: port || DEFAULT_PORT,
	} );
};
