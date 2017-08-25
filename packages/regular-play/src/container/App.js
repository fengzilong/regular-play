import Resizer from '../components/Resizer';
import Sidebar from './Sidebar';
import Console from './plugins/Console';
import Code from './plugins/Code';
import Editor from './plugins/Editor';
import Tabs from './Tabs';

export default {
	getters: {
		tabsSource: 'tabsSource',
		selectedTabKey: 'selectedTabKey',
		logs: 'consoleMergedLogs',
		isTabsOpened: 'isTabsOpened',
		currentCode: 'currentCode',
		layout: 'layout',
		sidebarSize: 'sidebarSize',
		tabsSize: 'tabsSize',
		currentProps: 'currentProps',
		currentData: 'currentData',
	},
	components: {
		Resizer,
		Sidebar,
		Tabs,
		Console,
		Code,
		Editor,
	},
	template: `
		<div class="app { layout }">
			<div class="sidebar-wrapper" style="width: { sidebarSize }px">
				<Sidebar></Sidebar>
			</div>

			<Resizer
				on-resize-start="{ this.onSidebarResizeStart() }"
				on-resize="{ this.onSidebarResize( $event ) }"
				on-resize-end="{ isResizeStarted = false }"
				vertical
			></Resizer>

			<div class="content">
				<div class="main">
					<iframe
						ref="v"
						src="./preview.html"
						frameborder="0"
					></iframe>
					{#if isResizeStarted}
					<div class="drag-over-iframe-fix-overlay"></div>
					{/if}
				</div>

				{#if isTabsOpened}
				<Resizer
					on-resize-start="{ this.onTabsResizeStart() }"
					on-resize="{ this.onTabsResize( $event ) }"
					on-resize-end="{ isResizeStarted = false }"
					vertical="{ layout === 'mobile' }"
				></Resizer>
				{/if}

				<div
					class="tabs-wrapper { isTabsOpened ? 'open' : '' }"
					{#if isTabsOpened || layout === 'mobile'}
					style="{ layout === 'mobile' ? 'width' : 'height' } : { tabsSize }px"
					{/if}
				>
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
						{#elseif selectedTabKey === 'editor'}
							<Editor props="{ currentProps }" data="{ currentData }" on-change="{ this.onEditorChange($event) }"></Editor>
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
	onSidebarResizeStart() {
		this.initSidebarSize = this.$get( 'sidebarSize' );
		this.data.isResizeStarted = true;
	},
	onSidebarResize( e ) {
		this.dispatch( 'resizeSidebar', this.initSidebarSize + e.offsetX );
	},
	onTabsResizeStart() {
		this.initTabsSize = this.$get( 'tabsSize' );
		this.layout = this.$get( 'layout' );
		this.data.isResizeStarted = true;
	},
	onTabsResize( e ) {
		if ( this.layout === 'mobile' ) {
			this.dispatch( 'resizeTabs', this.initTabsSize - e.offsetX );
		} else {
			this.dispatch( 'resizeTabs', this.initTabsSize - e.offsetY );
		}
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
			} else if ( type === 'SET_PROPS' ) {
				self.dispatch( 'setProps', payload );
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
		this.sendMessage( {
			type: 'ROUTE_UPDATE',
			payload: { param }
		} );
	},
	sendMessage( message = {} ) {
		// send message to iframe
		const iframeWindow = this.$refs.v.contentWindow;
		iframeWindow.postMessage( message, '*' );
	},
	onEditorChange( { key, value } ) {
		this.sendMessage( {
			type: 'PROP_CHANGE',
			payload: { key, value }
		} )
	}
};
