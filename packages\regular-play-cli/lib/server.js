const webpack = require( 'webpack' );
const express = require( 'express' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
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

	app.listen( options.port, function() {
		console.log( 'Server running on port', options.port );
	} );

	return app;
};
