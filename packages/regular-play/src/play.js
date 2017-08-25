import Regular from 'regularjs';
import install from './install';

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
		this.Actor = install( Actor );
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
		this._components[ name ] = install( Component );

		return this;
	}
	add( description, scenario, options ) {
		// some checks
		const isValidTemplate = typeof scenario === 'object' ||
			typeof scenario === 'string';
		if ( !isValidTemplate ) {
			return console.error(
				`failed to add ${ JSON.stringify( description ) } with ${ scenario }`
			);
		}

		const actorName = this._name;
		if ( typeof actorName === 'undefined' ) {
			return console.error(
				`please provide a name for ${ description } by .name( ... ) before adding it`
			);
		}

		// let's start
		const Actor = this.Actor;

		let Spot;
		let code;
		if ( typeof scenario === 'object' ) {
			Spot = Regular.extend( scenario );
			code = scenario.template;
		} else if ( typeof scenario === 'string' ) {
			Spot = Regular.extend( { template: scenario } );
			code = scenario;
		}

		// register main Actor
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
			displayName, name: actorName, description, Spot, code, options
		} );

		return this;
	}
}
