const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const merge = require( 'webpack-merge' );
const path = require( 'path' );
const baseConfig = require( './webpack-base-config' );
const _ = require( './utils' );

module.exports = function( options ) {
	const playEntry = options.entry;
	const outputPath = options.dist;
	const mobilePreviewTemplate = options.mobilePreviewTemplate;

	const config = merge.smart( baseConfig, {
		devtool: 'eval-source-map',
		entry: {
			app: _.dir( './entries/app.js' ),
			preview: [
				_.dir( './entries/preview.js' ),
				require.resolve( 'webpack-hot-middleware/client' ) + '?reload=true',
			],
		},
		resolve: {
			alias: {
				'play-entry': _.cwd( playEntry ),
			},
			root: [
				_.dir( '../node_modules' ),
				_.cwd( 'node_modules' ),
			],
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
				template: _.dir( './template.html' ),
			} ),
			new HtmlWebpackPlugin( {
				filename: 'mobile-preview.html',
				chunks: [ 'preview' ],
				template: mobilePreviewTemplate,
			} ),
			new webpack.HotModuleReplacementPlugin(),
		]
	} );

	return config;
};
