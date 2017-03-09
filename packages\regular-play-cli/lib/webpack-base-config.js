const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const baseConfig = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
			},
			{
				test: /\.mcss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!mcss-loader!postcss-loader'),
			},
			{
				test: /\.less$/,
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
	postcss: [
		require( 'autoprefixer' ),
	],
	resolve: {
		extensions: [ '', '.js' ]
	},
	externals: {},
};

module.exports = baseConfig;
