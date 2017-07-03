const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const merge = require( 'webpack-merge' );
const path = require( 'path' );
const baseConfig = require( './webpack-base-config' );
const _ = require( './utils' );

module.exports = function( options ) {
	const playEntry = options.entry;
	const outputPath = options.dist;
	const previewTemplate = options.previewTemplate;
	const mobilePreviewTemplate = options.mobilePreviewTemplate;
	const resolveFallback = options.resolveFallback;

	const config = merge.smart( baseConfig, {
		devtool: 'eval-source-map',
		entry: {
			app: _.dir( './entries/app.js' ),
			preview: [
				_.dir( './entries/preview.js' ),
				require.resolve( 'webpack-hot-middleware/client' ) + '?reload=true',
			],
		},
		module: {
			loaders: [
				{
					test: /\.html$/,
					loader: 'html-loader',
				}
			]
		},
		resolve: {
			alias: {
				'play-entry': _.cwd( playEntry ),
			},
			root: [
				_.dir( '../node_modules' ),
				_.cwd( 'node_modules' ),
			],
			fallback: resolveFallback,
			packageMains: [ 'play:main', 'jsnext:main', 'browser', 'main' ],
		},
		resolveLoader: {
			alias: {
				text: 'raw-loader'
			},
			root: [
				_.dir( '../node_modules' ),
			],
		},
		output: {
			path: outputPath,
			filename: '[name]-[hash:8].js',
			publicPath: './'
		},
		plugins: [
			new HtmlWebpackPlugin( {
				filename: 'index.html',
				chunks: [ 'app' ],
				template: _.dir( './template.html' ),
			} ),
			new HtmlWebpackPlugin( {
				filename: 'preview.html',
				chunks: [ 'preview' ],
				template: previewTemplate,
			} ),
			new HtmlWebpackPlugin( {
				filename: 'mobile-preview.html',
				chunks: [ 'preview' ],
				template: mobilePreviewTemplate,
			} ),
			new webpack.ProvidePlugin( {
				play: _.dir( 'provide/regular-play.js' ),
			} ),
			new webpack.HotModuleReplacementPlugin(),
		]
	} );

	return config;
};
