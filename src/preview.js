import './css/preview.less';

export default function( { actors } ) {
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
		const { type, payload } = data;

		if ( type === 'ROUTE_UPDATE' ) {
			const { name, description } = payload.param;

			if ( !actors[ name ] ) {
				return;
			}

			const filtered = actors[ name ].filter( v => v.description === description );

			if ( filtered.length === 0 ) {
				return;
			}

			const Spot = filtered[ 0 ].Spot;
			const code = filtered[ 0 ].code;
			const options = filtered[ 0 ].options || {};

			const backgroundColor = options.backgroundColor;
			if ( backgroundColor ) {
				document.documentElement.style.backgroundColor = backgroundColor;
			} else {
				document.documentElement.style.backgroundColor = '';
			}

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

			if ( code ) {
				parent.postMessage( {
					type: 'SET_CODE',
					payload: code,
				}, location.origin );
			}
		}
	}, false );

	function $log( message ) {
		parent.postMessage( {
			type: 'LOG',
			payload: message,
		}, location.origin );
	}
}
