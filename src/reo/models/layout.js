export default {
	name: 'layout',
	state: {
		isTabsOpened: true
	},
	reducers: {
		toggleTabs( state ) {
			state.isTabsOpened = !state.isTabsOpened;
		}
	}
}
