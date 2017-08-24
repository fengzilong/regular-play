const webpack = require( 'webpack' );
const express = require( 'express' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const path = require( 'path' );
const cwd = process.cwd();

module.exports = function serve( webpackConfig, options ) {
	const app = express();

	// use webpack-dev-middleware
	var compiler = webpack( webpackConfig );
	const devMiddleware = webpackDevMiddleware( compiler, {
		stats: {
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false,
		}
	} );
	app.use( devMiddleware );

	// use webpack-hot-middleware
	app.use( webpackHotMiddleware( compiler ) );

	app.listen( options.port );

	devMiddleware.waitUntilValid( function () {
		console.log( '\n> regular-play running on port', options.port );
	} );

	return app;
};
