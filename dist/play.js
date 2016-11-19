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
	exports.merge = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Actor, m) {
		return new Play(Actor, m);
	};

	var _getCtor = __webpack_require__(30);

	var _getCtor2 = _interopRequireDefault(_getCtor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var merge = exports.merge = function merge(modules, m) {
		m.exports.actors = modules.reduce(function (current, next) {
			return Object.assign({}, current, next.actors);
		}, {});
	};

	var Play = function () {
		function Play(Actor, m) {
			_classCallCheck(this, Play);

			this.Actor = Actor;
			this.m = m;

			return this;
		}

		_createClass(Play, [{
			key: 'name',
			value: function name(_name) {
				this.name = _name;

				return this;
			}
		}, {
			key: 'add',
			value: function add(description, template) {
				// some checks
				var isValidTemplate = (typeof template === 'undefined' ? 'undefined' : _typeof(template)) === 'object' || typeof template === 'string';
				if (!isValidTemplate) {
					console.error('failed to add ' + JSON.stringify(description) + ' with ' + template);
					return;
				}

				var actorName = this.name;
				if (typeof actorName === 'undefined') {
					console.error('please provide a name for ' + description + ' by .name( ... ) before adding it');
					return;
				}

				// let's start
				var Actor = this.Actor;
				var Ctor = (0, _getCtor2.default)(Actor);

				var Spot = void 0;
				var code = void 0;
				if ((typeof template === 'undefined' ? 'undefined' : _typeof(template)) === 'object') {
					Spot = Ctor.extend(template);
					code = template.template;
				} else if (typeof template === 'string') {
					Spot = Ctor.extend({ template: template });
					code = template;
				}

				// register Actor
				Spot.component(actorName, Actor);

				// expose
				var m = this.m;
				m.exports.actors = m.exports.actors || {};
				m.exports.actors[actorName] = m.exports.actors[actorName] || [];
				m.exports.actors[actorName].push({
					name: actorName, description: description, Spot: Spot, code: code
				});

				return this;
			}
		}]);

		return Play;
	}();

/***/ },

/***/ 30:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (Comp) {
		return Comp.prototype.constructor;
	};

/***/ }

/******/ })
});
;