import getCtor from './utils/get-ctor';

export default function( Actor, m ) {
	return new Play( Actor, m );
}

export const merge = function( modules, m ) {
	m.exports.actors = modules.reduce( ( current, next ) => {
		return Object.assign( {}, current, next.actors )
	}, {} );
};

class Play {
	constructor( Actor, m ) {
		this.Actor = Actor;
		this.m = m;

		return this;
	}
	name( name ) {
		this.name = name;

		return this;
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
		let code;
		if ( typeof template === 'object' ) {
			Spot = Ctor.extend( template );
			code = template.template;
		} else if ( typeof template === 'string' ) {
			Spot = Ctor.extend( { template } );
			code = template;
		}

		// register Actor
		Spot.component( actorName, Actor );

		// expose
		const m = this.m;
		m.exports.actors = m.exports.actors || {};
		m.exports.actors[ actorName ] = m.exports.actors[ actorName ] || [];
		m.exports.actors[ actorName ].push( {
			name: actorName, description, Spot, code
		} );

		return this;
	}
}
