const plays = load( require.context( __PLAY_ROOT__, true, /\.play\.js$/ ) )

merge( plays, module )

function load( requireContext ) {
	return requireContext.keys().map( requireContext );
}

function merge( modules, m ) {
	m.exports.actors = modules.reduce( ( current, next ) => {
		return Object.assign( {}, current, next.actors )
	}, {} );
}
