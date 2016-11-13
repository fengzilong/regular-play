export default {
	actors: state => state.app.actors,
	tabsSource: state => state.tabs.source,
	selectedTabKey: state => state.tabs.selected,
	consoleLogs: state => state.console.logs,
	consoleMergedLogs: state => state.console.mergedLogs,
	isTabsOpened: state => state.layout.isTabsOpened,
};
