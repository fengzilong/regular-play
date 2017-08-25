const webpack = require( 'webpack' );
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );
const cwd = process.cwd();

const _  = {
	cwd( filepath ) {
		return path.resolve( cwd, filepath );
	},
};

const baseConfig = {
	output: {
		path: _.cwd( 'dist' ),
		filename: '[name].js',
		publicPath: './',
		libraryTarget: 'umd',
	},
	module: {
		loaders: [
			{
				test: /\.(css|less)$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader!postcss-loader'),
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015' ],
					plugins: [ 'add-module-exports' ]
				}
			},
			{
				test: /\.(ttf|woff|eot|svg)(\?.+)*$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10240&name=[name].[ext]?[hash:8]'
			},
		]
	},
	postcss: function() {
		return [ autoprefixer ]
	},
	resolve: {
		extensions: [ '', '.js' ]
	},
	externals: {
		regularjs: {
			root: 'Regular',
			commonjs: 'regularjs',
			commonjs2: 'regularjs',
			amd: 'regularjs'
		}
	},
};

module.exports = Object.assign( {}, baseConfig, {
	entry: {
		app: _.cwd( './src/app.js' ),
		preview: _.cwd( './src/preview.js' ),
		play: _.cwd( './src/play.js' ),
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	]
} );
