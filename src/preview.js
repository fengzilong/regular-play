import './preview.less';

export default function( { actors } ) {
	console.log( actors );

	parent.postMessage( {
		type: 'SET_ACTORS',
		payload: JSON.stringify( actors )
	}, location.origin );

	window.onload = function() {
		parent.postMessage( {
			type: 'LOADED',
			payload: void 0
		}, location.origin );
	};

	let previous;
	window.addEventListener( 'message', ( { data } ) => {
		console.log( data, 'received' );
		const { type, payload } = data;

		if ( type === 'ROUTE_UPDATE' ) {
			const { name, description } = payload.param;
			const filtered = actors[ name ].filter( v => v.description === description );
			const Spot = filtered[ 0 ] && filtered[ 0 ].Spot;

			if ( Spot ) {
				// clean
				if ( previous ) {
					previous.$inject( false );
				}

				// implement $log
				Spot.implement( { $log } );

				// inject
				previous = new Spot().$inject( '#app' );
			}
		}
	}, false );

	function $log( message ) {
		parent.postMessage( {
			type: 'LOG',
			payload: message
		}, location.origin );
	}
}
