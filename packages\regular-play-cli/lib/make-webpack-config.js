const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const merge = require( 'webpack-merge' );
const path = require( 'path' );
const baseConfig = require( './webpack-base-config' );
const _ = require( './utils' );

module.exports = function( options ) {
	const playEntry = options.entry;
	const outputPath = options.dist;

	const config = merge.smart( baseConfig, {
		entry: {
			app: _.dir( './entries/app.js' ),
			preview: _.dir( './entries/preview.js' ),
		},
		resolve: {
			alias: {
				'play-entry': _.cwd( playEntry ),
			}
		},
		output: {
			path: outputPath,
			filename: '[name]-[chunkhash:8].js',
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
			new ExtractTextPlugin('[name]-[contenthash:8].css')
		]
	} );

	return config;
};
