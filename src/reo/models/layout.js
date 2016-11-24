export default {
	name: 'layout',
	state: {
		isTabsOpened: true,
		layout: 'desktop',
		layouts: [ 'desktop', 'mobile' ],
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
