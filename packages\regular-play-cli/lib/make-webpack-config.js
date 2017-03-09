const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const merge = require( 'webpack-merge' );
const path = require( 'path' );
const baseConfig = require( './webpack-base-config' );
const _ = require( './utils' );

module.exports = function( options ) {
	const playEntry = options.entry;
	const outputPath = options.dist;

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
			}
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
			new webpack.HotModuleReplacementPlugin(),
		]
	} );

	return config;
};
