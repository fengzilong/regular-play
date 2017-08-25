const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const merge = require( 'webpack-merge' )
const path = require( 'path' )
const baseConfig = require( './base' )
const cwd = process.cwd()

const _  = {
	cwd: function( filepath ) {
		return path.resolve( cwd, filepath )
	},
	dir: function( filepath ) {
		return path.resolve( __dirname, filepath )
	},
}

module.exports = function( options ) {
	const outputPath = options.dist
	const template = options.template
	const resolveFallback = options.resolveFallback

	const config = merge.smart( baseConfig, {
		entry: {
			app: _.dir( '../entries/app.js' ),
			preview: [ _.dir( '../entries/preview.js' ) ]
		},
		module: {
			loaders: [
				{
					test: /\.html$/,
					loader: 'raw-loader',
				}
			]
		},
		resolve: {
			root: [
				_.dir( '../../node_modules' ),
				_.cwd( 'node_modules' ),
			],
			fallback: resolveFallback || [],
			packageMains: [ 'play:main', 'jsnext:main', 'browser', 'main' ],
		},
		resolveLoader: {
			alias: {
				text: 'raw-loader'
			},
			root: [
				_.dir( '../../node_modules' ),
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
				template: _.dir( '../index.html' ),
			} ),
			new HtmlWebpackPlugin( {
				filename: 'preview.html',
				chunks: [ 'preview' ],
				template: template,
			} ),
			new webpack.ProvidePlugin( {
				play: _.dir( '../hack/regular-play.js' ),
			} ),
			new webpack.DefinePlugin( {
				__PLAY_ROOT__: JSON.stringify( _.cwd( 'play' ) )
			} ),
			new FriendlyErrorsWebpackPlugin( {
				clearConsole: false,
			} ),
		]
	} )

	if ( options.mode === 'development' ) {
		config.plugins.push( new webpack.HotModuleReplacementPlugin() )
		config.entry.preview.push( require.resolve( 'webpack-hot-middleware/client' ) + '?reload=true' )
	}

	if ( options.mode === 'production' ) {
		config.plugins.push( new webpack.optimize.UglifyJsPlugin( {
			sourceMap: false,
			compressor: {
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
				negate_iife: false
			},
			output: {
				comments: false
			}
		} ) )
	}

	return config
}
