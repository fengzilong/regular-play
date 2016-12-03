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

		this._components = {};

		return this;
	}
	displayName( displayName ) {
		this._displayName = displayName;

		return this;
	}
	name( name ) {
		this._name = name;

		return this;
	}
	component( name, Component ) {
		this._components[ name ] = Component;

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

		const actorName = this._name;
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
		// register other components
		const components = this._components;
		Object.keys( components ).forEach( name => {
			const Component = components[ name ];
			Spot.component( name, Component );
		} );

		// expose
		const m = this.m;
		const displayName = this._displayName || actorName;
		m.exports.actors = m.exports.actors || {};
		m.exports.actors[ displayName ] = m.exports.actors[ displayName ] || [];
		m.exports.actors[ displayName ].push( {
			displayName, name: actorName, description, Spot, code
		} );

		return this;
	}
}
