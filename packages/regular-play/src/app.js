import reo from 'reo';
import logger from 'reo/logger';
import actions from './reo/actions';
import getters from './reo/getters';
import routes from './reo/routes';
import consoleModel from './reo/models/console';
import tabsModel from './reo/models/tabs';
import layoutModel from './reo/models/layout';
import codeModel from './reo/models/code';
import editorModel from './reo/models/editor';

import 'balloon-css/balloon.css';
import './css/index.less';
import './fonts/iconfont.css';
import './css/highlight.css';

export default function( { actors = [] } = {} ) {
	const app = reo();

	// app.use( logger() );

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
	app.model( editorModel );

	app.actions( actions );
	app.getters( getters );
	app.router( routes );

	app.start( '#app' );
}
