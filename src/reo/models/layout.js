export default {
	name: 'layout',
	state: {
		isTabsOpened: true,
		layout: 'pc',
		layouts: [ 'pc', 'mobile' ],
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
