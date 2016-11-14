const webpack = require( 'webpack' );
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );
const cwd = process.cwd();

const _  = {
	cwd( filepath ) {
		return path.resolve( cwd, filepath );
	}
};

const baseConfig = {
	output: {
		path: _.cwd( 'public' ),
		filename: '[name]-[chunkhash:8].js',
		publicPath: './'
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
					presets: [ 'es2015' ]
				}
			},
			{
				test: /\.(ttf|woff|eot|svg)$/,
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
	externals: {},
};

module.exports = [
	Object.assign( {}, baseConfig, {
		entry: {
			index: _.cwd( 'entries/app.entry.js' )
		},
		plugins: [
			new HtmlWebpackPlugin( {
				filename: 'index.html',
				template: 'src/index.html',
			} ),
			new ExtractTextPlugin('index-[contenthash:8].css')
		]
	} ),
	Object.assign( {}, baseConfig, {
		entry: {
			preview: _.cwd( 'entries/preview.entry.js' )
		},
		plugins: [
			new HtmlWebpackPlugin( {
				filename: 'preview.html',
				template: 'src/preview.html',
			} ),
			new ExtractTextPlugin('preview-[contenthash:8].css')
		]
	} ),
];
