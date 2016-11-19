(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (_ref) {
		var actors = _ref.actors;

		parent.postMessage({
			type: 'SET_ACTORS',
			payload: JSON.stringify(actors)
		}, location.origin);

		window.onload = function () {
			parent.postMessage({
				type: 'LOADED',
				payload: void 0
			}, location.origin);
		};

		var previous = void 0;
		window.addEventListener('message', function (_ref2) {
			var data = _ref2.data;
			var type = data.type,
			    payload = data.payload;


			if (type === 'ROUTE_UPDATE') {
				var _ret = function () {
					var _payload$param = payload.param,
					    name = _payload$param.name,
					    description = _payload$param.description;


					if (!actors[name]) {
						return {
							v: void 0
						};
					}

					var filtered = actors[name].filter(function (v) {
						return v.description === description;
					});
					var Spot = filtered[0] && filtered[0].Spot;
					var code = filtered[0] && filtered[0].code;

					if (Spot) {
						// clean
						if (previous) {
							previous.$inject(false);
						}

						// implement $log
						Spot.implement({ $log: $log });

						// inject
						previous = new Spot().$inject('#app');
					}

					if (code) {
						parent.postMessage({
							type: 'SET_CODE',
							payload: code
						}, location.origin);
					}
				}();

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
		}, false);

		function $log(message) {
			parent.postMessage({
				type: 'LOG',
				payload: message
			}, location.origin);
		}
	};

	__webpack_require__(31);

/***/ },

/***/ 31:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;