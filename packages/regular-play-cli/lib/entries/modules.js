const plays = load( require.context( __PLAY_ROOT__, false, /\.play\.js$/ ) )

module.exports.actors = merge( plays )

function load( requireContext ) {
	return requireContext.keys().map( requireContext );
}

function merge( modules ) {
	return modules.reduce( ( current, next ) => {
		return Object.assign( {}, current, next.actors )
	}, {} );
}
