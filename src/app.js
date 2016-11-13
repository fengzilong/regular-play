import reo from 'reo';
import actions from './actions';
import getters from './getters';
import routes from './routes';

export default function( { actors = [] } = {} ) {
	const app = reo();

	app.model( {
		name: 'app',
		state: { actors },
		reducers: {
			setActors( state, actors ) {
				state.actors = actors;
			}
		}
	} );
	app.actions( actions );
	app.getters( getters );
	app.router( routes );

	app.start( '#app' );
}
