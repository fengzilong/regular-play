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

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _app2.default)();

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
		app.model(_code2.default);
		app.actions(_actions2.default);
		app.getters(_getters2.default);
		app.router(_routes2.default);

		app.start('#app');
	};

	var _reo = __webpack_require__(2);

	var _reo2 = _interopRequireDefault(_reo);

	var _actions = __webpack_require__(5);

	var _actions2 = _interopRequireDefault(_actions);

	var _getters = __webpack_require__(6);

	var _getters2 = _interopRequireDefault(_getters);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	var _console = __webpack_require__(15);

	var _console2 = _interopRequireDefault(_console);

	var _tabs = __webpack_require__(16);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _layout = __webpack_require__(17);

	var _layout2 = _interopRequireDefault(_layout);

	var _code = __webpack_require__(18);

	var _code2 = _interopRequireDefault(_code);

	__webpack_require__(19);

	__webpack_require__(23);

	__webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports) {

	

/***/ },
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
		},
		changeLayout: function changeLayout(_ref6, payload) {
			var commit = _ref6.commit;

			commit('layout/changeLayout', payload);
		},
		setCode: function setCode(_ref7, payload) {
			var commit = _ref7.commit;

			commit('code/set', payload);
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
		},
		layout: function layout(state) {
			return state.layout.layout;
		},
		layouts: function layouts(state) {
			return state.layout.layouts;
		},
		currentCode: function currentCode(state) {
			return state.code.current;
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

	var _Tabs = __webpack_require__(14);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _LayoutSwitch = __webpack_require__(75);

	var _LayoutSwitch2 = _interopRequireDefault(_LayoutSwitch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		computed: {
			tabsSource: 'tabsSource',
			selectedTabKey: 'selectedTabKey',
			logs: 'consoleMergedLogs',
			isTabsOpened: 'isTabsOpened',
			currentCode: 'currentCode',
			layout: 'layout'
		},
		components: {
			Sidebar: _Sidebar2.default,
			Tabs: _Tabs2.default,
			Console: _Console2.default,
			Code: _Code2.default,
			LayoutSwitch: _LayoutSwitch2.default
		},
		template: '\n\t\t<div class="app { layout }">\n\t\t\t<div class="sidebar-wrapper">\n\t\t\t\t<Sidebar></Sidebar>\n\t\t\t\t<LayoutSwitch></LayoutSwitch>\n\t\t\t</div>\n\n\t\t\t<div class="content">\n\t\t\t\t<div class="main">\n\t\t\t\t\t<iframe ref="v" src="{ layout === \'mobile\' ? \'./mobile-preview.html\' : \'./preview.html\' }" frameborder="0"></iframe>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="tabs-wrapper { isTabsOpened ? \'open\' : \'\' }">\n\t\t\t\t\t<div class="tabs-header">\n\t\t\t\t\t\t<Tabs\n\t\t\t\t\t\t\tsource="{ tabsSource }"\n\t\t\t\t\t\t\tselected="{ selectedTabKey }"\n\t\t\t\t\t\t\ton-change="{ this.dispatch( \'switchTab\', $event ) }"\n\t\t\t\t\t\t></Tabs>\n\t\t\t\t\t\t<div class="tabs-header__toolbar">\n\t\t\t\t\t\t\t{#if selectedTabKey === \'console\'}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'clearLogs\' ) }">&#xe603;</span>\n\t\t\t\t\t\t\t{/if}\n\n\t\t\t\t\t\t\t{#if layout !== \'mobile\'}\n\t\t\t\t\t\t\t\t{#if isTabsOpened}\n\t\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'toggleTabs\' ) }">&#xe65a;</span>\n\t\t\t\t\t\t\t\t{#else}\n\t\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'toggleTabs\' ) }">&#xe65c;</span>\n\t\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tabs-body">\n\t\t\t\t\t\t{#if selectedTabKey === \'console\'}\n\t\t\t\t\t\t<Console logs="{ logs }"></Console>\n\t\t\t\t\t\t{#elseif selectedTabKey === \'code\'}\n\t\t\t\t\t\t<Code code="{ currentCode }"></Code>\n\t\t\t\t\t\t{/if}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',
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
				} else if (type === 'SET_CODE') {
					_this.dispatch('setCode', payload);
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _deIndent = __webpack_require__(76);

	var _deIndent2 = _interopRequireDefault(_deIndent);

	var _highlight = __webpack_require__(12);

	var _highlight2 = _interopRequireDefault(_highlight);

	var _xml = __webpack_require__(13);

	var _xml2 = _interopRequireDefault(_xml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_highlight2.default.registerLanguage('xml', _xml2.default);

	exports.default = {
		template: '\n\t\t<div class="code">\n\t\t\t<pre><code class="html" ref="v"></code></pre>\n\t\t</div>\n\t',
		init: function init() {
			var _this = this;

			this.$watch('code', function (code) {
				var $code = _this.$refs.v;
				$code.innerHTML = _highlight2.default.highlightAuto((0, _deIndent2.default)(code)).value;
			});
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	(function(factory) {

	  // Find the global object for export to both the browser and web workers.
	  var globalObject = typeof window === 'object' && window ||
	                     typeof self === 'object' && self;

	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if(true) {
	    factory(exports);
	  } else if(globalObject) {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    globalObject.hljs = factory({});

	    // Finally register the global hljs with AMD.
	    if(typeof define === 'function' && define.amd) {
	      define([], function() {
	        return globalObject.hljs;
	      });
	    }
	  }

	}(function(hljs) {
	  // Convenience variables for build-in objects
	  var ArrayProto = [],
	      objectKeys = Object.keys;

	  // Global internal variables used within the highlight.js library.
	  var languages = {},
	      aliases   = {};

	  // Regular expressions used throughout the highlight.js library.
	  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
	      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
	      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

	  var spanEndTag = '</span>';

	  // Global options used when within external APIs. This is modified when
	  // calling the `hljs.configure` function.
	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };

	  // Object map that is used to escape some common HTML characters.
	  var escapeRegexMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;'
	  };

	  /* Utility functions */

	  function escape(value) {
	    return value.replace(/[&<>]/gm, function(character) {
	      return escapeRegexMap[character];
	    });
	  }

	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }

	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index === 0;
	  }

	  function isNotHighlighted(language) {
	    return noHighlightRe.test(language);
	  }

	  function blockLanguage(block) {
	    var i, match, length, _class;
	    var classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names.
	    match = languagePrefixRe.exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }

	    classes = classes.split(/\s+/);

	    for (i = 0, length = classes.length; i < length; i++) {
	      _class = classes[i]

	      if (isNotHighlighted(_class) || getLanguage(_class)) {
	        return _class;
	      }
	    }
	  }

	  function inherit(parent, obj) {
	    var key;
	    var result = {};

	    for (key in parent)
	      result[key] = parent[key];
	    if (obj)
	      for (key in obj)
	        result[key] = obj[key];
	    return result;
	  }

	  /* Stream merging */

	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType === 3)
	          offset += child.nodeValue.length;
	        else if (child.nodeType === 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }

	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];

	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset !== highlighted[0].offset) {
	        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	      }

	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:

	      if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;

	      ... which is collapsed to:
	      */
	      return highlighted[0].event === 'start' ? original : highlighted;
	    }

	    function open(node) {
	      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
	      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
	    }

	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }

	    function render(event) {
	      (event.event === 'start' ? open : close)(event.node);
	    }

	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substr(processed, stream[0].offset - processed));
	      processed = stream[0].offset;
	      if (stream === original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream === original && stream.length && stream[0].offset === processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event === 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }

	  /* Initialization */

	  function compileLanguage(language) {

	    function reStr(re) {
	        return (re && re.source) || re;
	    }

	    function langRe(value, global) {
	      return new RegExp(
	        reStr(value),
	        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	      );
	    }

	    function compileMode(mode, parent) {
	      if (mode.compiled)
	        return;
	      mode.compiled = true;

	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};

	        var flatten = function(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function(kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };

	        if (typeof mode.keywords === 'string') { // string
	          flatten('keyword', mode.keywords);
	        } else {
	          objectKeys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin)
	          mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent)
	          mode.end = /\B|\b/;
	        if (mode.end)
	          mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end)
	          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal)
	        mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance == null)
	        mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      var expanded_contains = [];
	      mode.contains.forEach(function(c) {
	        if (c.variants) {
	          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
	        } else {
	          expanded_contains.push(c === 'self' ? mode : c);
	        }
	      });
	      mode.contains = expanded_contains;
	      mode.contains.forEach(function(c) {compileMode(c, mode);});

	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }

	      var terminators =
	        mode.contains.map(function(c) {
	          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	        })
	        .concat([mode.terminator_end, mode.illegal])
	        .map(reStr)
	        .filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
	    }

	    compileMode(language);
	  }

	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:

	  - relevance (int)
	  - value (an HTML string with highlighting markup)

	  */
	  function highlight(name, value, ignore_illegals, continuation) {

	    function subMode(lexeme, mode) {
	      var i, length;

	      for (i = 0, length = mode.contains.length; i < length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }

	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }

	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }

	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }

	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan    = '<span class="' + classPrefix,
	          closeSpan   = leaveOpen ? '' : spanEndTag

	      openSpan += classname + '">';

	      return openSpan + insideSpan + closeSpan;
	    }

	    function processKeywords() {
	      var keyword_match, last_index, match, result;

	      if (!top.keywords)
	        return escape(mode_buffer);

	      result = '';
	      last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      match = top.lexemesRe.exec(mode_buffer);

	      while (match) {
	        result += escape(mode_buffer.substr(last_index, match.index - last_index));
	        keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }

	    function processSubLanguage() {
	      var explicit = typeof top.subLanguage === 'string';
	      if (explicit && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }

	      var result = explicit ?
	                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
	                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (explicit) {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }

	    function processBuffer() {
	      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
	      mode_buffer = '';
	    }

	    function startNewMode(mode) {
	      result += mode.className? buildSpan(mode.className, '', true): '';
	      top = Object.create(mode, {parent: {value: top}});
	    }

	    function processLexeme(buffer, lexeme) {

	      mode_buffer += buffer;

	      if (lexeme == null) {
	        processBuffer();
	        return 0;
	      }

	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        if (new_mode.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (new_mode.excludeBegin) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
	            mode_buffer = lexeme;
	          }
	        }
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }

	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (origin.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (!(origin.returnEnd || origin.excludeEnd)) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (origin.excludeEnd) {
	            mode_buffer = lexeme;
	          }
	        }
	        do {
	          if (top.className) {
	            result += spanEndTag;
	          }
	          if (!top.skip) {
	            relevance += top.relevance;
	          }
	          top = top.parent;
	        } while (top !== end_mode.parent);
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }

	      if (isIllegal(lexeme, top))
	        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }

	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }

	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '', current;
	    for(current = top; current !== language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match, count, index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match)
	          break;
	        count = processLexeme(value.substr(index, match.index - index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for(current = top; current.parent; current = current.parent) { // close dangling modes
	        if (current.className) {
	          result += spanEndTag;
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message && e.message.indexOf('Illegal') !== -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }

	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	  */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || objectKeys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.filter(getLanguage).forEach(function(name) {
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }

	  /*
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	  */
	  function fixMarkup(value) {
	    return !(options.tabReplace || options.useBR)
	      ? value
	      : value.replace(fixMarkupRe, function(match, p1) {
	          if (options.useBR && match === '\n') {
	            return '<br>';
	          } else if (options.tabReplace) {
	            return p1.replace(/\t/g, options.tabReplace);
	          }
	      });
	  }

	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result   = [prevClassName.trim()];

	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }

	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }

	    return result.join(' ').trim();
	  }

	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var node, originalStream, result, resultNode, text;
	    var language = blockLanguage(block);

	    if (isNotHighlighted(language))
	        return;

	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    text = node.textContent;
	    result = language ? highlight(language, text, true) : highlightAuto(text);

	    originalStream = nodeStream(node);
	    if (originalStream.length) {
	      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);

	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }

	  /*
	  Updates highlight.js global options with values passed in the form of an object.
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }

	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called)
	      return;
	    initHighlighting.called = true;

	    var blocks = document.querySelectorAll('pre code');
	    ArrayProto.forEach.call(blocks, highlightBlock);
	  }

	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }

	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
	    }
	  }

	  function listLanguages() {
	    return objectKeys(languages);
	  }

	  function getLanguage(name) {
	    name = (name || '').toLowerCase();
	    return languages[name] || languages[aliases[name]];
	  }

	  /* Interface definition */

	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;

	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit(
	      {
	        className: 'comment',
	        begin: begin, end: end,
	        contains: []
	      },
	      inherits || {}
	    );
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' +
	      '%|em|ex|ch|rem'  +
	      '|vw|vh|vmin|vmax' +
	      '|cm|mm|in|pt|pc|px' +
	      '|deg|grad|rad|turn' +
	      '|s|ms' +
	      '|Hz|kHz' +
	      '|dpi|dpcm|dppx' +
	      ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      {
	        begin: /\[/, end: /\]/,
	        relevance: 0,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };
	  hljs.METHOD_GUARD = {
	    // excludes method names from keyword processing
	    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };

	  return hljs;
	}));


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: /=\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'string',
	            endsParent: true,
	            variants: [
	              {begin: /"/, end: /"/},
	              {begin: /'/, end: /'/},
	              {begin: /[^\s"'=<>`]+/}
	            ]
	          }
	        ]
	      }
	    ]
	  };
	  return {
	    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: '<!DOCTYPE', end: '>',
	        relevance: 10,
	        contains: [{begin: '\\[', end: '\\]'}]
	      },
	      hljs.COMMENT(
	        '<!--',
	        '-->',
	        {
	          relevance: 10
	        }
	      ),
	      {
	        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	        relevance: 10
	      },
	      {
	        begin: /<\?(php)?/, end: /\?>/,
	        subLanguage: 'php',
	        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
	      },
	      {
	        className: 'tag',
	        /*
	        The lookahead pattern (?=...) ensures that 'begin' only matches
	        '<style' as a single word, followed by a whitespace or an
	        ending braket. The '$' is needed for the lexeme to be recognized
	        by hljs.subMode() that tests lexemes outside the stream.
	        */
	        begin: '<style(?=\\s|>|$)', end: '>',
	        keywords: {name: 'style'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '</style>', returnEnd: true,
	          subLanguage: ['css', 'xml']
	        }
	      },
	      {
	        className: 'tag',
	        // See the comment in the <style tag about the lookahead pattern
	        begin: '<script(?=\\s|>|$)', end: '>',
	        keywords: {name: 'script'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '\<\/script\>', returnEnd: true,
	          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
	        }
	      },
	      {
	        className: 'meta',
	        variants: [
	          {begin: /<\?xml/, end: /\?>/, relevance: 10},
	          {begin: /<\?\w+/, end: /\?>/}
	        ]
	      },
	      {
	        className: 'tag',
	        begin: '</?', end: '/?>',
	        contains: [
	          {
	            className: 'name', begin: /[^\/><\s]+/, relevance: 0
	          },
	          TAG_INTERNALS
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'layout',
		state: {
			isTabsOpened: true,
			layout: 'pc',
			layouts: ['pc', 'mobile']
		},
		reducers: {
			toggleTabs: function toggleTabs(state) {
				state.isTabsOpened = !state.isTabsOpened;
			},
			changeLayout: function changeLayout(state, layout) {
				state.layout = layout;
			}
		}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'code',
		state: {
			current: ''
		},
		reducers: {
			set: function set(state, payload) {
				state.current = payload;
			}
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		computed: {
			layout: 'layout',
			layouts: 'layouts'
		},
		template: '\n\t\t<button\n\t\t\tclass="layout-switch-button"\n\t\t\ton-click="{ this.onChangeLayout() }"\n\t\t>switch to <strong>{ nextLayout }</strong> mode</button>\n\t',
		config: function config() {
			var layouts = this.$get('layouts');
			var layout = this.$get('layout');
			this.data.nextLayout = getNext(layout, layouts);
		},
		onChangeLayout: function onChangeLayout() {
			var _this = this;

			this.dispatch('changeLayout', this.data.nextLayout);
			setTimeout(function () {
				var layouts = _this.$get('layouts');
				var layout = _this.$get('layout');
				_this.data.nextLayout = getNext(layout, layouts);
				_this.$update();
			}, 10);
		}
	};


	function getNext(layout, layouts) {
		var index = layouts.indexOf(layout);
		return layouts[(index + 1) % layouts.length];
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	var splitRE = /\r?\n/g
	var emptyRE = /^\s*$/
	var needFixRE = /^(\r?\n)*[\t\s]/

	module.exports = function deindent (str) {
	  if (!needFixRE.test(str)) {
	    return str
	  }
	  var lines = str.split(splitRE)
	  var min = Infinity
	  var type, cur, c
	  for (var i = 0; i < lines.length; i++) {
	    var line = lines[i]
	    if (!emptyRE.test(line)) {
	      if (!type) {
	        c = line.charAt(0)
	        if (c === ' ' || c === '\t') {
	          type = c
	          cur = count(line, type)
	          if (cur < min) {
	            min = cur
	          }
	        } else {
	          return str
	        }
	      } else {
	        cur = count(line, type)
	        if (cur < min) {
	          min = cur
	        }
	      }
	    }
	  }
	  return lines.map(function (line) {
	    return line.slice(min)
	  }).join('\n')
	}

	function count (line, type) {
	  var i = 0
	  while (line.charAt(i) === type) {
	    i++
	  }
	  return i
	}


/***/ }
/******/ ]);