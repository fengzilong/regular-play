export default {
	actors: state => state.app.actors,
	tabsSource: state => state.tabs.source,
	selectedTabKey: state => state.tabs.selected,
	consoleLogs: state => state.console.logs,
	consoleMergedLogs: state => state.console.mergedLogs,
	isTabsOpened: state => state.layout.isTabsOpened,
	layout: state => state.layout.layout,
	currentCode: state => state.code.current,
	sidebarResizeProp: state => state.layout.sidebarResizeProp,
	sidebarSize: state => state.layout.sidebarSize,
	tabsResizeProp: state => state.layout.tabsResizeProp,
	tabsSize: state => state.layout.tabsSize,
};
