import reo from 'reo';
import actions from './actions';
import getters from './getters';
import routes from './routes';
import consoleModel from './models/console';
import tabsModel from './models/tabs';
import layoutModel from './models/layout';
import codeModel from './models/code';

import './index.less';
import './fonts/iconfont.css';
import './atom-one-light.min.css';

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
	app.model( consoleModel );
	app.model( tabsModel );
	app.model( layoutModel );
	app.model( codeModel );
	app.actions( actions );
	app.getters( getters );
	app.router( routes );

	app.start( '#app' );
}
