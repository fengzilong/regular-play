export default {
	name: 'layout',
	state: {
		isTabsOpened: true,
		layout: 'desktop',
	},
	reducers: {
		toggleTabs( state ) {
			state.isTabsOpened = !state.isTabsOpened;
		},
		changeLayout( state, layout ) {
			state.layout = layout;
		},
	}
}
