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
	window.addEventListener( 'message', ( { data } = {} ) => {
		const { type, payload } = data || {};

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

			if ( options && options.props ) {
				parent.postMessage( {
					type: 'SET_PROPS',
					payload: {
						props: normalizeProps( options.props ),
						data: previous.$refs && previous.$refs.play
							? previous.$refs.play.data
							: {}
					},
				}, location.origin )
			} else {
				parent.postMessage( {
					type: 'SET_PROPS',
					payload: {},
				}, location.origin )
			}
		} else if ( type === 'PROP_CHANGE' ) {
			const target = previous.$refs && previous.$refs.play
			if ( target && payload.key ) {
				target.data[ payload.key ] = payload.value;
				target.$update();
			}
		}
	}, false );
}

function $log( message ) {
	parent.postMessage( {
		type: 'LOG',
		payload: message,
	}, location.origin );
}

function normalizeProps( props = {} ) {
	for ( const key in props ) {
		const v = props[ key ]
		if ( isString( v ) ) {
			props[ key ] = { type: 'string' }
		} else if ( isNumber( v ) ) {
			props[ key ] = { type: 'number' }
		} else if ( isBoolean( v ) ) {
			props[ key ] = { type: 'boolean' }
		}
	}

	return props
}

function isString( v ) {
	if ( !v ) {
		return false
	}

	return v === String || v.type === 'string'
}

function isNumber( v ) {
	if ( !v ) {
		return false
	}

	return v === Number || v.type === 'number'
}

function isBoolean( v ) {
	if ( !v ) {
		return false
	}

	return v === Boolean || v.type === 'boolean'
}
