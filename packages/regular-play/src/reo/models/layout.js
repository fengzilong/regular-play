export default {
	name: 'layout',
	state: {
		isTabsOpened: true,
		layout: 'desktop',
		sidebarSize: 230,
		tabsSize: 230,
	},
	reducers: {
		toggleTabs( state ) {
			state.isTabsOpened = !state.isTabsOpened;
		},
		changeLayout( state, layout ) {
			state.layout = layout;
		},
		resizeSidebar( state, newSize ) {
			if ( newSize < 230 ) {
				return;
			}
			state.sidebarSize = newSize;
		},
		resizeTabs( state, newSize ) {
			state.tabsSize = newSize;
		},
	}
}
