const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const merge = require( 'webpack-merge' )
const path = require( 'path' )
const baseConfig = require( './base' )
const cwd = process.cwd()

const _  = {
	cwd: function( filepath ) {
		return path.resolve( cwd, filepath )
	},
	project: function ( filepath ) {
		return path.resolve( __dirname, '../../', filepath )
	}
}

module.exports = function( options ) {
	const outputPath = options.dist
	const template = options.template
	const resolveFallback = options.resolveFallback

	const config = merge.smart( baseConfig, {
		entry: {
			app: _.project( 'lib/entries/app.js' ),
			preview: [ _.project( 'lib/entries/preview.js' ) ]
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
				_.project( 'node_modules' ),
				_.cwd( 'node_modules' ),
				_.cwd( 'play/node_modules' ),
			],
			fallback: resolveFallback || [],
			packageMains: [ 'play:main', 'jsnext:main', 'browser', 'main' ],
		},
		resolveLoader: {
			alias: {
				text: 'raw-loader'
			},
			root: [
				_.project( 'node_modules' ),
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
				template: _.project( 'lib/index.html' ),
			} ),
			new HtmlWebpackPlugin( {
				filename: 'preview.html',
				chunks: [ 'preview' ],
				template: template,
			} ),
			new webpack.ProvidePlugin( {
				play: require.resolve( 'regular-play' ),
			} ),
			new webpack.DefinePlugin( {
				__PLAY_ROOT__: JSON.stringify( _.cwd( 'play' ) ),
				__DEFAULT_LAYOUT__: JSON.stringify( options.mobile ? 'mobile' : 'desktop' ),
			} ),
			new FriendlyErrorsWebpackPlugin( {
				clearConsole: false,
			} ),
			new CaseSensitivePathsPlugin(),
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
