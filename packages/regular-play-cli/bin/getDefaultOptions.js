const path = require( 'path' )
const cwd = process.cwd()

module.exports = function () {
	return {
		port: 9000,
		entry: path.resolve( cwd, 'play/index.js' ),
		dist: path.resolve( cwd, 'dist-play' ),
		template: path.resolve( __dirname, '../lib/index.html' ),
		resolveFallback: []
	}
}
