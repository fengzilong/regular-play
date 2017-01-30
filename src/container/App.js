import Resizer from '../components/Resizer';
import Sidebar from './Sidebar';
import Console from './Console';
import Code from './Code';
import Tabs from './Tabs';
import LayoutSwitch from './LayoutSwitch';

export default {
	computed: {
		tabsSource: 'tabsSource',
		selectedTabKey: 'selectedTabKey',
		logs: 'consoleMergedLogs',
		isTabsOpened: 'isTabsOpened',
		currentCode: 'currentCode',
		layout: 'layout',
	},
	components: {
		Resizer,
		Sidebar,
		Tabs,
		Console,
		Code,
		LayoutSwitch,
	},
	template: `
		<div class="app { layout }">
			<div class="sidebar-wrapper">
				<Sidebar></Sidebar>
				<LayoutSwitch></LayoutSwitch>
			</div>

			<Resizer vertical on-resize="{ this.onSidebarResize( $event ) }"></Resizer>

			<div class="content">
				<div class="main">
					<iframe ref="v" src="{ layout === 'mobile' ? './mobile-preview.html' : './preview.html' }" frameborder="0"></iframe>
				</div>

				<Resizer></Resizer>

				<div class="tabs-wrapper { isTabsOpened ? 'open' : '' }">
					<div class="tabs-header">
						<Tabs
							source="{ tabsSource }"
							selected="{ selectedTabKey }"
							on-change="{ this.dispatch( 'switchTab', $event ) }"
						></Tabs>
						<div class="tabs-header__toolbar">
							{#if layout !== 'mobile'}
								{#if isTabsOpened}
								<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( 'toggleTabs' ) }">&#xe65a;</span>
								{#else}
								<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( 'toggleTabs' ) }">&#xe65c;</span>
								{/if}
							{/if}
						</div>
					</div>
					<div class="tabs-body">
						{#if selectedTabKey === 'console'}
						<Console logs="{ logs }"></Console>
						{#elseif selectedTabKey === 'code'}
						<Code code="{ currentCode }"></Code>
						{/if}
					</div>
				</div>
			</div>
		</div>
	`,
	onSidebarResize( e ) {
		// console.log( e );
	},
	init() {
		this.dispatch( 'changeLayout', this.$router.current.param.layout || 'desktop' );
		this.listenChild();
		this.listenRoute();
	},
	listenChild() {
		window.addEventListener( 'message', onMessage, false );

		this.$on( '$destroy', () => {
			window.removeEventListener( 'message', onMessage, false );
		} );

		var self = this;
		function onMessage( { data } ) {
			const { type, payload } = data;

			if ( type === 'SET_ACTORS' ) {
				self.dispatch( 'setActors', JSON.parse( payload ) );
			} else if ( type === 'LOADED' ) {
				// when iframe is loaded, sync route with iframe
				self.onRouteChange();
			} else if ( type === 'LOG' ) {
				self.dispatch( 'log', payload );
			} else if ( type === 'SET_CODE' ) {
				self.dispatch( 'setCode', payload );
			}
		}
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

		// clear logs
		this.dispatch( 'clearLogs' );

		// send message to iframe
		const iframeWindow = this.$refs.v.contentWindow;
		iframeWindow.postMessage( {
			type: 'ROUTE_UPDATE',
			payload: { param }
		}, '*' );
	},
};
