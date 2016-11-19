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
		alias: {
			'play-entry': _.cwd( './play/index.js' ),
		},
		extensions: [ '', '.js' ]
	},
	externals: {},
};

module.exports = Object.assign( {}, baseConfig, {
	entry: {
		app: _.cwd( 'entries/app.js' ),
		preview: _.cwd( 'entries/preview.js' )
	},
	plugins: [
		new HtmlWebpackPlugin( {
			filename: 'index.html',
			chunks: [ 'app' ],
			template: 'src/template.html',
		} ),
		new HtmlWebpackPlugin( {
			filename: 'preview.html',
			chunks: [ 'preview' ],
			template: 'src/template.html',
		} ),
		new ExtractTextPlugin('[name]-[contenthash:8].css')
	]
} );
