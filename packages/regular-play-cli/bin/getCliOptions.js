module.exports = function ( input, flags, mode ) {
	const cliOptions = Object.keys( flags ).reduce( ( res, next ) => {
		if ( typeof flags[ next ] !== 'undefined' ) {
			res[ next ] = flags[ next ]
		}

		return res
	}, {} )

	return Object.assign( cliOptions, { mode } )
}
