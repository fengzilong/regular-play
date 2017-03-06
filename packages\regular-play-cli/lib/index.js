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
	const previewTemplate = options.previewTemplate;
	const mobilePreviewTemplate = options.mobilePreviewTemplate;
	const resolveFallback = options.resolveFallback;

	const webpackConfig = makeWebpackConfig( {
		entry: entry
			? _.cwd( entry )
			: DEFAULT_ENTRY,
		dist: dist
			? _.cwd( dist )
			: DEFAULT_DIST,
		previewTemplate: previewTemplate
			? _.cwd( previewTemplate )
			: _.dir( './template.html' ),
		mobilePreviewTemplate: mobilePreviewTemplate
			? _.cwd( mobilePreviewTemplate )
			: DEFAULT_MOBILE_PREVIEW_TEMPLATE,
		resolveFallback: resolveFallback
			? _.cwd( resolveFallback )
			: [],
	} );

	server( webpackConfig, {
		port: port || DEFAULT_PORT,
	} );
};
