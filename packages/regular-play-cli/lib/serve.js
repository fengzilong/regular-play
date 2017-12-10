const webpack = require( 'webpack' )
const express = require( 'express' )
const webpackDevMiddleware = require( 'webpack-dev-middleware' )
const webpackHotMiddleware = require( 'webpack-hot-middleware' )
const clipboardy = require( 'clipboardy' )
const address = require( 'address' )
const path = require( 'path' )
const cwd = process.cwd()

module.exports = function serve( webpackConfig, options ) {
	const app = express()

	// use webpack-dev-middleware
	var compiler = webpack( webpackConfig )
	const devMiddleware = webpackDevMiddleware( compiler, {
		stats: {
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false,
		}
	} )
	app.use( devMiddleware )

	// use webpack-hot-middleware
	app.use( webpackHotMiddleware( compiler ) )

	app.listen( options.port )

	devMiddleware.waitUntilValid( function () {
		const url = `http://${ address.ip() }:${ options.port }`
		clipboardy.write( url )
			.then( () => {
				console.log( '\n' )
				console.log( `> Open ${ url }(copied)` )
				console.log( '\n' )
			}, function () {
				console.log( '\n' )
				console.log( `> Open ${ url }(copy failed)` )
				console.log( '\n' )
			} )
	} )

	return app
}
