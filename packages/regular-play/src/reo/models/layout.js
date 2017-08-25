const SIDEBAR_SIZE = 230
const TABS_WIDTH_IN_MOBILE_MODE = window.innerWidth - SIDEBAR_SIZE - 360

export default {
	name: 'layout',
	state: {
		isTabsOpened: true,
		layout: __DEFAULT_LAYOUT__,
		sidebarSize: SIDEBAR_SIZE,
		tabsSize: __DEFAULT_LAYOUT__ === 'mobile' ? TABS_WIDTH_IN_MOBILE_MODE : 230,
	},
	reducers: {
		toggleTabs( state ) {
			state.isTabsOpened = !state.isTabsOpened;
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
