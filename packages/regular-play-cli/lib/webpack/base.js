const baseConfig = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader',
			},
			{
				test: /\.mcss$/,
				loader: 'style-loader!css-loader!postcss-loader!mcss-loader',
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					babelrc: false,
					presets: [
						require.resolve( 'babel-preset-es2015' ),
					],
					plugins: [
						require.resolve( 'babel-plugin-nej' ),
					],
				}
			},
			{
				test: /\.rgl$/,
				exclude: /node_modules/,
				loader: 'regular-loader',
			},
			{
				test: /\.(ttf|woff|eot|svg)(\?.+)*$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=102400&name=[name].[ext]?[hash:8]'
			},
		]
	},
	regular: {
		loaders: {
			css: 'style!css',
			less: 'style!css!less',
			mcss: 'style!css!mcss',
		}
	},
	postcss: [
		require( 'autoprefixer' ),
	],
	resolve: {
		extensions: [ '', '.js', '.rgl', '.less', '.mcss', '.css' ]
	},
	externals: {},
}

module.exports = baseConfig
