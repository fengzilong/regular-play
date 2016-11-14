/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(1);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _src2.default)();

	if (!location.hash) {
		location.href = '#!/';
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$actors = _ref.actors,
		    actors = _ref$actors === undefined ? [] : _ref$actors;

		var app = (0, _reo2.default)();

		app.model({
			name: 'app',
			state: { actors: actors },
			reducers: {
				setActors: function setActors(state, actors) {
					state.actors = actors;
				}
			}
		});
		app.model(_console2.default);
		app.model(_tabs2.default);
		app.model(_layout2.default);
		app.actions(_actions2.default);
		app.getters(_getters2.default);
		app.router(_routes2.default);

		app.start('#app');
	};

	var _reo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"reo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reo2 = _interopRequireDefault(_reo);

	var _actions = __webpack_require__(5);

	var _actions2 = _interopRequireDefault(_actions);

	var _getters = __webpack_require__(6);

	var _getters2 = _interopRequireDefault(_getters);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	var _console = __webpack_require__(13);

	var _console2 = _interopRequireDefault(_console);

	var _tabs = __webpack_require__(14);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _layout = __webpack_require__(15);

	var _layout2 = _interopRequireDefault(_layout);

	__webpack_require__(16);

	__webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		setActors: function setActors(_ref, payload) {
			var commit = _ref.commit;

			commit('app/setActors', payload);
		},
		log: function log(_ref2, payload) {
			var commit = _ref2.commit;

			commit('console/log', payload);
		},
		clearLogs: function clearLogs(_ref3, payload) {
			var commit = _ref3.commit;

			commit('console/clear');
		},
		switchTab: function switchTab(_ref4, payload) {
			var commit = _ref4.commit;

			commit('tabs/select', payload);
		},
		toggleTabs: function toggleTabs(_ref5) {
			var commit = _ref5.commit;

			commit('layout/toggleTabs');
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		actors: function actors(state) {
			return state.app.actors;
		},
		tabsSource: function tabsSource(state) {
			return state.tabs.source;
		},
		selectedTabKey: function selectedTabKey(state) {
			return state.tabs.selected;
		},
		consoleLogs: function consoleLogs(state) {
			return state.console.logs;
		},
		consoleMergedLogs: function consoleMergedLogs(state) {
			return state.console.mergedLogs;
		},
		isTabsOpened: function isTabsOpened(state) {
			return state.layout.isTabsOpened;
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		routes: [{ url: '/', component: _App2.default }]
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Sidebar = __webpack_require__(9);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Console = __webpack_require__(10);

	var _Console2 = _interopRequireDefault(_Console);

	var _Code = __webpack_require__(11);

	var _Code2 = _interopRequireDefault(_Code);

	var _Tabs = __webpack_require__(12);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		computed: {
			tabsSource: 'tabsSource',
			selectedTabKey: 'selectedTabKey',
			logs: 'consoleMergedLogs',
			isTabsOpened: 'isTabsOpened'
		},
		components: {
			Sidebar: _Sidebar2.default,
			Tabs: _Tabs2.default,
			Console: _Console2.default,
			Code: _Code2.default
		},
		template: '\n\t\t<div class="app">\n\t\t\t<div class="sidebar-wrapper">\n\t\t\t\t<Sidebar></Sidebar>\n\t\t\t</div>\n\n\t\t\t<div class="content">\n\t\t\t\t<div class="main">\n\t\t\t\t\t<iframe ref="v" src="./preview.html" frameborder="0"></iframe>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="tabs-wrapper { isTabsOpened ? \'open\' : \'\' }">\n\t\t\t\t\t<div class="tabs-header">\n\t\t\t\t\t\t<Tabs\n\t\t\t\t\t\t\tsource="{ tabsSource }"\n\t\t\t\t\t\t\tselected="{ selectedTabKey }"\n\t\t\t\t\t\t\ton-change="{ this.dispatch( \'switchTab\', $event ) }"\n\t\t\t\t\t\t></Tabs>\n\t\t\t\t\t\t<div class="tabs-header__toolbar">\n\t\t\t\t\t\t\t{#if selectedTabKey === \'console\'}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'clearLogs\' ) }">&#xe603;</span>\n\t\t\t\t\t\t\t{/if}\n\n\t\t\t\t\t\t\t{#if isTabsOpened}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'toggleTabs\' ) }">&#xe65a;</span>\n\t\t\t\t\t\t\t{#else}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'toggleTabs\' ) }">&#xe65c;</span>\n\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tabs-body">\n\t\t\t\t\t\t{#if selectedTabKey === \'console\'}\n\t\t\t\t\t\t<Console logs="{ logs }"></Console>\n\t\t\t\t\t\t{#elseif selectedTabKey === \'code\'}\n\t\t\t\t\t\t<Code></Code>\n\t\t\t\t\t\t{/if}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',
		init: function init() {
			this.listenChild();
			this.listenRoute();
		},
		listenChild: function listenChild() {
			var _this = this;

			var onMessage = function onMessage(_ref) {
				var data = _ref.data;
				var type = data.type,
				    payload = data.payload;


				if (type === 'SET_ACTORS') {
					_this.dispatch('setActors', JSON.parse(payload));
				} else if (type === 'LOADED') {
					// when iframe is loaded, sync route with iframe
					_this.onRouteChange();
				} else if (type === 'LOG') {
					_this.dispatch('log', payload);
				}
			};

			window.addEventListener('message', onMessage, false);

			this.$on('$destroy', function () {
				window.removeEventListener('message', onMessage, false);
			});
		},
		listenRoute: function listenRoute() {
			this.$router.on('end', this.onRouteChange.bind(this));
		},
		onRouteChange: function onRouteChange() {
			var currentRoute = this.$router.current;
			var param = currentRoute.param;

			// decode
			Object.keys(param).forEach(function (k) {
				param[k] = decode(param[k]);
			});

			function decode(str) {
				return decodeURIComponent(str);
			}

			var iframeWindow = this.$refs.v.contentWindow;
			iframeWindow.postMessage({
				type: 'ROUTE_UPDATE',
				payload: { param: param }
			}, '*');

			// clear logs
			this.dispatch('clearLogs');
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		computed: {
			actors: 'actors'
		},
		template: '\n\t\t<aside class="sidebar">\n\t\t\t<ul class="sidebar-actors">\n\t\t\t\t{#list actors as spots}\n\t\t\t\t<li class="sidebar-actor">\n\t\t\t\t\t<div class="sidebar-actor__title">{ spots_key }</div>\n\t\t\t\t\t<ul class="sidebar-actor__spots">\n\t\t\t\t\t\t{#list spots as spot}\n\t\t\t\t\t\t<li class="sidebar-actor__spot { ( this.$router.current.param.name === spot.name && this.$router.current.param.description === spot.description ) ? \'active\' : \'\' }">\n\t\t\t\t\t\t\t<a href="javascript:;" on-click="{ this.onNav( spot ) }">{ spot.description }</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t{/list}\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t{/list}\n\t\t\t</ul>\n\t\t</aside>\n\t',
		onNav: function onNav(_ref) {
			var name = _ref.name,
			    description = _ref.description;

			this.$router.nav('?name=' + encode(name) + '&description=' + encode(description));

			function encode(str) {
				return encodeURIComponent(str);
			}
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		template: '\n\t\t<div class="console" ref="console">\n\t\t\t<div class="console-logs" ref="logs">\n\t\t\t\t{#list logs as log}\n\t\t\t\t<div class="console-log">\n\t\t\t\t\t{#if log.count > 1}\n\t\t\t\t\t<span class="console-log_count">{ log.count }</span>\n\t\t\t\t\t{/if}\n\t\t\t\t\t{ log.content | json }\n\t\t\t\t</div>\n\t\t\t\t{/list}\n\t\t\t</div>\n\t\t</div>\n\t',
		config: function config() {},
		init: function init() {
			this.$watch('logs', function () {
				var $console = this.$refs.console;
				var $logs = this.$refs.logs;
				$console.scrollTop = $logs.offsetHeight;
			});
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		template: "\n\t\tI am code\n\t"
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		template: '\n\t\t<div class="tabs">\n\t\t\t{#list source as s}\n\t\t\t<a class="tab { selected === s.key ? \'selected\' : \'\' }" href="javascript:;" on-click="{ this.onClick( s ) }">\n\t\t\t\t<i class="iconfont">{ this.c( s.icon ) }</i> { s.label }\n\t\t\t</a>\n\t\t\t{/list}\n\t\t</div>\n\t',
		c: function c(str) {
			str = str.replace(/(\\u)(\w{4})/gi, function ($0) {
				return String.fromCharCode(parseInt(escape($0).replace(/(%5Cu)(\w{4})/g, '$2'), 16));
			});
			str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
				return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
			});
			return str;
		},
		onClick: function onClick(s) {
			this.$emit('change', s.key);
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'console',
		state: {
			logs: [],
			mergedLogs: []
		},
		reducers: {
			log: function log(state, payload) {
				state.logs.push(payload);

				var last = state.mergedLogs[state.mergedLogs.length - 1];
				if (last && JSON.stringify(last.content) === JSON.stringify(payload)) {
					last.count = last.count + 1;
				} else {
					state.mergedLogs.push({
						content: payload,
						count: 1
					});
				}
			},
			clear: function clear(state) {
				state.logs.length = 0;
				state.mergedLogs.length = 0;
			}
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'tabs',
		state: {
			source: [{ key: 'console', icon: '&#xe6ad;', label: 'Console' }, { key: 'code', icon: '&#xe629;', label: 'Code' }],
			selected: 'console'
		},
		reducers: {
			select: function select(state, payload) {
				state.selected = payload;
			}
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'layout',
		state: {
			isTabsOpened: true
		},
		reducers: {
			toggleTabs: function toggleTabs(state) {
				state.isTabsOpened = !state.isTabsOpened;
			}
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);