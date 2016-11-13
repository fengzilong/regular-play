import getCtor from './utils/get-ctor';

export default function( Actor, m ) {
	return new Play( Actor, m );
}

class Play {
	constructor( Actor, m ) {
		this.Actor = Actor;
		this.m = m;
	}
	name( name ) {
		this.name = name;
	}
	add( description, template ) {
		// some checks
		const isValidTemplate = typeof template === 'object' ||
			typeof template === 'string';
		if ( !isValidTemplate ) {
			console.error( `failed to add ${ JSON.stringify( description ) } with ${ template }` );
			return;
		}

		const actorName = this.name;
		if ( typeof actorName === 'undefined' ) {
			console.error( `please provide a name for ${ description } by .name( ... ) before adding it` );
			return;
		}

		// let's start
		const Actor = this.Actor;
		const Ctor = getCtor( Actor );

		let Spot;
		if ( typeof template === 'object' ) {
			Spot = Ctor.extend( template );
		} else if ( typeof template === 'string' ) {
			Spot = Ctor.extend( { template } );
		}

		// register Actor
		Spot.component( actorName, Actor );

		// expose
		const m = this.m;
		m.exports.actors = m.exports.actors || {};
		m.exports.actors[ actorName ] = m.exports.actors[ actorName ] || [];
		m.exports.actors[ actorName ].push( {
			name: actorName, description, Spot
		} );
	},

}
