import Sidebar from './Sidebar';
import Console from './Console';
import Code from './Code';
import Tabs from './Tabs';

export default {
	computed: {
		tabsSource: 'tabsSource',
		selectedTabKey: 'selectedTabKey',
		logs: 'consoleMergedLogs',
		isTabsOpened: 'isTabsOpened',
	},
	components: {
		Sidebar,
		Tabs,
		Console,
		Code,
	},
	template: `
		<div class="app">
			<div class="sidebar-wrapper">
				<Sidebar></Sidebar>
			</div>

			<div class="content">
				<div class="main">
					<iframe ref="v" src="./preview.html" frameborder="0"></iframe>
				</div>

				<div class="tabs-wrapper { isTabsOpened ? 'open' : '' }">
					<div class="tabs-header">
						<Tabs
							source="{ tabsSource }"
							selected="{ selectedTabKey }"
							on-change="{ this.dispatch( 'switchTab', $event ) }"
						></Tabs>
						<div class="tabs-header__toolbar">
							{#if selectedTabKey === 'console'}
							<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( 'clearLogs' ) }">&#xe603;</span>
							{/if}

							{#if isTabsOpened}
							<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( 'toggleTabs' ) }">&#xe65a;</span>
							{#else}
							<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( 'toggleTabs' ) }">&#xe65c;</span>
							{/if}
						</div>
					</div>
					<div class="tabs-body">
						{#if selectedTabKey === 'console'}
						<Console logs="{ logs }"></Console>
						{#elseif selectedTabKey === 'code'}
						<Code></Code>
						{/if}
					</div>
				</div>
			</div>
		</div>
	`,
	init() {
		this.listenChild();
		this.listenRoute();
	},
	listenChild() {
		const onMessage = ( { data } ) => {
			const { type, payload } = data;

			if ( type === 'SET_ACTORS' ) {
				this.dispatch( 'setActors', JSON.parse( payload ) );
			} else if ( type === 'LOADED' ) {
				// when iframe is loaded, sync route with iframe
				this.onRouteChange();
			} else if ( type === 'LOG' ) {
				this.dispatch( 'log', payload );
			}
		};

		window.addEventListener( 'message', onMessage, false );

		this.$on( '$destroy', () => {
			window.removeEventListener( 'message', onMessage, false );
		} );
	},
	listenRoute() {
		this.$router.on( 'end', this.onRouteChange.bind( this ) );
	},
	onRouteChange() {
		const currentRoute = this.$router.current;
		const param = currentRoute.param;

		// decode
		Object.keys( param ).forEach( k => {
			param[ k ] = decode( param[ k ] );
		} );

		function decode( str ) {
			return decodeURIComponent( str );
		}

		const iframeWindow = this.$refs.v.contentWindow;
		iframeWindow.postMessage( {
			type: 'ROUTE_UPDATE',
			payload: { param }
		}, '*' );

		// clear logs
		this.dispatch( 'clearLogs' );
	},
};
