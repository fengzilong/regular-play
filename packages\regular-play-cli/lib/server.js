const webpack = require( 'webpack' );
const express = require( 'express' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const path = require( 'path' );
const cwd = process.cwd();

module.exports = function( webpackConfig, options ) {
	const app = express();

	// use webpack-dev-middleware
	var compiler = webpack( webpackConfig );
	const devMiddleware = webpackDevMiddleware( compiler, {
		stats: {
			colors: true
		}
	} );
	app.use( devMiddleware );

	// use webpack-hot-middleware
	app.use( webpackHotMiddleware( compiler ) );

	app.listen( options.port, function() {
		console.log( 'Server running on port', options.port );
	} );

	return app;
};
