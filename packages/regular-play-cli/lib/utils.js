const path = require( 'path' );
const cwd = process.cwd();

const _  = {
	cwd: function( filepath ) {
		return path.resolve( cwd, filepath );
	},
	dir: function( filepath ) {
		return path.resolve( __dirname, filepath );
	},
};

module.exports = _;
