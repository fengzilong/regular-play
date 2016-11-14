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

	var _console = __webpack_require__(13);

	var _console2 = _interopRequireDefault(_console);

	var _tabs = __webpack_require__(14);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _layout = __webpack_require__(15);

	var _layout2 = _interopRequireDefault(_layout);

	var _code = __webpack_require__(26);

	var _code2 = _interopRequireDefault(_code);

	__webpack_require__(16);

	__webpack_require__(20);

	__webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.reo = factory());
	}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	// shim for es5
	var slice = [].slice;
	var tstr = ({}).toString;

	function extend(o1, o2 ){
	  for(var i in o2) { if( o1[i] === undefined){
	    o1[i] = o2[i];
	  } }
	  return o2;
	}


	var shim = function(){
	  // String proto ;
	  extend(String.prototype, {
	    trim: function(){
	      return this.replace(/^\s+|\s+$/g, '');
	    }
	  });


	  // Array proto;
	  extend(Array.prototype, {
	    indexOf: function(obj, from){
	      var this$1 = this;

	      from = from || 0;
	      for (var i = from, len = this.length; i < len; i++) {
	        if (this$1[i] === obj) { return i; }
	      }
	      return -1;
	    },
	    // polyfill from MDN 
	    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	    forEach: function(callback, ctx){
	      var k = 0;

	      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
	      var O = Object(this);

	      var len = O.length >>> 0; 

	      if ( typeof callback !== "function" ) {
	        throw new TypeError( callback + " is not a function" );
	      }

	      // 7. Repeat, while k < len
	      while( k < len ) {

	        var kValue;

	        if ( k in O ) {

	          kValue = O[ k ];

	          callback.call( ctx, kValue, k, O );
	        }
	        k++;
	      }
	    },
	    // @deprecated
	    //  will be removed at 0.5.0
	    filter: function(fun, context){

	      var t = Object(this);
	      var len = t.length >>> 0;
	      if (typeof fun !== "function")
	        { throw new TypeError(); }

	      var res = [];
	      for (var i = 0; i < len; i++)
	      {
	        if (i in t)
	        {
	          var val = t[i];
	          if (fun.call(context, val, i, t))
	            { res.push(val); }
	        }
	      }

	      return res;
	    }
	  });

	  // Function proto;
	  extend(Function.prototype, {
	    bind: function(context){
	      var fn = this;
	      var preArgs = slice.call(arguments, 1);
	      return function(){
	        var args = preArgs.concat(slice.call(arguments));
	        return fn.apply(context, args);
	      }
	    }
	  });
	  
	  // Array
	  extend(Array, {
	    isArray: function(arr){
	      return tstr.call(arr) === "[object Array]";
	    }
	  });
	};

	// http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
	var entities = {
	  'quot':34, 
	  'amp':38, 
	  'apos':39, 
	  'lt':60, 
	  'gt':62, 
	  'nbsp':160, 
	  'iexcl':161, 
	  'cent':162, 
	  'pound':163, 
	  'curren':164, 
	  'yen':165, 
	  'brvbar':166, 
	  'sect':167, 
	  'uml':168, 
	  'copy':169, 
	  'ordf':170, 
	  'laquo':171, 
	  'not':172, 
	  'shy':173, 
	  'reg':174, 
	  'macr':175, 
	  'deg':176, 
	  'plusmn':177, 
	  'sup2':178, 
	  'sup3':179, 
	  'acute':180, 
	  'micro':181, 
	  'para':182, 
	  'middot':183, 
	  'cedil':184, 
	  'sup1':185, 
	  'ordm':186, 
	  'raquo':187, 
	  'frac14':188, 
	  'frac12':189, 
	  'frac34':190, 
	  'iquest':191, 
	  'Agrave':192, 
	  'Aacute':193, 
	  'Acirc':194, 
	  'Atilde':195, 
	  'Auml':196, 
	  'Aring':197, 
	  'AElig':198, 
	  'Ccedil':199, 
	  'Egrave':200, 
	  'Eacute':201, 
	  'Ecirc':202, 
	  'Euml':203, 
	  'Igrave':204, 
	  'Iacute':205, 
	  'Icirc':206, 
	  'Iuml':207, 
	  'ETH':208, 
	  'Ntilde':209, 
	  'Ograve':210, 
	  'Oacute':211, 
	  'Ocirc':212, 
	  'Otilde':213, 
	  'Ouml':214, 
	  'times':215, 
	  'Oslash':216, 
	  'Ugrave':217, 
	  'Uacute':218, 
	  'Ucirc':219, 
	  'Uuml':220, 
	  'Yacute':221, 
	  'THORN':222, 
	  'szlig':223, 
	  'agrave':224, 
	  'aacute':225, 
	  'acirc':226, 
	  'atilde':227, 
	  'auml':228, 
	  'aring':229, 
	  'aelig':230, 
	  'ccedil':231, 
	  'egrave':232, 
	  'eacute':233, 
	  'ecirc':234, 
	  'euml':235, 
	  'igrave':236, 
	  'iacute':237, 
	  'icirc':238, 
	  'iuml':239, 
	  'eth':240, 
	  'ntilde':241, 
	  'ograve':242, 
	  'oacute':243, 
	  'ocirc':244, 
	  'otilde':245, 
	  'ouml':246, 
	  'divide':247, 
	  'oslash':248, 
	  'ugrave':249, 
	  'uacute':250, 
	  'ucirc':251, 
	  'uuml':252, 
	  'yacute':253, 
	  'thorn':254, 
	  'yuml':255, 
	  'fnof':402, 
	  'Alpha':913, 
	  'Beta':914, 
	  'Gamma':915, 
	  'Delta':916, 
	  'Epsilon':917, 
	  'Zeta':918, 
	  'Eta':919, 
	  'Theta':920, 
	  'Iota':921, 
	  'Kappa':922, 
	  'Lambda':923, 
	  'Mu':924, 
	  'Nu':925, 
	  'Xi':926, 
	  'Omicron':927, 
	  'Pi':928, 
	  'Rho':929, 
	  'Sigma':931, 
	  'Tau':932, 
	  'Upsilon':933, 
	  'Phi':934, 
	  'Chi':935, 
	  'Psi':936, 
	  'Omega':937, 
	  'alpha':945, 
	  'beta':946, 
	  'gamma':947, 
	  'delta':948, 
	  'epsilon':949, 
	  'zeta':950, 
	  'eta':951, 
	  'theta':952, 
	  'iota':953, 
	  'kappa':954, 
	  'lambda':955, 
	  'mu':956, 
	  'nu':957, 
	  'xi':958, 
	  'omicron':959, 
	  'pi':960, 
	  'rho':961, 
	  'sigmaf':962, 
	  'sigma':963, 
	  'tau':964, 
	  'upsilon':965, 
	  'phi':966, 
	  'chi':967, 
	  'psi':968, 
	  'omega':969, 
	  'thetasym':977, 
	  'upsih':978, 
	  'piv':982, 
	  'bull':8226, 
	  'hellip':8230, 
	  'prime':8242, 
	  'Prime':8243, 
	  'oline':8254, 
	  'frasl':8260, 
	  'weierp':8472, 
	  'image':8465, 
	  'real':8476, 
	  'trade':8482, 
	  'alefsym':8501, 
	  'larr':8592, 
	  'uarr':8593, 
	  'rarr':8594, 
	  'darr':8595, 
	  'harr':8596, 
	  'crarr':8629, 
	  'lArr':8656, 
	  'uArr':8657, 
	  'rArr':8658, 
	  'dArr':8659, 
	  'hArr':8660, 
	  'forall':8704, 
	  'part':8706, 
	  'exist':8707, 
	  'empty':8709, 
	  'nabla':8711, 
	  'isin':8712, 
	  'notin':8713, 
	  'ni':8715, 
	  'prod':8719, 
	  'sum':8721, 
	  'minus':8722, 
	  'lowast':8727, 
	  'radic':8730, 
	  'prop':8733, 
	  'infin':8734, 
	  'ang':8736, 
	  'and':8743, 
	  'or':8744, 
	  'cap':8745, 
	  'cup':8746, 
	  'int':8747, 
	  'there4':8756, 
	  'sim':8764, 
	  'cong':8773, 
	  'asymp':8776, 
	  'ne':8800, 
	  'equiv':8801, 
	  'le':8804, 
	  'ge':8805, 
	  'sub':8834, 
	  'sup':8835, 
	  'nsub':8836, 
	  'sube':8838, 
	  'supe':8839, 
	  'oplus':8853, 
	  'otimes':8855, 
	  'perp':8869, 
	  'sdot':8901, 
	  'lceil':8968, 
	  'rceil':8969, 
	  'lfloor':8970, 
	  'rfloor':8971, 
	  'lang':9001, 
	  'rang':9002, 
	  'loz':9674, 
	  'spades':9824, 
	  'clubs':9827, 
	  'hearts':9829, 
	  'diams':9830, 
	  'OElig':338, 
	  'oelig':339, 
	  'Scaron':352, 
	  'scaron':353, 
	  'Yuml':376, 
	  'circ':710, 
	  'tilde':732, 
	  'ensp':8194, 
	  'emsp':8195, 
	  'thinsp':8201, 
	  'zwnj':8204, 
	  'zwj':8205, 
	  'lrm':8206, 
	  'rlm':8207, 
	  'ndash':8211, 
	  'mdash':8212, 
	  'lsquo':8216, 
	  'rsquo':8217, 
	  'sbquo':8218, 
	  'ldquo':8220, 
	  'rdquo':8221, 
	  'bdquo':8222, 
	  'dagger':8224, 
	  'Dagger':8225, 
	  'permil':8240, 
	  'lsaquo':8249, 
	  'rsaquo':8250, 
	  'euro':8364
	};



	var entities_1  = entities;

	var util = createCommonjsModule(function (module) {
	shim();



	var _  = module.exports;
	var entities = entities_1;
	var slice = [].slice;
	var o2str = ({}).toString;
	var win = typeof window !=='undefined'? window: commonjsGlobal;
	var MAX_PRIORITY = 9999;


	_.noop = function(){};
	_.uid = (function(){
	  var _uid=0;
	  return function(){
	    return _uid++;
	  }
	})();

	_.extend = function( o1, o2, override ){
	  for(var i in o2) { if (o2.hasOwnProperty(i)){
	    if( o1[i] === undefined || override === true ){
	      o1[i] = o2[i];
	    }
	  } }
	  return o1;
	};

	_.keys = Object.keys? Object.keys: function(obj){
	  var res = [];
	  for(var i in obj) { if(obj.hasOwnProperty(i)){
	    res.push(i);
	  } }
	  return res;
	};

	_.some = function(list, fn){
	  for(var i =0,len = list.length; i < len; i++){
	    if(fn(list[i])) { return true }
	  }
	};

	_.varName = 'd';
	_.setName = 'p_';
	_.ctxName = 'c';
	_.extName = 'e';

	_.rWord = /^[\$\w]+$/;
	_.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/;

	_.nextTick = typeof setImmediate === 'function'? 
	  setImmediate.bind(win) : 
	  function(callback) {
	    setTimeout(callback, 0); 
	  };



	_.prefix = "'use strict';var " + _.varName + "=" + _.ctxName + ".data;" +  _.extName  + "=" + _.extName + "||'';";


	_.slice = function(obj, start, end){
	  var res = [];
	  for(var i = start || 0, len = end || obj.length; i < len; i++){
	    res.push(obj[i]);
	  }
	  return res;
	};

	// beacuse slice and toLowerCase is expensive. we handle undefined and null in another way
	_.typeOf = function (o) {
	  return o == null ? String(o) :o2str.call(o).slice(8, -1).toLowerCase();
	};




	_.makePredicate = function makePredicate(words, prefix) {
	    if (typeof words === "string") {
	        words = words.split(" ");
	    }
	    var f = "",
	    cats = [];
	    out: for (var i = 0; i < words.length; ++i) {
	        for (var j = 0; j < cats.length; ++j){
	          if (cats[j][0].length === words[i].length) {
	              cats[j].push(words[i]);
	              continue out;
	          }
	        }
	        cats.push([words[i]]);
	    }
	    function compareTo(arr) {
	        if (arr.length === 1) { return f += "return str === '" + arr[0] + "';"; }
	        f += "switch(str){";
	        for (var i = 0; i < arr.length; ++i){
	           f += "case '" + arr[i] + "':";
	        }
	        f += "return true}return false;";
	    }

	    // When there are more than three length categories, an outer
	    // switch first dispatches on the lengths, to save on comparisons.
	    if (cats.length > 3) {
	        cats.sort(function(a, b) {
	            return b.length - a.length;
	        });
	        f += "switch(str.length){";
	        for (var i = 0; i < cats.length; ++i) {
	            var cat = cats[i];
	            f += "case " + cat[0].length + ":";
	            compareTo(cat);
	        }
	        f += "}";

	        // Otherwise, simply generate a flat `switch` statement.
	    } else {
	        compareTo(words);
	    }
	    return new Function("str", f);
	};


	_.trackErrorPos = (function (){
	  // linebreak
	  var lb = /\r\n|[\n\r\u2028\u2029]/g;
	  var minRange = 20, maxRange = 20;
	  function findLine(lines, pos){
	    var tmpLen = 0;
	    for(var i = 0,len = lines.length; i < len; i++){
	      var lineLen = (lines[i] || "").length;

	      if(tmpLen + lineLen > pos) {
	        return {num: i, line: lines[i], start: pos - i - tmpLen , prev:lines[i-1], next: lines[i+1] };
	      }
	      // 1 is for the linebreak
	      tmpLen = tmpLen + lineLen ;
	    }
	  }
	  function formatLine(str,  start, num, target){
	    var len = str.length;
	    var min = start - minRange;
	    if(min < 0) { min = 0; }
	    var max = start + maxRange;
	    if(max > len) { max = len; }

	    var remain = str.slice(min, max);
	    var prefix = "[" +(num+1) + "] " + (min > 0? ".." : "");
	    var postfix = max < len ? "..": "";
	    var res = prefix + remain + postfix;
	    if(target) { res += "\n" + new Array(start-min + prefix.length + 1).join(" ") + "^^^"; }
	    return res;
	  }
	  return function(input, pos){
	    if(pos > input.length-1) { pos = input.length-1; }
	    lb.lastIndex = 0;
	    var lines = input.split(lb);
	    var line = findLine(lines,pos);
	    var start = line.start, num = line.num;

	    return (line.prev? formatLine(line.prev, start, num-1 ) + '\n': '' ) + 
	      formatLine(line.line, start, num, true) + '\n' + 
	      (line.next? formatLine(line.next, start, num+1 ) + '\n': '' );

	  }
	})();


	var ignoredRef = /\((\?\!|\?\:|\?\=)/g;
	_.findSubCapture = function (regStr) {
	  var left = 0,
	    right = 0,
	    len = regStr.length,
	    ignored = regStr.match(ignoredRef); // ignored uncapture
	  if(ignored) { ignored = ignored.length; }
	  else { ignored = 0; }
	  for (; len--;) {
	    var letter = regStr.charAt(len);
	    if (len === 0 || regStr.charAt(len - 1) !== "\\" ) { 
	      if (letter === "(") { left++; }
	      if (letter === ")") { right++; }
	    }
	  }
	  if (left !== right) { throw "RegExp: "+ regStr + "'s bracket is not marched"; }
	  else { return left - ignored; }
	};


	_.escapeRegExp = function( str){// Credit: XRegExp 0.6.1 (c) 2007-2008 Steven Levithan <http://stevenlevithan.com/regex/xregexp/> MIT License
	  return str.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(match){
	    return '\\' + match;
	  });
	};


	var rEntity = new RegExp("&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|(" + _.keys(entities).join('|') + '));', 'gi');

	_.convertEntity = function(chr){

	  return ("" + chr).replace(rEntity, function(all, hex, dec, capture){
	    var charCode;
	    if( dec ) { charCode = parseInt( dec.slice(1), 10 ); }
	    else if( hex ) { charCode = parseInt( hex.slice(2), 16 ); }
	    else { charCode = entities[capture]; }

	    return String.fromCharCode( charCode )
	  });

	};


	// simple get accessor

	_.createObject = Object.create? function(o){
	  return Object.create(o || null)
	}: (function(){
	    function Temp() {}
	    return function(o){
	      if(!o) { return {} }
	      Temp.prototype = o;
	      var obj = new Temp();
	      Temp.prototype = null; // 不要保持一个 O 的杂散引用（a stray reference）...
	      return obj
	    }
	})();

	_.createProto = function(fn, o){
	    function Foo() { this.constructor = fn;}
	    Foo.prototype = o;
	    return (fn.prototype = new Foo());
	};


	_.removeOne = function(list , filter){
	  var len = list.length;
	  for(;len--;){
	    if(filter(list[len])) {
	      list.splice(len, 1);
	      return;
	    }
	  }
	};


	/**
	clone
	*/
	_.clone = function clone(obj){
	  if(!obj || (typeof obj !== 'object' )) { return obj; }
	  if(Array.isArray(obj)){
	    var cloned = [];
	    for(var i=0,len = obj.length; i< len;i++){
	      cloned[i] = obj[i];
	    }
	    return cloned;
	  }else{
	    var cloned = {};
	    for(var i in obj) { if(obj.hasOwnProperty(i)){
	      cloned[i] = obj[i];
	    } }
	    return cloned;
	  }
	};

	_.equals = function(now, old){
	  var type = typeof now;
	  if(type === 'number' && typeof old === 'number'&& isNaN(now) && isNaN(old)) { return true }
	  return now === old;
	};

	var dash = /-([a-z])/g;
	_.camelCase = function(str){
	  return str.replace(dash, function(all, capture){
	    return capture.toUpperCase();
	  })
	};



	_.throttle = function throttle(func, wait){
	  var wait = wait || 100;
	  var context, args, result;
	  var timeout = null;
	  var previous = 0;
	  var later = function() {
	    previous = +new Date;
	    timeout = null;
	    result = func.apply(context, args);
	    context = args = null;
	  };
	  return function() {
	    var now = + new Date;
	    var remaining = wait - (now - previous);
	    context = this;
	    args = arguments;
	    if (remaining <= 0 || remaining > wait) {
	      clearTimeout(timeout);
	      timeout = null;
	      previous = now;
	      result = func.apply(context, args);
	      context = args = null;
	    } else if (!timeout) {
	      timeout = setTimeout(later, remaining);
	    }
	    return result;
	  };
	};

	// hogan escape
	// ==============
	_.escape = (function(){
	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;

	  return function(str) {
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }
	})();

	_.cache = function(max){
	  max = max || 1000;
	  var keys = [],
	      cache = {};
	  return {
	    set: function(key, value) {
	      if (keys.length > this.max) {
	        cache[keys.shift()] = undefined;
	      }
	      // 
	      if(cache[key] === undefined){
	        keys.push(key);
	      }
	      cache[key] = value;
	      return value;
	    },
	    get: function(key) {
	      if (key === undefined) { return cache; }
	      return cache[key];
	    },
	    max: max,
	    len:function(){
	      return keys.length;
	    }
	  };
	};

	// // setup the raw Expression


	// handle the same logic on component's `on-*` and element's `on-*`
	// return the fire object
	_.handleEvent = function(value, type ){
	  var self = this, evaluate;
	  if(value.type === 'expression'){ // if is expression, go evaluated way
	    evaluate = value.get;
	  }
	  if(evaluate){
	    return function fire(obj){
	      self.$update(function(){
	        var data = this.data;
	        data.$event = obj;
	        var res = evaluate(self);
	        if(res === false && obj && obj.preventDefault) { obj.preventDefault(); }
	        data.$event = undefined;
	      });

	    }
	  }else{
	    return function fire(){
	      var args = _.slice(arguments);
	      args.unshift(value);
	      self.$update(function(){
	        self.$emit.apply(self, args);
	      });
	    }
	  }
	};

	// only call once
	_.once = function(fn){
	  var time = 0;
	  return function(){
	    if( time++ === 0) { fn.apply(this, arguments); }
	  }
	};

	_.fixObjStr = function(str){
	  if(str.trim().indexOf('{') !== 0){
	    return '{' + str + '}';
	  }
	  return str;
	};


	_.map= function(array, callback){
	  var res = [];
	  for (var i = 0, len = array.length; i < len; i++) {
	    res.push(callback(array[i], i));
	  }
	  return res;
	};

	function log(msg, type){
	  if(typeof console !== "undefined")  { console[type || "log"](msg); }
	}

	_.log = log;


	_.normListener = function( events  ){
	    var eventListeners = [];
	    var pType = _.typeOf( events );
	    if( pType === 'array' ){
	      return events;
	    }else if ( pType === 'object' ){
	      for( var i in events ) { if ( events.hasOwnProperty(i) ){
	        eventListeners.push({
	          type: i,
	          listener: events[i]
	        });
	      } }
	    }
	    return eventListeners;
	};


	//http://www.w3.org/html/wg/drafts/html/master/single-page.html#void-elements
	_.isVoidTag = _.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content");
	_.isBooleanAttr = _.makePredicate('selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple');


	_.isExpr = function(expr){
	  return expr && expr.type === 'expression';
	};
	// @TODO: make it more strict
	_.isGroup = function(group){
	  return group.inject || group.$inject;
	};

	_.getCompileFn = function(source, ctx, options){
	  return ctx.$compile.bind(ctx,source, options)
	};

	// remove directive param from AST
	_.fixTagAST = function( tagAST, Component ){

	  if( tagAST.touched ) { return; }

	  var attrs = tagAST.attrs;

	  if( !attrs ) { return; }

	  // Maybe multiple directive need same param, 
	  // We place all param in totalParamMap
	  var len = attrs.length;
	  if(!len) { return; }
	  var directives=[], otherAttrMap = {};
	  for(;len--;){

	    var attr = attrs[ len ];


	    // @IE fix IE9- input type can't assign after value
	    if(attr.name === 'type') { attr.priority = MAX_PRIORITY+1; }

	    var directive = Component.directive( attr.name );
	    if( directive ) {

	      attr.priority = directive.priority || 1;
	      attr.directive = true;
	      directives.push(attr);

	    }else if(attr.type === 'attribute'){
	      otherAttrMap[attr.name] = attr.value;
	    }
	  }

	  directives.forEach( function( attr ){
	    var directive = Component.directive(attr.name);
	    var param = directive.param;
	    if(param && param.length){
	      attr.param = {};
	      param.forEach(function( name ){
	        if( name in otherAttrMap ){
	          attr.param[name] = otherAttrMap[name] === undefined? true: otherAttrMap[name];
	          _.removeOne(attrs, function(attr){
	            return attr.name === name
	          });
	        }
	      });
	    }
	  });

	  attrs.sort(function(a1, a2){
	    
	    var p1 = a1.priority;
	    var p2 = a2.priority;

	    if( p1 == null ) { p1 = MAX_PRIORITY; }
	    if( p2 == null ) { p2 = MAX_PRIORITY; }

	    return p2 - p1;

	  });

	  tagAST.touched = true;
	};

	_.findItem = function(list, filter){
	  if(!list || !list.length) { return; }
	  var len = list.length;
	  while(len--){
	    if(filter(list[len])) { return list[len] }
	  }
	};

	_.getParamObj = function(component, param){
	  var paramObj = {};
	  if(param) {
	    for(var i in param) { if(param.hasOwnProperty(i)){
	      var value = param[i];
	      paramObj[i] =  value && value.type==='expression'? component.$get(value): value;
	    } }
	  }
	  return paramObj;
	};
	});

	// some fixture test;
	// ---------------
	var _ = util;
	var svg = (function(){
	  return typeof document !== "undefined" && document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1" );
	})();


	var browser = typeof document !== "undefined" && document.nodeType;
	// whether have component in initializing
	var exprCache = _.cache(1000);
	var isRunning = false;

	var env = {
		svg: svg,
		browser: browser,
		exprCache: exprCache,
		isRunning: isRunning
	};

	var config$1 = {
	  'BEGIN': '{',
	  'END': '}',
	  'PRECOMPILE': false
	};

	var _$2 = util;
	var config$4 = config$1;

	// some custom tag  will conflict with the Lexer progress
	var conflictTag = {"}": "{", "]": "["};
	var map1;
	var map2;
	// some macro for lexer
	var macro = {
	  'NAME': /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/,
	  'IDENT': /[\$_A-Za-z][_0-9A-Za-z\$]*/,
	  'SPACE': /[\r\n\t\f ]/
	};


	var test = /a|(b)/.exec("a");
	var testSubCapure = test && test[1] === undefined? 
	  function(str){ return str !== undefined }
	  :function(str){return !!str};

	function wrapHander(handler){
	  return function(all){
	    return {type: handler, value: all }
	  }
	}

	function Lexer$1(input, opts){
	  if(conflictTag[config$4.END]){
	    this.markStart = conflictTag[config$4.END];
	    this.markEnd = config$4.END;
	  }

	  this.input = (input||"").trim();
	  this.opts = opts || {};
	  this.map = this.opts.mode !== 2?  map1: map2;
	  this.states = ["INIT"];
	  if(opts && opts.expression){
	     this.states.push("JST");
	     this.expression = true;
	  }
	}

	var lo = Lexer$1.prototype;


	lo.lex = function(str){
	  var this$1 = this;

	  str = (str || this.input).trim();
	  var tokens = [], split, test,mlen, token, state;
	  this.input = str, 
	  this.marks = 0;
	  // init the pos index
	  this.index=0;
	  var i = 0;
	  while(str){
	    i++;
	    state = this$1.state();
	    split = this$1.map[state]; 
	    test = split.TRUNK.exec(str);
	    if(!test){
	      this$1.error('Unrecoginized Token');
	    }
	    mlen = test[0].length;
	    str = str.slice(mlen);
	    token = this$1._process.call(this$1, test, split, str);
	    if(token) { tokens.push(token); }
	    this$1.index += mlen;
	    // if(state == 'TAG' || state == 'JST') str = this.skipspace(str);
	  }

	  tokens.push({type: 'EOF'});

	  return tokens;
	};

	lo.error = function(msg){
	  throw  Error("Parse Error: " + msg +  ':\n' + _$2.trackErrorPos(this.input, this.index));
	};

	lo._process = function(args, split,str){
	  var this$1 = this;

	  // console.log(args.join(","), this.state())
	  var links = split.links, marched = false, token;

	  for(var len = links.length, i=0;i<len ;i++){
	    var link = links[i],
	      handler = link[2],
	      index = link[0];
	    // if(args[6] === '>' && index === 6) console.log('haha')
	    if(testSubCapure(args[index])) {
	      marched = true;
	      if(handler){
	        token = handler.apply(this$1, args.slice(index, index + link[1]));
	        if(token)  { token.pos = this$1.index; }
	      }
	      break;
	    }
	  }
	  if(!marched){ // in ie lt8 . sub capture is "" but ont 
	    switch(str.charAt(0)){
	      case "<":
	        this.enter("TAG");
	        break;
	      default:
	        this.enter("JST");
	        break;
	    }
	  }
	  return token;
	};
	lo.enter = function(state){
	  this.states.push(state);
	  return this;
	};

	lo.state = function(){
	  var states = this.states;
	  return states[states.length-1];
	};

	lo.leave = function(state){
	  var states = this.states;
	  if(!state || states[states.length-1] === state) { states.pop(); }
	};


	Lexer$1.setup = function(){
	  macro.END = config$4.END;
	  macro.BEGIN = config$4.BEGIN;
	  //
	  map1 = genMap([
	    // INIT
	    rules.ENTER_JST,
	    rules.ENTER_TAG,
	    rules.TEXT,

	    //TAG
	    rules.TAG_NAME,
	    rules.TAG_OPEN,
	    rules.TAG_CLOSE,
	    rules.TAG_PUNCHOR,
	    rules.TAG_ENTER_JST,
	    rules.TAG_UNQ_VALUE,
	    rules.TAG_STRING,
	    rules.TAG_SPACE,
	    rules.TAG_COMMENT,

	    // JST
	    rules.JST_OPEN,
	    rules.JST_CLOSE,
	    rules.JST_COMMENT,
	    rules.JST_EXPR_OPEN,
	    rules.JST_IDENT,
	    rules.JST_SPACE,
	    rules.JST_LEAVE,
	    rules.JST_NUMBER,
	    rules.JST_PUNCHOR,
	    rules.JST_STRING,
	    rules.JST_COMMENT
	    ]);

	  // ignored the tag-relative token
	  map2 = genMap([
	    // INIT no < restrict
	    rules.ENTER_JST2,
	    rules.TEXT,
	    // JST
	    rules.JST_COMMENT,
	    rules.JST_OPEN,
	    rules.JST_CLOSE,
	    rules.JST_EXPR_OPEN,
	    rules.JST_IDENT,
	    rules.JST_SPACE,
	    rules.JST_LEAVE,
	    rules.JST_NUMBER,
	    rules.JST_PUNCHOR,
	    rules.JST_STRING,
	    rules.JST_COMMENT
	    ]);
	};


	function genMap(rules){
	  var rule, map = {}, sign;
	  for(var i = 0, len = rules.length; i < len ; i++){
	    rule = rules[i];
	    sign = rule[2] || 'INIT';
	    ( map[sign] || (map[sign] = {rules:[], links:[]}) ).rules.push(rule);
	  }
	  return setup(map);
	}

	function setup(map){
	  var split, rules, trunks, handler, reg, retain, rule;
	  function replaceFn(all, one){
	    return typeof macro[one] === 'string'? 
	      _$2.escapeRegExp(macro[one]) 
	      : String(macro[one]).slice(1,-1);
	  }

	  for(var i in map){

	    split = map[i];
	    split.curIndex = 1;
	    rules = split.rules;
	    trunks = [];

	    for(var j = 0,len = rules.length; j<len; j++){
	      rule = rules[j]; 
	      reg = rule[0];
	      handler = rule[1];

	      if(typeof handler === 'string'){
	        handler = wrapHander(handler);
	      }
	      if(_$2.typeOf(reg) === 'regexp') { reg = reg.toString().slice(1, -1); }

	      reg = reg.replace(/\{(\w+)\}/g, replaceFn);
	      retain = _$2.findSubCapture(reg) + 1; 
	      split.links.push([split.curIndex, retain, handler]); 
	      split.curIndex += retain;
	      trunks.push(reg);
	    }
	    split.TRUNK = new RegExp("^(?:(" + trunks.join(")|(") + "))");
	  }
	  return map;
	}

	var rules = {

	  // 1. INIT
	  // ---------------

	  // mode1's JST ENTER RULE
	  ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function(all){
	    this.enter('JST');
	    if(all) { return {type: 'TEXT', value: all} }
	  }],

	  // mode2's JST ENTER RULE
	  ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function(all){
	    this.enter('JST');
	    if(all) { return {type: 'TEXT', value: all} }
	  }],

	  ENTER_TAG: [/[^\x00]*?(?=<[\w\/\!])/, function(all){ 
	    this.enter('TAG');
	    if(all) { return {type: 'TEXT', value: all} }
	  }],

	  TEXT: [/[^\x00]+/, 'TEXT' ],

	  // 2. TAG
	  // --------------------
	  TAG_NAME: [/{NAME}/, 'NAME', 'TAG'],
	  TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f\t ]+/, 'UNQ', 'TAG'],

	  TAG_OPEN: [/<({NAME})\s*/, function(all, one){ //"
	    return {type: 'TAG_OPEN', value: one}
	  }, 'TAG'],
	  TAG_CLOSE: [/<\/({NAME})[\r\n\f\t ]*>/, function(all, one){
	    this.leave();
	    return {type: 'TAG_CLOSE', value: one }
	  }, 'TAG'],

	    // mode2's JST ENTER RULE
	  TAG_ENTER_JST: [/(?={BEGIN})/, function(){
	    this.enter('JST');
	  }, 'TAG'],


	  TAG_PUNCHOR: [/[\>\/=&]/, function(all){
	    if(all === '>') { this.leave(); }
	    return {type: all, value: all }
	  }, 'TAG'],
	  TAG_STRING:  [ /'([^']*)'|"([^"]*)\"/, /*'*/  function(all, one, two){ 
	    var value = one || two || "";

	    return {type: 'STRING', value: value}
	  }, 'TAG'],

	  TAG_SPACE: [/{SPACE}+/, null, 'TAG'],
	  TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, function(all){
	    this.leave();
	    // this.leave('TAG')
	  } ,'TAG'],

	  // 3. JST
	  // -------------------

	  JST_OPEN: ['{BEGIN}#{SPACE}*({IDENT})', function(all, name){
	    return {
	      type: 'OPEN',
	      value: name
	    }
	  }, 'JST'],
	  JST_LEAVE: [/{END}/, function(all){
	    if(this.markEnd === all && this.expression) { return {type: this.markEnd, value: this.markEnd}; }
	    if(!this.markEnd || !this.marks ){
	      this.firstEnterStart = false;
	      this.leave('JST');
	      return {type: 'END'}
	    }else{
	      this.marks--;
	      return {type: this.markEnd, value: this.markEnd}
	    }
	  }, 'JST'],
	  JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function(all, one){
	    this.leave('JST');
	    return {
	      type: 'CLOSE',
	      value: one
	    }
	  }, 'JST'],
	  JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function(){
	    this.leave();
	  }, 'JST'],
	  JST_EXPR_OPEN: ['{BEGIN}',function(all, one){
	    if(all === this.markStart){
	      if(this.expression) { return { type: this.markStart, value: this.markStart }; }
	      if(this.firstEnterStart || this.marks){
	        this.marks++;
	        this.firstEnterStart = false;
	        return { type: this.markStart, value: this.markStart };
	      }else{
	        this.firstEnterStart = true;
	      }
	    }
	    return {
	      type: 'EXPR_OPEN',
	      escape: false
	    }

	  }, 'JST'],
	  JST_IDENT: ['{IDENT}', 'IDENT', 'JST'],
	  JST_SPACE: [/[ \r\n\f]+/, null, 'JST'],
	  JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function(all){
	    return { type: all, value: all }
	  },'JST'],

	  JST_STRING:  [ /'([^']*)'|"([^"]*)"/, function(all, one, two){ //"'
	    return {type: 'STRING', value: one || two || ""}
	  }, 'JST'],
	  JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function(all){
	    return {type: 'NUMBER', value: parseFloat(all, 10)};
	  }, 'JST']
	};


	// setup when first config
	Lexer$1.setup();



	var Lexer_1 = Lexer$1;

	var node$1 = {
	  element: function(name, attrs, children){
	    return {
	      type: 'element',
	      tag: name,
	      attrs: attrs,
	      children: children
	    }
	  },
	  attribute: function(name, value, mdf){
	    return {
	      type: 'attribute',
	      name: name,
	      value: value,
	      mdf: mdf
	    }
	  },
	  "if": function(test, consequent, alternate){
	    return {
	      type: 'if',
	      test: test,
	      consequent: consequent,
	      alternate: alternate
	    }
	  },
	  list: function(sequence, variable, body, alternate, track){
	    return {
	      type: 'list',
	      sequence: sequence,
	      alternate: alternate,
	      variable: variable,
	      body: body,
	      track: track
	    }
	  },
	  expression: function( body, setbody, constant, filters ){
	    return {
	      type: "expression",
	      body: body,
	      constant: constant || false,
	      setbody: setbody || false,
	      filters: filters
	    }
	  },
	  text: function(text){
	    return {
	      type: "text",
	      text: text
	    }
	  },
	  template: function(template){
	    return {
	      type: 'template',
	      content: template
	    }
	  }
	};

	var _$3 = util;

	var config$5 = config$1;
	var node = node$1;
	var Lexer$2 = Lexer_1;
	var varName = _$3.varName;
	var ctxName = _$3.ctxName;
	var extName = _$3.extName;
	var isPath = _$3.makePredicate("STRING IDENT NUMBER");
	var isKeyWord = _$3.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object");




	function Parser$1(input, opts){
	  opts = opts || {};

	  this.input = input;
	  this.tokens = new Lexer$2(input, opts).lex();
	  this.pos = 0;
	  this.length = this.tokens.length;
	}


	var op = Parser$1.prototype;


	op.parse = function(){
	  this.pos = 0;
	  var res= this.program();
	  if(this.ll().type === 'TAG_CLOSE'){
	    this.error("You may got a unclosed Tag");
	  }
	  return res;
	};

	op.ll =  function(k){
	  k = k || 1;
	  if(k < 0) { k = k + 1; }
	  var pos = this.pos + k - 1;
	  if(pos > this.length - 1){
	      return this.tokens[this.length-1];
	  }
	  return this.tokens[pos];
	};
	  // lookahead
	op.la = function(k){
	  return (this.ll(k) || '').type;
	};

	op.match = function(type, value){
	  var ll;
	  if(!(ll = this.eat(type, value))){
	    ll  = this.ll();
	    this.error('expect [' + type + (value == null? '':':'+ value) + ']" -> got "[' + ll.type + (value==null? '':':'+ll.value) + ']', ll.pos);
	  }else{
	    return ll;
	  }
	};

	op.error = function(msg, pos){
	  msg =  "\n【 parse failed 】 " + msg +  ':\n\n' + _$3.trackErrorPos(this.input, typeof pos === 'number'? pos: this.ll().pos||0);
	  throw new Error(msg);
	};

	op.next = function(k){
	  k = k || 1;
	  this.pos += k;
	};
	op.eat = function(type, value){
	  var this$1 = this;

	  var ll = this.ll();
	  if(typeof type !== 'string'){
	    for(var len = type.length ; len--;){
	      if(ll.type === type[len]) {
	        this$1.next();
	        return ll;
	      }
	    }
	  }else{
	    if( ll.type === type && (typeof value === 'undefined' || ll.value === value) ){
	       this.next();
	       return ll;
	    }
	  }
	  return false;
	};

	// program
	//  :EOF
	//  | (statement)* EOF
	op.program = function(){
	  var this$1 = this;

	  var statements = [],  ll = this.ll();
	  while(ll.type !== 'EOF' && ll.type !=='TAG_CLOSE'){

	    statements.push(this$1.statement());
	    ll = this$1.ll();
	  }
	  // if(ll.type === 'TAG_CLOSE') this.error("You may have unmatched Tag")
	  return statements;
	};

	// statement
	//  : xml
	//  | jst
	//  | text
	op.statement = function(){
	  var ll = this.ll();
	  switch(ll.type){
	    case 'NAME':
	    case 'TEXT':
	      var text = ll.value;
	      this.next();
	      while(ll = this.eat(['NAME', 'TEXT'])){
	        text += ll.value;
	      }
	      return node.text(text);
	    case 'TAG_OPEN':
	      return this.xml();
	    case 'OPEN': 
	      return this.directive();
	    case 'EXPR_OPEN':
	      return this.interplation();
	    default:
	      this.error('Unexpected token: '+ this.la());
	  }
	};

	// xml 
	// stag statement* TAG_CLOSE?(if self-closed tag)
	op.xml = function(){
	  var name, attrs, children, selfClosed;
	  name = this.match('TAG_OPEN').value;
	  attrs = this.attrs();
	  selfClosed = this.eat('/');
	  this.match('>');
	  if( !selfClosed && !_$3.isVoidTag(name) ){
	    children = this.program();
	    if(!this.eat('TAG_CLOSE', name)) { this.error('expect </'+name+'> got'+ 'no matched closeTag'); }
	  }
	  return node.element(name, attrs, children);
	};

	// xentity
	//  -rule(wrap attribute)
	//  -attribute
	//
	// __example__
	//  name = 1 |  
	//  ng-hide |
	//  on-click={{}} | 
	//  {{#if name}}on-click={{xx}}{{#else}}on-tap={{}}{{/if}}

	op.xentity = function(ll){
	  var name = ll.value, value, modifier;
	  if(ll.type === 'NAME'){
	    //@ only for test
	    if(~name.indexOf('.')){
	      var tmp = name.split('.');
	      name = tmp[0];
	      modifier = tmp[1];

	    }
	    if( this.eat("=") ) { value = this.attvalue(modifier); }
	    return node.attribute( name, value, modifier );
	  }else{
	    if( name !== 'if') { this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + name + ' is invalid'); }
	    return this['if'](true);
	  }

	};

	// stag     ::=    '<' Name (S attr)* S? '>'  
	// attr    ::=     Name Eq attvalue
	op.attrs = function(isAttribute){
	  var this$1 = this;

	  var eat;
	  if(!isAttribute){
	    eat = ["NAME", "OPEN"];
	  }else{
	    eat = ["NAME"];
	  }

	  var attrs = [], ll;
	  while (ll = this.eat(eat)){
	    attrs.push(this$1.xentity( ll ));
	  }
	  return attrs;
	};

	// attvalue
	//  : STRING  
	//  | NAME
	op.attvalue = function(mdf){
	  var ll = this.ll();
	  switch(ll.type){
	    case "NAME":
	    case "UNQ":
	    case "STRING":
	      this.next();
	      var value = ll.value;
	      if(~value.indexOf(config$5.BEGIN) && ~value.indexOf(config$5.END) && mdf!=='cmpl'){
	        var constant = true;
	        var parsed = new Parser$1(value, { mode: 2 }).parse();
	        if(parsed.length === 1 && parsed[0].type === 'expression') { return parsed[0]; }
	        var body = [];
	        parsed.forEach(function(item){
	          if(!item.constant) { constant=false; }
	          // silent the mutiple inteplation
	            body.push(item.body || "'" + item.text.replace(/'/g, "\\'") + "'");        
	        });
	        body = "[" + body.join(",") + "].join('')";
	        value = node.expression(body, null, constant);
	      }
	      return value;
	    case "EXPR_OPEN":
	      return this.interplation();
	    // case "OPEN":
	    //   if(ll.value === 'inc' || ll.value === 'include'){
	    //     this.next();
	    //     return this.inc();
	    //   }else{
	    //     this.error('attribute value only support inteplation and {#inc} statement')
	    //   }
	    //   break;
	    default:
	      this.error('Unexpected token: '+ this.la());
	  }
	};


	// {{#}}
	op.directive = function(){
	  var name = this.ll().value;
	  this.next();
	  if(typeof this[name] === 'function'){
	    return this[name]()
	  }else{
	    this.error('Undefined directive['+ name +']');
	  }
	};


	// {{}}
	op.interplation = function(){
	  this.match('EXPR_OPEN');
	  var res = this.expression(true);
	  this.match('END');
	  return res;
	};

	// {{~}}
	op.inc = op.include = function(){
	  var content = this.expression();
	  this.match('END');
	  return node.template(content);
	};

	// {{#if}}
	op["if"] = function(tag){
	  var this$1 = this;

	  var test = this.expression();
	  var consequent = [], alternate=[];

	  var container = consequent;
	  var statement = !tag? "statement" : "attrs";

	  this.match('END');

	  var ll, close;
	  while( ! (close = this.eat('CLOSE')) ){
	    ll = this$1.ll();
	    if( ll.type === 'OPEN' ){
	      switch( ll.value ){
	        case 'else':
	          container = alternate;
	          this$1.next();
	          this$1.match( 'END' );
	          break;
	        case 'elseif':
	          this$1.next();
	          alternate.push( this$1["if"](tag) );
	          return node['if']( test, consequent, alternate );
	        default:
	          container.push( this$1[statement](true) );
	      }
	    }else{
	      container.push(this$1[statement](true));
	    }
	  }
	  // if statement not matched
	  if(close.value !== "if") { this.error('Unmatched if directive'); }
	  return node["if"](test, consequent, alternate);
	};


	// @mark   mustache syntax have natrure dis, canot with expression
	// {{#list}}
	op.list = function(){
	  var this$1 = this;

	  // sequence can be a list or hash
	  var sequence = this.expression(), variable, ll, track;
	  var consequent = [], alternate=[];
	  var container = consequent;

	  this.match('IDENT', 'as');

	  variable = this.match('IDENT').value;

	  if(this.eat('IDENT', 'by')){
	    if(this.eat('IDENT',variable + '_index')){
	      track = true;
	    }else{
	      track = this.expression();
	      if(track.constant){
	        // true is means constant, we handle it just like xxx_index.
	        track = true;
	      }
	    }
	  }

	  this.match('END');

	  while( !(ll = this.eat('CLOSE')) ){
	    if(this$1.eat('OPEN', 'else')){
	      container =  alternate;
	      this$1.match('END');
	    }else{
	      container.push(this$1.statement());
	    }
	  }
	  
	  if(ll.value !== 'list') { this.error('expect ' + 'list got ' + '/' + ll.value + ' ', ll.pos ); }
	  return node.list(sequence, variable, consequent, alternate, track);
	};


	op.expression = function(){
	  var expression;
	  if(this.eat('@(')){ //once bind
	    expression = this.expr();
	    expression.once = true;
	    this.match(')');
	  }else{
	    expression = this.expr();
	  }
	  return expression;
	};

	op.expr = function(){
	  this.depend = [];

	  var buffer = this.filter();

	  var body = buffer.get || buffer;
	  var setbody = buffer.set;
	  return node.expression(body, setbody, !this.depend.length, buffer.filters);
	};


	// filter
	// assign ('|' filtername[':' args]) * 
	op.filter = function(){
	  var this$1 = this;

	  var left = this.assign();
	  var ll = this.eat('|');
	  var buffer = [], filters,setBuffer, prefix,
	    attr = "t", 
	    set = left.set, get, 
	    tmp = "";

	  if(ll){
	    if(set) {
	      setBuffer = [];
	      filters = [];
	    }

	    prefix = "(function(" + attr + "){";

	    do{
	      var filterName = this$1.match('IDENT').value;
	      tmp = attr + " = " + ctxName + "._f_('" + filterName + "' ).get.call( "+_$3.ctxName +"," + attr ;
	      if(this$1.eat(':')){
	        tmp +=", "+ this$1.arguments("|").join(",") + ");";
	      }else{
	        tmp += ');';
	      }
	      buffer.push(tmp);
	      
	      if(set){
	        // only in runtime ,we can detect  whether  the filter has a set function. 
	        filters.push(filterName);
	        setBuffer.unshift( tmp.replace(" ).get.call", " ).set.call") );
	      }

	    }while(ll = this.eat('|'));
	    buffer.push("return " + attr );
	    setBuffer && setBuffer.push("return " + attr);

	    get =  prefix + buffer.join("") + "})("+left.get+")";
	    // we call back to value.
	    if(setBuffer){
	      // change _ss__(name, _p_) to _s__(name, filterFn(_p_));
	      set = set.replace(_$3.setName, 
	        prefix + setBuffer.join("") + "})("+　_$3.setName　+")" );

	    }
	    // the set function is depend on the filter definition. if it have set method, the set will work
	    var ret = getset(get, set);
	    ret.filters = filters;
	    return ret;
	  }
	  return left;
	};

	// assign
	// left-hand-expr = condition
	op.assign = function(){
	  var left = this.condition(), ll;
	  if(ll = this.eat(['=', '+=', '-=', '*=', '/=', '%='])){
	    if(!left.set) { this.error('invalid lefthand expression in assignment expression'); }
	    return getset( left.set.replace( "," + _$3.setName, "," + this.condition().get ).replace("'='", "'"+ll.type+"'"), left.set);
	    // return getset('(' + left.get + ll.type  + this.condition().get + ')', left.set);
	  }
	  return left;
	};

	// or
	// or ? assign : assign
	op.condition = function(){

	  var test = this.or();
	  if(this.eat('?')){
	    return getset([test.get + "?", 
	      this.assign().get, 
	      this.match(":").type, 
	      this.assign().get].join(""));
	  }

	  return test;
	};

	// and
	// and && or
	op.or = function(){

	  var left = this.and();

	  if(this.eat('||')){
	    return getset(left.get + '||' + this.or().get);
	  }

	  return left;
	};
	// equal
	// equal && and
	op.and = function(){

	  var left = this.equal();

	  if(this.eat('&&')){
	    return getset(left.get + '&&' + this.and().get);
	  }
	  return left;
	};
	// relation
	// 
	// equal == relation
	// equal != relation
	// equal === relation
	// equal !== relation
	op.equal = function(){
	  var left = this.relation(), ll;
	  // @perf;
	  if( ll = this.eat(['==','!=', '===', '!=='])){
	    return getset(left.get + ll.type + this.equal().get);
	  }
	  return left
	};
	// relation < additive
	// relation > additive
	// relation <= additive
	// relation >= additive
	// relation in additive
	op.relation = function(){
	  var left = this.additive(), ll;
	  // @perf
	  if(ll = (this.eat(['<', '>', '>=', '<=']) || this.eat('IDENT', 'in') )){
	    return getset(left.get + ll.value + this.relation().get);
	  }
	  return left
	};
	// additive :
	// multive
	// additive + multive
	// additive - multive
	op.additive = function(){
	  var left = this.multive() ,ll;
	  if(ll= this.eat(['+','-']) ){
	    return getset(left.get + ll.value + this.additive().get);
	  }
	  return left
	};
	// multive :
	// unary
	// multive * unary
	// multive / unary
	// multive % unary
	op.multive = function(){
	  var left = this.range() ,ll;
	  if( ll = this.eat(['*', '/' ,'%']) ){
	    return getset(left.get + ll.type + this.multive().get);
	  }
	  return left;
	};

	op.range = function(){
	  var left = this.unary(), ll, right;

	  if(ll = this.eat('..')){
	    right = this.unary();
	    var body = 
	      "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })("+left.get+","+right.get+")";
	    return getset(body);
	  }

	  return left;
	};



	// lefthand
	// + unary
	// - unary
	// ~ unary
	// ! unary
	op.unary = function(){
	  var ll;
	  if(ll = this.eat(['+','-','~', '!'])){
	    return getset('(' + ll.type + this.unary().get + ')') ;
	  }else{
	    return this.member()
	  }
	};

	// call[lefthand] :
	// member args
	// member [ expression ]
	// member . ident  

	op.member = function(base, last, pathes, prevBase){
	  var ll, path, extValue;


	  var onlySimpleAccessor = false;
	  if(!base){ //first
	    path = this.primary();
	    var type = typeof path;
	    if(type === 'string'){ 
	      pathes = [];
	      pathes.push( path );
	      last = path;
	      extValue = extName + "." + path;
	      base = ctxName + "._sg_('" + path + "', " + varName + ", " + extName + ")";
	      onlySimpleAccessor = true;
	    }else{ //Primative Type
	      if(path.get === 'this'){
	        base = ctxName;
	        pathes = ['this'];
	      }else{
	        pathes = null;
	        base = path.get;
	      }
	    }
	  }else{ // not first enter
	    if(typeof last === 'string' && isPath( last) ){ // is valid path
	      pathes.push(last);
	    }else{
	      if(pathes && pathes.length) { this.depend.push(pathes); }
	      pathes = null;
	    }
	  }
	  if(ll = this.eat(['[', '.', '('])){
	    switch(ll.type){
	      case '.':
	          // member(object, property, computed)
	        var tmpName = this.match('IDENT').value;
	        prevBase = base;
	        if( this.la() !== "(" ){ 
	          base = ctxName + "._sg_('" + tmpName + "', " + base + ")";
	        }else{
	          base += "['" + tmpName + "']";
	        }
	        return this.member( base, tmpName, pathes,  prevBase);
	      case '[':
	          // member(object, property, computed)
	        path = this.assign();
	        prevBase = base;
	        if( this.la() !== "(" ){ 
	        // means function call, we need throw undefined error when call function
	        // and confirm that the function call wont lose its context
	          base = ctxName + "._sg_(" + path.get + ", " + base + ")";
	        }else{
	          base += "[" + path.get + "]";
	        }
	        this.match(']');
	        return this.member(base, path, pathes, prevBase);
	      case '(':
	        // call(callee, args)
	        var args = this.arguments().join(',');
	        base =  base+"(" + args +")";
	        this.match(')');
	        return this.member(base, null, pathes);
	    }
	  }
	  if( pathes && pathes.length ) { this.depend.push( pathes ); }
	  var res =  {get: base};
	  if(last){
	    res.set = ctxName + "._ss_(" + 
	        (last.get? last.get : "'"+ last + "'") + 
	        ","+ _$3.setName + ","+ 
	        (prevBase?prevBase:_$3.varName) + 
	        ", '=', "+ ( onlySimpleAccessor? 1 : 0 ) + ")";
	  
	  }
	  return res;
	};

	/**
	 * 
	 */
	op.arguments = function(end){
	  var this$1 = this;

	  end = end || ')';
	  var args = [];
	  do{
	    if(this$1.la() !== end){
	      args.push(this$1.assign().get);
	    }
	  }while( this.eat(','));
	  return args
	};


	// primary :
	// this 
	// ident
	// literal
	// array
	// object
	// ( expression )

	op.primary = function(){
	  var ll = this.ll();
	  switch(ll.type){
	    case "{":
	      return this.object();
	    case "[":
	      return this.array();
	    case "(":
	      return this.paren();
	    // literal or ident
	    case 'STRING':
	      this.next();
	      var value = "" + ll.value;
	      var quota = ~value.indexOf("'")? "\"": "'";
	      return getset(quota + value + quota);
	    case 'NUMBER':
	      this.next();
	      return getset( "" + ll.value );
	    case "IDENT":
	      this.next();
	      if(isKeyWord(ll.value)){
	        return getset( ll.value );
	      }
	      return ll.value;
	    default: 
	      this.error('Unexpected Token: ' + ll.type);
	  }
	};

	// object
	//  {propAssign [, propAssign] * [,]}

	// propAssign
	//  prop : assign

	// prop
	//  STRING
	//  IDENT
	//  NUMBER

	op.object = function(){
	  var this$1 = this;

	  var code = [this.match('{').type];

	  var ll = this.eat( ['STRING', 'IDENT', 'NUMBER'] );
	  while(ll){
	    code.push("'" + ll.value + "'" + this$1.match(':').type);
	    var get = this$1.assign().get;
	    code.push(get);
	    ll = null;
	    if(this$1.eat(",") && (ll = this$1.eat(['STRING', 'IDENT', 'NUMBER'])) ) { code.push(","); }
	  }
	  code.push(this.match('}').type);
	  return {get: code.join("")}
	};

	// array
	// [ assign[,assign]*]
	op.array = function(){
	  var this$1 = this;

	  var code = [this.match('[').type], item;
	  if( this.eat("]") ){

	     code.push("]");
	  } else {
	    while(item = this.assign()){
	      code.push(item.get);
	      if(this$1.eat(',')) { code.push(","); }
	      else { break; }
	    }
	    code.push(this.match(']').type);
	  }
	  return {get: code.join("")};
	};

	// '(' expression ')'
	op.paren = function(){
	  this.match('(');
	  var res = this.filter();
	  res.get = '(' + res.get + ')';
	  res.set = res.set;
	  this.match(')');
	  return res;
	};

	function getset(get, set){
	  return {
	    get: get,
	    set: set
	  }
	}



	var Parser_1 = Parser$1;

	// (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	// Backbone may be freely distributed under the MIT license.
	// For all details and documentation:
	// http://backbonejs.org

	// klass: a classical JS OOP façade
	// https://github.com/ded/klass
	// License MIT (c) Dustin Diaz 2014
	  
	// inspired by backbone's extend and klass
	var _$4 = util;
	var fnTest = /xy/.test(function(){"xy";}) ? /\bsupr\b/:/.*/;
	var isFn = function(o){return typeof o === "function"};

	var hooks = {
	  events: function( propertyValue, proto ){
	    var eventListeners = proto._eventListeners || [];
	    var normedEvents = _$4.normListener(propertyValue);

	    if(normedEvents.length) {
	      proto._eventListeners = eventListeners.concat( normedEvents );
	    }
	    delete proto.events ;
	  }
	};


	function wrap( k, fn, supro ) {
	  return function () {
	    var tmp = this.supr;
	    this.supr = supro[k];
	    var ret = fn.apply(this, arguments);
	    this.supr = tmp;
	    return ret;
	  }
	}

	function process( what, o, supro ) {
	  for ( var k in o ) {
	    if (o.hasOwnProperty(k)) {
	      if(hooks[k]) {
	        hooks[k](o[k], what, supro);
	      }
	      what[k] = isFn( o[k] ) && isFn( supro[k] ) && 
	        fnTest.test( o[k] ) ? wrap(k, o[k], supro) : o[k];
	    }
	  }
	}

	// if the property is ["events", "data", "computed"] , we should merge them
	var merged = ["data", "computed"];
	var mlen = merged.length;
	var extend$2 = function extend$2(o){
	  o = o || {};
	  var supr = this, proto,
	    supro = supr && supr.prototype || {};

	  if(typeof o === 'function'){
	    proto = o.prototype;
	    o.implement = implement;
	    o.extend = extend$2;
	    return o;
	  } 
	  
	  function fn() {
	    supr.apply(this, arguments);
	  }

	  proto = _$4.createProto(fn, supro);

	  function implement(o){
	    // we need merge the merged property
	    var len = mlen;
	    for(;len--;){
	      var prop = merged[len];
	      if(proto[prop] && o.hasOwnProperty(prop) && proto.hasOwnProperty(prop)){
	        _$4.extend(proto[prop], o[prop], true); 
	        delete o[prop];
	      }
	    }


	    process(proto, o, supro); 
	    return this;
	  }



	  fn.implement = implement;
	  fn.implement(o);
	  if(supr.__after__) { supr.__after__.call(fn, supr, o); }
	  fn.extend = extend$2;
	  return fn;
	};

	var _const = {
	  'COMPONENT_TYPE': 1,
	  'ELEMENT_TYPE': 2,
	  'NAMESPACE': {
	    html: "http://www.w3.org/1999/xhtml",
	    svg: "http://www.w3.org/2000/svg"
	  },
	  'OPTIONS': {
	    'STABLE_INIT': { stable: !0, init: !0 },
	    'FORCE_INIT': { force: !0, init: !0 },
	    'STABLE': {stable: !0},
	    'INIT': { init: !0 },
	    'SYNC': { sync: !0 },
	    'FORCE': { force: !0 }
	  }
	};

	var dom_1 = createCommonjsModule(function (module) {
	// thanks for angular && mootools for some concise&cross-platform  implemention
	// =====================================

	// The MIT License
	// Copyright (c) 2010-2014 Google, Inc. http://angularjs.org

	// ---
	// license: MIT-style license. http://mootools.net



	var dom = module.exports;
	var env$$1 = env;
	var _ = util;
	var consts = _const;
	var tNode = document.createElement('div');
	var addEvent, removeEvent;
	var noop = function(){};

	var namespaces = consts.NAMESPACE;

	dom.body = document.body;

	dom.doc = document;

	// camelCase
	function camelCase(str){
	  return ("" + str).replace(/-\D/g, function(match){
	    return match.charAt(1).toUpperCase();
	  });
	}


	dom.tNode = tNode;

	if(tNode.addEventListener){
	  addEvent = function(node, type, fn) {
	    node.addEventListener(type, fn, false);
	  };
	  removeEvent = function(node, type, fn) {
	    node.removeEventListener(type, fn, false); 
	  };
	}else{
	  addEvent = function(node, type, fn) {
	    node.attachEvent('on' + type, fn);
	  };
	  removeEvent = function(node, type, fn) {
	    node.detachEvent('on' + type, fn); 
	  };
	}


	dom.msie = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
	if (isNaN(dom.msie)) {
	  dom.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
	}

	dom.find = function(sl){
	  if(document.querySelector) {
	    try{
	      return document.querySelector(sl);
	    }catch(e){

	    }
	  }
	  if(sl.indexOf('#')!==-1) { return document.getElementById( sl.slice(1) ); }
	};


	dom.inject = function(node, refer, position){

	  position = position || 'bottom';
	  if(!node) { return ; }
	  if(Array.isArray(node)){
	    var tmp = node;
	    node = dom.fragment();
	    for(var i = 0,len = tmp.length; i < len ;i++){
	      node.appendChild(tmp[i]);
	    }
	  }

	  var firstChild, next;
	  switch(position){
	    case 'bottom':
	      refer.appendChild( node );
	      break;
	    case 'top':
	      if( firstChild = refer.firstChild ){
	        refer.insertBefore( node, refer.firstChild );
	      }else{
	        refer.appendChild( node );
	      }
	      break;
	    case 'after':
	      if( next = refer.nextSibling ){
	        next.parentNode.insertBefore( node, next );
	      }else{
	        refer.parentNode.appendChild( node );
	      }
	      break;
	    case 'before':
	      refer.parentNode.insertBefore( node, refer );
	  }
	};


	dom.id = function(id){
	  return document.getElementById(id);
	};

	// createElement 
	dom.create = function(type, ns, attrs){
	  if(ns === 'svg'){
	    if(!env$$1.svg) { throw Error('the env need svg support') }
	    ns = namespaces.svg;
	  }
	  return !ns? document.createElement(type): document.createElementNS(ns, type);
	};

	// documentFragment
	dom.fragment = function(){
	  return document.createDocumentFragment();
	};



	var specialAttr = {
	  'class': function(node, value){
	     ('className' in node && (!node.namespaceURI || node.namespaceURI === namespaces.html  )) ? 
	      node.className = (value || '') : node.setAttribute('class', value);
	  },
	  'for': function(node, value){
	    ('htmlFor' in node) ? node.htmlFor = value : node.setAttribute('for', value);
	  },
	  'style': function(node, value){
	    (node.style) ? node.style.cssText = value : node.setAttribute('style', value);
	  },
	  'value': function(node, value){
	    node.value = (value != null) ? value : '';
	  }
	};


	// attribute Setter & Getter
	dom.attr = function(node, name, value){
	  if (_.isBooleanAttr(name)) {
	    if (typeof value !== 'undefined') {
	      if (!!value) {
	        node[name] = true;
	        node.setAttribute(name, name);
	        // lt ie7 . the javascript checked setting is in valid
	        //http://bytes.com/topic/javascript/insights/799167-browser-quirk-dynamically-appended-checked-checkbox-does-not-appear-checked-ie
	        if(dom.msie && dom.msie <=7 && name === 'checked' ) { node.defaultChecked = true; }
	      } else {
	        node[name] = false;
	        node.removeAttribute(name);
	      }
	    } else {
	      return (node[name] ||
	               (node.attributes.getNamedItem(name)|| noop).specified) ? name : undefined;
	    }
	  } else if (typeof (value) !== 'undefined') {
	    // if in specialAttr;
	    if(specialAttr[name]) { specialAttr[name](node, value); }
	    else if(value === null) { node.removeAttribute(name); }
	    else { node.setAttribute(name, value); }
	  } else if (node.getAttribute) {
	    // the extra argument "2" is to get the right thing for a.href in IE, see jQuery code
	    // some elements (e.g. Document) don't have get attribute, so return undefined
	    var ret = node.getAttribute(name, 2);
	    // normalize non-existing attributes to undefined (as jQuery)
	    return ret === null ? undefined : ret;
	  }
	};


	dom.on = function(node, type, handler){
	  var types = type.split(' ');
	  handler.real = function(ev){
	    var $event = new Event(ev);
	    $event.origin = node;
	    handler.call(node, $event);
	  };
	  types.forEach(function(type){
	    type = fixEventName(node, type);
	    addEvent(node, type, handler.real);
	  });
	  return dom;
	};
	dom.off = function(node, type, handler){
	  var types = type.split(' ');
	  handler = handler.real || handler;
	  types.forEach(function(type){
	    type = fixEventName(node, type);
	    removeEvent(node, type, handler);
	  });
	};


	dom.text = (function (){
	  var map = {};
	  if (dom.msie && dom.msie < 9) {
	    map[1] = 'innerText';    
	    map[3] = 'nodeValue';    
	  } else {
	    map[1] = map[3] = 'textContent';
	  }
	  
	  return function (node, value) {
	    var textProp = map[node.nodeType];
	    if (value == null) {
	      return textProp ? node[textProp] : '';
	    }
	    node[textProp] = value;
	  }
	})();


	dom.html = function( node, html ){
	  if(typeof html === "undefined"){
	    return node.innerHTML;
	  }else{
	    node.innerHTML = html;
	  }
	};

	dom.replace = function(node, replaced){
	  if(replaced.parentNode) { replaced.parentNode.replaceChild(node, replaced); }
	};

	dom.remove = function(node){
	  if(node.parentNode) { node.parentNode.removeChild(node); }
	};

	// css Settle & Getter from angular
	// =================================
	// it isnt computed style 
	dom.css = function(node, name, value){
	  if( typeof (name) === "object" && name ){
	    for(var i in name){
	      if( name.hasOwnProperty(i) ){
	        dom.css( node, i, name[i] );
	      }
	    }
	    return;
	  }
	  if ( typeof value !== "undefined" ) {

	    name = camelCase(name);
	    if(name) { node.style[name] = value; }

	  } else {

	    var val;
	    if (dom.msie <= 8) {
	      // this is some IE specific weirdness that jQuery 1.6.4 does not sure why
	      val = node.currentStyle && node.currentStyle[name];
	      if (val === '') { val = 'auto'; }
	    }
	    val = val || node.style[name];
	    if (dom.msie <= 8) {
	      val = val === '' ? undefined : val;
	    }
	    return  val;
	  }
	};

	dom.addClass = function(node, className){
	  var current = node.className || "";
	  if ((" " + current + " ").indexOf(" " + className + " ") === -1) {
	    node.className = current? ( current + " " + className ) : className;
	  }
	};

	dom.delClass = function(node, className){
	  var current = node.className || "";
	  node.className = (" " + current + " ").replace(" " + className + " ", " ").trim();
	};

	dom.hasClass = function(node, className){
	  var current = node.className || "";
	  return (" " + current + " ").indexOf(" " + className + " ") !== -1;
	};



	// simple Event wrap

	//http://stackoverflow.com/questions/11068196/ie8-ie7-onchange-event-is-emited-only-after-repeated-selection
	function fixEventName(elem, name){
	  return (name === 'change'  &&  dom.msie < 9 && 
	      (elem && elem.tagName && elem.tagName.toLowerCase()==='input' && 
	        (elem.type === 'checkbox' || elem.type === 'radio')
	      )
	    )? 'click': name;
	}

	var rMouseEvent = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/;
	var doc = document;
	doc = (!doc.compatMode || doc.compatMode === 'CSS1Compat') ? doc.documentElement : doc.body;
	function Event(ev){
	  ev = ev || window.event;
	  if(ev._fixed) { return ev; }
	  this.event = ev;
	  this.target = ev.target || ev.srcElement;

	  var type = this.type = ev.type;
	  var button = this.button = ev.button;

	  // if is mouse event patch pageX
	  if(rMouseEvent.test(type)){ //fix pageX
	    this.pageX = (ev.pageX != null) ? ev.pageX : ev.clientX + doc.scrollLeft;
	    this.pageY = (ev.pageX != null) ? ev.pageY : ev.clientY + doc.scrollTop;
	    if (type === 'mouseover' || type === 'mouseout'){// fix relatedTarget
	      var related = ev.relatedTarget || ev[(type === 'mouseover' ? 'from' : 'to') + 'Element'];
	      while (related && related.nodeType === 3) { related = related.parentNode; }
	      this.relatedTarget = related;
	    }
	  }
	  // if is mousescroll
	  if (type === 'DOMMouseScroll' || type === 'mousewheel'){
	    // ff ev.detail: 3    other ev.wheelDelta: -120
	    this.wheelDelta = (ev.wheelDelta) ? ev.wheelDelta / 120 : -(ev.detail || 0) / 3;
	  }
	  
	  // fix which
	  this.which = ev.which || ev.keyCode;
	  if( !this.which && button !== undefined){
	    // http://api.jquery.com/event.which/ use which
	    this.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
	  }
	  this._fixed = true;
	}

	_.extend(Event.prototype, {
	  stop: function(){
	    this.preventDefault().stopPropagation();
	  },
	  preventDefault: function(){
	    if (this.event.preventDefault) { this.event.preventDefault(); }
	    else { this.event.returnValue = false; }
	    return this;
	  },
	  stopPropagation: function(){
	    if (this.event.stopPropagation) { this.event.stopPropagation(); }
	    else { this.event.cancelBubble = true; }
	    return this;
	  },
	  stopImmediatePropagation: function(){
	    if(this.event.stopImmediatePropagation) { this.event.stopImmediatePropagation(); }
	  }
	});


	dom.nextFrame = (function(){
	    var request = window.requestAnimationFrame ||
	                  window.webkitRequestAnimationFrame ||
	                  window.mozRequestAnimationFrame|| 
	                  function(callback){
	                    return setTimeout(callback, 16)
	                  };

	    var cancel = window.cancelAnimationFrame ||
	                 window.webkitCancelAnimationFrame ||
	                 window.mozCancelAnimationFrame ||
	                 window.webkitCancelRequestAnimationFrame ||
	                 function(tid){
	                    clearTimeout(tid);
	                 };
	  
	  return function(callback){
	    var id = request(callback);
	    return function(){ cancel(id); }
	  }
	})();

	// 3ks for angular's raf  service
	var k;
	dom.nextReflow = dom.msie? function(callback){
	  return dom.nextFrame(function(){
	    k = document.body.offsetWidth;
	    callback();
	  })
	}: dom.nextFrame;
	});

	var _$5 = util;

	function simpleDiff(now, old){
	  var nlen = now.length;
	  var olen = old.length;
	  if(nlen !== olen){
	    return true;
	  }
	  for(var i = 0; i < nlen ; i++){
	    if(now[i] !== old[i]) { return  true; }
	  }
	  return false

	}

	function equals(a,b){
	  return a === b;
	}

	// array1 - old array
	// array2 - new array
	function ld(array1, array2, equalFn){
	  var n = array1.length;
	  var m = array2.length;
	  var equalFn = equalFn || equals;
	  var matrix = [];
	  for(var i = 0; i <= n; i++){
	    matrix.push([i]);
	  }
	  for(var j=1;j<=m;j++){
	    matrix[0][j]=j;
	  }
	  for(var i = 1; i <= n; i++){
	    for(var j = 1; j <= m; j++){
	      if(equalFn(array1[i-1], array2[j-1])){
	        matrix[i][j] = matrix[i-1][j-1];
	      }else{
	        matrix[i][j] = Math.min(
	          matrix[i-1][j]+1, //delete
	          matrix[i][j-1]+1//add
	          );
	      }
	    }
	  }
	  return matrix;
	}
	// arr2 - new array
	// arr1 - old array
	function diffArray(arr2, arr1, diff, diffFn) {
	  if(!diff) { return simpleDiff(arr2, arr1); }
	  var matrix = ld(arr1, arr2, diffFn);
	  var n = arr1.length;
	  var i = n;
	  var m = arr2.length;
	  var j = m;
	  var edits = [];
	  var current = matrix[i][j];
	  while(i>0 || j>0){
	  // the last line
	    if (i === 0) {
	      edits.unshift(3);
	      j--;
	      continue;
	    }
	    // the last col
	    if (j === 0) {
	      edits.unshift(2);
	      i--;
	      continue;
	    }
	    var northWest = matrix[i - 1][j - 1];
	    var west = matrix[i - 1][j];
	    var north = matrix[i][j - 1];

	    var min = Math.min(north, west, northWest);

	    if (min === west) {
	      edits.unshift(2); //delete
	      i--;
	      current = west;
	    } else if (min === northWest ) {
	      if (northWest === current) {
	        edits.unshift(0); //no change
	      } else {
	        edits.unshift(1); //update
	        current = northWest;
	      }
	      i--;
	      j--;
	    } else {
	      edits.unshift(3); //add
	      j--;
	      current = north;
	    }
	  }
	  var LEAVE = 0;
	  var ADD = 3;
	  var DELELE = 2;
	  var UPDATE = 1;
	  var n = 0;m=0;
	  var steps = [];
	  var step = {index: null, add:0, removed:[]};

	  for(var i=0;i<edits.length;i++){
	    if(edits[i] > 0 ){ // NOT LEAVE
	      if(step.index === null){
	        step.index = m;
	      }
	    } else { //LEAVE
	      if(step.index != null){
	        steps.push(step);
	        step = {index: null, add:0, removed:[]};
	      }
	    }
	    switch(edits[i]){
	      case LEAVE:
	        n++;
	        m++;
	        break;
	      case ADD:
	        step.add++;
	        m++;
	        break;
	      case DELELE:
	        step.removed.push(arr1[n]);
	        n++;
	        break;
	      case UPDATE:
	        step.add++;
	        step.removed.push(arr1[n]);
	        n++;
	        m++;
	        break;
	    }
	  }
	  if(step.index != null){
	    steps.push(step);
	  }
	  return steps
	}



	// diffObject
	// ----
	// test if obj1 deepEqual obj2
	function diffObject( now, last, diff ){


	  if(!diff){

	    for( var j in now ){
	      if( last[j] !== now[j] ) { return true }
	    }

	    for( var n in last ){
	      if(last[n] !== now[n]) { return true; }
	    }

	  }else{

	    var nKeys = _$5.keys(now);
	    var lKeys = _$5.keys(last);

	    /**
	     * [description]
	     * @param  {[type]} a    [description]
	     * @param  {[type]} b){                   return now[b] [description]
	     * @return {[type]}      [description]
	     */
	    return diffArray(nKeys, lKeys, diff, function(a, b){
	      return now[b] === last[a];
	    });

	  }

	  return false;


	}

	var diff = {
	  diffArray: diffArray,
	  diffObject: diffObject
	};

	var _$6 = util;
	var dom$1  = dom_1;
	var animate = {};
	var env$3 = env;


	var transitionEnd = 'transitionend';
	var animationEnd = 'animationend';
	var transitionProperty = 'transition';
	var animationProperty = 'animation';

	if(!('ontransitionend' in window)){
	  if('onwebkittransitionend' in window) {
	    
	    // Chrome/Saf (+ Mobile Saf)/Android
	    transitionEnd += ' webkitTransitionEnd';
	    transitionProperty = 'webkitTransition';
	  } else if('onotransitionend' in dom$1.tNode || navigator.appName === 'Opera') {

	    // Opera
	    transitionEnd += ' oTransitionEnd';
	    transitionProperty = 'oTransition';
	  }
	}
	if(!('onanimationend' in window)){
	  if ('onwebkitanimationend' in window){
	    // Chrome/Saf (+ Mobile Saf)/Android
	    animationEnd += ' webkitAnimationEnd';
	    animationProperty = 'webkitAnimation';

	  }else if ('onoanimationend' in dom$1.tNode){
	    // Opera
	    animationEnd += ' oAnimationEnd';
	    animationProperty = 'oAnimation';
	  }
	}

	/**
	 * inject node with animation
	 * @param  {[type]} node      [description]
	 * @param  {[type]} refer     [description]
	 * @param  {[type]} direction [description]
	 * @return {[type]}           [description]
	 */
	animate.inject = function( node, refer ,direction, callback ){
	  callback = callback || _$6.noop;
	  if( Array.isArray(node) ){
	    var fragment = dom$1.fragment();
	    var count=0;

	    for(var i = 0,len = node.length;i < len; i++ ){
	      fragment.appendChild(node[i]); 
	    }
	    dom$1.inject(fragment, refer, direction);

	    // if all nodes is done, we call the callback
	    var enterCallback = function (){
	      count++;
	      if( count === len ) { callback(); }
	    };
	    if(len === count) { callback(); }
	    for( i = 0; i < len; i++ ){
	      if(node[i].onenter){
	        node[i].onenter(enterCallback);
	      }else{
	        enterCallback();
	      }
	    }
	  }else{
	    dom$1.inject( node, refer, direction );
	    if(node.onenter){
	      node.onenter(callback);
	    }else{
	      callback();
	    }
	  }
	};

	/**
	 * remove node with animation
	 * @param  {[type]}   node     [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */

	animate.remove = function(node, callback){
	  if(!node) { return; }
	  var count = 0;
	  function loop(){
	    count++;
	    if(count === len) { callback && callback(); }
	  }
	  if( Array.isArray(node) ){
	    for(var i = 0, len = node.length; i < len ; i++){
	      animate.remove(node[i], loop);
	    }
	    return;
	  }
	  if(typeof node.onleave ==='function'){
	    node.onleave(function(){
	      removeDone(node, callback);
	    });
	  }else{
	    removeDone(node, callback);
	  }
	};

	function removeDone(node, callback){
	    dom$1.remove(node);
	    callback && callback();
	}



	animate.startClassAnimate = function ( node, className,  callback, mode ){
	  var activeClassName, timeout, tid, onceAnim;
	  if( (!animationEnd && !transitionEnd) || env$3.isRunning ){
	    return callback();
	  }

	  if(mode !== 4){
	    onceAnim = _$6.once(function onAnimateEnd(){
	      if(tid) { clearTimeout(tid); }

	      if(mode === 2) {
	        dom$1.delClass(node, activeClassName);
	      }
	      if(mode !== 3){ // mode hold the class
	        dom$1.delClass(node, className);
	      }
	      dom$1.off(node, animationEnd, onceAnim);
	      dom$1.off(node, transitionEnd, onceAnim);

	      callback();

	    });
	  }else{
	    onceAnim = _$6.once(function onAnimateEnd(){
	      if(tid) { clearTimeout(tid); }
	      callback();
	    });
	  }
	  if(mode === 2){ // auto removed
	    dom$1.addClass( node, className );

	    activeClassName = _$6.map(className.split(/\s+/), function(name){
	       return name + '-active';
	    }).join(" ");

	    dom$1.nextReflow(function(){
	      dom$1.addClass( node, activeClassName );
	      timeout = getMaxTimeout( node );
	      tid = setTimeout( onceAnim, timeout );
	    });

	  }else if(mode===4){
	    dom$1.nextReflow(function(){
	      dom$1.delClass( node, className );
	      timeout = getMaxTimeout( node );
	      tid = setTimeout( onceAnim, timeout );
	    });

	  }else{
	    dom$1.nextReflow(function(){
	      dom$1.addClass( node, className );
	      timeout = getMaxTimeout( node );
	      tid = setTimeout( onceAnim, timeout );
	    });
	  }



	  dom$1.on( node, animationEnd, onceAnim );
	  dom$1.on( node, transitionEnd, onceAnim );
	  return onceAnim;
	};


	animate.startStyleAnimate = function(node, styles, callback){
	  var timeout, onceAnim, tid;

	  dom$1.nextReflow(function(){
	    dom$1.css( node, styles );
	    timeout = getMaxTimeout( node );
	    tid = setTimeout( onceAnim, timeout );
	  });


	  onceAnim = _$6.once(function onAnimateEnd(){
	    if(tid) { clearTimeout(tid); }

	    dom$1.off(node, animationEnd, onceAnim);
	    dom$1.off(node, transitionEnd, onceAnim);

	    callback();

	  });

	  dom$1.on( node, animationEnd, onceAnim );
	  dom$1.on( node, transitionEnd, onceAnim );

	  return onceAnim;
	};


	/**
	 * get maxtimeout
	 * @param  {Node} node 
	 * @return {[type]}   [description]
	 */
	function getMaxTimeout(node){
	  var timeout = 0,
	    tDuration = 0,
	    tDelay = 0,
	    aDuration = 0,
	    aDelay = 0,
	    ratio = 5 / 3,
	    styles;

	  if(window.getComputedStyle){

	    styles = window.getComputedStyle(node),
	    tDuration = getMaxTime( styles[transitionProperty + 'Duration']) || tDuration;
	    tDelay = getMaxTime( styles[transitionProperty + 'Delay']) || tDelay;
	    aDuration = getMaxTime( styles[animationProperty + 'Duration']) || aDuration;
	    aDelay = getMaxTime( styles[animationProperty + 'Delay']) || aDelay;
	    timeout = Math.max( tDuration+tDelay, aDuration + aDelay );

	  }
	  return timeout * 1000 * ratio;
	}

	function getMaxTime(str){

	  var maxTimeout = 0, time;

	  if(!str) { return 0; }

	  str.split(",").forEach(function(str){

	    time = parseFloat(str);
	    if( time > maxTimeout ) { maxTimeout = time; }

	  });

	  return maxTimeout;
	}

	var animate_1 = animate;

	var combine_1 = createCommonjsModule(function (module) {
	// some nested  operation in ast 
	// --------------------------------

	var dom = dom_1;
	var animate = animate_1;

	var combine = module.exports = {

	  // get the initial dom in object
	  node: function(item){
	    var children,node, nodes;
	    if(!item) { return; }
	    if(typeof item.node === "function") { return item.node(); }
	    if(typeof item.nodeType === "number") { return item; }
	    if(item.group) { return combine.node(item.group) }

	    item = item.children || item;
	    if( Array.isArray(item )){
	      var len = item.length;
	      if(len === 1){
	        return combine.node(item[0]);
	      }
	      nodes = [];
	      for(var i = 0, len = item.length; i < len; i++ ){
	        node = combine.node(item[i]);
	        if(Array.isArray(node)){
	          nodes.push.apply(nodes, node);
	        }else if(node) {
	          nodes.push(node);
	        }
	      }
	      return nodes;
	    }
	    
	  },
	  // @TODO remove _gragContainer
	  inject: function(node, pos ){
	    var group = this;
	    var fragment = combine.node(group.group || group);
	    if(node === false) {
	      animate.remove(fragment);
	      return group;
	    }else{
	      if(!fragment) { return group; }
	      if(typeof node === 'string') { node = dom.find(node); }
	      if(!node) { throw Error('injected node is not found'); }
	      // use animate to animate firstchildren
	      animate.inject(fragment, node, pos);
	    }
	    // if it is a component
	    if(group.$emit) {
	      var preParent = group.parentNode;
	      var newParent = (pos ==='after' || pos === 'before')? node.parentNode : node;
	      group.parentNode = newParent;
	      group.$emit("$inject", node, pos, preParent);
	    }
	    return group;
	  },

	  // get the last dom in object(for insertion operation)
	  last: function(item){
	    var children = item.children;

	    if(typeof item.last === "function") { return item.last(); }
	    if(typeof item.nodeType === "number") { return item; }

	    if(children && children.length) { return combine.last(children[children.length - 1]); }
	    if(item.group) { return combine.last(item.group); }

	  },

	  destroy: function(item, first){
	    if(!item) { return; }
	    if( typeof item.nodeType === "number"  ) { return first && dom.remove(item) }
	    if( typeof item.destroy === "function" ) { return item.destroy(first); }

	    if( Array.isArray(item)){
	      for(var i = 0, len = item.length; i < len; i++ ){
	        combine.destroy(item[i], first);
	      }
	    }
	  }

	};


	// @TODO: need move to dom.js
	dom.element = function( component, all ){
	  if(!component) { return !all? null: []; }
	  var nodes = combine.node( component );
	  if( nodes.nodeType === 1 ) { return all? [nodes]: nodes; }
	  var elements = [];
	  for(var i = 0; i<nodes.length ;i++){
	    var node = nodes[i];
	    if( node && node.nodeType === 1){
	      if(!all) { return node; }
	      elements.push(node);
	    } 
	  }
	  return !all? elements[0]: elements;
	};
	});

	var _$7 = util;
	var combine$1 = combine_1;

	function Group$1(list){
	  this.children = list || [];
	}


	var o = _$7.extend(Group$1.prototype, {
	  destroy: function(first){
	    combine$1.destroy(this.children, first);
	    if(this.ondestroy) { this.ondestroy(); }
	    this.children = null;
	  },
	  get: function(i){
	    return this.children[i]
	  },
	  push: function(item){
	    this.children.push( item );
	  }
	});
	o.inject = o.$inject = combine$1.inject;



	var group = Group$1;

	var walkers_1 = createCommonjsModule(function (module) {
	var diffArray = diff.diffArray;
	var combine = combine_1;
	var animate = animate_1;
	var node = node$1;
	var Group = group;
	var dom = dom_1;
	var _ = util;
	var consts = _const;
	var OPTIONS = consts.OPTIONS;


	var walkers = module.exports = {};



	// used in walkers.list
	// remove block in group
	function removeRange(index, rlen, children){
	  for(var j = 1; j <= rlen; j++){ //removed
	    var removed = children[ index + j ];
	    if(removed) { removed.destroy(true); }
	  }
	  children.splice(index+1, rlen);
	}


	walkers.list = function(ast, options){

	  var Regular = walkers.Regular;  
	  var placeholder = document.createComment("Regular list"),
	    namespace = options.namespace,
	    extra = options.extra;
	  var self = this;
	  var group$$1 = new Group([placeholder]);
	  var children = group$$1.children;

	  var indexName = ast.variable + '_index';
	  var keyName = ast.variable + '_key';
	  var variable = ast.variable;
	  var alternate = ast.alternate;
	  var track = ast.track, keyOf, extraObj;

	  if( track && track !== true ){
	    track = this._touchExpr(track);
	    extraObj = _.createObject(extra);
	    keyOf = function( item, index ){
	      extraObj[ variable ] = item;
	      extraObj[ indexName ] = index;
	      // @FIX keyName
	      return track.get( self, extraObj );
	    };
	  }

	  function addRange(index, end, newList, rawNewValue){
	    for(var o = index; o < end; o++){ //add
	      // prototype inherit
	      var item = newList[o];
	      var data = _.createObject(extra);
	      updateTarget(data, o, item, rawNewValue);

	      var section = self.$compile(ast.body, {
	        extra: data,
	        namespace:namespace,
	        record: true,
	        outer: options.outer
	      });
	      section.data = data;
	      // autolink
	      var insert =  combine.last(group$$1.get(o));
	      if(insert.parentNode){
	        animate.inject(combine.node(section),insert, 'after');
	      }
	      // insert.parentNode.insertBefore(combine.node(section), insert.nextSibling);
	      children.splice( o + 1 , 0, section);
	    }
	  }

	  function updateTarget(target, index, item, rawNewValue){
	      target[ indexName ] = index;
	      if( rawNewValue ){
	        target[ keyName ] = item;
	        target[ variable ] = rawNewValue[ item ];
	      }else{
	        target[ variable ] = item;
	        target[keyName] = null;
	      }
	  }


	  function updateRange(start, end, newList, rawNewValue){
	    for(var k = start; k < end; k++){ // no change
	      var sect = group$$1.get( k + 1 ), item = newList[ k ];
	      updateTarget(sect.data, k, item, rawNewValue);
	    }
	  }

	  function updateLD(newList, oldList, splices , rawNewValue ){

	    var cur = placeholder;
	    var m = 0, len = newList.length;

	    if(!splices && (len !==0 || oldList.length !==0)  ){
	      splices = diffArray(newList, oldList, true);
	    }

	    if(!splices || !splices.length) { return; }
	      
	    for(var i = 0; i < splices.length; i++){ //init
	      var splice = splices[i];
	      var index = splice.index; // beacuse we use a comment for placeholder
	      var removed = splice.removed;
	      var add = splice.add;
	      var rlen = removed.length;
	      // for track
	      if( track && rlen && add ){
	        var minar = Math.min(rlen, add);
	        var tIndex = 0;
	        while(tIndex < minar){
	          if( keyOf(newList[index], index) !== keyOf( removed[0], index ) ){
	            removeRange(index, 1, children);
	            addRange(index, index+1, newList, rawNewValue);
	          }
	          removed.shift();
	          add--;
	          index++;
	          tIndex++;
	        }
	        rlen = removed.length;
	      }
	      // update
	      updateRange(m, index, newList, rawNewValue);

	      removeRange( index ,rlen, children);

	      addRange(index, index+add, newList, rawNewValue);

	      m = index + add - rlen;
	      m  = m < 0? 0 : m;

	    }
	    if(m < len){
	      for(var i = m; i < len; i++){
	        var pair = group$$1.get(i + 1);
	        pair.data[indexName] = i;
	        // @TODO fix keys
	      }
	    }
	  }

	  // if the track is constant test.
	  function updateSimple(newList, oldList, rawNewValue ){

	    var nlen = newList.length;
	    var olen = oldList.length;
	    var mlen = Math.min(nlen, olen);

	    updateRange(0, mlen, newList, rawNewValue);
	    if(nlen < olen){ //need add
	      removeRange(nlen, olen-nlen, children);
	    }else if(nlen > olen){
	      addRange(olen, nlen, newList, rawNewValue);
	    }
	  }

	  function update(newValue, oldValue, splices){

	    var nType = _.typeOf( newValue );
	    var oType = _.typeOf( oldValue );

	    var newList = getListFromValue( newValue, nType );
	    var oldList = getListFromValue( oldValue, oType );

	    var rawNewValue;


	    var nlen = newList && newList.length;
	    var olen = oldList && oldList.length;

	    // if previous list has , we need to remove the altnated section.
	    if( !olen && nlen && group$$1.get(1) ){
	      var altGroup = children.pop();
	      if(altGroup.destroy)  { altGroup.destroy(true); }
	    }

	    if( nType === 'object' ) { rawNewValue = newValue; }

	    if(track === true){
	      updateSimple( newList, oldList,  rawNewValue );
	    }else{
	      updateLD( newList, oldList, splices, rawNewValue );
	    }

	    // @ {#list} {#else}
	    if( !nlen && alternate && alternate.length){
	      var section = self.$compile(alternate, {
	        extra: extra,
	        record: true,
	        outer: options.outer,
	        namespace: namespace
	      });
	      children.push(section);
	      if(placeholder.parentNode){
	        animate.inject(combine.node(section), placeholder, 'after');
	      }
	    }
	  }

	  this.$watch(ast.sequence, update, { 
	    init: true, 
	    diff: track !== true ,
	    deep: true
	  });
	  return group$$1;
	};



	// {#include } or {#inc template}
	walkers.template = function(ast, options){
	  var content = ast.content, compiled;
	  var placeholder = document.createComment('inlcude');
	  var compiled, namespace = options.namespace, extra = options.extra;
	  var group$$1 = new Group([placeholder]);
	  if(content){
	    var self = this;
	    this.$watch(content, function(value){
	      var removed = group$$1.get(1), type= typeof value;
	      if( removed){
	        removed.destroy(true); 
	        group$$1.children.pop();
	      }
	      if(!value) { return; }

	      group$$1.push( compiled = type === 'function' ? value(): self.$compile( type !== 'object'? String(value): value, {
	        record: true, 
	        outer: options.outer,
	        namespace: namespace, 
	        extra: extra}) ); 
	      if(placeholder.parentNode) {
	        compiled.$inject(placeholder, 'before');
	      }
	    }, OPTIONS.INIT);
	  }
	  return group$$1;
	};

	function getListFromValue(value, type){
	  return type === 'array'? value: (type === 'object'? _.keys(value) :  []);
	}


	// how to resolve this problem
	var ii = 0;
	walkers['if'] = function(ast, options){
	  var self = this, consequent, alternate, extra = options.extra;
	  if(options && options.element){ // attribute inteplation
	    var update = function(nvalue){
	      if(!!nvalue){
	        if(alternate) { combine.destroy(alternate); }
	        if(ast.consequent) { consequent = self.$compile(ast.consequent, {record: true, element: options.element , extra:extra}); }
	      }else{
	        if(consequent) { combine.destroy(consequent); }
	        if(ast.alternate) { alternate = self.$compile(ast.alternate, {record: true, element: options.element, extra: extra}); }
	      }
	    };
	    this.$watch(ast.test, update, OPTIONS.FORCE);
	    return {
	      destroy: function(){
	        if(consequent) { combine.destroy(consequent); }
	        else if(alternate) { combine.destroy(alternate); }
	      }
	    }
	  }

	  var test, consequent, alternate, node;
	  var placeholder = document.createComment("Regular if" + ii++);
	  var group$$1 = new Group();
	  group$$1.push(placeholder);
	  var preValue = null, namespace= options.namespace;


	  var update = function (nvalue, old){
	    var value = !!nvalue;
	    if(value === preValue) { return; }
	    preValue = value;
	    if(group$$1.children[1]){
	      group$$1.children[1].destroy(true);
	      group$$1.children.pop();
	    }
	    if(value){ //true
	      if(ast.consequent && ast.consequent.length){
	        consequent = self.$compile( ast.consequent , {record:true, outer: options.outer,namespace: namespace, extra:extra });
	        // placeholder.parentNode && placeholder.parentNode.insertBefore( node, placeholder );
	        group$$1.push(consequent);
	        if(placeholder.parentNode){
	          animate.inject(combine.node(consequent), placeholder, 'before');
	        }
	      }
	    }else{ //false
	      if(ast.alternate && ast.alternate.length){
	        alternate = self.$compile(ast.alternate, {record:true, outer: options.outer,namespace: namespace, extra:extra});
	        group$$1.push(alternate);
	        if(placeholder.parentNode){
	          animate.inject(combine.node(alternate), placeholder, 'before');
	        }
	      }
	    }
	  };
	  this.$watch(ast.test, update, OPTIONS.FORCE_INIT);

	  return group$$1;
	};


	walkers.expression = function(ast, options){
	  var node = document.createTextNode("");
	  this.$watch(ast, function(newval){
	    dom.text(node,  newval == null? "": String(newval) );
	  }, OPTIONS.STABLE_INIT );
	  return node;
	};
	walkers.text = function(ast, options){
	  var text = ast.text;
	  var node = document.createTextNode(
	    text.indexOf('&') !== -1? _.convertEntity(text): text
	  );
	  return node;
	};



	var eventReg = /^on-(.+)$/;

	/**
	 * walkers element (contains component)
	 */
	walkers.element = function(ast, options){
	  var attrs = ast.attrs, self = this,
	    Constructor = this.constructor,
	    children = ast.children,
	    namespace = options.namespace, 
	    extra = options.extra,
	    tag = ast.tag,
	    Component = Constructor.component(tag),
	    ref, group$$1, element;

	  if( tag === 'r-content' ){
	    _.log('r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)', 'warn');
	    return this.$body && this.$body();
	  } 

	  if(Component || tag === 'r-component'){
	    options.Component = Component;
	    return walkers.component.call(this, ast, options)
	  }

	  if(tag === 'svg') { namespace = "svg"; }
	  // @Deprecated: may be removed in next version, use {#inc } instead
	  
	  if( children && children.length ){
	    group$$1 = this.$compile(children, {outer: options.outer,namespace: namespace, extra: extra });
	  }

	  element = dom.create(tag, namespace, attrs);

	  if(group$$1 && !_.isVoidTag(tag)){
	    dom.inject( combine.node(group$$1) , element);
	  }

	  // fix tag ast, some infomation only avaliable at runtime (directive etc..)
	  _.fixTagAST(ast, Constructor);

	  var destroies = walkAttributes.call(this, attrs, element, extra);

	  return {
	    type: "element",
	    group: group$$1,
	    node: function(){
	      return element;
	    },
	    last: function(){
	      return element;
	    },
	    destroy: function(first){
	      if( first ){
	        animate.remove( element, group$$1? group$$1.destroy.bind( group$$1 ): _.noop );
	      }else if(group$$1) {
	        group$$1.destroy();
	      }
	      // destroy ref
	      if( destroies.length ) {
	        destroies.forEach(function( destroy ){
	          if( destroy ){
	            if( typeof destroy.destroy === 'function' ){
	              destroy.destroy();
	            }else{
	              destroy();
	            }
	          }
	        });
	      }
	    }
	  }
	};

	walkers.component = function(ast, options){
	  var this$1 = this;

	  var attrs = ast.attrs, 
	    Component = options.Component,
	    Constructor = this.constructor,
	    isolate, 
	    extra = options.extra,
	    namespace = options.namespace,
	    ref, self = this, is;

	  var data = {}, events;

	  for(var i = 0, len = attrs.length; i < len; i++){
	    var attr = attrs[i];
	    // consider disabled   equlasto  disabled={true}
	    var value = this$1._touchExpr(attr.value === undefined? true: attr.value);
	    if(value.constant) { value = attr.value = value.get(this$1); }
	    if(attr.value && attr.value.constant === true){
	      value = value.get(this$1);
	    }
	    var name = attr.name;
	    if(!attr.event){
	      var etest = name.match(eventReg);
	      // event: 'nav'
	      if(etest) { attr.event = etest[1]; }
	    }

	    // @compile modifier
	    if(attr.mdf === 'cmpl'){
	      value = _.getCompileFn(value, this$1, {
	        record: true, 
	        namespace:namespace, 
	        extra: extra, 
	        outer: options.outer
	      });
	    }
	    
	    // @if is r-component . we need to find the target Component
	    if(name === 'is' && !Component){
	      is = value;
	      var componentName = this$1.$get(value, true);
	      Component = Constructor.component(componentName);
	      if(typeof Component !== 'function') { throw new Error("component " + componentName + " has not registed!"); }
	    }
	    // bind event proxy
	    var eventName;
	    if(eventName = attr.event){
	      events = events || {};
	      events[eventName] = _.handleEvent.call(this$1, value, eventName);
	      continue;
	    }else {
	      name = attr.name = _.camelCase(name);
	    }

	    if(!value || value.type !== 'expression'){
	      data[name] = value;
	    }else{
	      data[name] = value.get(self); 
	    }
	    if( name === 'ref'  && value != null){
	      ref = value;
	    }
	    if( name === 'isolate'){
	      // 1: stop: composite -> parent
	      // 2. stop: composite <- parent
	      // 3. stop 1 and 2: composite <-> parent
	      // 0. stop nothing (defualt)
	      isolate = value.type === 'expression'? value.get(self): parseInt(value === true? 3: value, 10);
	      data.isolate = isolate;
	    }
	  }

	  var definition = { 
	    data: data, 
	    events: events, 
	    $parent: (isolate & 2)? null: this,
	    $root: this.$root,
	    $outer: options.outer,
	    _body: {
	      ctx: this,
	      ast: ast.children
	    }
	  };
	  var options = {
	    namespace: namespace, 
	    extra: options.extra
	  };


	  var component = new Component(definition, options), reflink;


	  if(ref && this.$refs){
	    reflink = Component.directive('ref').link;
	    this.$on('$destroy', reflink.call(this, component, ref) );
	  }
	  if(ref &&  self.$refs) { self.$refs[ref] = component; }
	  for(var i = 0, len = attrs.length; i < len; i++){
	    var attr = attrs[i];
	    var value = attr.value||true;
	    var name = attr.name;
	    // need compiled
	    if(value.type === 'expression' && !attr.event){
	      value = self._touchExpr(value);
	      // use bit operate to control scope
	      if( !(isolate & 2) ) 
	        { this$1.$watch(value, (function(name, val){
	          this.data[name] = val;
	        }).bind(component, name), OPTIONS.SYNC); }
	      if( value.set && !(isolate & 1 ) ) 
	        // sync the data. it force the component don't trigger attr.name's first dirty echeck
	        { component.$watch(name, self.$update.bind(self, value), OPTIONS.INIT); }
	    }
	  }
	  if(is && is.type === 'expression'  ){
	    var group$$1 = new Group();
	    group$$1.push(component);
	    this.$watch(is, function(value){
	      // found the new component
	      var Component = Constructor.component(value);
	      if(!Component) { throw new Error("component " + value + " has not registed!"); }
	      var ncomponent = new Component(definition);
	      var component = group$$1.children.pop();
	      group$$1.push(ncomponent);
	      ncomponent.$inject(combine.last(component), 'after');
	      component.destroy();
	      // @TODO  if component changed , we need update ref
	      if(ref){
	        self.$refs[ref] = ncomponent;
	      }
	    }, OPTIONS.SYNC);
	    return group$$1;
	  }
	  return component;
	};

	function walkAttributes(attrs, element, extra){
	  var this$1 = this;

	  var bindings = [];
	  for(var i = 0, len = attrs.length; i < len; i++){
	    var binding = this$1._walk(attrs[i], {element: element, fromElement: true, attrs: attrs, extra: extra});
	    if(binding) { bindings.push(binding); }
	  }
	  return bindings;
	}

	walkers.attribute = function(ast ,options){

	  var attr = ast;
	  var name = attr.name;
	  var value = attr.value || "";
	  var constant = value.constant;
	  var Component = this.constructor;
	  var directive = Component.directive(name);
	  var element = options.element;
	  var self = this;


	  value = this._touchExpr(value);

	  if(constant) { value = value.get(this); }

	  if(directive && directive.link){
	    var extra = {
	      attrs: options.attrs,
	      param: _.getParamObj(this, attr.param) 
	    };
	    var binding = directive.link.call(self, element, value, name, extra);
	    // if update has been passed in , we will  automately watch value for user
	    if( typeof directive.update === 'function'){
	      if(_.isExpr(value)){
	        this.$watch(value, function(val, old){
	          directive.update.call(self, element, val, old, extra); 
	        });
	      }else{
	        directive.update.call(self, element, value, undefined, extra );
	      }
	    }
	    if(typeof binding === 'function') { binding = {destroy: binding}; } 
	    return binding;
	  } else{
	    if(value.type === 'expression' ){
	      this.$watch(value, function(nvalue, old){
	        dom.attr(element, name, nvalue);
	      }, OPTIONS.STABLE_INIT);
	    }else{
	      if(_.isBooleanAttr(name)){
	        dom.attr(element, name, true);
	      }else{
	        dom.attr(element, name, value);
	      }
	    }
	    if(!options.fromElement){
	      return {
	        destroy: function(){
	          dom.attr(element, name, null);
	        }
	      }
	    }
	  }

	};
	});

	// simplest event emitter 60 lines
	// ===============================
	var _$8 = util;
	var API = {
	  $on: function(event, fn, desc) {
	    var this$1 = this;

	    if(typeof event === "object" && event){
	      for (var i in event) {
	        this$1.$on(i, event[i], fn);
	      }
	    }else{
	      desc = desc || {};
	      // @patch: for list
	      var context = this;
	      var handles = context._handles || (context._handles = {}),
	        calls = handles[event] || (handles[event] = []);
	      var realFn;
	      if(desc.once){
	        realFn = function(){
	          fn.apply( this, arguments );
	          this.$off(event, fn);
	        };
	        fn.real = realFn;
	      }
	      calls.push(realFn || fn);
	    }
	    return this;
	  },
	  $off: function(event, fn) {
	    var context = this;
	    if(!context._handles) { return; }
	    if(!event) { this._handles = {}; }
	    var handles = context._handles,
	      calls;

	    if (calls = handles[event]) {
	      if (!fn) {
	        handles[event] = [];
	        return context;
	      }
	      fn = fn.real || fn;
	      for (var i = 0, len = calls.length; i < len; i++) {
	        if (fn === calls[i]) {
	          calls.splice(i, 1);
	          return context;
	        }
	      }
	    }
	    return context;
	  },
	  // bubble event
	  $emit: function(event){
	    // @patch: for list
	    var context = this;
	    var handles = context._handles, calls, args, type;
	    if(!event) { return; }
	    var args = _$8.slice(arguments, 1);
	    var type = event;

	    if(!handles) { return context; }
	    if(calls = handles[type.slice(1)]){
	      for (var j = 0, len = calls.length; j < len; j++) {
	        calls[j].apply(context, args);
	      }
	    }
	    if (!(calls = handles[type])) { return context; }
	    for (var i = 0, len = calls.length; i < len; i++) {
	      calls[i].apply(context, args);
	    }
	    // if(calls.length) context.$update();
	    return context;
	  },
	  // capture  event
	  $once: function(event, fn){
	    var args = _$8.slice(arguments);
	    args.push({once: true});
	    return this.$on.apply(this, args);
	  }
	};
	// container class
	function Event() {}
	_$8.extend(Event.prototype, API);

	Event.mixTo = function(obj){
	  obj = typeof obj === "function" ? obj.prototype : obj;
	  _$8.extend(obj, API);
	};
	var event = Event;

	var exprCache$1 = env.exprCache;
	var Parser$2 = Parser_1;
	var parse$1 = {
	  expression: function(expr, simple){
	    // @TODO cache
	    if( typeof expr === 'string' && ( expr = expr.trim() ) ){
	      expr = exprCache$1.get( expr ) || exprCache$1.set( expr, new Parser$2( expr, { mode: 2, expression: true } ).expression() );
	    }
	    if(expr) { return expr; }
	  },
	  parse: function(template){
	    return new Parser$2(template).parse();
	  }
	};

	var _$9 = util;
	var parseExpression = parse$1.expression;
	var diff$2 = diff;
	var diffArray$1 = diff$2.diffArray;
	var diffObject$1 = diff$2.diffObject;

	function Watcher$1(){}

	var methods = {
	  $watch: function(expr, fn, options){
	    var this$1 = this;

	    var get, once, test, rlen, extra = this.__ext__; //records length
	    if(!this._watchers) { this._watchers = []; }
	    if(!this._watchersForStable) { this._watchersForStable = []; }

	    options = options || {};
	    if(options === true){
	       options = { deep: true };
	    }
	    var uid = _$9.uid('w_');
	    if(Array.isArray(expr)){
	      var tests = [];
	      for(var i = 0,len = expr.length; i < len; i++){
	          tests.push(this$1.$expression(expr[i]).get);
	      }
	      var prev = [];
	      test = function(context){
	        var equal = true;
	        for(var i =0, len = tests.length; i < len; i++){
	          var splice = tests[i](context, extra);
	          if(!_$9.equals(splice, prev[i])){
	             equal = false;
	             prev[i] = _$9.clone(splice);
	          }
	        }
	        return equal? false: prev;
	      };
	    }else{
	      if(typeof expr === 'function'){
	        get = expr.bind(this);      
	      }else{
	        expr = this._touchExpr( parseExpression(expr) );
	        get = expr.get;
	        once = expr.once;
	      }
	    }

	    var watcher = {
	      id: uid, 
	      get: get, 
	      fn: fn, 
	      once: once, 
	      force: options.force,
	      // don't use ld to resolve array diff
	      diff: options.diff,
	      test: test,
	      deep: options.deep,
	      last: options.sync? get(this): options.last
	    };


	    this[options.stable? '_watchersForStable': '_watchers'].push(watcher);
	    
	    rlen = this._records && this._records.length;
	    if(rlen) { this._records[rlen-1].push(watcher); }
	    // init state.
	    if(options.init === true){
	      var prephase = this.$phase;
	      this.$phase = 'digest';
	      this._checkSingleWatch( watcher);
	      this.$phase = prephase;
	    }
	    return watcher;
	  },
	  $unwatch: function( watcher ){
	    var this$1 = this;

	    if(!this._watchers || !watcher) { return; }
	    var watchers = this._watchers;
	    var type = typeof watcher;

	    if(type === 'object'){
	      var len = watcher.length;
	      if(!len){
	        watcher.removed = true;
	      }else{
	        while( (len--) >= 0 ){
	          this$1.$unwatch(watcher[len]);
	        }
	      }
	    }else if(type === 'number'){
	      var id = watcher;
	      watcher =  _$9.findItem( watchers, function(item){
	        return item.id === id;
	      } );
	      if(!watcher) { watcher = _$9.findItem(this._watchersForStable, function( item ){
	        return item.id === id
	      }); }
	      return this.$unwatch(watcher);
	    }
	    return this;
	  },
	  $expression: function(value){
	    return this._touchExpr(parseExpression(value))
	  },
	  /**
	   * the whole digest loop ,just like angular, it just a dirty-check loop;
	   * @param  {String} path  now regular process a pure dirty-check loop, but in parse phase, 
	   *                  Regular's parser extract the dependencies, in future maybe it will change to dirty-check combine with path-aware update;
	   * @return {Void}   
	   */

	  $digest: function(){
	    if(this.$phase === 'digest' || this._mute) { return; }
	    this.$phase = 'digest';
	    var dirty = false, n =0;
	    while(dirty = this._digest()){

	      if((++n) > 20){ // max loop
	        throw Error('there may a circular dependencies reaches')
	      }
	    }
	    // stable watch is dirty
	    var stableDirty =  this._digest(true);

	    if( (n > 0 || stableDirty) && this.$emit) {
	      this.$emit("$update");
	      if (this.devtools) {
	        this.devtools.emit("flush", this);
	      }
	    }
	    this.$phase = null;
	  },
	  // private digest logic
	  _digest: function(stable){
	    var this$1 = this;


	    var watchers = !stable? this._watchers: this._watchersForStable;
	    var dirty = false, children, watcher, watcherDirty;
	    var len = watchers && watchers.length;
	    if(len){
	      var mark = 0, needRemoved=0;
	      for(var i =0; i < len; i++ ){
	        watcher = watchers[i];
	        var shouldRemove = !watcher ||  watcher.removed;
	        if( shouldRemove ){
	          needRemoved += 1;
	        }else{
	          watcherDirty = this$1._checkSingleWatch(watcher);
	          if(watcherDirty) { dirty = true; }
	        }
	        // remove when encounter first unmoved item or touch the end
	        if( !shouldRemove || i === len-1 ){
	          if( needRemoved ){
	            watchers.splice(mark, needRemoved );          
	            len -= needRemoved;
	            i -= needRemoved;
	            needRemoved = 0;
	          }
	          mark = i+1;
	        }
	      }
	    }
	    // check children's dirty.
	    children = this._children;
	    if(children && children.length){
	      for(var m = 0, mlen = children.length; m < mlen; m++){
	        var child = children[m];
	        if(child && child._digest(stable)) { dirty = true; }
	      }
	    }
	    return dirty;
	  },
	  // check a single one watcher 
	  _checkSingleWatch: function(watcher){
	    var dirty = false;
	    if(!watcher) { return; }

	    var now, last, tlast, tnow,  eq, diff$$1;

	    if(!watcher.test){

	      now = watcher.get(this);
	      last = watcher.last;

	      if(now !== last || watcher.force){
	        tlast = _$9.typeOf(last);
	        tnow = _$9.typeOf(now);
	        eq = true; 

	        // !Object
	        if( !(tnow === 'object' && tlast==='object' && watcher.deep) ){
	          // Array
	          if( tnow === 'array' && ( tlast=='undefined' || tlast === 'array') ){
	            diff$$1 = diffArray$1(now, watcher.last || [], watcher.diff);
	            if( tlast !== 'array' || diff$$1 === true || diff$$1.length ) { dirty = true; }
	          }else{
	            eq = _$9.equals( now, last );
	            if( !eq || watcher.force ){
	              watcher.force = null;
	              dirty = true; 
	            }
	          }
	        }else{
	          diff$$1 =  diffObject$1( now, last, watcher.diff );
	          if( diff$$1 === true || diff$$1.length ) { dirty = true; }
	        }
	      }

	    } else{
	      // @TODO 是否把多重改掉
	      var result = watcher.test(this);
	      if(result){
	        dirty = true;
	        watcher.fn.apply(this, result);
	      }
	    }
	    if(dirty && !watcher.test){
	      if(tnow === 'object' && watcher.deep || tnow === 'array'){
	        watcher.last = _$9.clone(now);
	      }else{
	        watcher.last = now;
	      }
	      watcher.fn.call(this, now, last, diff$$1);
	      if(watcher.once) { this.$unwatch(watcher); }
	    }

	    return dirty;
	  },

	  /**
	   * **tips**: whatever param you passed in $update, after the function called, dirty-check(digest) phase will enter;
	   * 
	   * @param  {Function|String|Expression} path  
	   * @param  {Whatever} value optional, when path is Function, the value is ignored
	   * @return {this}     this 
	   */
	  $set: function(path, value){
	    var this$1 = this;

	    if(path != null){
	      var type = typeof (path);
	      if( type === 'string' || path.type === 'expression' ){
	        path = this.$expression(path);
	        path.set(this, value);
	      }else if(type === 'function'){
	        path.call(this, this.data);
	      }else{
	        for(var i in path) {
	          this$1.$set(i, path[i]);
	        }
	      }
	    }
	  },
	  // 1. expr canbe string or a Expression
	  // 2. detect: if true, if expr is a string will directly return;
	  $get: function(expr, detect)  {
	    if(detect && typeof expr === 'string') { return expr; }
	    return this.$expression(expr).get(this);
	  },
	  $update: function(){
	    var rootParent = this;
	    do{
	      if(rootParent.data.isolate || !rootParent.$parent) { break; }
	      rootParent = rootParent.$parent;
	    } while(rootParent)

	    var prephase =rootParent.$phase;
	    rootParent.$phase = 'digest';

	    this.$set.apply(this, arguments);

	    rootParent.$phase = prephase;

	    rootParent.$digest();
	    return this;
	  },
	  // auto collect watchers for logic-control.
	  _record: function(){
	    if(!this._records) { this._records = []; }
	    this._records.push([]);
	  },
	  _release: function(){
	    return this._records.pop();
	  }
	};


	_$9.extend(Watcher$1.prototype, methods);


	Watcher$1.mixTo = function(obj){
	  obj = typeof obj === "function" ? obj.prototype : obj;
	  return _$9.extend(obj, methods)
	};

	var watcher = Watcher$1;

	var filter$1 = createCommonjsModule(function (module) {
	var f = module.exports = {};

	// json:  two way 
	//  - get: JSON.stringify
	//  - set: JSON.parse
	//  - example: `{ title|json }`
	f.json = {
	  get: function( value ){
	    return typeof JSON !== 'undefined'? JSON.stringify(value): value;
	  },
	  set: function( value ){
	    return typeof JSON !== 'undefined'? JSON.parse(value) : value;
	  }
	};

	// last: one-way
	//  - get: return the last item in list
	//  - example: `{ list|last }`
	f.last = function(arr){
	  return arr && arr[arr.length - 1];
	};

	// average: one-way
	//  - get: copute the average of the list
	//  - example: `{ list| average: "score" }`
	f.average = function(array, key){
	  array = array || [];
	  return array.length? f.total(array, key)/ array.length : 0;
	};


	// total: one-way
	//  - get: copute the total of the list
	//  - example: `{ list| total: "score" }`
	f.total = function(array, key){
	  var total = 0;
	  if(!array) { return; }
	  array.forEach(function( item ){
	    total += key? item[key] : item;
	  });
	  return total;
	};

	// var basicSortFn = function(a, b){return b - a}

	// f.sort = function(array, key, reverse){
	//   var type = typeof key, sortFn; 
	//   switch(type){
	//     case 'function': sortFn = key; break;
	//     case 'string': sortFn = function(a, b){};break;
	//     default:
	//       sortFn = basicSortFn;
	//   }
	//   // need other refernce.
	//   return array.slice().sort(function(a,b){
	//     return reverse? -sortFn(a, b): sortFn(a, b);
	//   })
	//   return array
	// }
	});

	var env$2 = env;
	var Lexer = Lexer_1;
	var Parser = Parser_1;
	var config$3 = config$1;
	var _$1 = util;
	var extend$1 = extend$2;
	var combine = {};
	if(env$2.browser){
	  var dom = dom_1;
	  var walkers = walkers_1;
	  var Group = group;
	  var doc = dom.doc;
	  combine = combine_1;
	}
	var events = event;
	var Watcher = watcher;
	var parse = parse$1;
	var filter = filter$1;


	/**
	* `Regular` is regularjs's NameSpace and BaseClass. Every Component is inherited from it
	* 
	* @class Regular
	* @module Regular
	* @constructor
	* @param {Object} options specification of the component
	*/
	var Regular$1 = function(definition, options){
	  var prevRunning = env$2.isRunning;
	  env$2.isRunning = true;
	  var node, template;

	  definition = definition || {};
	  var usePrototyeString = typeof this.template === 'string' && !definition.template;
	  options = options || {};

	  definition.data = definition.data || {};
	  definition.computed = definition.computed || {};
	  if( this.data ) { _$1.extend( definition.data, this.data ); }
	  if( this.computed ) { _$1.extend( definition.computed, this.computed ); }

	  var listeners = this._eventListeners || [];
	  var normListener;
	  // hanle initialized event binding
	  if( definition.events){
	    normListener = _$1.normListener(definition.events);
	    if(normListener.length){
	      listeners = listeners.concat(normListener);
	    }
	    delete definition.events;
	  }

	  _$1.extend(this, definition, true);

	  if(this.$parent){
	     this.$parent._append(this);
	  }
	  this._children = [];
	  this.$refs = {};

	  template = this.template;

	  // template is a string (len < 16). we will find it container first
	  if((typeof template === 'string' && template.length < 16) && (node = dom.find(template))) {
	    template = node.innerHTML;
	  }
	  // if template is a xml
	  if(template && template.nodeType) { template = template.innerHTML; }
	  if(typeof template === 'string') {
	    template = new Parser(template).parse();
	    if(usePrototyeString) {
	    // avoid multiply compile
	      this.constructor.prototype.template = template;
	    }else{
	      delete this.template;
	    }
	  }

	  this.computed = handleComputed(this.computed);
	  this.$root = this.$root || this;
	  // if have events

	  if(listeners && listeners.length){
	    listeners.forEach(function( item ){
	      this.$on(item.type, item.listener);
	    }.bind(this));
	  }
	  this.$emit("$config");
	  this.config && this.config(this.data);
	  this.$emit("$afterConfig");

	  var body = this._body;
	  this._body = null;

	  if(body && body.ast && body.ast.length){
	    this.$body = _$1.getCompileFn(body.ast, body.ctx , {
	      outer: this,
	      namespace: options.namespace,
	      extra: options.extra,
	      record: true
	    });
	  }
	  // handle computed
	  if(template){
	    this.group = this.$compile(template, {namespace: options.namespace});
	    combine.node(this);
	  }


	  if(!this.$parent) { this.$update(); }
	  this.$ready = true;
	  this.$emit("$init");
	  if( this.init ) { this.init(this.data); }
	  this.$emit("$afterInit");

	  // @TODO: remove, maybe , there is no need to update after init; 
	  // if(this.$root === this) this.$update();
	  env$2.isRunning = prevRunning;

	  // children is not required;
	  
	  if (this.devtools) {
	    this.devtools.emit("init", this);
	  }
	};

	// check if regular devtools hook exists
	var devtools = window.__REGULAR_DEVTOOLS_GLOBAL_HOOK__;
	if (devtools) {
	  Regular$1.prototype.devtools = devtools;
	}

	walkers && (walkers.Regular = Regular$1);


	// description
	// -------------------------
	// 1. Regular and derived Class use same filter
	_$1.extend(Regular$1, {
	  // private data stuff
	  _directives: { __regexp__:[] },
	  _plugins: {},
	  _protoInheritCache: [ 'directive', 'use'] ,
	  __after__: function(supr, o) {

	    var template;
	    this.__after__ = supr.__after__;

	    // use name make the component global.
	    if(o.name) { Regular$1.component(o.name, this); }
	    // this.prototype.template = dom.initTemplate(o)
	    if(template = o.template){
	      var node, name;
	      if( typeof template === 'string' && template.length < 16 && ( node = dom.find( template )) ){
	        template = node ;
	      }

	      if(template && template.nodeType){
	        if(name = dom.attr(template, 'name')) { Regular$1.component(name, this); }
	        template = template.innerHTML;
	      } 

	      if(typeof template === 'string' ){
	        this.prototype.template = config$3.PRECOMPILE? new Parser(template).parse(): template;
	      }
	    }

	    if(o.computed) { this.prototype.computed = handleComputed(o.computed); }
	    // inherit directive and other config from supr
	    Regular$1._inheritConfig(this, supr);

	  },
	  /**
	   * Define a directive
	   *
	   * @method directive
	   * @return {Object} Copy of ...
	   */  
	  directive: function(name, cfg){
	    var this$1 = this;

	    if(!name) { return; }

	    var type = typeof name;
	    if(type === 'object' && !cfg){
	      for(var k in name){
	        if(name.hasOwnProperty(k)) { this$1.directive(k, name[k]); }
	      }
	      return this;
	    }
	    var directives = this._directives, directive;
	    if(cfg == null){
	      if( type === 'string' ){
	        if(directive = directives[name]) { return directive; }
	        else{

	          var regexp = directives.__regexp__;
	          for(var i = 0, len = regexp.length; i < len ; i++){
	            directive = regexp[i];
	            var test = directive.regexp.test(name);
	            if(test) { return directive; }
	          }
	        }
	      }
	    }else{
	      if( typeof cfg === 'function') { cfg = { link: cfg }; } 
	      if( type === 'string' ) { directives[name] = cfg; }
	      else{
	        cfg.regexp = name;
	        directives.__regexp__.push(cfg);
	      }
	      return this
	    }
	  },
	  plugin: function(name, fn){
	    var plugins = this._plugins;
	    if(fn == null) { return plugins[name]; }
	    plugins[name] = fn;
	    return this;
	  },
	  use: function(fn){
	    if(typeof fn === "string") { fn = Regular$1.plugin(fn); }
	    if(typeof fn !== "function") { return this; }
	    fn(this, Regular$1);
	    return this;
	  },
	  // config the Regularjs's global
	  config: function(name, value){
	    var needGenLexer = false;
	    if(typeof name === "object"){
	      for(var i in name){
	        // if you config
	        if( i ==="END" || i==='BEGIN' )  { needGenLexer = true; }
	        config$3[i] = name[i];
	      }
	    }
	    if(needGenLexer) { Lexer.setup(); }
	  },
	  expression: parse.expression,
	  Parser: Parser,
	  Lexer: Lexer,
	  _addProtoInheritCache: function(name, transform){
	    if( Array.isArray( name ) ){
	      return name.forEach(Regular$1._addProtoInheritCache);
	    }
	    var cacheKey = "_" + name + "s";
	    Regular$1._protoInheritCache.push(name);
	    Regular$1[cacheKey] = {};
	    if(Regular$1[name]) { return; }
	    Regular$1[name] = function(key, cfg){
	      var this$1 = this;

	      var cache = this[cacheKey];

	      if(typeof key === "object"){
	        for(var i in key){
	          if(key.hasOwnProperty(i)) { this$1[name](i, key[i]); }
	        }
	        return this;
	      }
	      if(cfg == null) { return cache[key]; }
	      cache[key] = transform? transform(cfg) : cfg;
	      return this;
	    };
	  },
	  _inheritConfig: function(self, supr){

	    // prototype inherit some Regular property
	    // so every Component will have own container to serve directive, filter etc..
	    var defs = Regular$1._protoInheritCache;
	    var keys = _$1.slice(defs);
	    keys.forEach(function(key){
	      self[key] = supr[key];
	      var cacheKey = '_' + key + 's';
	      if(supr[cacheKey]) { self[cacheKey] = _$1.createObject(supr[cacheKey]); }
	    });
	    return self;
	  }

	});

	extend$1(Regular$1);

	Regular$1._addProtoInheritCache("component");

	Regular$1._addProtoInheritCache("filter", function(cfg){
	  return typeof cfg === "function"? {get: cfg}: cfg;
	});


	events.mixTo(Regular$1);
	Watcher.mixTo(Regular$1);

	Regular$1.implement({
	  init: function(){},
	  config: function(){},
	  destroy: function(){
	    // destroy event wont propgation;
	    this.$emit("$destroy");
	    this._watchers = null;
	    this.group && this.group.destroy(true);
	    this.group = null;
	    this.parentNode = null;
	    this._children = null;
	    this.$root = null;
	    this._handles = null;
	    this.$refs = null;
	    var parent = this.$parent;
	    if(parent && parent._children){
	      var index = parent._children.indexOf(this);
	      parent._children.splice(index,1);
	    }
	    this.$parent = null;

	    if (this.devtools) {
	      this.devtools.emit("destroy", this);
	    }
	  },

	  /**
	   * compile a block ast ; return a group;
	   * @param  {Array} parsed ast
	   * @param  {[type]} record
	   * @return {[type]}
	   */
	  $compile: function(ast, options){
	    options = options || {};
	    if(typeof ast === 'string'){
	      ast = new Parser(ast).parse();
	    }
	    var preExt = this.__ext__,
	      record = options.record, 
	      records;

	    if(options.extra) { this.__ext__ = options.extra; }

	    if(record) { this._record(); }
	    var group$$1 = this._walk(ast, options);
	    if(record){
	      records = this._release();
	      var self = this;
	      if(records.length){
	        // auto destroy all wather;
	        group$$1.ondestroy = function(){ self.$unwatch(records); };
	      }
	    }
	    if(options.extra) { this.__ext__ = preExt; }
	    return group$$1;
	  },


	  /**
	   * create two-way binding with another component;
	   * *warn*: 
	   *   expr1 and expr2 must can operate set&get, for example: the 'a.b' or 'a[b + 1]' is set-able, but 'a.b + 1' is not, 
	   *   beacuse Regular dont know how to inverse set through the expression;
	   *   
	   *   if before $bind, two component's state is not sync, the component(passed param) will sync with the called component;
	   *
	   * *example: *
	   *
	   * ```javascript
	   * // in this example, we need to link two pager component
	   * var pager = new Pager({}) // pager compoennt
	   * var pager2 = new Pager({}) // another pager component
	   * pager.$bind(pager2, 'current'); // two way bind throw two component
	   * pager.$bind(pager2, 'total');   // 
	   * // or just
	   * pager.$bind(pager2, {"current": "current", "total": "total"}) 
	   * ```
	   * 
	   * @param  {Regular} component the
	   * @param  {String|Expression} expr1     required, self expr1 to operate binding
	   * @param  {String|Expression} expr2     optional, other component's expr to bind with, if not passed, the expr2 will use the expr1;
	   * @return          this;
	   */
	  $bind: function(component, expr1, expr2){
	    var this$1 = this;

	    var type = _$1.typeOf(expr1);
	    if( expr1.type === 'expression' || type === 'string' ){
	      this._bind(component, expr1, expr2);
	    }else if( type === "array" ){ // multiply same path binding through array
	      for(var i = 0, len = expr1.length; i < len; i++){
	        this$1._bind(component, expr1[i]);
	      }
	    }else if(type === "object"){
	      for(var i in expr1) { if(expr1.hasOwnProperty(i)){
	        this$1._bind(component, i, expr1[i]);
	      } }
	    }
	    // digest
	    component.$update();
	    return this;
	  },
	  /**
	   * unbind one component( see $bind also)
	   *
	   * unbind will unbind all relation between two component
	   * 
	   * @param  {Regular} component [descriptionegular
	   * @return {This}    this
	   */
	  $unbind: function(){
	    // todo
	  },
	  $inject: combine.inject,
	  $mute: function(isMute){

	    isMute = !!isMute;

	    var needupdate = isMute === false && this._mute;

	    this._mute = !!isMute;

	    if(needupdate) { this.$update(); }
	    return this;
	  },
	  // private bind logic
	  _bind: function(component, expr1, expr2){

	    var self = this;
	    // basic binding

	    if(!component || !(component instanceof Regular$1)) { throw "$bind() should pass Regular component as first argument"; }
	    if(!expr1) { throw "$bind() should  pass as least one expression to bind"; }

	    if(!expr2) { expr2 = expr1; }

	    expr1 = parse.expression( expr1 );
	    expr2 = parse.expression( expr2 );

	    // set is need to operate setting ;
	    if(expr2.set){
	      var wid1 = this.$watch( expr1, function(value){
	        component.$update(expr2, value);
	      });
	      component.$on('$destroy', function(){
	        self.$unwatch(wid1);
	      });
	    }
	    if(expr1.set){
	      var wid2 = component.$watch(expr2, function(value){
	        self.$update(expr1, value);
	      });
	      // when brother destroy, we unlink this watcher
	      this.$on('$destroy', component.$unwatch.bind(component,wid2));
	    }
	    // sync the component's state to called's state
	    expr2.set(component, expr1.get(this));
	  },
	  _walk: function(ast, opt){
	    var this$1 = this;

	    if( Array.isArray(ast)  ){
	      var len = ast.length;
	      if(!len) { return; }
	      var res = [];
	      for(var i = 0; i < len; i++){
	        var ret = this$1._walk(ast[i], opt); 
	        if(ret) { res.push( ret ); }
	      }
	      return new Group(res);
	    }
	    if(typeof ast === 'string') { return doc.createTextNode(ast) }
	    return walkers[ast.type || "default"].call(this, ast, opt);
	  },
	  _append: function(component){
	    this._children.push(component);
	    component.$parent = this;
	  },
	  _handleEvent: function(elem, type, value, attrs){
	    var Component = this.constructor,
	      fire = typeof value !== "function"? _$1.handleEvent.call( this, value, type ) : value,
	      handler = Component.event(type), destroy;

	    if ( handler ) {
	      destroy = handler.call(this, elem, fire, attrs);
	    } else {
	      dom.on(elem, type, fire);
	    }
	    return handler ? destroy : function() {
	      dom.off(elem, type, fire);
	    }
	  },
	  // 1. 用来处理exprBody -> Function
	  // 2. list里的循环
	  _touchExpr: function(expr){
	    var  rawget, ext = this.__ext__, touched = {};
	    if(expr.type !== 'expression' || expr.touched) { return expr; }

	    rawget = expr.get;
	    if(!rawget){
	      rawget = expr.get = new Function(_$1.ctxName, _$1.extName , _$1.prefix+ "return (" + expr.body + ")");
	      expr.body = null;
	    }
	    touched.get = !ext? rawget: function(context){
	      return rawget(context, ext)
	    };

	    if(expr.setbody && !expr.set){
	      var setbody = expr.setbody;
	      var filters = expr.filters;
	      var self = this;
	      if(!filters || !_$1.some(filters, function(filter){ return !self._f_(filter).set }) ){
	        expr.set = function(ctx, value, ext){
	          expr.set = new Function(_$1.ctxName, _$1.setName , _$1.extName, _$1.prefix + setbody);          
	          return expr.set(ctx, value, ext);
	        };
	      }
	      expr.filters = expr.setbody = null;
	    }
	    if(expr.set){
	      touched.set = !ext? expr.set : function(ctx, value){
	        return expr.set(ctx, value, ext);
	      };
	    }

	    touched.type = 'expression';
	    touched.touched = true;
	    touched.once = expr.once || expr.constant;
	    return touched
	  },
	  // find filter
	  _f_: function(name){
	    var Component = this.constructor;
	    var filter = Component.filter(name);
	    if(!filter) { throw Error('filter ' + name + ' is undefined'); }
	    return filter;
	  },
	  // simple accessor get
	  _sg_:function(path, defaults, ext){
	    if(typeof ext !== 'undefined'){
	      var computed = this.computed,
	        computedProperty = computed[path];
	      if(computedProperty){
	        if(computedProperty.type==='expression' && !computedProperty.get) { this._touchExpr(computedProperty); }
	        if(computedProperty.get)  { return computedProperty.get(this); }
	        else { _$1.log("the computed '" + path + "' don't define the get function,  get data."+path + " altnately", "warn"); }
	      }
	  }
	    if(typeof defaults === "undefined" || typeof path == "undefined" ){
	      return undefined;
	    }
	    return (ext && typeof ext[path] !== 'undefined')? ext[path]: defaults[path];

	  },
	  // simple accessor set
	  _ss_:function(path, value, data , op, computed){
	    var computed = this.computed,
	      op = op || "=", prev, 
	      computedProperty = computed? computed[path]:null;

	    if(op !== '='){
	      prev = computedProperty? computedProperty.get(this): data[path];
	      switch(op){
	        case "+=":
	          value = prev + value;
	          break;
	        case "-=":
	          value = prev - value;
	          break;
	        case "*=":
	          value = prev * value;
	          break;
	        case "/=":
	          value = prev / value;
	          break;
	        case "%=":
	          value = prev % value;
	          break;
	      }
	    }
	    if(computedProperty) {
	      if(computedProperty.set) { return computedProperty.set(this, value); }
	      else { _$1.log("the computed '" + path + "' don't define the set function,  assign data."+path + " altnately", "warn" ); }
	    }
	    data[path] = value;
	    return value;
	  }
	});

	Regular$1.prototype.inject = function(){
	  _$1.log("use $inject instead of inject", "error");
	  return this.$inject.apply(this, arguments);
	};


	// only one builtin filter

	Regular$1.filter(filter);

	var Regular_1 = Regular$1;



	var handleComputed = (function(){
	  // wrap the computed getter;
	  function wrapGet(get){
	    return function(context){
	      return get.call(context, context.data );
	    }
	  }
	  // wrap the computed setter;
	  function wrapSet(set){
	    return function(context, value){
	      set.call( context, value, context.data );
	      return value;
	    }
	  }

	  return function(computed){
	    if(!computed) { return; }
	    var parsedComputed = {}, handle, pair, type;
	    for(var i in computed){
	      handle = computed[i];
	      type = typeof handle;

	      if(handle.type === 'expression'){
	        parsedComputed[i] = handle;
	        continue;
	      }
	      if( type === "string" ){
	        parsedComputed[i] = parse.expression(handle);
	      }else{
	        pair = parsedComputed[i] = {type: 'expression'};
	        if(type === "function" ){
	          pair.get = wrapGet(handle);
	        }else{
	          if(handle.get) { pair.get = wrapGet(handle.get); }
	          if(handle.set) { pair.set = wrapSet(handle.set); }
	        }
	      } 
	    }
	    return parsedComputed;
	  }
	})();

	/**
	 * event directive  bundle
	 *
	 */
	var _$11 = util;
	var dom$2 = dom_1;
	var Regular$2 = Regular_1;

	Regular$2._addProtoInheritCache("event");

	Regular$2.directive( /^on-\w+$/, function( elem, value, name , attrs) {
	  if ( !name || !value ) { return; }
	  var type = name.split("-")[1];
	  return this._handleEvent( elem, type, value, attrs );
	});
	// TODO.
	/**
	- $('dx').delegate()
	*/
	Regular$2.directive( /^(delegate|de)-\w+$/, function( elem, value, name ) {
	  var root = this.$root;
	  var _delegates = root._delegates || ( root._delegates = {} );
	  if ( !name || !value ) { return; }
	  var type = name.split("-")[1];
	  var fire = _$11.handleEvent.call(this, value, type);

	  function delegateEvent(ev){
	    matchParent(ev, _delegates[type], root.parentNode);
	  }

	  if( !_delegates[type] ){
	    _delegates[type] = [];

	    if(root.parentNode){
	      dom$2.on(root.parentNode, type, delegateEvent);
	    }else{
	      root.$on( "$inject", function( node, position, preParent ){
	        var newParent = this.parentNode;
	        if( preParent ){
	          dom$2.off(preParent, type, delegateEvent);
	        }
	        if(newParent) { dom$2.on(this.parentNode, type, delegateEvent); }
	      });
	    }
	    root.$on("$destroy", function(){
	      if(root.parentNode) { dom$2.off(root.parentNode, type, delegateEvent); }
	      _delegates[type] = null;
	    });
	  }
	  var delegate = {
	    element: elem,
	    fire: fire
	  };
	  _delegates[type].push( delegate );

	  return function(){
	    var delegates = _delegates[type];
	    if(!delegates || !delegates.length) { return; }
	    for( var i = 0, len = delegates.length; i < len; i++ ){
	      if( delegates[i] === delegate ) { delegates.splice(i, 1); }
	    }
	  }

	});


	function matchParent(ev , delegates, stop){
	  if(!stop) { return; }
	  var target = ev.target, pair;
	  while(target && target !== stop){
	    for( var i = 0, len = delegates.length; i < len; i++ ){
	      pair = delegates[i];
	      if(pair && pair.element === target){
	        pair.fire(ev);
	      }
	    }
	    target = target.parentNode;
	  }
	}

	// Regular
	var _$12 = util;
	var dom$3 = dom_1;
	var Regular$3 = Regular_1;
	var OPTIONS = _const.OPTIONS;
	var STABLE = OPTIONS.STABLE;
	var hasInput;

	var modelHandlers = {
	  "text": initText,
	  "select": initSelect,
	  "checkbox": initCheckBox,
	  "radio": initRadio
	};


	// @TODO


	// autoUpdate directive for select element
	// to fix r-model issue , when handle dynamic options


	/**
	 * <select r-model={name}> 
	 *   <r-option value={value} ></r-option>
	 * </select>
	 */


	// two-way binding with r-model
	// works on input, textarea, checkbox, radio, select


	Regular$3.directive("r-model", {
	  param: ['throttle', 'lazy'],
	  link: function( elem, value, name, extra ){
	    var tag = elem.tagName.toLowerCase();
	    var sign = tag;
	    if(sign === "input") { sign = elem.type || "text"; }
	    else if(sign === "textarea") { sign = "text"; }
	    if(typeof value === "string") { value = this.$expression(value); }

	    if( modelHandlers[sign] ) { return modelHandlers[sign].call(this, elem, value, extra); }
	    else if(tag === "input"){
	      return modelHandlers.text.call(this, elem, value, extra);
	    }
	  }
	});



	// binding <select>

	function initSelect( elem, parsed, extra){
	  var self = this;
	  var wc = this.$watch(parsed, function(newValue){
	    var children = elem.getElementsByTagName('option');
	    for(var i =0, len = children.length ; i < len; i++){
	      if(children[i].value == newValue){
	        elem.selectedIndex = i;
	        break;
	      }
	    }
	  }, STABLE);

	  function handler(){
	    parsed.set(self, this.value);
	    wc.last = this.value;
	    self.$update();
	  }

	  dom$3.on( elem, "change", handler );
	  
	  if(parsed.get(self) === undefined && elem.value){
	    parsed.set(self, elem.value);
	  }

	  return function destroy(){
	    dom$3.off(elem, "change", handler);
	  }
	}

	// input,textarea binding
	function initText(elem, parsed, extra){
	  var param = extra.param;
	  var throttle, lazy = param.lazy;

	  if('throttle' in param){
	    // <input throttle r-model>
	    if(param[throttle] === true){
	      throttle = 400;
	    }else{
	      throttle = parseInt(param.throttle , 10);
	    }
	  }

	  var self = this;
	  var wc = this.$watch(parsed, function(newValue){
	    if(elem.value !== newValue) { elem.value = newValue == null? "": "" + newValue; }
	  }, STABLE);

	  // @TODO to fixed event
	  var handler = function (ev){
	    var that = this;
	    if(ev.type==='cut' || ev.type==='paste'){
	      _$12.nextTick(function(){
	        var value = that.value;
	        parsed.set(self, value);
	        wc.last = value;
	        self.$update();
	      });
	    }else{
	        var value = that.value;
	        parsed.set(self, value);
	        wc.last = value;
	        self.$update();
	    }
	  };

	  if(throttle && !lazy){
	    var preHandle = handler, tid;
	    handler = _$12.throttle(handler, throttle);
	  }

	  if(hasInput === undefined){
	    hasInput = dom$3.msie !== 9 && "oninput" in document.createElement('input');
	  }

	  if(lazy){
	    dom$3.on(elem, 'change', handler);
	  }else{
	    if( hasInput){
	      elem.addEventListener("input", handler );
	    }else{
	      dom$3.on(elem, "paste keyup cut change", handler);
	    }
	  }
	  if(parsed.get(self) === undefined && elem.value){
	     parsed.set(self, elem.value);
	  }
	  return function (){
	    if(lazy) { return dom$3.off(elem, "change", handler); }
	    if( hasInput ){
	      elem.removeEventListener("input", handler );
	    }else{
	      dom$3.off(elem, "paste keyup cut change", handler);
	    }
	  }
	}


	// input:checkbox  binding

	function initCheckBox(elem, parsed){
	  var self = this;
	  var watcher = this.$watch(parsed, function(newValue){
	    dom$3.attr(elem, 'checked', !!newValue);
	  }, STABLE);

	  var handler = function handler(){
	    var value = this.checked;
	    parsed.set(self, value);
	    watcher.last = value;
	    self.$update();
	  };
	  if(parsed.set) { dom$3.on(elem, "change", handler); }

	  if(parsed.get(self) === undefined){
	    parsed.set(self, !!elem.checked);
	  }

	  return function destroy(){
	    if(parsed.set) { dom$3.off(elem, "change", handler); }
	  }
	}


	// input:radio binding

	function initRadio(elem, parsed){
	  var self = this;
	  var wc = this.$watch(parsed, function( newValue ){
	    if(newValue == elem.value) { elem.checked = true; }
	    else { elem.checked = false; }
	  }, STABLE);


	  var handler = function handler(){
	    var value = this.value;
	    parsed.set(self, value);
	    self.$update();
	  };
	  if(parsed.set) { dom$3.on(elem, "change", handler); }
	  // beacuse only after compile(init), the dom structrue is exsit. 
	  if(parsed.get(self) === undefined){
	    if(elem.checked) {
	      parsed.set(self, elem.value);
	    }
	  }

	  return function destroy(){
	    if(parsed.set) { dom$3.off(elem, "change", handler); }
	  }
	}

	var base = createCommonjsModule(function (module) {
	// Regular
	var _ = util;
	var dom = dom_1;
	var animate = animate_1;
	var Regular = Regular_1;
	var consts = _const;
	var namespaces = consts.NAMESPACE;
	var OPTIONS = consts.OPTIONS;
	var STABLE = OPTIONS.STABLE;
	var DEEP_STABLE = {deep: true, stable: true};








	module.exports = {
	// **warn**: class inteplation will override this directive 
	  'r-class': function(elem, value){

	    if(typeof value=== 'string'){
	      value = _.fixObjStr(value);
	    }
	    var isNotHtml = elem.namespaceURI && elem.namespaceURI !== namespaces.html;
	    this.$watch(value, function(nvalue){
	      var className = isNotHtml? elem.getAttribute('class'): elem.className;
	      className = ' '+ (className||'').replace(/\s+/g, ' ') +' ';
	      for(var i in nvalue) { if(nvalue.hasOwnProperty(i)){
	        className = className.replace(' ' + i + ' ',' ');
	        if(nvalue[i] === true){
	          className += i+' ';
	        }
	      } }
	      className = className.trim();
	      if(isNotHtml){
	        dom.attr(elem, 'class', className);
	      }else{
	        elem.className = className;
	      }
	    }, DEEP_STABLE);
	  },
	  // **warn**: style inteplation will override this directive 
	  'r-style': function(elem, value){
	    if(typeof value=== 'string'){
	      value = _.fixObjStr(value);
	    }
	    this.$watch(value, function(nvalue){
	      for(var i in nvalue) { if(nvalue.hasOwnProperty(i)){
	        dom.css(elem, i, nvalue[i]);
	      } }
	    },DEEP_STABLE);
	  },
	  // when expression is evaluate to true, the elem will add display:none
	  // Example: <div r-hide={{items.length > 0}}></div>
	  'r-hide': function(elem, value){
	    var preBool = null, compelete;
	    if( _.isExpr(value) || typeof value === "string"){
	      this.$watch(value, function(nvalue){
	        var bool = !!nvalue;
	        if(bool === preBool) { return; } 
	        preBool = bool;
	        if(bool){
	          if(elem.onleave){
	            compelete = elem.onleave(function(){
	              elem.style.display = "none";
	              compelete = null;
	            });
	          }else{
	            elem.style.display = "none";
	          }
	          
	        }else{
	          if(compelete) { compelete(); }
	          elem.style.display = "";
	          if(elem.onenter){
	            elem.onenter();
	          }
	        }
	      }, STABLE);
	    }else if(!!value){
	      elem.style.display = "none";
	    }
	  },
	  'r-html': function(elem, value){
	    this.$watch(value, function(nvalue){
	      nvalue = nvalue || "";
	      dom.html(elem, nvalue);
	    }, {force: true, stable: true});
	  },
	  'ref': {
	    accept: consts.COMPONENT_TYPE + consts.ELEMENT_TYPE,
	    link: function( elem, value ){
	      var refs = this.$refs || (this.$refs = {});
	      var cval;
	      if(_.isExpr(value)){
	        this.$watch(value, function(nval, oval){
	          cval = nval;
	          if(refs[oval] === elem) { refs[oval] = null; }
	          if(cval) { refs[cval] = elem; }
	        }, STABLE);
	      }else{
	        refs[cval = value] = elem;
	      }
	      return function(){
	        refs[cval] = null;
	      }
	    }
	  }
	};

	Regular.directive(module.exports);
	});

	var _$13 = util;
	var animate$1 = animate_1;
	var Regular$4 = Regular_1;


	var rSpace = /\s+/;
	var WHEN_COMMAND = "when";
	var EVENT_COMMAND = "on";

	/**
	 * Animation Plugin
	 * @param {Component} Component 
	 */


	function createSeed(type){

	  var steps = [], current = 0, callback = _$13.noop;
	  var key;

	  var out = {
	    type: type,
	    start: function(cb){
	      key = _$13.uid();
	      if(typeof cb === "function") { callback = cb; }
	      if(current> 0 ){
	        current = 0 ;
	      }else{
	        out.step();
	      }
	      return out.compelete;
	    },
	    compelete: function(){
	      key = null;
	      callback && callback();
	      callback = _$13.noop;
	      current = 0;
	    },
	    step: function(){
	      if(steps[current]) { steps[current ]( out.done.bind(out, key) ); }
	    },
	    done: function(pkey){
	      if(pkey !== key) { return; } // means the loop is down
	      if( current < steps.length - 1 ) {
	        current++;
	        out.step();
	      }else{
	        out.compelete();
	      }
	    },
	    push: function(step){
	      steps.push(step);
	    }
	  };

	  return out;
	}

	Regular$4._addProtoInheritCache("animation");


	// builtin animation
	Regular$4.animation({
	  "wait": function( step ){
	    var timeout = parseInt( step.param ) || 0;
	    return function(done){
	      // _.log("delay " + timeout)
	      setTimeout( done, timeout );
	    }
	  },
	  "class": function(step){
	    var tmp = step.param.split(","),
	      className = tmp[0] || "",
	      mode = parseInt(tmp[1]) || 1;

	    return function(done){
	      // _.log(className)
	      animate$1.startClassAnimate( step.element, className , done, mode );
	    }
	  },
	  "call": function(step){
	    var fn = this.$expression(step.param).get, self = this;
	    return function(done){
	      // _.log(step.param, 'call')
	      fn(self);
	      self.$update();
	      done();
	    }
	  },
	  "emit": function(step){
	    var param = step.param;
	    var tmp = param.split(","),
	      evt = tmp[0] || "",
	      args = tmp[1]? this.$expression(tmp[1]).get: null;

	    if(!evt) { throw Error("you shoud specified a eventname in emit command"); }

	    var self = this;
	    return function(done){
	      self.$emit(evt, args? args(self) : undefined);
	      done();
	    }
	  },
	  // style: left {10}px,
	  style: function(step){
	    var styles = {}, 
	      param = step.param,
	      pairs = param.split(","), valid;
	    pairs.forEach(function(pair){
	      pair = pair.trim();
	      if(pair){
	        var tmp = pair.split( rSpace ),
	          name = tmp.shift(),
	          value = tmp.join(" ");

	        if( !name || !value ) { throw Error("invalid style in command: style"); }
	        styles[name] = value;
	        valid = true;
	      }
	    });

	    return function(done){
	      if(valid){
	        animate$1.startStyleAnimate(step.element, styles, done);
	      }else{
	        done();
	      }
	    }
	  }
	});



	// hancdle the r-animation directive
	// el : the element to process
	// value: the directive value
	function processAnimate( element, value ){
	  var this$1 = this;

	  var Component = this.constructor;

	  if(_$13.isExpr(value)){
	    value = value.get(this);
	  }

	  value = value.trim();

	  var composites = value.split(";"), 
	    composite, context = this, seeds = [], seed, destroies = [], destroy,
	    command, param , current = 0, tmp, animator, self = this;

	  function reset( type ){
	    seed && seeds.push( seed );
	    seed = createSeed( type );
	  }

	  function whenCallback(start, value){
	    if( !!value ) { start(); }
	  }

	  function animationDestroy(element){
	    return function(){
	      element.onenter = null;
	      element.onleave = null;
	    } 
	  }

	  for( var i = 0, len = composites.length; i < len; i++ ){

	    composite = composites[i];
	    tmp = composite.split(":");
	    command = tmp[0] && tmp[0].trim();
	    param = tmp[1] && tmp[1].trim();

	    if( !command ) { continue; }

	    if( command === WHEN_COMMAND ){
	      reset("when");
	      this$1.$watch(param, whenCallback.bind( this$1, seed.start ) );
	      continue;
	    }

	    if( command === EVENT_COMMAND){
	      reset(param);
	      if( param === "leave" ){
	        element.onleave = seed.start;
	        destroies.push( animationDestroy(element) );
	      }else if( param === "enter" ){
	        element.onenter = seed.start;
	        destroies.push( animationDestroy(element) );
	      }else{
	        if( ("on" + param) in element){ // if dom have the event , we use dom event
	          destroies.push(this$1._handleEvent( element, param, seed.start ));
	        }else{ // otherwise, we use component event
	          this$1.$on(param, seed.start);
	          destroies.push(this$1.$off.bind(this$1, param, seed.start));
	        }
	      }
	      continue;
	    }

	    var animator =  Component.animation(command); 
	    if( animator && seed ){
	      seed.push(
	        animator.call(this$1,{
	          element: element,
	          done: seed.done,
	          param: param 
	        })
	      );
	    }else{
	      throw Error( animator? "you should start with `on` or `event` in animation" : ("undefined animator 【" + command +"】" ));
	    }
	  }

	  if(destroies.length){
	    return function(){
	      destroies.forEach(function(destroy){
	        destroy();
	      });
	    }
	  }
	}


	Regular$4.directive( "r-animation", processAnimate);
	Regular$4.directive( "r-anim", processAnimate);

	var Regular$5 = Regular_1;

	/**
	 * Timeout Module
	 * @param {Component} Component 
	 */
	function TimeoutModule(Component){

	  Component.implement({
	    /**
	     * just like setTimeout, but will enter digest automately
	     * @param  {Function} fn    
	     * @param  {Number}   delay 
	     * @return {Number}   timeoutid
	     */
	    $timeout: function(fn, delay){
	      delay = delay || 0;
	      return setTimeout(function(){
	        fn.call(this);
	        this.$update(); //enter digest
	      }.bind(this), delay);
	    },
	    /**
	     * just like setInterval, but will enter digest automately
	     * @param  {Function} fn    
	     * @param  {Number}   interval 
	     * @return {Number}   intervalid
	     */
	    $interval: function(fn, interval){
	      interval = interval || 1000/60;
	      return setInterval(function(){
	        fn.call(this);
	        this.$update(); //enter digest
	      }.bind(this), interval);
	    }
	  });
	}


	Regular$5.plugin('timeout', TimeoutModule);
	Regular$5.plugin('$timeout', TimeoutModule);

	var index$1 = createCommonjsModule(function (module) {
	var env$$1 =  env;
	var config = config$1; 
	var Regular = module.exports = Regular_1;
	var Parser = Regular.Parser;
	var Lexer = Regular.Lexer;

	if(env$$1.browser){
	    
	    
	    
	    Regular.dom = dom_1;
	}
	Regular.env = env$$1;
	Regular.util = util;
	Regular.parse = function(str, options){
	  options = options || {};

	  if(options.BEGIN || options.END){
	    if(options.BEGIN) { config.BEGIN = options.BEGIN; }
	    if(options.END) { config.END = options.END; }
	    Lexer.setup();
	  }
	  var ast = new Parser(str).parse();
	  return !options.stringify? ast : JSON.stringify(ast);
	};
	});

	var eventemitter2 = createCommonjsModule(function (module, exports) {
	/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	!function(undefined) {

	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;

	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }

	  function configure(conf) {
	    if (conf) {
	      this._conf = conf;

	      conf.delimiter && (this.delimiter = conf.delimiter);
	      this._events.maxListeners = conf.maxListeners !== undefined ? conf.maxListeners : defaultMaxListeners;
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);

	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    } else {
	      this._events.maxListeners = defaultMaxListeners;
	    }
	  }

	  function logPossibleMemoryLeak(count) {
	    console.error('(node) warning: possible EventEmitter memory ' +
	      'leak detected. %d listeners added. ' +
	      'Use emitter.setMaxListeners() to increase limit.',
	      count);

	    if (console.trace){
	      console.trace();
	    }
	  }

	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
	        typeLength = type.length, currentType = type[i], nextType = type[i+1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }

	    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
	          }
	        }
	        return listeners;
	      } else if(currentType === '**') {
	        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
	        if(endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }

	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if(branch === '*' || branch === '**') {
	              if(tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if(branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }

	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
	    }

	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i+1);
	    }

	    xxTree = tree['**'];
	    if(xxTree) {
	      if(i < typeLength) {
	        if(xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }

	        // Build arrays of matching next branches and others.
	        for(branch in xxTree) {
	          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if(branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i+2);
	            } else if(branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i+1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
	            }
	          }
	        }
	      } else if(xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if(xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }

	    return listeners;
	  }

	  function growListenerTree(type, listener) {
	    var this$1 = this;


	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for(var i = 0, len = type.length; i+1 < len; i++) {
	      if(type[i] === '**' && type[i+1] === '**') {
	        return;
	      }
	    }

	    var tree = this.listenerTree;
	    var name = type.shift();

	    while (name !== undefined) {

	      if (!tree[name]) {
	        tree[name] = {};
	      }

	      tree = tree[name];

	      if (type.length === 0) {

	        if (!tree._listeners) {
	          tree._listeners = listener;
	        }
	        else {
	          if (typeof tree._listeners === 'function') {
	            tree._listeners = [tree._listeners];
	          }

	          tree._listeners.push(listener);

	          if (
	            !tree._listeners.warned &&
	            this$1._events.maxListeners > 0 &&
	            tree._listeners.length > this$1._events.maxListeners
	          ) {
	            tree._listeners.warned = true;
	            logPossibleMemoryLeak(tree._listeners.length);
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }

	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.

	  EventEmitter.prototype.delimiter = '.';

	  EventEmitter.prototype.setMaxListeners = function(n) {
	    if (n !== undefined) {
	      this._events || init.call(this);
	      this._events.maxListeners = n;
	      if (!this._conf) { this._conf = {}; }
	      this._conf.maxListeners = n;
	    }
	  };

	  EventEmitter.prototype.event = '';

	  EventEmitter.prototype.once = function(event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };

	  EventEmitter.prototype.many = function(event, ttl, fn) {
	    var self = this;

	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }

	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }

	    listener._origin = fn;

	    this.on(event, listener);

	    return self;
	  };

	  EventEmitter.prototype.emit = function() {
	    var arguments$1 = arguments;
	    var this$1 = this;


	    this._events || init.call(this);

	    var type = arguments[0];

	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }

	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;

	    if (this._all && this._all.length) {
	      handler = this._all.slice();
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 0; j < al; j++) { args[j] = arguments$1[j]; }
	      }

	      for (i = 0, l = handler.length; i < l; i++) {
	        this$1.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this$1, type);
	          break;
	        case 2:
	          handler[i].call(this$1, type, arguments$1[1]);
	          break;
	        case 3:
	          handler[i].call(this$1, type, arguments$1[1], arguments$1[2]);
	          break;
	        default:
	          handler[i].apply(this$1, args);
	        }
	      }
	    }

	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	      if (typeof handler === 'function') {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler.call(this);
	          break;
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          args = new Array(al - 1);
	          for (j = 1; j < al; j++) { args[j - 1] = arguments$1[j]; }
	          handler.apply(this, args);
	        }
	        return true;
	      } else if (handler) {
	        // need to make copy of handlers because list can change in the middle
	        // of emit call
	        handler = handler.slice();
	      }
	    }

	    if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) { args[j - 1] = arguments$1[j]; }
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this$1.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this$1);
	          break;
	        case 2:
	          handler[i].call(this$1, arguments$1[1]);
	          break;
	        case 3:
	          handler[i].call(this$1, arguments$1[1], arguments$1[2]);
	          break;
	        default:
	          handler[i].apply(this$1, args);
	        }
	      }
	      return true;
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        throw arguments[1]; // Unhandled 'error' event
	      } else {
	        throw new Error("Uncaught, unspecified 'error' event.");
	      }
	      return false;
	    }

	    return !!this._all;
	  };

	  EventEmitter.prototype.emitAsync = function() {
	    var arguments$1 = arguments;
	    var this$1 = this;


	    this._events || init.call(this);

	    var type = arguments[0];

	    if (type === 'newListener' && !this.newListener) {
	        if (!this._events.newListener) { return Promise.resolve([false]); }
	    }

	    var promises= [];

	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;

	    if (this._all) {
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) { args[j] = arguments$1[j]; }
	      }
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this$1.event = type;
	        switch (al) {
	        case 1:
	          promises.push(this$1._all[i].call(this$1, type));
	          break;
	        case 2:
	          promises.push(this$1._all[i].call(this$1, type, arguments$1[1]));
	          break;
	        case 3:
	          promises.push(this$1._all[i].call(this$1, type, arguments$1[1], arguments$1[2]));
	          break;
	        default:
	          promises.push(this$1._all[i].apply(this$1, args));
	        }
	      }
	    }

	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }

	    if (typeof handler === 'function') {
	      this.event = type;
	      switch (al) {
	      case 1:
	        promises.push(handler.call(this));
	        break;
	      case 2:
	        promises.push(handler.call(this, arguments[1]));
	        break;
	      case 3:
	        promises.push(handler.call(this, arguments[1], arguments[2]));
	        break;
	      default:
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) { args[j - 1] = arguments$1[j]; }
	        promises.push(handler.apply(this, args));
	      }
	    } else if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) { args[j - 1] = arguments$1[j]; }
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this$1.event = type;
	        switch (al) {
	        case 1:
	          promises.push(handler[i].call(this$1));
	          break;
	        case 2:
	          promises.push(handler[i].call(this$1, arguments$1[1]));
	          break;
	        case 3:
	          promises.push(handler[i].call(this$1, arguments$1[1], arguments$1[2]));
	          break;
	        default:
	          promises.push(handler[i].apply(this$1, args));
	        }
	      }
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        return Promise.reject(arguments[1]); // Unhandled 'error' event
	      } else {
	        return Promise.reject("Uncaught, unspecified 'error' event.");
	      }
	    }

	    return Promise.all(promises);
	  };

	  EventEmitter.prototype.on = function(type, listener) {
	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }

	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);

	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);

	    if (this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }

	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    }
	    else {
	      if (typeof this._events[type] === 'function') {
	        // Change to array.
	        this._events[type] = [this._events[type]];
	      }

	      // If we've already got an array, just append.
	      this._events[type].push(listener);

	      // Check for listener leak
	      if (
	        !this._events[type].warned &&
	        this._events.maxListeners > 0 &&
	        this._events[type].length > this._events.maxListeners
	      ) {
	        this._events[type].warned = true;
	        logPossibleMemoryLeak(this._events[type].length);
	      }
	    }

	    return this;
	  };

	  EventEmitter.prototype.onAny = function(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }

	    if (!this._all) {
	      this._all = [];
	    }

	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };

	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	  EventEmitter.prototype.off = function(type, listener) {
	    var this$1 = this;

	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }

	    var handlers,leafs=[];

	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    }
	    else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) { return this; }
	      handlers = this._events[type];
	      leafs.push({_listeners:handlers});
	    }

	    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {

	        var position = -1;

	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener ||
	            (handlers[i].listener && handlers[i].listener === listener) ||
	            (handlers[i]._origin && handlers[i]._origin === listener)) {
	            position = i;
	            break;
	          }
	        }

	        if (position < 0) {
	          continue;
	        }

	        if(this$1.wildcard) {
	          leaf._listeners.splice(position, 1);
	        }
	        else {
	          this$1._events[type].splice(position, 1);
	        }

	        if (handlers.length === 0) {
	          if(this$1.wildcard) {
	            delete leaf._listeners;
	          }
	          else {
	            delete this$1._events[type];
	          }
	        }

	        this$1.emit("removeListener", type, listener);

	        return this$1;
	      }
	      else if (handlers === listener ||
	        (handlers.listener && handlers.listener === listener) ||
	        (handlers._origin && handlers._origin === listener)) {
	        if(this$1.wildcard) {
	          delete leaf._listeners;
	        }
	        else {
	          delete this$1._events[type];
	        }

	        this$1.emit("removeListener", type, listener);
	      }
	    }

	    function recursivelyGarbageCollect(root) {
	      if (root === undefined) {
	        return;
	      }
	      var keys = Object.keys(root);
	      for (var i in keys) {
	        var key = keys[i];
	        var obj = root[key];
	        if ((obj instanceof Function) || (typeof obj !== "object") || (obj === null))
	          { continue; }
	        if (Object.keys(obj).length > 0) {
	          recursivelyGarbageCollect(root[key]);
	        }
	        if (Object.keys(obj).length === 0) {
	          delete root[key];
	        }
	      }
	    }
	    recursivelyGarbageCollect(this.listenerTree);

	    return this;
	  };

	  EventEmitter.prototype.offAny = function(fn) {
	    var this$1 = this;

	    var i = 0, l = 0, fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++) {
	        if(fn === fns[i]) {
	          fns.splice(i, 1);
	          this$1.emit("removeListenerAny", fn);
	          return this$1;
	        }
	      }
	    } else {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++)
	        { this$1.emit("removeListenerAny", fns[i]); }
	      this._all = [];
	    }
	    return this;
	  };

	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

	  EventEmitter.prototype.removeAllListeners = function(type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }

	    if (this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

	      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    }
	    else if (this._events) {
	      this._events[type] = null;
	    }
	    return this;
	  };

	  EventEmitter.prototype.listeners = function(type) {
	    if (this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }

	    this._events || init.call(this);

	    if (!this._events[type]) { this._events[type] = []; }
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };

	  EventEmitter.prototype.listenerCount = function(type) {
	    return this.listeners(type).length;
	  };

	  EventEmitter.prototype.listenersAny = function() {

	    if(this._all) {
	      return this._all;
	    }
	    else {
	      return [];
	    }

	  };

	  if (true) {
	     // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    module.exports = EventEmitter;
	  }
	  else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	}();
	});

	/* eslint-disable guard-for-in */

	var ALWAYS_NOTIFY_KEY = '_(:з」∠)_';

	var Store = function Store( app ) {
		this._app = app;
		this._models = {};
		this._modelArray = [];
		this._state = {};
		this._subscribers = {};
		this._subscribers[ ALWAYS_NOTIFY_KEY ] = [];
	};
	Store.prototype.replaceState = function replaceState ( nextState ) {
		var models = this._models;
		this._state = nextState;
		for ( var i in nextState ) {
			if ( typeof models[ i ] !== 'undefined' ) {
				models[ i ].replaceState( nextState[ i ] );
			}
		}
		this.notifyViews();
	};
	Store.prototype.getState = function getState () {
		return this._state;
	};
	Store.prototype.registerModel = function registerModel ( name, model ) {
			var this$1 = this;

		this._models[ name ] = model;
		this._modelArray.push( model );
		this._state[ name ] = model.state;

		// auto subscribe model changes when added
		model.subscribe( function ( type, payload ) {
			this$1.notify( name, type, payload );
		} );
	};
	Store.prototype.registerActions = function registerActions ( actions ) {
		if ( this._actions ) {
			return console.error( 'actions already registered' );
		}
		this._actions = actions;
	};
	Store.prototype._get = function _get ( getterKey ) {
		return this._app._getters &&
			this._app._getters[ getterKey ] &&
			this._app._getters[ getterKey ]( this.getState() );
	};
	Store.prototype._commit = function _commit ( type, payload ) {
		var parts = type.split( '/' );
		var name = parts[0];
			var truetype = parts[1];

		var model = this._models[ name ];
		if ( model ) {
			return model.commit( truetype, payload );
		}
	};
	Store.prototype.dispatch = function dispatch ( type, payload ) {
		if ( !this._actions[ type ] ) {
			return console.error( ("action \"" + type + "\" is not found") );
		}
		return this._actions[ type ]( {
			get: this._get.bind( this ),
			commit: this._commit.bind( this ),
			dispatch: this.dispatch.bind( this ),
		}, payload );
	};
	Store.prototype.notify = function notify ( name, type, payload ) {
		var cbs = ( this._subscribers[ name ] || [] ).concat( this._subscribers[ ALWAYS_NOTIFY_KEY ] );
		var state = this._state;
		for ( var i = 0, len = cbs.length; i < len; i++ ) {
			var cb = cbs[ i ];
			cb( { type: (name + "/" + type), payload: payload }, state );
		}
	};
	Store.prototype.notifyViews = function notifyViews () {
			var this$1 = this;

		var cbs = [];
		for ( var i in this._subscribers ) {
			cbs = cbs.concat( this$1._subscribers[ i ] );
		}
		for ( var i$1 = 0, len = cbs.length; i$1 < len; i$1++ ) {
			var cb = cbs[ i$1 ];
			if ( cb._isFromView ) {
				cb();
			}
		}
	};
	Store.prototype.subscribe = function subscribe ( fn, names ) {
			var this$1 = this;

		if ( !names ) {
			this._subscribers[ ALWAYS_NOTIFY_KEY ].push( fn );
			return;
		}

		for ( var i = 0, len = names.length; i < len; i++ ) {
			var name = names[ i ];
			this$1._subscribers[ name ] = this$1._subscribers[ name ] || [];
			this$1._subscribers[ name ].push( fn );
		}
	};
	Store.prototype.toArray = function toArray () {
		return this._modelArray;
	};

	var Model = function Model( ref ) {
		if ( ref === void 0 ) ref = {};
		var state = ref.state; if ( state === void 0 ) state = {};
		var reducers = ref.reducers; if ( reducers === void 0 ) reducers = {};

		this._state = state;
		this._reducers = reducers;
		this._subscribers = [];
		this._committing = false;
	};

	var prototypeAccessors = { state: {} };
	prototypeAccessors.state.get = function () {
		return this._state;
	};
	prototypeAccessors.state.set = function ( v ) {
		throw new Error( 'cannot replace state directly' );
	};
	Model.prototype.replaceState = function replaceState ( nextState ) {
		this._state = nextState;
	};
	Model.prototype.watch = function watch () {

	};
	Model.prototype.subscribe = function subscribe ( fn ) {
		this._subscribers.push( fn );
	};
	Model.prototype.commit = function commit ( type, payload ) {
			var this$1 = this;

		if ( this._committing ) {
			return;
		}

		// invalid action
		if ( typeof type !== 'string' ) {
			return;
		}

		var reducers = this._reducers;
		var state = this._state;

		for ( var i in reducers ) {
			if ( type === i ) {
				var reducer = reducers[ i ];
				this$1._committing = true;
				reducer( state, payload );
				this$1._committing = false;
				// notify subscribers
				this$1.notify( type, payload );
				break;
			}
		}
	};
	Model.prototype.notify = function notify ( type, payload ) {
		var subscribers = this._subscribers;
		for ( var i = 0, len = subscribers.length; i < len; i++ ) {
			subscribers[ i ]( type, payload );
		}
	};

	Object.defineProperties( Model.prototype, prototypeAccessors );

	var PulginManager = function PulginManager( app ) {
		this._app = app;
	};
	PulginManager.prototype.register = function register ( plugin ) {
			var this$1 = this;

		this._app.once( 'before-start', function () {
			this$1.use( plugin );
		} );
	};
	PulginManager.prototype.use = function use ( plugin ) {
		var store = this._app._store;
		plugin( store );
	};

	var ViewManager = function ViewManager( app ) {
		var store = app._store;
		var Base = app._Base;
		Base.implement( {
			events: {
				$config: function $config() {
					var this$1 = this;

					// auto-subscribe
					var models = this.models;

					var update = function () {
						this$1.$update();
					};
					update._isFromView = true;

					store.subscribe( update, models );
				}
			},
			dispatch: function dispatch() {
				var args = [], len = arguments.length;
				while ( len-- ) args[ len ] = arguments[ len ];

				return store.dispatch.apply( store, args );
			}
		} );
	};

	var regularRouter = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
	  (global.regularRouter = factory());
	}(commonjsGlobal, (function () { 'use strict';

	function createCommonjsModule$$1(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var util = createCommonjsModule$$1(function (module) {
	var _ = module.exports = {};
	var slice = [].slice, o2str = ({}).toString;


	// merge o2's properties to Object o1. 
	_.extend = function(o1, o2, override){
	  for(var i in o2) { if(override || o1[i] === undefined){
	    o1[i] = o2[i];
	  } }
	  return o1;
	};



	_.slice = function(arr, index){
	  return slice.call(arr, index);
	};

	_.typeOf = function typeOf (o) {
	  return o == null ? String(o) : o2str.call(o).slice(8, -1).toLowerCase();
	};

	//strict eql
	_.eql = function(o1, o2){
	  var t1 = _.typeOf(o1), t2 = _.typeOf(o2);
	  if( t1 !== t2) { return false; }
	  if(t1 === 'object'){
	    var equal = true;
	    // only check the first's propertie
	    for(var i in o1){
	      if( o1[i] !== o2[i] ) { equal = false; }
	    }
	    return equal;
	  }
	  return o1 === o2;
	};


	// small emitter 
	_.emitable = (function(){
	  function norm(ev){
	    var eventAndNamespace = (ev||'').split(':');
	    return {event: eventAndNamespace[0], namespace: eventAndNamespace[1]}
	  }
	  var API = {
	    once: function(event, fn){
	      var callback = function(){
	        fn.apply(this, arguments);
	        this.off(event, callback);
	      };
	      return this.on(event, callback)
	    },
	    on: function(event, fn) {
	      var this$1 = this;

	      if(typeof event === 'object'){
	        for (var i in event) {
	          this$1.on(i, event[i]);
	        }
	        return this;
	      }
	      var ne = norm(event);
	      event=ne.event;
	      if(event && typeof fn === 'function' ){
	        var handles = this._handles || (this._handles = {}),
	          calls = handles[event] || (handles[event] = []);
	        fn._ns = ne.namespace;
	        calls.push(fn);
	      }
	      return this;
	    },
	    off: function(event, fn) {
	      var this$1 = this;

	      var ne = norm(event); event = ne.event;
	      if(!event || !this._handles) { this._handles = {}; }

	      var handles = this._handles , calls;

	      if (calls = handles[event]) {
	        if (!fn && !ne.namespace) {
	          handles[event] = [];
	        }else{
	          for (var i = 0, len = calls.length; i < len; i++) {
	            if ( (!fn || fn === calls[i]) && (!ne.namespace || calls[i]._ns === ne.namespace) ) {
	              calls.splice(i, 1);
	              return this$1;
	            }
	          }
	        }
	      }
	      return this;
	    },
	    emit: function(event){
	      var this$1 = this;

	      var ne = norm(event); event = ne.event;

	      var args = _.slice(arguments, 1),
	        handles = this._handles, calls;

	      if (!handles || !(calls = handles[event])) { return this; }
	      for (var i = 0, len = calls.length; i < len; i++) {
	        var fn = calls[i];
	        if( !ne.namespace || fn._ns === ne.namespace ) { fn.apply(this$1, args); }
	      }
	      return this;
	    }
	  };
	  return function(obj){
	      obj = typeof obj == "function" ? obj.prototype : obj;
	      return _.extend(obj, API)
	  }
	})();



	_.bind = function(fn, context){
	  return function(){
	    return fn.apply(context, arguments);
	  }
	};

	var rDbSlash = /\/+/g, // double slash
	  rEndSlash = /\/$/;    // end slash

	_.cleanPath = function (path){
	  return ("/" + path).replace( rDbSlash,"/" ).replace( rEndSlash, "" ) || "/";
	};

	// normalize the path
	function normalizePath(path) {
	  // means is from 
	  // (?:\:([\w-]+))?(?:\(([^\/]+?)\))|(\*{2,})|(\*(?!\*)))/g
	  var preIndex = 0;
	  var keys = [];
	  var index = 0;
	  var matches = "";

	  path = _.cleanPath(path);

	  var regStr = path
	    //  :id(capture)? | (capture)   |  ** | * 
	    .replace(/\:([\w-]+)(?:\(([^\/]+?)\))?|(?:\(([^\/]+)\))|(\*{2,})|(\*(?!\*))/g, 
	      function(all, key, keyformat, capture, mwild, swild, startAt) {
	        // move the uncaptured fragment in the path
	        if(startAt > preIndex) { matches += path.slice(preIndex, startAt); }
	        preIndex = startAt + all.length;
	        if( key ){
	          matches += "(" + key + ")";
	          keys.push(key);
	          return "("+( keyformat || "[\\w-]+")+")";
	        }
	        matches += "(" + index + ")";

	        keys.push( index++ );

	        if( capture ){
	           // sub capture detect
	          return "(" + capture +  ")";
	        } 
	        if(mwild) { return "(.*)"; }
	        if(swild) { return "([^\\/]*)"; }
	    });

	  if(preIndex !== path.length) { matches += path.slice(preIndex); }

	  return {
	    regexp: new RegExp("^" + regStr +"/?$"),
	    keys: keys,
	    matches: matches || path
	  }
	}

	_.log = function(msg, type){
	  typeof console !== "undefined" && console[type || "log"](msg);
	};

	_.isPromise = function( obj ){

	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

	};



	_.normalize = normalizePath;
	});

	var _$1 = util;



	function State$1(option){
	  this._states = {};
	  this._pending = false;
	  this.visited = false;
	  if(option) { this.config(option); }
	}


	//regexp cache
	State$1.rCache = {};

	_$1.extend( _$1.emitable( State$1 ), {
	  
	  state: function(stateName, config){
	    var this$1 = this;

	    if(_$1.typeOf(stateName) === "object"){
	      for(var i in stateName){
	        this$1.state(i, stateName[i]);
	      }
	      return this;
	    }
	    var current, next, nextName, states = this._states, i=0;

	    if( typeof stateName === "string" ) { stateName = stateName.split("."); }

	    var slen = stateName.length, current = this;
	    var stack = [];


	    do{
	      nextName = stateName[i];
	      next = states[nextName];
	      stack.push(nextName);
	      if(!next){
	        if(!config) { return; }
	        next = states[nextName] = new State$1();
	        _$1.extend(next, {
	          parent: current,
	          manager: current.manager || current,
	          name: stack.join("."),
	          currentName: nextName
	        });
	        current.hasNext = true;
	        next.configUrl();
	      }
	      current = next;
	      states = next._states;
	    }while((++i) < slen )

	    if(config){
	       next.config(config);
	       return this;
	    } else {
	      return current;
	    }
	  },

	  config: function(configure){
	    var this$1 = this;


	    configure = this._getConfig(configure);

	    for(var i in configure){
	      var prop = configure[i];
	      switch(i){
	        case "url": 
	          if(typeof prop === "string"){
	            this$1.url = prop;
	            this$1.configUrl();
	          }
	          break;
	        case "events": 
	          this$1.on(prop);
	          break;
	        default:
	          this$1[i] = prop;
	      }
	    }
	  },

	  // children override
	  _getConfig: function(configure){
	    return typeof configure === "function"? {enter: configure} : configure;
	  },

	  //from url 

	  configUrl: function(){
	    var url = "" , base = this, currentUrl;
	    var _watchedParam = [];

	    while( base ){

	      url = (typeof base.url === "string" ? base.url: (base.currentName || "")) + "/" + url;

	      // means absolute;
	      if(url.indexOf("^/") === 0) {
	        url = url.slice(1);
	        break;
	      }
	      base = base.parent;
	    }
	    this.pattern = _$1.cleanPath("/" + url);
	    var pathAndQuery = this.pattern.split("?");
	    this.pattern = pathAndQuery[0];
	    // some Query we need watched

	    _$1.extend(this, _$1.normalize(this.pattern), true);
	  },
	  encode: function(param){
	    var state = this;
	    param = param || {};
	    
	    var matched = "%";

	    var url = state.matches.replace(/\(([\w-]+)\)/g, function(all, capture){
	      var sec = param[capture] || "";
	      matched+= capture + "%";
	      return sec;
	    }) + "?";

	    // remained is the query, we need concat them after url as query
	    for(var i in param) {
	      if( matched.indexOf("%"+i+"%") === -1) { url += i + "=" + param[i] + "&"; }
	    }
	    return _$1.cleanPath( url.replace(/(?:\?|&)$/,"") )
	  },
	  decode: function( path ){
	    var matched = this.regexp.exec(path),
	      keys = this.keys;

	    if(matched){

	      var param = {};
	      for(var i =0,len=keys.length;i<len;i++){
	        param[keys[i]] = matched[i+1]; 
	      }
	      return param;
	    }else{
	      return false;
	    }
	  },
	  // by default, all lifecycle is permitted

	  async: function(){
	    throw new Error( 'please use option.async instead')
	  }

	});


	var state = State$1;

	var browser$1 = createCommonjsModule$$1(function (module) {
	var win = window, 
	  doc = document;

	var b = module.exports = {
	  hash: "onhashchange" in win && (!doc.documentMode || doc.documentMode > 7),
	  history: win.history && "onpopstate" in win,
	  location: win.location,
	  getHref: function(node){
	    return "href" in node ? node.getAttribute("href", 2) : node.getAttribute("href");
	  },
	  on: "addEventListener" in win ?  // IE10 attachEvent is not working when binding the onpopstate, so we need check addEventLister first
	      function(node,type,cb){return node.addEventListener( type, cb )}
	    : function(node,type,cb){return node.attachEvent( "on" + type, cb )},
	    
	  off: "removeEventListener" in win ? 
	      function(node,type,cb){return node.removeEventListener( type, cb )}
	    : function(node,type,cb){return node.detachEvent( "on" + type, cb )}
	};
	});

	// MIT
	// Thx Backbone.js 1.1.2  and https://github.com/cowboy/jquery-hashchange/blob/master/jquery.ba-hashchange.js
	// for iframe patches in old ie.

	var browser = browser$1;
	var _$2 = util;


	// the mode const
	var QUIRK = 3;
	var HASH = 1;
	var HISTORY = 2;



	// extract History for test
	// resolve the conficlt with the Native History
	function Histery$1(options){
	  options = options || {};

	  // Trick from backbone.history for anchor-faked testcase 
	  this.location = options.location || browser.location;

	  // mode config, you can pass absolute mode (just for test);
	  this.html5 = options.html5;
	  this.mode = options.html5 && browser.history ? HISTORY: HASH; 
	  if( !browser.hash ) { this.mode = QUIRK; }
	  if(options.mode) { this.mode = options.mode; }

	  // hash prefix , used for hash or quirk mode
	  this.prefix = "#" + (options.prefix || "") ;
	  this.rPrefix = new RegExp(this.prefix + '(.*)$');
	  this.interval = options.interval || 66;

	  // the root regexp for remove the root for the path. used in History mode
	  this.root = options.root ||  "/" ;
	  this.rRoot = new RegExp("^" +  this.root);

	  this._fixInitState();

	  this.autolink = options.autolink!==false;

	  this.curPath = undefined;
	}

	_$2.extend( _$2.emitable(Histery$1), {
	  // check the 
	  start: function(){
	    var path = this.getPath();
	    this._checkPath = _$2.bind(this.checkPath, this);

	    if( this.isStart ) { return; }
	    this.isStart = true;

	    if(this.mode === QUIRK){
	      this._fixHashProbelm(path); 
	    }

	    switch ( this.mode ){
	      case HASH: 
	        browser.on(window, "hashchange", this._checkPath); 
	        break;
	      case HISTORY:
	        browser.on(window, "popstate", this._checkPath);
	        break;
	      case QUIRK:
	        this._checkLoop();
	    }
	    // event delegate
	    this.autolink && this._autolink();

	    this.curPath = path;

	    this.emit("change", path);
	  },
	  // the history teardown
	  stop: function(){

	    browser.off(window, 'hashchange', this._checkPath);  
	    browser.off(window, 'popstate', this._checkPath);  
	    clearTimeout(this.tid);
	    this.isStart = false;
	    this._checkPath = null;
	  },
	  // get the path modify
	  checkPath: function(ev){

	    var path = this.getPath(), curPath = this.curPath;

	    //for oldIE hash history issue
	    if(path === curPath && this.iframe){
	      path = this.getPath(this.iframe.location);
	    }

	    if( path !== curPath ) {
	      this.iframe && this.nav(path, {silent: true});
	      this.curPath = path;
	      this.emit('change', path);
	    }
	  },
	  // get the current path
	  getPath: function(location){
	    var location = location || this.location, tmp;
	    if( this.mode !== HISTORY ){
	      tmp = location.href.match(this.rPrefix);
	      return tmp && tmp[1]? tmp[1]: "";

	    }else{
	      return _$2.cleanPath(( location.pathname + location.search || "" ).replace( this.rRoot, "/" ))
	    }
	  },

	  nav: function(to, options ){

	    var iframe = this.iframe;

	    options = options || {};

	    to = _$2.cleanPath(to);

	    if(this.curPath == to) { return; }

	    // pushState wont trigger the checkPath
	    // but hashchange will
	    // so we need set curPath before to forbit the CheckPath
	    this.curPath = to;

	    // 3 or 1 is matched
	    if( this.mode !== HISTORY ){
	      this._setHash(this.location, to, options.replace);
	      if( iframe && this.getPath(iframe.location) !== to ){
	        if(!options.replace) { iframe.document.open().close(); }
	        this._setHash(this.iframe.location, to, options.replace);
	      }
	    }else{
	      history[options.replace? 'replaceState': 'pushState']( {}, options.title || "" , _$2.cleanPath( this.root + to ) );
	    }

	    if( !options.silent ) { this.emit('change', to); }
	  },
	  _autolink: function(){
	    if(this.mode!==HISTORY) { return; }
	    // only in html5 mode, the autolink is works
	    // if(this.mode !== 2) return;
	    var prefix = this.prefix, self = this;
	    browser.on( document.body, "click", function(ev){

	      var target = ev.target || ev.srcElement;
	      if( target.tagName.toLowerCase() !== "a" ) { return; }
	      var tmp = (browser.getHref(target)||"").match(self.rPrefix);
	      var hash = tmp && tmp[1]? tmp[1]: "";

	      if(!hash) { return; }
	      
	      ev.preventDefault && ev.preventDefault();
	      self.nav( hash );
	      return (ev.returnValue = false);
	    } );
	  },
	  _setHash: function(location, path, replace){
	    var href = location.href.replace(/(javascript:|#).*$/, '');
	    if (replace){
	      location.replace(href + this.prefix+ path);
	    }
	    else { location.hash = this.prefix+ path; }
	  },
	  // for browser that not support onhashchange
	  _checkLoop: function(){
	    var self = this; 
	    this.tid = setTimeout( function(){
	      self._checkPath();
	      self._checkLoop();
	    }, this.interval );
	  },
	  // if we use real url in hash env( browser no history popstate support)
	  // or we use hash in html5supoort mode (when paste url in other url)
	  // then , histery should repara it
	  _fixInitState: function(){
	    var pathname = _$2.cleanPath(this.location.pathname), hash, hashInPathName;

	    // dont support history popstate but config the html5 mode
	    if( this.mode !== HISTORY && this.html5){

	      hashInPathName = pathname.replace(this.rRoot, "");
	      if(hashInPathName) { this.location.replace(this.root + this.prefix + hashInPathName); }

	    }else if( this.mode === HISTORY /* && pathname === this.root*/){

	      hash = this.location.hash.replace(this.prefix, "");
	      if(hash) { history.replaceState({}, document.title, _$2.cleanPath(this.root + hash)); }

	    }
	  },
	  // Thanks for backbone.history and https://github.com/cowboy/jquery-hashchange/blob/master/jquery.ba-hashchange.js
	  // for helping stateman fixing the oldie hash history issues when with iframe hack
	  _fixHashProbelm: function(path){
	    var iframe = document.createElement('iframe'), body = document.body;
	    iframe.src = 'javascript:;';
	    iframe.style.display = 'none';
	    iframe.tabIndex = -1;
	    iframe.title = "";
	    this.iframe = body.insertBefore(iframe, body.firstChild).contentWindow;
	    this.iframe.document.open().close();
	    this.iframe.location.hash = '#' + path;
	  }
	  
	});





	var histery = Histery$1;

	var State = state;
	var Histery = histery;
	var _ = util;
	var baseTitle = document.title;
	var stateFn = State.prototype.state;


	function StateMan$1(options){

	  if(this instanceof StateMan$1 === false){ return new StateMan$1(options)}
	  options = options || {};
	  // if(options.history) this.history = options.history;

	  this._states = {};
	  this._stashCallback = [];
	  this.strict = options.strict;
	  this.current = this.active = this;
	  this.title = options.title;
	  this.on("end", function(){
	    var cur = this.current,title;
	    while( cur ){
	      title = cur.title;
	      if(title) { break; } 
	      cur = cur.parent;
	    }
	    document.title = typeof title === "function"? cur.title(): String( title || baseTitle ) ;
	  });

	}


	_.extend( _.emitable( StateMan$1 ), {
	    // keep blank
	    name: '',

	    state: function(stateName, config){

	      var active = this.active;
	      if(typeof stateName === "string" && active){
	         stateName = stateName.replace("~", active.name);
	         if(active.parent) { stateName = stateName.replace("^", active.parent.name || ""); }
	      }
	      // ^ represent current.parent
	      // ~ represent  current
	      // only 
	      return stateFn.apply(this, arguments);

	    },
	    start: function(options){

	      if( !this.history ) { this.history = new Histery(options); } 
	      if( !this.history.isStart ){
	        this.history.on("change", _.bind(this._afterPathChange, this));
	        this.history.start();
	      } 
	      return this;

	    },
	    stop: function(){
	      this.history.stop();
	    },
	    // @TODO direct go the point state
	    go: function(state$$1, option, callback){
	      option = option || {};
	      if(typeof state$$1 === "string") { state$$1 = this.state(state$$1); }

	      if(!state$$1) { return; }

	      if(typeof option === "function"){
	        callback = option;
	        option = {};
	      }

	      if(option.encode !== false){
	        var url = state$$1.encode(option.param);
	        option.path = url;
	        this.nav(url, {silent: true, replace: option.replace});
	      }

	      this._go(state$$1, option, callback);

	      return this;
	    },
	    nav: function(url, options, callback){
	      if(typeof options === "function"){
	        callback = options;
	        options = {};
	      }
	      options = options || {};

	      options.path = url;

	      this.history.nav( url, _.extend({silent: true}, options));
	      if(!options.silent) { this._afterPathChange( _.cleanPath(url) , options , callback); }

	      return this;
	    },
	    decode: function(path){

	      var pathAndQuery = path.split("?");
	      var query = this._findQuery(pathAndQuery[1]);
	      path = pathAndQuery[0];
	      var state$$1 = this._findState(this, path);
	      if(state$$1) { _.extend(state$$1.param, query); }
	      return state$$1;

	    },
	    encode: function(stateName, param){
	      var state$$1 = this.state(stateName);
	      return state$$1? state$$1.encode(param) : '';
	    },
	    // notify specify state
	    // check the active statename whether to match the passed condition (stateName and param)
	    is: function(stateName, param, isStrict){
	      if(!stateName) { return false; }
	      var stateName = (stateName.name || stateName);
	      var current = this.current, currentName = current.name;
	      var matchPath = isStrict? currentName === stateName : (currentName + ".").indexOf(stateName + ".")===0;
	      return matchPath && (!param || _.eql(param, this.param)); 
	    },
	    // after pathchange changed
	    // @TODO: afterPathChange need based on decode
	    _afterPathChange: function(path, options ,callback){

	      this.emit("history:change", path);

	      var found = this.decode(path);

	      options = options || {};

	      options.path = path;

	      if(!found){
	        // loc.nav("$default", {silent: true})
	        return this._notfound(options);
	      }

	      options.param = found.param;

	      this._go( found, options, callback );
	    },
	    _notfound: function(options){

	      // var $notfound = this.state("$notfound");

	      // if( $notfound ) this._go($notfound, options);

	      return this.emit("notfound", options);
	    },
	    // goto the state with some option
	    _go: function(state$$1, option, callback){

	      var over;

	      // if(typeof state === "string") state = this.state(state);

	      // if(!state) return _.log("destination is not defined")

	      if(state$$1.hasNext && this.strict) { return this._notfound({name: state$$1.name}); }

	      // not touch the end in previous transtion

	      // if( this.pending ){
	      //   var pendingCurrent = this.pending.current;
	      //   this.pending.stop();
	      //   _.log("naving to [" + pendingCurrent.name + "] will be stoped, trying to ["+state.name+"] now");
	      // }
	      // if(this.active !== this.current){
	      //   // we need return
	      //   _.log("naving to [" + this.current.name + "] will be stoped, trying to ["+state.name+"] now");
	      //   this.current = this.active;
	      //   // back to before
	      // }
	      option.param = option.param || {};

	      var current = this.current,
	        baseState = this._findBase(current, state$$1),
	        prepath = this.path,
	        self = this;


	      if( typeof callback === "function" ) { this._stashCallback.push(callback); }
	      // if we done the navigating when start
	      function done(success){
	        over = true;
	        if( success !== false ) { self.emit("end"); }
	        self.pending = null;
	        self._popStash(option);
	      }
	      
	      option.previous = current;
	      option.current = state$$1;

	      if(current !== state$$1){
	        option.stop = function(){
	          done(false);
	          self.nav( prepath? prepath: "/", {silent:true});
	        };
	        self.emit("begin", option);

	      }
	      // if we stop it in 'begin' listener
	      if(over === true) { return; }

	      if(current !== state$$1){
	        // option as transition object.

	        option.phase = 'permission';
	        this._walk(current, state$$1, option, true , _.bind( function( notRejected ){

	          if( notRejected===false ){
	            // if reject in callForPermission, we will return to old 
	            prepath && this.nav( prepath, {silent: true});

	            done(false, 2);

	            return this.emit('abort', option);

	          } 

	          // stop previous pending.
	          if(this.pending) { this.pending.stop(); } 
	          this.pending = option;
	          this.path = option.path;
	          this.current = option.current;
	          this.param = option.param;
	          this.previous = option.previous;
	          option.phase = 'navigation';
	          this._walk(current, state$$1, option, false, _.bind(function( notRejected ){

	            if( notRejected === false ){
	              this.current = this.active;
	              done(false);
	              return this.emit('abort', option);
	            }


	            this.active = option.current;

	            option.phase = 'completion';
	            return done()

	          }, this) );

	        }, this) );

	      }else{
	        self._checkQueryAndParam(baseState, option);
	        this.pending = null;
	        done();
	      }
	      
	    },
	    _popStash: function(option){
	      var this$1 = this;


	      var stash = this._stashCallback, len = stash.length;

	      this._stashCallback = [];

	      if(!len) { return; }

	      for(var i = 0; i < len; i++){
	        stash[i].call(this$1, option);
	      }
	    },

	    // the transition logic  Used in Both canLeave canEnter && leave enter LifeCycle

	    _walk: function(from, to, option, callForPermit , callback){

	      // nothing -> app.state
	      var parent = this._findBase(from , to);


	      option.basckward = true;
	      this._transit( from, parent, option, callForPermit , _.bind( function( notRejected ){

	        if( notRejected === false ) { return callback( notRejected ); }

	        // only actual transiton need update base state;
	        if( !callForPermit )  { this._checkQueryAndParam(parent, option); }

	        option.basckward = false;
	        this._transit( parent, to, option, callForPermit,  callback);

	      }, this) );

	    },

	    _transit: function(from, to, option, callForPermit, callback){
	      //  touch the ending
	      if( from === to ) { return callback(); }

	      var back = from.name.length > to.name.length;
	      var method = back? 'leave': 'enter';
	      var applied;

	      // use canEnter to detect permission
	      if( callForPermit) { method = 'can' + method.replace(/^\w/, function(a){ return a.toUpperCase() }); }

	      var loop = _.bind(function( notRejected ){


	        // stop transition or touch the end
	        if( applied === to || notRejected === false ) { return callback(notRejected); }

	        if( !applied ) {

	          applied = back? from : this._computeNext(from, to);

	        }else{

	          applied = this._computeNext(applied, to);
	        }

	        if( (back && applied === to) || !applied ){ return callback( notRejected ) }

	        this._moveOn( applied, method, option, loop );

	      }, this);

	      loop();
	    },

	    _moveOn: function( applied, method, option, callback){

	      var isDone = false;
	      var isPending = false;

	      option.async = function(){

	        isPending = true;

	        return done;
	      };

	      function done( notRejected ){
	        if( isDone ) { return; }
	        isPending = false;
	        isDone = true;
	        callback( notRejected );
	      }

	      

	      option.stop = function(){
	        done( false );
	      };


	      this.active = applied;
	      var retValue = applied[method]? applied[method]( option ): true;

	      if(method === 'enter') { applied.visited = true; }
	      // promise
	      // need breadk , if we call option.stop first;

	      if( _.isPromise(retValue) ){

	        return this._wrapPromise(retValue, done); 

	      }

	      // if haven't call option.async yet
	      if( !isPending ) { done( retValue ); }

	    },


	    _wrapPromise: function( promise, next ){

	      return promise.then( next, function(){next(false);}) ;

	    },

	    _computeNext: function( from, to ){

	      var fname = from.name;
	      var tname = to.name;

	      var tsplit = tname.split('.');
	      var fsplit = fname.split('.');

	      var tlen = tsplit.length;
	      var flen = fsplit.length;

	      if(fname === '') { flen = 0; }
	      if(tname === '') { tlen = 0; }

	      if( flen < tlen ){
	        fsplit[flen] = tsplit[flen];
	      }else{
	        fsplit.pop();
	      }

	      return this.state(fsplit.join('.'))

	    },

	    _findQuery: function(querystr){

	      var queries = querystr && querystr.split("&"), query= {};
	      if(queries){
	        var len = queries.length;
	        var query = {};
	        for(var i =0; i< len; i++){
	          var tmp = queries[i].split("=");
	          query[tmp[0]] = tmp[1];
	        }
	      }
	      return query;

	    },
	    _findState: function(state$$1, path){
	      var this$1 = this;

	      var states = state$$1._states, found, param;

	      // leaf-state has the high priority upon branch-state
	      if(state$$1.hasNext){
	        for(var i in states) { if(states.hasOwnProperty(i)){
	          found = this$1._findState( states[i], path );
	          if( found ) { return found; }
	        } }
	      }
	      // in strict mode only leaf can be touched
	      // if all children is don. will try it self
	      param = state$$1.regexp && state$$1.decode(path);
	      if(param){
	        state$$1.param = param;
	        return state$$1;
	      }else{
	        return false;
	      }
	    },
	    // find the same branch;
	    _findBase: function(now, before){

	      if(!now || !before || now == this || before == this) { return this; }
	      var np = now, bp = before, tmp;
	      while(np && bp){
	        tmp = bp;
	        while(tmp){
	          if(np === tmp) { return tmp; }
	          tmp = tmp.parent;
	        }
	        np = np.parent;
	      }
	    },
	    // check the query and Param
	    _checkQueryAndParam: function(baseState, options){

	      var from = baseState;
	      while( from !== this ){
	        from.update && from.update(options);
	        from = from.parent;
	      }

	    }

	}, true);



	var stateman = StateMan$1;

	var StateMan = stateman;
	StateMan.Histery = histery;
	StateMan.util = util;
	StateMan.State = state;

	var index = StateMan;

	// import CircularJSON from '../utils/circular-json';

	var view = function (Component) {
		var RouterView = Component.extend( {
			name: 'router-view',
			template: "\n\t\t\t<i ref=\"v\"></i>\n\t\t",
			config: function config() {
				this._commentInserted = false;

				var $router = this.$router;
				var name = this.data.name || 'default';

				$router.emit( 'add-router-view', {
					phase: this.$root.__phase__,
					key: name,
					value: this
				} );

				// console.log( '>', name, CircularJSON.parse( CircularJSON.stringify( $router.current ) ) );

				this.$mute();
			},
			init: function init() {
				if( !this._comment ) {
					this._comment = document.createComment( 'router-view' );
				}
			},
			clear: function clear() {
				if( this._prevcomponent ) {
					this._prevcomponent.$inject( false );
					this._prevcomponent.destroy();
				}
			},
			render: function render( component ) {
				var comment = this._comment;
				if ( !this._commentInserted ) {
					insertAfter( comment, this.$refs.v );
					this._commentInserted = true;
				}

				if ( this.$refs.v && this.$refs.v.parentNode ) {
					this.$refs.v.parentNode.removeChild( this.$refs.v );
					delete this.$refs.v;
				}

				if ( !component ) {
					// this.clear();
					return;
				}
				if ( comment.parentNode ) {
					component.$inject( comment, 'after' );
				}

				this._prevcomponent = component;
			}
		} );
	};

	function insertAfter( node, refer ) {
		var next = refer.nextSibling;

		if( next ){
			next.parentNode.insertBefore( node, next );
		} else {
			refer.parentNode.appendChild( node );
		}
	}

	var link = function (Regular) {
		Regular.extend({
			name: 'router-link',
			template: "\n\t\t\t<a href=\"{ to }\">{#inc this.$body}</a>\n\t\t"
		});
	};

	// maybe Regular or extended from Regular, either is ok
	var _Component;

	var setCtor = function (Component) {
		_Component = Component;
	};

	var getCtor = function () {
		return _Component;
	};

	function each( obj, fn ) {
		var keys = Object.keys( obj );
		for ( var i = 0, len = keys.length; i < len; i++ ) {
			var key = keys[ i ];
			fn( obj[ key ], key, obj );
		}
	}

	var id = 0;
	function walk( obj, fn, name ) {
		each( obj, function (v) {
			var currentName = v.name || ("annoymous_" + (id++));
			var path = name ? (name + "." + currentName) : currentName;
			fn( v, path );
			if ( v.children ) {
				walk( v.children, fn, path );
			}
		} );
	}

	function digestComponentDeps( routes ) {
		var Component = getCtor();
		var dirty = false;
		var ttl = 20;

		// handle components deps
		function walkComponents( extendOptions ) {
			// first and no deps
			if ( !extendOptions.components && !extendOptions._Ctor ) {
				extendOptions._Ctor = Component.extend( extendOptions );
				return;
			}

			var cps = extendOptions.components;

			// deps are ready
			var isReady = true;
			for ( var i in cps ) {
				if ( !cps[ i ]._Ctor ) {
					isReady = false;
					break;
				}
			}

			if ( isReady ) {
				var Ctor = Component.extend( extendOptions );
				// register component on Ctor
				for ( var i$1 in cps ) {
					Ctor.component( i$1, cps[ i$1 ]._Ctor );
				}
				extendOptions._Ctor = Ctor;
				return;
			}

			// if exists deps, and deps are not ready, mark as dirty, wait for next digest
			dirty = true;

			for ( var i$2 in cps ) {
				walkComponents( cps[ i$2 ] );
			}
		}

		function digestOne() {
			// reset
			dirty = false;

			walk( routes, function( route ) {
				var components = route.components || {};
				// combine
				if ( route.component ) {
					components[ 'default' ] = route.component;
				}
				for ( var i in components ) {
					walkComponents( components[ i ] );
				}
			} );

			ttl--;

			if ( !ttl ) {
				// error
				throw new Error( "components dependencies parse failed" );
			}

			if ( dirty && ttl ) {
				// next digest
				digestOne();
			}
		}

		digestOne();
	}

	var checkPurview = function ( e, cmd, components, cb ) {
		var done = e.async();
		var current = e.current;
		var go = e.go;

		var len = Object.keys( components ).length;

		function next() {
			len--;

			if( len === 0 ) {
				done();
				cb && cb();
			}
		}

		for ( var i in components ) {
			var component = components[ i ];
			var canTransition = component.route && component.route[ cmd ];
			if ( !canTransition ) {
				next();
			} else {
				canTransition( {
					route: current,
					redirect: go,
					next: next
				} );
			}
		}
	};

	var Router = function Router( options ) {
		// directly call
		if ( !( this instanceof Router ) ) {
			setCtor( options );
			return;
		}

		// new
		this._options = options;
	};
	Router.prototype.start = function start ( selector ) {
		var rootNode =
			( selector && document.querySelector( selector ) ) ||
			document.body;
		var Component = getCtor();

		if ( !Component ) {
			throw new Error( 'regular-router not initialized yet' );
		}

		// make stateman avaiable for all Regular instances
		var stateman = new index();
		Component.implement({
			$router: stateman
		});

		// register helper components
		Component.use( view );
		Component.use( link );

		// get routes from options.routes
		var ref = this._options;
			var routes = ref.routes;

		// flat
		var routeMap = {};
		walk( routes, function( route, name ) {
			if ( !~name.indexOf( '.' ) ) {
				route.isRootRoute = true;
			}
			routeMap[ name ] = route;
		} );

		// digest components dependencies
		digestComponentDeps( routes );

		var routerViewStack = {};
		stateman.on( {
			'add-router-view': function( ref ) {
					var phase = ref.phase;
					var key = ref.key;
					var value = ref.value;

				routerViewStack[ phase ] = routerViewStack[ phase ] || {};
				routerViewStack[ phase ][ key ] = value;
			},
			// 'purge-router-view': function( { phase } ) {
			// routerViewStack[ phase ] = {};
			// }
		} );

		// transform routes
		var transformedRoutes = {};
		var loop = function ( name ) {
			var route = routeMap[ name ];
			var parentName = name.split( '.' ).slice( 0, -1 ).join( '.' );
			var component = route.component;
			var components = route.components || {};
			var CtorMap = {};

			// combine
			if ( !components[ 'default' ] && component ) {
				components[ 'default' ] = component;
			}

			transformedRoutes[ name ] = {
				url: route.url,
				update: function update( e ) {
					// reuse, do nothing
				},
				enter: function enter( e ) {
					console.log( '@@route', name, 'enter' );
					var current = e.current;

					var instanceMap = {};

					// initialize component ctors
					CtorMap[ name ] = {};

					for ( var i in components ) {
						var cp = components[ i ];
						CtorMap[ name ][ i ] = cp._Ctor;
					}

					// get instances, and routerViews will be mounted
					for ( var i$1 in CtorMap[ name ] ) {
						instanceMap[ i$1 ] = new CtorMap[ name ][ i$1 ]({
							__phase__: name,
							__view__: i$1
						});
					}

					var routerViews = routerViewStack[ parentName ];

					// render router-view
					if ( routerViews ) {
						for ( var i$2 in routerViews ) {
							var routerView = routerViews[ i$2 ];
							routerView.render( instanceMap[ i$2 ] );
						}
					}

					if ( route.isRootRoute ) {
						instanceMap[ 'default' ] && instanceMap[ 'default' ].$inject( rootNode );
					}
				},
				canEnter: function canEnter( e ) {
					checkPurview( e, 'canEnter', components );
				},
				canLeave: function canLeave( e ) {
					checkPurview( e, 'canLeave', components );
				},
				leave: function leave( e ) {
					console.log( '@@route', name, 'leave' );

					var current = e.current;
					var routerViews = routerViewStack[ parentName ];

					// clean router-view
					if ( routerViews ) {
						for ( var i in routerViews ) {
							var routerView = routerViews[ i ];
							routerView.clear();
						}
					}
				}
			};
		};

			for ( var name in routeMap ) { loop( name ); }

		stateman.state( transformedRoutes );

		stateman.start( {
			prefix: '!'
		} );
	};

	return Router;

	})));
	});

	/* eslint-disable guard-for-in */

	var RouterManager = function RouterManager( app ) {
		var this$1 = this;

		this._app = app;

		var Base = app._Base;
		Base.use( regularRouter );
		app.once( 'before-start', function () {
			var getters = app._getters;
			var options = this$1._options || {};
			var routes = options.routes;
			walk( routes, function (component) {
				var computed = component.computed;
				var loop = function ( i ) {
					var c = computed[ i ];
					if ( typeof c === 'string' ) {
						if ( getters[ c ] ) {
							computed[ i ] = function () {
								// replaceState will replace state reference
								// so get state in realtime when computes
								var state = app._store.getState();
								return getters[ c ]( state );
							};
						} else {
							delete computed[ i ];
						}
					}
				};

				for ( var i in computed ) loop( i );
			} );
		} );
	};
	RouterManager.prototype.set = function set ( options ) {
		this._options = options;
	};
	RouterManager.prototype.start = function start ( selector ) {
		var router = new regularRouter( this._options );
		this._app.$router = router;
		router.start( selector );
	};

	function walk( routes, fn ) {
		for ( var i = 0, len = routes.length; i < len; i++ ) {
			var route = routes[ i ];

			var components = route.components || {};
			if ( route.component ) {
				components.default = route.component;
			}
			walkComponents( components, fn );
			if ( route.children ) {
				walk( route.children, fn );
			}
		}
	}

	function walkComponents( components, fn ) {
		for ( var i in components ) {
			var component = components[ i ];
			fn( component );
			if ( component.components ) {
				walkComponents( component.components, fn );
			}
		}
	}

	// Credits: vue/vuex

	var devtoolsPlugin = function () { return function (store) {
		var devtools = window.__REO_DEVTOOLS_HOOK__;

		if ( !devtools ) {
			return;
		}

		store._devtools = devtools;

		devtools.emit( 'reo:init', store );
		devtools.on( 'reo:travel-to-state', function (state) {
			store.replaceState( state );
		} );

		store.subscribe( function ( action, state ) {
			devtools.emit( 'reo:reducer', action, state );
		} );
	}; };

	var App = (function (EventEmitter) {
		function App() {
			EventEmitter.call(this);
			this._isRunning = false;
			this.$store = this._store = new Store( this );
			// extend from regular, so we can isolate from other apps
			this._Base = index$1.extend();
			this.managers = {
				plugin: new PulginManager( this ),
				view: new ViewManager( this ),
				router: new RouterManager( this )
			};
			this.use( devtoolsPlugin() );
		}

		if ( EventEmitter ) App.__proto__ = EventEmitter;
		App.prototype = Object.create( EventEmitter && EventEmitter.prototype );
		App.prototype.constructor = App;
		App.prototype.use = function use ( plugin ) {
			this.managers.plugin.register( plugin );
		};
		App.prototype.model = function model ( ref ) {
			if ( ref === void 0 ) ref = {};
			var name = ref.name;
			var state = ref.state; if ( state === void 0 ) state = {};
			var reducers = ref.reducers; if ( reducers === void 0 ) reducers = {};

			if ( !name ) {
				throw new Error( 'please name your model' );
			}

			var model = new Model( { state: state, reducers: reducers } );
			this._store.registerModel( name, model );

			return model;
		};
		App.prototype.actions = function actions ( actions ) {
			this._store.registerActions( actions );
		};
		App.prototype.getters = function getters ( getters ) {
			if ( getters === void 0 ) getters = {};

			if ( this._getters ) {
				throw new Error( 'getters can only be called one time' );
			}
			this._getters = getters;
		};
		App.prototype.router = function router ( options ) {
			this.managers.router.set( options );
		};
		App.prototype.start = function start ( selector ) {
			if ( this._isRunning ) {
				return;
			}

			this._isRunning = true;

			this.emit( 'before-start' );
			this.managers.router.start( selector );
			this.emit( 'after-start' );
		};

		return App;
	}(eventemitter2));

	var index = function () {
		return new App();
	};

	return index;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3).setImmediate))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(4).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
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
		setCode: function setCode(_ref6, payload) {
			var commit = _ref6.commit;

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

	var _Tabs = __webpack_require__(12);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		computed: {
			tabsSource: 'tabsSource',
			selectedTabKey: 'selectedTabKey',
			logs: 'consoleMergedLogs',
			isTabsOpened: 'isTabsOpened',
			currentCode: 'currentCode'
		},
		components: {
			Sidebar: _Sidebar2.default,
			Tabs: _Tabs2.default,
			Console: _Console2.default,
			Code: _Code2.default
		},
		template: '\n\t\t<div class="app">\n\t\t\t<div class="sidebar-wrapper">\n\t\t\t\t<Sidebar></Sidebar>\n\t\t\t</div>\n\n\t\t\t<div class="content">\n\t\t\t\t<div class="main">\n\t\t\t\t\t<iframe ref="v" src="./preview.html" frameborder="0"></iframe>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="tabs-wrapper { isTabsOpened ? \'open\' : \'\' }">\n\t\t\t\t\t<div class="tabs-header">\n\t\t\t\t\t\t<Tabs\n\t\t\t\t\t\t\tsource="{ tabsSource }"\n\t\t\t\t\t\t\tselected="{ selectedTabKey }"\n\t\t\t\t\t\t\ton-change="{ this.dispatch( \'switchTab\', $event ) }"\n\t\t\t\t\t\t></Tabs>\n\t\t\t\t\t\t<div class="tabs-header__toolbar">\n\t\t\t\t\t\t\t{#if selectedTabKey === \'console\'}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'clearLogs\' ) }">&#xe603;</span>\n\t\t\t\t\t\t\t{/if}\n\n\t\t\t\t\t\t\t{#if isTabsOpened}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'toggleTabs\' ) }">&#xe65a;</span>\n\t\t\t\t\t\t\t{#else}\n\t\t\t\t\t\t\t<span class="iconfont tabs-header__toolbar_icon" on-click="{ this.dispatch( \'toggleTabs\' ) }">&#xe65c;</span>\n\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tabs-body">\n\t\t\t\t\t\t{#if selectedTabKey === \'console\'}\n\t\t\t\t\t\t<Console logs="{ logs }"></Console>\n\t\t\t\t\t\t{#elseif selectedTabKey === \'code\'}\n\t\t\t\t\t\t<Code code="{ currentCode }"></Code>\n\t\t\t\t\t\t{/if}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',
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

	var _highlight = __webpack_require__(29);

	var _highlight2 = _interopRequireDefault(_highlight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		template: '\n\t\t<div class="code" ref="v"></div>\n\t',
		init: function init() {
			var _this = this;

			this.$watch('code', function (code) {
				var $code = _this.$refs.code;
				$code.innerHTML = _highlight2.default.highlightAuto(code).value;
			});
		}
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

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var hljs = __webpack_require__(30);

	hljs.registerLanguage('1c', __webpack_require__(31));
	hljs.registerLanguage('abnf', __webpack_require__(32));
	hljs.registerLanguage('accesslog', __webpack_require__(33));
	hljs.registerLanguage('actionscript', __webpack_require__(34));
	hljs.registerLanguage('ada', __webpack_require__(35));
	hljs.registerLanguage('apache', __webpack_require__(36));
	hljs.registerLanguage('applescript', __webpack_require__(37));
	hljs.registerLanguage('cpp', __webpack_require__(38));
	hljs.registerLanguage('arduino', __webpack_require__(39));
	hljs.registerLanguage('armasm', __webpack_require__(40));
	hljs.registerLanguage('xml', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/xml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('asciidoc', __webpack_require__(41));
	hljs.registerLanguage('aspectj', __webpack_require__(42));
	hljs.registerLanguage('autohotkey', __webpack_require__(43));
	hljs.registerLanguage('autoit', __webpack_require__(44));
	hljs.registerLanguage('avrasm', __webpack_require__(45));
	hljs.registerLanguage('awk', __webpack_require__(46));
	hljs.registerLanguage('axapta', __webpack_require__(47));
	hljs.registerLanguage('bash', __webpack_require__(48));
	hljs.registerLanguage('basic', __webpack_require__(49));
	hljs.registerLanguage('bnf', __webpack_require__(50));
	hljs.registerLanguage('brainfuck', __webpack_require__(51));
	hljs.registerLanguage('cal', __webpack_require__(52));
	hljs.registerLanguage('capnproto', __webpack_require__(53));
	hljs.registerLanguage('ceylon', __webpack_require__(54));
	hljs.registerLanguage('clean', __webpack_require__(55));
	hljs.registerLanguage('clojure', __webpack_require__(56));
	hljs.registerLanguage('clojure-repl', __webpack_require__(57));
	hljs.registerLanguage('cmake', __webpack_require__(58));
	hljs.registerLanguage('coffeescript', __webpack_require__(59));
	hljs.registerLanguage('coq', __webpack_require__(60));
	hljs.registerLanguage('cos', __webpack_require__(61));
	hljs.registerLanguage('crmsh', __webpack_require__(62));
	hljs.registerLanguage('crystal', __webpack_require__(63));
	hljs.registerLanguage('cs', __webpack_require__(64));
	hljs.registerLanguage('csp', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/csp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('css', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('d', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/d\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('markdown', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/markdown\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dart', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('delphi', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/delphi\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('diff', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/diff\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('django', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/django\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dns', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dns\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dockerfile', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dockerfile\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dos', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dos\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dsconfig', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dsconfig\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dts', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('dust', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/dust\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('ebnf', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/ebnf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('elixir', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/elixir\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('elm', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/elm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('ruby', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/ruby\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('erb', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/erb\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('erlang-repl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/erlang-repl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('erlang', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/erlang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('excel', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/excel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('fix', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/fix\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('flix', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/flix\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('fortran', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/fortran\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('fsharp', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/fsharp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('gams', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/gams\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('gauss', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/gauss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('gcode', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/gcode\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('gherkin', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/gherkin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('glsl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/glsl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('go', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/go\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('golo', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/golo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('gradle', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/gradle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('groovy', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/groovy\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('haml', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/haml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('handlebars', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/handlebars\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('haskell', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/haskell\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('haxe', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/haxe\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('hsp', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/hsp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('htmlbars', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/htmlbars\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('http', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/http\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('inform7', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/inform7\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('ini', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/ini\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('irpf90', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/irpf90\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('java', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/java\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('javascript', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/javascript\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('json', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('julia', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/julia\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('kotlin', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/kotlin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('lasso', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/lasso\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('ldif', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/ldif\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('less', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('lisp', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/lisp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('livecodeserver', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/livecodeserver\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('livescript', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/livescript\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('lsl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/lsl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('lua', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/lua\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('makefile', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/makefile\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('mathematica', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/mathematica\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('matlab', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/matlab\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('maxima', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/maxima\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('mel', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/mel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('mercury', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/mercury\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('mipsasm', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/mipsasm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('mizar', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/mizar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('perl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/perl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('mojolicious', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/mojolicious\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('monkey', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/monkey\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('moonscript', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/moonscript\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('nginx', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/nginx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('nimrod', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/nimrod\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('nix', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/nix\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('nsis', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/nsis\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('objectivec', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/objectivec\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('ocaml', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/ocaml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('openscad', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/openscad\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('oxygene', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/oxygene\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('parser3', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/parser3\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('pf', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/pf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('php', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/php\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('pony', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/pony\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('powershell', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/powershell\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('processing', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/processing\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('profile', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/profile\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('prolog', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/prolog\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('protobuf', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/protobuf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('puppet', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/puppet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('purebasic', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/purebasic\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('python', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/python\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('q', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/q\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('qml', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/qml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('r', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/r\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('rib', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/rib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('roboconf', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/roboconf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('rsl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/rsl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('ruleslanguage', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/ruleslanguage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('rust', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/rust\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('scala', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/scala\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('scheme', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/scheme\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('scilab', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/scilab\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('scss', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('smali', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/smali\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('smalltalk', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/smalltalk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('sml', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/sml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('sqf', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/sqf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('sql', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/sql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('stan', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/stan\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('stata', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/stata\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('step21', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/step21\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('stylus', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/stylus\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('subunit', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/subunit\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('swift', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/swift\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('taggerscript', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/taggerscript\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('yaml', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/yaml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('tap', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/tap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('tcl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/tcl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('tex', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/tex\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('thrift', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/thrift\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('tp', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/tp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('twig', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/twig\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('typescript', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/typescript\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('vala', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/vala\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('vbnet', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/vbnet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('vbscript', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/vbscript\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('vbscript-html', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/vbscript-html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('verilog', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/verilog\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('vhdl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/vhdl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('vim', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/vim\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('x86asm', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/x86asm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('xl', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/xl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('xquery', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/xquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	hljs.registerLanguage('zephir', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./languages/zephir\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

	module.exports = hljs;

/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports) {

	module.exports = function(hljs){
	  var IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
	  var OneS_KEYWORDS = 'возврат дата для если и или иначе иначеесли исключение конецесли ' +
	    'конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем ' +
	    'перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл ' +
	    'число экспорт';
	  var OneS_BUILT_IN = 'ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ' +
	    'ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос ' +
	    'восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц ' +
	    'датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации ' +
	    'запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр ' +
	    'значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера ' +
	    'имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы ' +
	    'кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби ' +
	    'конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс ' +
	    'максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ ' +
	    'назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби ' +
	    'началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели ' +
	    'номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки ' +
	    'основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально ' +
	    'отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята ' +
	    'получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта ' +
	    'получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации ' +
	    'пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц ' +
	    'разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына ' +
	    'рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп ' +
	    'сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить ' +
	    'стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента ' +
	    'счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты ' +
	    'установитьтана установитьтапо фиксшаблон формат цел шаблон';
	  var DQUOTE =  {begin: '""'};
	  var STR_START = {
	      className: 'string',
	      begin: '"', end: '"|$',
	      contains: [DQUOTE]
	    };
	  var STR_CONT = {
	    className: 'string',
	    begin: '\\|', end: '"|$',
	    contains: [DQUOTE]
	  };

	  return {
	    case_insensitive: true,
	    lexemes: IDENT_RE_RU,
	    keywords: {keyword: OneS_KEYWORDS, built_in: OneS_BUILT_IN},
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      STR_START, STR_CONT,
	      {
	        className: 'function',
	        begin: '(процедура|функция)', end: '$',
	        lexemes: IDENT_RE_RU,
	        keywords: 'процедура функция',
	        contains: [
	          {
	            begin: 'экспорт', endsWithParent: true,
	            lexemes: IDENT_RE_RU,
	            keywords: 'экспорт',
	            contains: [hljs.C_LINE_COMMENT_MODE]
	          },
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            lexemes: IDENT_RE_RU,
	            keywords: 'знач',
	            contains: [STR_START, STR_CONT]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE_RU})
	        ]
	      },
	      {className: 'meta', begin: '#', end: '$'},
	      {className: 'number', begin: '\'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})\''} // date
	    ]
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    var regexes = {
	        ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
	        unexpectedChars: "[!@#$^&',?+~`|:]"
	    };

	    var keywords = [
	        "ALPHA",
	        "BIT",
	        "CHAR",
	        "CR",
	        "CRLF",
	        "CTL",
	        "DIGIT",
	        "DQUOTE",
	        "HEXDIG",
	        "HTAB",
	        "LF",
	        "LWSP",
	        "OCTET",
	        "SP",
	        "VCHAR",
	        "WSP"
	    ];

	    var commentMode = hljs.COMMENT(";", "$");

	    var terminalBinaryMode = {
	        className: "symbol",
	        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
	    };

	    var terminalDecimalMode = {
	        className: "symbol",
	        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
	    };

	    var terminalHexadecimalMode = {
	        className: "symbol",
	        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/,
	    };

	    var caseSensitivityIndicatorMode = {
	        className: "symbol",
	        begin: /%[si]/
	    };

	    var ruleDeclarationMode = {
	        begin: regexes.ruleDeclaration + '\\s*=',
	        returnBegin: true,
	        end: /=/,
	        relevance: 0,
	        contains: [{className: "attribute", begin: regexes.ruleDeclaration}]
	    };

	    return {
	      illegal: regexes.unexpectedChars,
	      keywords: keywords.join(" "),
	      contains: [
	          ruleDeclarationMode,
	          commentMode,
	          terminalBinaryMode,
	          terminalDecimalMode,
	          terminalHexadecimalMode,
	          caseSensitivityIndicatorMode,
	          hljs.QUOTE_STRING_MODE,
	          hljs.NUMBER_MODE
	      ]
	    };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      // IP
	      {
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },
	      // Other numbers
	      {
	        className: 'number',
	        begin: '\\b\\d+\\b',
	        relevance: 0
	      },
	      // Requests
	      {
	        className: 'string',
	        begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)', end: '"',
	        keywords: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE',
	        illegal: '\\n',
	        relevance: 10
	      },
	      // Dates
	      {
	        className: 'string',
	        begin: /\[/, end: /\]/,
	        illegal: '\\n'
	      },
	      // Strings
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n'
	      }
	    ]
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  var AS3_REST_ARG_MODE = {
	    className: 'rest_arg',
	    begin: '[.]{3}', end: IDENT_RE,
	    relevance: 10
	  };

	  return {
	    aliases: ['as'],
	    keywords: {
	      keyword: 'as break case catch class const continue default delete do dynamic each ' +
	        'else extends final finally for function get if implements import in include ' +
	        'instanceof interface internal is namespace native new override package private ' +
	        'protected public return set static super switch this throw try typeof use var void ' +
	        'while with',
	      literal: 'true false null undefined'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'package', end: '{',
	        contains: [hljs.TITLE_MODE]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      {
	        className: 'meta',
	        beginKeywords: 'import include', end: ';',
	        keywords: {'meta-keyword': 'import include'}
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              AS3_REST_ARG_MODE
	            ]
	          },
	          {
	            begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
	          }
	        ]
	      },
	      hljs.METHOD_GUARD
	    ],
	    illegal: /#/
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = // We try to support full Ada2012
	//
	// We highlight all appearances of types, keywords, literals (string, char, number, bool)
	// and titles (user defined function/procedure/package)
	// CSS classes are set accordingly
	//
	// Languages causing problems for language detection:
	// xml (broken by Foo : Bar type), elm (broken by Foo : Bar type), vbscript-html (broken by body keyword)
	// sql (ada default.txt has a lot of sql keywords)

	function(hljs) {
	    // Regular expression for Ada numeric literals.
	    // stolen form the VHDL highlighter

	    // Decimal literal:
	    var INTEGER_RE = '\\d(_|\\d)*';
	    var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
	    var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';

	    // Based literal:
	    var BASED_INTEGER_RE = '\\w+';
	    var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

	    var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

	    // Identifier regex
	    var ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';

	    // bad chars, only allowed in literals
	    var BAD_CHARS = '[]{}%#\'\"'

	    // Ada doesn't have block comments, only line comments
	    var COMMENTS = hljs.COMMENT('--', '$');

	    // variable declarations of the form
	    // Foo : Bar := Baz;
	    // where only Bar will be highlighted
	    var VAR_DECLS = {
	        // TODO: These spaces are not required by the Ada syntax
	        // however, I have yet to see handwritten Ada code where
	        // someone does not put spaces around :
	        begin: '\\s+:\\s+', end: '\\s*(:=|;|\\)|=>|$)',
	        // endsWithParent: true,
	        // returnBegin: true,
	        illegal: BAD_CHARS,
	        contains: [
	            {
	                // workaround to avoid highlighting
	                // named loops and declare blocks
	                beginKeywords: 'loop for declare others',
	                endsParent: true,
	            },
	            {
	                // properly highlight all modifiers
	                className: 'keyword',
	                beginKeywords: 'not null constant access function procedure in out aliased exception'
	            },
	            {
	                className: 'type',
	                begin: ID_REGEX,
	                endsParent: true,
	                relevance: 0,
	            }
	        ]
	    };

	    return {
	        case_insensitive: true,
	        keywords: {
	            keyword:
	                'abort else new return abs elsif not reverse abstract end ' +
	                'accept entry select access exception of separate aliased exit or some ' +
	                'all others subtype and for out synchronized array function overriding ' +
	                'at tagged generic package task begin goto pragma terminate ' +
	                'body private then if procedure type case in protected constant interface ' +
	                'is raise use declare range delay limited record when delta loop rem while ' +
	                'digits renames with do mod requeue xor',
	            literal:
	                'True False',
	        },
	        contains: [
	            COMMENTS,
	            // strings "foobar"
	            {
	                className: 'string',
	                begin: /"/, end: /"/,
	                contains: [{begin: /""/, relevance: 0}]
	            },
	            // characters ''
	            {
	                // character literals always contain one char
	                className: 'string',
	                begin: /'.'/
	            },
	            {
	                // number literals
	                className: 'number',
	                begin: NUMBER_RE,
	                relevance: 0
	            },
	            {
	                // Attributes
	                className: 'symbol',
	                begin: "'" + ID_REGEX,
	            },
	            {
	                // package definition, maybe inside generic
	                className: 'title',
	                begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?', end: '(is|$)',
	                keywords: 'package body',
	                excludeBegin: true,
	                excludeEnd: true,
	                illegal: BAD_CHARS
	            },
	            {
	                // function/procedure declaration/definition
	                // maybe inside generic
	                begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+', end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
	                keywords: 'overriding function procedure with is renames return',
	                // we need to re-match the 'function' keyword, so that
	                // the title mode below matches only exactly once
	                returnBegin: true,
	                contains:
	                [
	                    COMMENTS,
	                    {
	                        // name of the function/procedure
	                        className: 'title',
	                        begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
	                        end: '(\\(|\\s+|$)',
	                        excludeBegin: true,
	                        excludeEnd: true,
	                        illegal: BAD_CHARS
	                    },
	                    // 'self'
	                    // // parameter types
	                    VAR_DECLS,
	                    {
	                        // return type
	                        className: 'type',
	                        begin: '\\breturn\\s+', end: '(\\s+|;|$)',
	                        keywords: 'return',
	                        excludeBegin: true,
	                        excludeEnd: true,
	                        // we are done with functions
	                        endsParent: true,
	                        illegal: BAD_CHARS

	                    },
	                ]
	            },
	            {
	                // new type declarations
	                // maybe inside generic
	                className: 'type',
	                begin: '\\b(sub)?type\\s+', end: '\\s+',
	                keywords: 'type',
	                excludeBegin: true,
	                illegal: BAD_CHARS
	            },

	            // see comment above the definition
	            VAR_DECLS,

	            // no markup
	            // relevance boosters for small snippets
	            // {begin: '\\s*=>\\s*'},
	            // {begin: '\\s*:=\\s*'},
	            // {begin: '\\s+:=\\s+'},
	        ]
	    };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
	  return {
	    aliases: ['apacheconf'],
	    case_insensitive: true,
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {className: 'section', begin: '</?', end: '>'},
	      {
	        className: 'attribute',
	        begin: /\w+/,
	        relevance: 0,
	        // keywords aren’t needed for highlighting per se, they only boost relevance
	        // for a very generally defined mode (starts with a word, ends with line-end
	        keywords: {
	          nomarkup:
	            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
	            'sethandler errordocument loadmodule options header listen serverroot ' +
	            'servername'
	        },
	        starts: {
	          end: /$/,
	          relevance: 0,
	          keywords: {
	            literal: 'on off all'
	          },
	          contains: [
	            {
	              className: 'meta',
	              begin: '\\s\\[', end: '\\]$'
	            },
	            {
	              className: 'variable',
	              begin: '[\\$%]\\{', end: '\\}',
	              contains: ['self', NUMBER]
	            },
	            NUMBER,
	            hljs.QUOTE_STRING_MODE
	          ]
	        }
	      }
	    ],
	    illegal: /\S/
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: ['self', hljs.C_NUMBER_MODE, STRING]
	  };
	  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');
	  var COMMENT_MODE_2 = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      contains: ['self', COMMENT_MODE_1] //allow nesting
	    }
	  );
	  var COMMENTS = [
	    COMMENT_MODE_1,
	    COMMENT_MODE_2,
	    hljs.HASH_COMMENT_MODE
	  ];

	  return {
	    aliases: ['osascript'],
	    keywords: {
	      keyword:
	        'about above after against and around as at back before beginning ' +
	        'behind below beneath beside between but by considering ' +
	        'contain contains continue copy div does eighth else end equal ' +
	        'equals error every exit fifth first for fourth from front ' +
	        'get given global if ignoring in into is it its last local me ' +
	        'middle mod my ninth not of on onto or over prop property put ref ' +
	        'reference repeat returning script second set seventh since ' +
	        'sixth some tell tenth that the|0 then third through thru ' +
	        'timeout times to transaction try until where while whose with ' +
	        'without',
	      literal:
	        'AppleScript false linefeed return pi quote result space tab true',
	      built_in:
	        'alias application boolean class constant date file integer list ' +
	        'number real record string text ' +
	        'activate beep count delay launch log offset read round ' +
	        'run say summarize write ' +
	        'character characters contents day frontmost id item length ' +
	        'month name paragraph paragraphs rest reverse running time version ' +
	        'weekday word words year'
	    },
	    contains: [
	      STRING,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'built_in',
	        begin:
	          '\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +
	          'mount volume|path to|(close|open for) access|(get|set) eof|' +
	          'current date|do shell script|get volume settings|random number|' +
	          'set volume|system attribute|system info|time to GMT|' +
	          '(load|run|store) script|scripting components|' +
	          'ASCII (character|number)|localized string|' +
	          'choose (application|color|file|file name|' +
	          'folder|from list|remote application|URL)|' +
	          'display (alert|dialog))\\b|^\\s*return\\b'
	      },
	      {
	        className: 'literal',
	        begin:
	          '\\b(text item delimiters|current application|missing value)\\b'
	      },
	      {
	        className: 'keyword',
	        begin:
	          '\\b(apart from|aside from|instead of|out of|greater than|' +
	          "isn't|(doesn't|does not) (equal|come before|come after|contain)|" +
	          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +
	          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +
	          'POSIX path|(date|time) string|quoted form)\\b'
	      },
	      {
	        beginKeywords: 'on',
	        illegal: '[${=;\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      }
	    ].concat(COMMENTS),
	    illegal: '//|->|=>|\\[\\['
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var CPP_PRIMITIVE_TYPES = {
	    className: 'keyword',
	    begin: '\\b[a-z\\d_]*_t\\b'
	  };

	  var STRINGS = {
	    className: 'string',
	    variants: [
	      {
	        begin: '(u8?|U)?L?"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '(u8?|U)?R"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '\'\\\\?.', end: '\'',
	        illegal: '.'
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: 'number',
	    variants: [
	      { begin: '\\b(0b[01\']+)' },
	      { begin: '\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' },
	      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
	    ],
	    relevance: 0
	  };

	  var PREPROCESSOR =       {
	    className: 'meta',
	    begin: /#\s*[a-z]+\b/, end: /$/,
	    keywords: {
	      'meta-keyword':
	        'if else elif endif define undef warning error line ' +
	        'pragma ifdef ifndef include'
	    },
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      hljs.inherit(STRINGS, {className: 'meta-string'}),
	      {
	        className: 'meta-string',
	        begin: '<', end: '>',
	        illegal: '\\n',
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var FUNCTION_TITLE = hljs.IDENT_RE + '\\s*\\(';

	  var CPP_KEYWORDS = {
	    keyword: 'int float while private char catch import module export virtual operator sizeof ' +
	      'dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace ' +
	      'unsigned long volatile static protected bool template mutable if public friend ' +
	      'do goto auto void enum else break extern using class asm case typeid ' +
	      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
	      'switch continue inline delete alignof constexpr decltype ' +
	      'noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary ' +
	      'atomic_bool atomic_char atomic_schar ' +
	      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
	      'atomic_ullong new throw return',
	    built_in: 'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
	      'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' +
	      'unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos ' +
	      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
	      'fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
	      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
	      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
	      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
	      'vfprintf vprintf vsprintf endl initializer_list unique_ptr',
	    literal: 'true false nullptr NULL'
	  };

	  var EXPRESSION_CONTAINS = [
	    CPP_PRIMITIVE_TYPES,
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    NUMBERS,
	    STRINGS
	  ];

	  return {
	    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
	    keywords: CPP_KEYWORDS,
	    illegal: '</',
	    contains: EXPRESSION_CONTAINS.concat([
	      PREPROCESSOR,
	      {
	        begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
	        keywords: CPP_KEYWORDS,
	        contains: ['self', CPP_PRIMITIVE_TYPES]
	      },
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: CPP_KEYWORDS
	      },
	      {
	        // This mode covers expression context where we can't expect a function
	        // definition and shouldn't highlight anything that looks like one:
	        // `return some()`, `else if()`, `(x*sum(1, 2))`
	        variants: [
	          {begin: /=/, end: /;/},
	          {begin: /\(/, end: /\)/},
	          {beginKeywords: 'new throw return else', end: /;/}
	        ],
	        keywords: CPP_KEYWORDS,
	        contains: EXPRESSION_CONTAINS.concat([
	          {
	            begin: /\(/, end: /\)/,
	            keywords: CPP_KEYWORDS,
	            contains: EXPRESSION_CONTAINS.concat(['self']),
	            relevance: 0
	          }
	        ]),
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + hljs.IDENT_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
	        returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: CPP_KEYWORDS,
	        illegal: /[^\w\s\*&]/,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: CPP_KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRINGS,
	              NUMBERS,
	              CPP_PRIMITIVE_TYPES
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          PREPROCESSOR
	        ]
	      }
	    ]),
	    exports: {
	      preprocessor: PREPROCESSOR,
	      strings: STRINGS,
	      keywords: CPP_KEYWORDS
	    }
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var CPP = hljs.getLanguage('cpp').exports;
		return {
	    keywords: {
	      keyword:
	        'boolean byte word string String array ' + CPP.keywords.keyword,
	      built_in:
	        'setup loop while catch for if do goto try switch case else ' +
	        'default break continue return ' +
	        'KeyboardController MouseController SoftwareSerial ' +
	        'EthernetServer EthernetClient LiquidCrystal ' +
	        'RobotControl GSMVoiceCall EthernetUDP EsploraTFT ' +
	        'HttpClient RobotMotor WiFiClient GSMScanner ' +
	        'FileSystem Scheduler GSMServer YunClient YunServer ' +
	        'IPAddress GSMClient GSMModem Keyboard Ethernet ' +
	        'Console GSMBand Esplora Stepper Process ' +
	        'WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage ' +
	        'Client Server GSMPIN FileIO Bridge Serial ' +
	        'EEPROM Stream Mouse Audio Servo File Task ' +
	        'GPRS WiFi Wire TFT GSM SPI SD ' +
	        'runShellCommandAsynchronously analogWriteResolution ' +
	        'retrieveCallingNumber printFirmwareVersion ' +
	        'analogReadResolution sendDigitalPortPair ' +
	        'noListenOnLocalhost readJoystickButton setFirmwareVersion ' +
	        'readJoystickSwitch scrollDisplayRight getVoiceCallStatus ' +
	        'scrollDisplayLeft writeMicroseconds delayMicroseconds ' +
	        'beginTransmission getSignalStrength runAsynchronously ' +
	        'getAsynchronously listenOnLocalhost getCurrentCarrier ' +
	        'readAccelerometer messageAvailable sendDigitalPorts ' +
	        'lineFollowConfig countryNameWrite runShellCommand ' +
	        'readStringUntil rewindDirectory readTemperature ' +
	        'setClockDivider readLightSensor endTransmission ' +
	        'analogReference detachInterrupt countryNameRead ' +
	        'attachInterrupt encryptionType readBytesUntil ' +
	        'robotNameWrite readMicrophone robotNameRead cityNameWrite ' +
	        'userNameWrite readJoystickY readJoystickX mouseReleased ' +
	        'openNextFile scanNetworks noInterrupts digitalWrite ' +
	        'beginSpeaker mousePressed isActionDone mouseDragged ' +
	        'displayLogos noAutoscroll addParameter remoteNumber ' +
	        'getModifiers keyboardRead userNameRead waitContinue ' +
	        'processInput parseCommand printVersion readNetworks ' +
	        'writeMessage blinkVersion cityNameRead readMessage ' +
	        'setDataMode parsePacket isListening setBitOrder ' +
	        'beginPacket isDirectory motorsWrite drawCompass ' +
	        'digitalRead clearScreen serialEvent rightToLeft ' +
	        'setTextSize leftToRight requestFrom keyReleased ' +
	        'compassRead analogWrite interrupts WiFiServer ' +
	        'disconnect playMelody parseFloat autoscroll ' +
	        'getPINUsed setPINUsed setTimeout sendAnalog ' +
	        'readSlider analogRead beginWrite createChar ' +
	        'motorsStop keyPressed tempoWrite readButton ' +
	        'subnetMask debugPrint macAddress writeGreen ' +
	        'randomSeed attachGPRS readString sendString ' +
	        'remotePort releaseAll mouseMoved background ' +
	        'getXChange getYChange answerCall getResult ' +
	        'voiceCall endPacket constrain getSocket writeJSON ' +
	        'getButton available connected findUntil readBytes ' +
	        'exitValue readGreen writeBlue startLoop IPAddress ' +
	        'isPressed sendSysex pauseMode gatewayIP setCursor ' +
	        'getOemKey tuneWrite noDisplay loadImage switchPIN ' +
	        'onRequest onReceive changePIN playFile noBuffer ' +
	        'parseInt overflow checkPIN knobRead beginTFT ' +
	        'bitClear updateIR bitWrite position writeRGB ' +
	        'highByte writeRed setSpeed readBlue noStroke ' +
	        'remoteIP transfer shutdown hangCall beginSMS ' +
	        'endWrite attached maintain noCursor checkReg ' +
	        'checkPUK shiftOut isValid shiftIn pulseIn ' +
	        'connect println localIP pinMode getIMEI ' +
	        'display noBlink process getBand running beginSD ' +
	        'drawBMP lowByte setBand release bitRead prepare ' +
	        'pointTo readRed setMode noFill remove listen ' +
	        'stroke detach attach noTone exists buffer ' +
	        'height bitSet circle config cursor random ' +
	        'IRread setDNS endSMS getKey micros ' +
	        'millis begin print write ready flush width ' +
	        'isPIN blink clear press mkdir rmdir close ' +
	        'point yield image BSSID click delay ' +
	        'read text move peek beep rect line open ' +
	        'seek fill size turn stop home find ' +
	        'step tone sqrt RSSI SSID ' +
	        'end bit tan cos sin pow map abs max ' +
	        'min get run put',
	      literal:
	        'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE ' +
	        'REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP ' +
	        'SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN ' +
	        'INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL ' +
	        'DEFAULT OUTPUT INPUT HIGH LOW'
	    },
	    contains: [
	      CPP.preprocessor,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    //local labels: %?[FB]?[AT]?\d{1,2}\w+
	  return {
	    case_insensitive: true,
	    aliases: ['arm'],
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      meta:
	        //GNU preprocs
	        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+
	        //ARM directives
	        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
	      built_in:
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers
	        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility
	        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp
	        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs
	        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc
	        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs

	        //program status registers
	        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+
	        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+

	        //NEON and VFP registers
	        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+
	        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+
	        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+
	        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +

	        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
	    },
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\b('+     //mnemonics
	            'adc|'+
	            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+
	            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+
	            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+
	            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+
	            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+
	            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+
	            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+
	            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+
	            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+
	            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+
	            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+
	            'wfe|wfi|yield'+
	        ')'+
	        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes
	        '[sptrx]?' ,                                             //legal postfixes
	        end: '\\s'
	      },
	      hljs.COMMENT('[;@]', '$', {relevance: 0}),
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      {
	        className: 'title',
	        begin: '\\|', end: '\\|',
	        illegal: '\\n',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        variants: [
	            {begin: '[#$=]?0x[0-9a-f]+'}, //hex
	            {begin: '[#$=]?0b[01]+'},     //bin
	            {begin: '[#$=]\\d+'},        //literal
	            {begin: '\\b\\d+'}           //bare number
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	            {begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'}, //ARM syntax
	            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU ARM syntax
	            {begin: '[=#]\\w+' }  //label reference
	        ],
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['adoc'],
	    contains: [
	      // block comment
	      hljs.COMMENT(
	        '^/{4,}\\n',
	        '\\n/{4,}$',
	        // can also be done as...
	        //'^/{4,}$',
	        //'^/{4,}$',
	        {
	          relevance: 10
	        }
	      ),
	      // line comment
	      hljs.COMMENT(
	        '^//',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      // title
	      {
	        className: 'title',
	        begin: '^\\.\\w.*$'
	      },
	      // example, admonition & sidebar blocks
	      {
	        begin: '^[=\\*]{4,}\\n',
	        end: '\\n^[=\\*]{4,}$',
	        relevance: 10
	      },
	      // headings
	      {
	        className: 'section',
	        relevance: 10,
	        variants: [
	          {begin: '^(={1,5}) .+?( \\1)?$'},
	          {begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'},
	        ]
	      },
	      // document attributes
	      {
	        className: 'meta',
	        begin: '^:.+?:',
	        end: '\\s',
	        excludeEnd: true,
	        relevance: 10
	      },
	      // block attributes
	      {
	        className: 'meta',
	        begin: '^\\[.+?\\]$',
	        relevance: 0
	      },
	      // quoteblocks
	      {
	        className: 'quote',
	        begin: '^_{4,}\\n',
	        end: '\\n_{4,}$',
	        relevance: 10
	      },
	      // listing and literal blocks
	      {
	        className: 'code',
	        begin: '^[\\-\\.]{4,}\\n',
	        end: '\\n[\\-\\.]{4,}$',
	        relevance: 10
	      },
	      // passthrough blocks
	      {
	        begin: '^\\+{4,}\\n',
	        end: '\\n\\+{4,}$',
	        contains: [
	          {
	            begin: '<', end: '>',
	            subLanguage: 'xml',
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      },
	      // lists (can only capture indicators)
	      {
	        className: 'bullet',
	        begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
	      },
	      // admonition
	      {
	        className: 'symbol',
	        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
	        relevance: 10
	      },
	      // inline strong
	      {
	        className: 'strong',
	        // must not follow a word character or be followed by an asterisk or space
	        begin: '\\B\\*(?![\\*\\s])',
	        end: '(\\n{2}|\\*)',
	        // allow escaped asterisk followed by word char
	        contains: [
	          {
	            begin: '\\\\*\\w',
	            relevance: 0
	          }
	        ]
	      },
	      // inline emphasis
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by a single quote or space
	        begin: '\\B\'(?![\'\\s])',
	        end: '(\\n{2}|\')',
	        // allow escaped single quote followed by word char
	        contains: [
	          {
	            begin: '\\\\\'\\w',
	            relevance: 0
	          }
	        ],
	        relevance: 0
	      },
	      // inline emphasis (alt)
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by an underline or space
	        begin: '_(?![_\\s])',
	        end: '(\\n{2}|_)',
	        relevance: 0
	      },
	      // inline smart quotes
	      {
	        className: 'string',
	        variants: [
	          {begin: "``.+?''"},
	          {begin: "`.+?'"}
	        ]
	      },
	      // inline code snippets (TODO should get same treatment as strong and emphasis)
	      {
	        className: 'code',
	        begin: '(`.+?`|\\+.+?\\+)',
	        relevance: 0
	      },
	      // indented literal block
	      {
	        className: 'code',
	        begin: '^[ \\t]',
	        end: '$',
	        relevance: 0
	      },
	      // horizontal rules
	      {
	        begin: '^\'{3,}[ \\t]*$',
	        relevance: 10
	      },
	      // images and links
	      {
	        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
	        returnBegin: true,
	        contains: [
	          {
	            begin: '(link|image:?):',
	            relevance: 0
	          },
	          {
	            className: 'link',
	            begin: '\\w',
	            end: '[^\\[]+',
	            relevance: 0
	          },
	          {
	            className: 'string',
	            begin: '\\[',
	            end: '\\]',
	            excludeBegin: true,
	            excludeEnd: true,
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      }
	    ]
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function (hljs) {
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long throw strictfp finally protected import native final return void ' +
	    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
	    'assert short package default double public try this switch continue throws privileged ' +
	    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
	    'staticinitialization withincode target within execution getWithinTypeName handler ' +
	    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+
	    'warning error soft precedence thisAspectInstance';
	  var SHORTKEYS = 'get set args call';
	  return {
	    keywords : KEYWORDS,
	    illegal : /<\/|#/,
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [
	            {
	              // eat up @'s in emails to prevent them to be recognized as doctags
	              begin: /\w+@/, relevance: 0
	            },
	            {
	              className : 'doctag',
	              begin : '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className : 'class',
	        beginKeywords : 'aspect',
	        end : /[{;=]/,
	        excludeEnd : true,
	        illegal : /[:;"\[\]]/,
	        contains : [
	          {
	            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
	          },
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            begin : /\([^\)]*/,
	            end : /[)]+/,
	            keywords : KEYWORDS + ' ' + SHORTKEYS,
	            excludeEnd : false
	          }
	        ]
	      },
	      {
	        className : 'class',
	        beginKeywords : 'class interface',
	        end : /[{;=]/,
	        excludeEnd : true,
	        relevance: 0,
	        keywords : 'class interface',
	        illegal : /[:"\[\]]/,
	        contains : [
	          {beginKeywords : 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // AspectJ Constructs
	        beginKeywords : 'pointcut after before around throwing returning',
	        end : /[)]/,
	        excludeEnd : false,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          }
	        ]
	      },
	      {
	        begin : /[:]/,
	        returnBegin : true,
	        end : /[{;]/,
	        relevance: 0,
	        excludeEnd : false,
	        keywords : KEYWORDS,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            keywords : KEYWORDS + ' ' + SHORTKEYS
	          },
	          hljs.QUOTE_STRING_MODE
	        ]
	      },
	      {
	        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
	        beginKeywords : 'new throw',
	        relevance : 0
	      },
	      {
	        // the function class is a bit different for AspectJ compared to the Java language
	        className : 'function',
	        begin : /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
	        returnBegin : true,
	        end : /[{;=]/,
	        keywords : KEYWORDS,
	        excludeEnd : true,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            relevance: 0,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className : 'params',
	            begin : /\(/, end : /\)/,
	            relevance: 0,
	            keywords : KEYWORDS,
	            contains : [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        // annotation is also used in this language
	        className : 'meta',
	        begin : '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var BACKTICK_ESCAPE = {
	    begin: /`[\s\S]/
	  };

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'Break Continue Else Gosub If Loop Return While',
	      literal: 'A|0 true false NOT AND OR',
	      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel',
	    },
	    contains: [
	      {
	        className: 'built_in',
	        begin: 'A_[a-zA-Z0-9]+'
	      },
	      BACKTICK_ESCAPE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [BACKTICK_ESCAPE]}),
	      hljs.COMMENT(';', '$', {relevance: 0}),
	      {
	        className: 'number',
	        begin: hljs.NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'variable', // FIXME
	        begin: '%', end: '%',
	        illegal: '\\n',
	        contains: [BACKTICK_ESCAPE]
	      },
	      {
	        className: 'symbol',
	        contains: [BACKTICK_ESCAPE],
	        variants: [
	          {begin: '^[^\\n";]+::(?!=)'},
	          {begin: '^[^\\n";]+:(?!=)', relevance: 0} // zero relevance as it catches a lot of things
	                                                    // followed by a single ':' in many languages
	        ]
	      },
	      {
	        // consecutive commas, not for highlighting but just for relevance
	        begin: ',\\s*,'
	      }
	    ]
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	    var KEYWORDS = 'ByRef Case Const ContinueCase ContinueLoop ' +
	        'Default Dim Do Else ElseIf EndFunc EndIf EndSelect ' +
	        'EndSwitch EndWith Enum Exit ExitLoop For Func ' +
	        'Global If In Local Next ReDim Return Select Static ' +
	        'Step Switch Then To Until Volatile WEnd While With',

	        LITERAL = 'True False And Null Not Or',

	        BUILT_IN =
	          'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait',

	        COMMENT = {
	            variants: [
	              hljs.COMMENT(';', '$', {relevance: 0}),
	              hljs.COMMENT('#cs', '#ce'),
	              hljs.COMMENT('#comments-start', '#comments-end')
	            ]
	        },

	        VARIABLE = {
	            begin: '\\$[A-z0-9_]+'
	        },

	        STRING = {
	            className: 'string',
	            variants: [{
	                begin: /"/,
	                end: /"/,
	                contains: [{
	                    begin: /""/,
	                    relevance: 0
	                }]
	            }, {
	                begin: /'/,
	                end: /'/,
	                contains: [{
	                    begin: /''/,
	                    relevance: 0
	                }]
	            }]
	        },

	        NUMBER = {
	            variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
	        },

	        PREPROCESSOR = {
	            className: 'meta',
	            begin: '#',
	            end: '$',
	            keywords: {'meta-keyword': 'comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin'},
	            contains: [{
	                    begin: /\\\n/,
	                    relevance: 0
	                }, {
	                    beginKeywords: 'include',
	                    keywords: {'meta-keyword': 'include'},
	                    end: '$',
	                    contains: [
	                        STRING, {
	                            className: 'meta-string',
	                            variants: [{
	                                begin: '<',
	                                end: '>'
	                            }, {
	                                begin: /"/,
	                                end: /"/,
	                                contains: [{
	                                    begin: /""/,
	                                    relevance: 0
	                                }]
	                            }, {
	                                begin: /'/,
	                                end: /'/,
	                                contains: [{
	                                    begin: /''/,
	                                    relevance: 0
	                                }]
	                            }]
	                        }
	                    ]
	                },
	                STRING,
	                COMMENT
	            ]
	        },

	        CONSTANT = {
	            className: 'symbol',
	            // begin: '@',
	            // end: '$',
	            // keywords: 'AppDataCommonDir AppDataDir AutoItExe AutoItPID AutoItVersion AutoItX64 COM_EventObj CommonFilesDir Compiled ComputerName ComSpec CPUArch CR CRLF DesktopCommonDir DesktopDepth DesktopDir DesktopHeight DesktopRefresh DesktopWidth DocumentsCommonDir error exitCode exitMethod extended FavoritesCommonDir FavoritesDir GUI_CtrlHandle GUI_CtrlId GUI_DragFile GUI_DragId GUI_DropId GUI_WinHandle HomeDrive HomePath HomeShare HotKeyPressed HOUR IPAddress1 IPAddress2 IPAddress3 IPAddress4 KBLayout LF LocalAppDataDir LogonDNSDomain LogonDomain LogonServer MDAY MIN MON MSEC MUILang MyDocumentsDir NumParams OSArch OSBuild OSLang OSServicePack OSType OSVersion ProgramFilesDir ProgramsCommonDir ProgramsDir ScriptDir ScriptFullPath ScriptLineNumber ScriptName SEC StartMenuCommonDir StartMenuDir StartupCommonDir StartupDir SW_DISABLE SW_ENABLE SW_HIDE SW_LOCK SW_MAXIMIZE SW_MINIMIZE SW_RESTORE SW_SHOW SW_SHOWDEFAULT SW_SHOWMAXIMIZED SW_SHOWMINIMIZED SW_SHOWMINNOACTIVE SW_SHOWNA SW_SHOWNOACTIVATE SW_SHOWNORMAL SW_UNLOCK SystemDir TAB TempDir TRAY_ID TrayIconFlashing TrayIconVisible UserName UserProfileDir WDAY WindowsDir WorkingDir YDAY YEAR',
	            // relevance: 5
	            begin: '@[A-z0-9_]+'
	        },

	        FUNCTION = {
	            className: 'function',
	            beginKeywords: 'Func',
	            end: '$',
	            illegal: '\\$|\\[|%',
	            contains: [
	                hljs.UNDERSCORE_TITLE_MODE, {
	                    className: 'params',
	                    begin: '\\(',
	                    end: '\\)',
	                    contains: [
	                        VARIABLE,
	                        STRING,
	                        NUMBER
	                    ]
	                }
	            ]
	        };

	    return {
	        case_insensitive: true,
	        illegal: /\/\*/,
	        keywords: {
	            keyword: KEYWORDS,
	            built_in: BUILT_IN,
	            literal: LITERAL
	        },
	        contains: [
	            COMMENT,
	            VARIABLE,
	            STRING,
	            NUMBER,
	            PREPROCESSOR,
	            CONSTANT,
	            FUNCTION
	        ]
	    }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        /* mnemonic */
	        'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' +
	        'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' +
	        'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' +
	        'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' +
	        'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' +
	        'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' +
	        'subi swap tst wdr',
	      built_in:
	        /* general purpose registers */
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' +
	        'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
	        /* IO Registers (ATMega128) */
	        'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' +
	        'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' +
	        'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' +
	        'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' +
	        'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' +
	        'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' +
	        'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' +
	        'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
	      meta:
	        '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list ' +
	        '.listmac .macro .nolist .org .set'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE, // 0x..., decimal, float
	      hljs.BINARY_NUMBER_MODE, // 0b...
	      {
	        className: 'number',
	        begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\'',
	        illegal: '[^\\\\][^\']'
	      },
	      {className: 'symbol',  begin: '^[A-Za-z0-9_.$]+:'},
	      {className: 'meta', begin: '#', end: '$'},
	      {  // подстановка в «.macro»
	        className: 'subst',
	        begin: '@[0-9]+'
	      }
	    ]
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: /(u|b)?r?'''/, end: /'''/,
	        relevance: 10
	      },
	      {
	        begin: /(u|b)?r?"""/, end: /"""/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)'/, end: /'/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)"/, end: /"/,
	        relevance: 10
	      },
	      {
	        begin: /(b|br)'/, end: /'/
	      },
	      {
	        begin: /(b|br)"/, end: /"/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	  return {
		 keywords: {
		   keyword: KEYWORDS
	    },
	    contains: [
	      VARIABLE,
	      STRING,
	      hljs.REGEXP_MODE,
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE
	    ]
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: 'false int abstract private char boolean static null if for true ' +
	      'while long throw finally protected final return void enum else ' +
	      'break new catch byte super case short default double public try this switch ' +
	      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +
	      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +
	      'ttscommit str real date container anytype common div mod',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: ':',
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$\(/, end: /\)/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['sh', 'zsh'],
	    lexemes: /-?[a-z\._]+/,
	    keywords: {
	      keyword:
	        'if then else elif fi for while in do done case esac function',
	      literal:
	        'true false',
	      built_in:
	        // Shell built-ins
	        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
	        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
	        'trap umask unset ' +
	        // Bash built-ins
	        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
	        'read readarray source type typeset ulimit unalias ' +
	        // Shell modifiers
	        'set shopt ' +
	        // Zsh built-ins
	        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
	        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
	        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
	        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
	        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
	        'zpty zregexparse zsocket zstyle ztcp',
	      _:
	        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
	    },
	    contains: [
	      {
	        className: 'meta',
	        begin: /^#![^\n]+sh\s*$/,
	        relevance: 10
	      },
	      {
	        className: 'function',
	        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
	        returnBegin: true,
	        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      VAR
	    ]
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    illegal: '^\.',
	    // Support explicitely typed variables that end with $%! or #.
	    lexemes: '[a-zA-Z][a-zA-Z0-9_\$\%\!\#]*',
	    keywords: {
	        keyword:
	          'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +
	          'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +
	          'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +
	          'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +
	          'HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +
	          'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +
	          'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +
	          'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +
	          'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +
	          'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +
	          'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +
	          'WEND WIDTH WINDOW WRITE XOR'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.COMMENT('REM', '$', {relevance: 10}),
	      hljs.COMMENT('\'', '$', {relevance: 0}),
	      {
	        // Match line numbers
	        className: 'symbol',
	        begin: '^[0-9]+\ ',
	        relevance: 10
	      },
	      {
	        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)
	        className: 'number',
	        begin: '\\b([0-9]+[0-9edED\.]*[#\!]?)',
	        relevance: 0
	      },
	      {
	        // Match hexadecimal numbers (&Hxxxx)
	        className: 'number',
	        begin: '(\&[hH][0-9a-fA-F]{1,4})'
	      },
	      {
	        // Match octal numbers (&Oxxxxxx)
	        className: 'number',
	        begin: '(\&[oO][0-7]{1,6})'
	      }
	    ]
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(hljs){
	  return {
	    contains: [
	      // Attribute
	      {
	        className: 'attribute',
	        begin: /</, end: />/
	      },
	      // Specific
	      {
	        begin: /::=/,
	        starts: {
	          end: /$/,
	          contains: [
	            {
	              begin: /</, end: />/
	            },
	            // Common
	            hljs.C_LINE_COMMENT_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            hljs.APOS_STRING_MODE,
	            hljs.QUOTE_STRING_MODE
	          ]
	        }
	      }
	    ]
	  };
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(hljs){
	  var LITERAL = {
	    className: 'literal',
	    begin: '[\\+\\-]',
	    relevance: 0
	  };
	  return {
	    aliases: ['bf'],
	    contains: [
	      hljs.COMMENT(
	        '[^\\[\\]\\.,\\+\\-<> \r\n]',
	        '[\\[\\]\\.,\\+\\-<> \r\n]',
	        {
	          returnEnd: true,
	          relevance: 0
	        }
	      ),
	      {
	        className: 'title',
	        begin: '[\\[\\]]',
	        relevance: 0
	      },
	      {
	        className: 'string',
	        begin: '[\\.,]',
	        relevance: 0
	      },
	      {
	        // this mode works as the only relevance counter
	        begin: /\+\+|\-\-/, returnBegin: true,
	        contains: [LITERAL]
	      },
	      LITERAL
	    ]
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
	    'until while with var';
	  var LITERALS = 'false true';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(
	      /\{/,
	      /\}/,
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT(
	      /\(\*/,
	      /\*\)/,
	      {
	        relevance: 10
	      }
	    )
	  ];
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var DATE = {
	      className: 'number',
	      begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
	      relevance: 0
	  };
	  var DBL_QUOTED_VARIABLE = {
	      className: 'string', // not a string technically but makes sense to be highlighted in the same style
	      begin: '"',
	      end: '"'
	  };

	  var PROCEDURE = {
	    className: 'function',
	    beginKeywords: 'procedure', end: /[:;]/,
	    keywords: 'procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      }
	    ].concat(COMMENT_MODES)
	  };

	  var OBJECT = {
	    className: 'class',
	    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
	    returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE,
	        PROCEDURE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    keywords: { keyword: KEYWORDS, literal: LITERALS },
	    illegal: /\/\*/,
	    contains: [
	      STRING, CHAR_STRING,
	      DATE, DBL_QUOTED_VARIABLE,
	      hljs.NUMBER_MODE,
	      OBJECT,
	      PROCEDURE
	    ]
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['capnp'],
	    keywords: {
	      keyword:
	        'struct enum interface union group import using const annotation extends in of on as with from fixed',
	      built_in:
	        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
	        'Text Data AnyPointer AnyStruct Capability List',
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'meta',
	        begin: /@0x[\w\d]{16};/,
	        illegal: /\n/
	      },
	      {
	        className: 'symbol',
	        begin: /@\d+\b/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct enum', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'interface', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  // 2.3. Identifiers and keywords
	  var KEYWORDS =
	    'assembly module package import alias class interface object given value ' +
	    'assign void function new of extends satisfies abstracts in out return ' +
	    'break continue throw assert dynamic if else switch case for while try ' +
	    'catch finally then let this outer super is exists nonempty';
	  // 7.4.1 Declaration Modifiers
	  var DECLARATION_MODIFIERS =
	    'shared abstract formal default actual variable late native deprecated' +
	    'final sealed annotation suppressWarnings small';
	  // 7.4.2 Documentation
	  var DOCUMENTATION =
	    'doc by license see throws tagged';
	  var SUBST = {
	    className: 'subst', excludeBegin: true, excludeEnd: true,
	    begin: /``/, end: /``/,
	    keywords: KEYWORDS,
	    relevance: 10
	  };
	  var EXPRESSIONS = [
	    {
	      // verbatim string
	      className: 'string',
	      begin: '"""',
	      end: '"""',
	      relevance: 10
	    },
	    {
	      // string literal or template
	      className: 'string',
	      begin: '"', end: '"',
	      contains: [SUBST]
	    },
	    {
	      // character literal
	      className: 'string',
	      begin: "'",
	      end: "'"
	    },
	    {
	      // numeric literal
	      className: 'number',
	      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
	      relevance: 0
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  return {
	    keywords: {
	      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
	      meta: DOCUMENTATION
	    },
	    illegal: '\\$[^01]|#[^0-9a-fA-F]',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
	      {
	        // compiler annotation
	        className: 'meta',
	        begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
	      }
	    ].concat(EXPRESSIONS)
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['clean','icl','dcl'],
	    keywords: {
	      keyword:
	        'if let in with where case of class instance otherwise ' +
	        'implementation definition system module from import qualified as ' +
	        'special code inline foreign export ccall stdcall generic derive ' +
	        'infix infixl infixr',
	      literal:
	        'True False'
	    },
	    contains: [

	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,

	      {begin: '->|<-[|:]?|::|#!?|>>=|\\{\\||\\|\\}|:==|=:|\\.\\.|<>|`'} // relevance booster
	    ]
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var keywords = {
	    'builtin-name':
	      // Clojure keywords
	      'def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem '+
	      'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? '+
	      'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? '+
	      'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? '+
	      'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . '+
	      'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last '+
	      'drop-while while intern condp case reduced cycle split-at split-with repeat replicate '+
	      'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext '+
	      'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends '+
	      'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler '+
	      'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter '+
	      'monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or '+
	      'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert '+
	      'peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast '+
	      'sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import '+
	      'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! '+
	      'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger '+
	      'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline '+
	      'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking '+
	      'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! '+
	      'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! '+
	      'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty '+
	      'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list '+
	      'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer '+
	      'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate '+
	      'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta '+
	      'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
	   };

	  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
	  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
	  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

	  var SYMBOL = {
	    begin: SYMBOL_RE,
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number', begin: SIMPLE_NUMBER_RE,
	    relevance: 0
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';',
	    '$',
	    {
	      relevance: 0
	    }
	  );
	  var LITERAL = {
	    className: 'literal',
	    begin: /\b(true|false|nil)\b/
	  };
	  var COLLECTION = {
	    begin: '[\\[\\{]', end: '[\\]\\}]'
	  };
	  var HINT = {
	    className: 'comment',
	    begin: '\\^' + SYMBOL_RE
	  };
	  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
	  var KEY = {
	    className: 'symbol',
	    begin: '[:]{1,2}' + SYMBOL_RE
	  };
	  var LIST = {
	    begin: '\\(', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  var NAME = {
	    keywords: keywords,
	    lexemes: SYMBOL_RE,
	    className: 'name', begin: SYMBOL_RE,
	    starts: BODY
	  };
	  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

	  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
	  BODY.contains = DEFAULT_CONTAINS;
	  COLLECTION.contains = DEFAULT_CONTAINS;

	  return {
	    aliases: ['clj'],
	    illegal: /\S/,
	    contains: [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      {
	        className: 'meta',
	        begin: /^([\w.-]+|\s*#_)=>/,
	        starts: {
	          end: /$/,
	          subLanguage: 'clojure'
	        }
	      }
	    ]
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['cmake.in'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'add_custom_command add_custom_target add_definitions add_dependencies ' +
	        'add_executable add_library add_subdirectory add_test aux_source_directory ' +
	        'break build_command cmake_minimum_required cmake_policy configure_file ' +
	        'create_test_sourcelist define_property else elseif enable_language enable_testing ' +
	        'endforeach endfunction endif endmacro endwhile execute_process export find_file ' +
	        'find_library find_package find_path find_program fltk_wrap_ui foreach function ' +
	        'get_cmake_property get_directory_property get_filename_component get_property ' +
	        'get_source_file_property get_target_property get_test_property if include ' +
	        'include_directories include_external_msproject include_regular_expression install ' +
	        'link_directories load_cache load_command macro mark_as_advanced message option ' +
	        'output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return ' +
	        'separate_arguments set set_directory_properties set_property ' +
	        'set_source_files_properties set_target_properties set_tests_properties site_name ' +
	        'source_group string target_link_libraries try_compile try_run unset variable_watch ' +
	        'while build_name exec_program export_library_dependencies install_files ' +
	        'install_programs install_targets link_libraries make_directory remove subdir_depends ' +
	        'subdirs use_mangled_mesa utility_source variable_requires write_file ' +
	        'qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or ' +
	        'equal less greater strless strgreater strequal matches'
	    },
	    contains: [
	      {
	        className: 'variable',
	        begin: '\\${', end: '}'
	      },
	      hljs.HASH_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger super ' +
	      // Coffee keywords
	      'then unless until loop of by when and or is isnt not',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // Coffee literals
	      'yes no on off',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        }
	      ]
	    },
	    {
	      className: 'regexp',
	      variants: [
	        {
	          begin: '///', end: '///',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          begin: '//[gim]*',
	          relevance: 0
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      begin: '@' + JS_IDENT_RE // relevance booster
	    },
	    {
	      begin: '`', end: '`',
	      excludeBegin: true, excludeEnd: true,
	      subLanguage: 'javascript'
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
	  var PARAMS = {
	    className: 'params',
	    begin: '\\([^\\(]', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [{
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      contains: ['self'].concat(EXPRESSIONS)
	    }]
	  };

	  return {
	    aliases: ['coffee', 'cson', 'iced'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('###', '###'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
	        returnBegin: true,
	        contains: [TITLE, PARAMS]
	      },
	      {
	        // anonymous function start
	        begin: /[:\(,=]\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'function',
	            begin: PARAMS_RE, end: '[-=]>',
	            returnBegin: true,
	            contains: [PARAMS]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        '_ as at cofix else end exists exists2 fix for forall fun if IF in let ' +
	        'match mod Prop return Set then Type using where with ' +
	        'Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo ' +
	        'Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion ' +
	        'Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture ' +
	        'Conjectures Constant constr Constraint Constructors Context Corollary ' +
	        'CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent' +
	        'Derive Drop eauto End Equality Eval Example Existential Existentials ' +
	        'Existing Export exporting Extern Extract Extraction Fact Field Fields File ' +
	        'Fixpoint Focus for From Function Functional Generalizable Global Goal Grab ' +
	        'Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident ' +
	        'Identity If Immediate Implicit Import Include Inductive Infix Info Initial ' +
	        'Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear ' +
	        'Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML ' +
	        'Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation ' +
	        'Obligations Opaque Open Optimize Options Parameter Parameters Parametric ' +
	        'Path Paths pattern Polymorphic Preterm Print Printing Program Projections ' +
	        'Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark ' +
	        'Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save ' +
	        'Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern ' +
	        'SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies ' +
	        'Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time ' +
	        'Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused ' +
	        'Unfold Universe Universes Unset Unshelve using Variable Variables Variant ' +
	        'Verbose Visibility where with',
	      built_in:
	        'abstract absurd admit after apply as assert assumption at auto autorewrite ' +
	        'autounfold before bottom btauto by case case_eq cbn cbv change ' +
	        'classical_left classical_right clear clearbody cofix compare compute ' +
	        'congruence constr_eq constructor contradict contradiction cut cutrewrite ' +
	        'cycle decide decompose dependent destruct destruction dintuition ' +
	        'discriminate discrR do double dtauto eapply eassumption eauto ecase ' +
	        'econstructor edestruct ediscriminate eelim eexact eexists einduction ' +
	        'einjection eleft elim elimtype enough equality erewrite eright ' +
	        'esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail ' +
	        'field field_simplify field_simplify_eq first firstorder fix fold fourier ' +
	        'functional generalize generalizing gfail give_up has_evar hnf idtac in ' +
	        'induction injection instantiate intro intro_pattern intros intuition ' +
	        'inversion inversion_clear is_evar is_var lapply lazy left lia lra move ' +
	        'native_compute nia nsatz omega once pattern pose progress proof psatz quote ' +
	        'record red refine reflexivity remember rename repeat replace revert ' +
	        'revgoals rewrite rewrite_strat right ring ring_simplify rtauto set ' +
	        'setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry ' +
	        'setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve ' +
	        'specialize split split_Rabs split_Rmult stepl stepr subst sum swap ' +
	        'symmetry tactic tauto time timeout top transitivity trivial try tryif ' +
	        'unfold unify until using vm_compute with'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.COMMENT('\\(\\*', '\\*\\)'),
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'type',
	        excludeBegin: true,
	        begin: '\\|\\s*',
	        end: '\\w+'
	      },
	      {begin: /[-=]>/} // relevance booster
	    ]
	  };
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function cos (hljs) {

	  var STRINGS = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"',
	        end: '"',
	        contains: [{ // escaped
	          begin: "\"\"",
	          relevance: 0
	        }]
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: "number",
	    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
	    relevance: 0
	  };

	  var COS_KEYWORDS =
	    'property parameter class classmethod clientmethod extends as break ' +
	    'catch close continue do d|0 else elseif for goto halt hang h|0 if job ' +
	    'j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 ' +
	    'tcommit throw trollback try tstart use view while write w|0 xecute x|0 ' +
	    'zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert ' +
	    'zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit ' +
	    'zsync ascii';

	    // registered function - no need in them due to all functions are highlighted,
	    // but I'll just leave this here.

	    //"$bit", "$bitcount",
	    //"$bitfind", "$bitlogic", "$case", "$char", "$classmethod", "$classname",
	    //"$compile", "$data", "$decimal", "$double", "$extract", "$factor",
	    //"$find", "$fnumber", "$get", "$increment", "$inumber", "$isobject",
	    //"$isvaliddouble", "$isvalidnum", "$justify", "$length", "$list",
	    //"$listbuild", "$listdata", "$listfind", "$listfromstring", "$listget",
	    //"$listlength", "$listnext", "$listsame", "$listtostring", "$listvalid",
	    //"$locate", "$match", "$method", "$name", "$nconvert", "$next",
	    //"$normalize", "$now", "$number", "$order", "$parameter", "$piece",
	    //"$prefetchoff", "$prefetchon", "$property", "$qlength", "$qsubscript",
	    //"$query", "$random", "$replace", "$reverse", "$sconvert", "$select",
	    //"$sortbegin", "$sortend", "$stack", "$text", "$translate", "$view",
	    //"$wascii", "$wchar", "$wextract", "$wfind", "$wiswide", "$wlength",
	    //"$wreverse", "$xecute", "$zabs", "$zarccos", "$zarcsin", "$zarctan",
	    //"$zcos", "$zcot", "$zcsc", "$zdate", "$zdateh", "$zdatetime",
	    //"$zdatetimeh", "$zexp", "$zhex", "$zln", "$zlog", "$zpower", "$zsec",
	    //"$zsin", "$zsqr", "$ztan", "$ztime", "$ztimeh", "$zboolean",
	    //"$zconvert", "$zcrc", "$zcyc", "$zdascii", "$zdchar", "$zf",
	    //"$ziswide", "$zlascii", "$zlchar", "$zname", "$zposition", "$zqascii",
	    //"$zqchar", "$zsearch", "$zseek", "$zstrip", "$zwascii", "$zwchar",
	    //"$zwidth", "$zwpack", "$zwbpack", "$zwunpack", "$zwbunpack", "$zzenkaku",
	    //"$change", "$mv", "$mvat", "$mvfmt", "$mvfmts", "$mviconv",
	    //"$mviconvs", "$mvinmat", "$mvlover", "$mvoconv", "$mvoconvs", "$mvraise",
	    //"$mvtrans", "$mvv", "$mvname", "$zbitand", "$zbitcount", "$zbitfind",
	    //"$zbitget", "$zbitlen", "$zbitnot", "$zbitor", "$zbitset", "$zbitstr",
	    //"$zbitxor", "$zincrement", "$znext", "$zorder", "$zprevious", "$zsort",
	    //"device", "$ecode", "$estack", "$etrap", "$halt", "$horolog",
	    //"$io", "$job", "$key", "$namespace", "$principal", "$quit", "$roles",
	    //"$storage", "$system", "$test", "$this", "$tlevel", "$username",
	    //"$x", "$y", "$za", "$zb", "$zchild", "$zeof", "$zeos", "$zerror",
	    //"$zhorolog", "$zio", "$zjob", "$zmode", "$znspace", "$zparent", "$zpi",
	    //"$zpos", "$zreference", "$zstorage", "$ztimestamp", "$ztimezone",
	    //"$ztrap", "$zversion"

	  return {
	    case_insensitive: true,
	    aliases: ["cos", "cls"],
	    keywords: COS_KEYWORDS,
	    contains: [
	      NUMBERS,
	      STRINGS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: "comment",
	        begin: /;/, end: "$",
	        relevance: 0
	      },
	      { // Functions and user-defined functions: write $ztime(60*60*3), $$myFunc(10), $$^Val(1)
	        className: "built_in",
	        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
	      },
	      { // Macro command: quit $$$OK
	        className: "built_in",
	        begin: /\$\$\$[a-zA-Z]+/
	      },
	      { // Special (global) variables: write %request.Content; Built-in classes: %Library.Integer
	        className: "built_in",
	        begin: /%[a-z]+(?:\.[a-z]+)*/
	      },
	      { // Global variable: set ^globalName = 12 write ^globalName
	        className: "symbol",
	        begin: /\^%?[a-zA-Z][\w]*/
	      },
	      { // Some control constructions: do ##class(Package.ClassName).Method(), ##super()
	        className: "keyword",
	        begin: /##class|##super|#define|#dim/
	      },

	      // sub-languages: are not fully supported by hljs by 11/15/2015
	      // left for the future implementation.
	      {
	        begin: /&sql\(/,    end: /\)/,
	        excludeBegin: true, excludeEnd: true,
	        subLanguage: "sql"
	      },
	      {
	        begin: /&(js|jscript|javascript)</, end: />/,
	        excludeBegin: true, excludeEnd: true,
	        subLanguage: "javascript"
	      },
	      {
	        // this brakes first and last tag, but this is the only way to embed a valid html
	        begin: /&html<\s*</, end: />\s*>/,
	        subLanguage: "xml"
	      }
	    ]
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var RESOURCES = 'primitive rsc_template';

	  var COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
	      'rsc_ticket acl_target acl_group user role ' +
	      'tag xml';

	  var PROPERTY_SETS = 'property rsc_defaults op_defaults';

	  var KEYWORDS = 'params meta operations op rule attributes utilization';

	  var OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
	      'ref reference attribute type xpath version and or lt gt tag ' +
	      'lte gte eq ne \\';

	  var TYPES = 'number string';

	  var LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

	  return {
	    aliases: ['crm', 'pcmk'],
	    case_insensitive: true,
	    keywords: {
	      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
	      literal: LITERALS
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        beginKeywords: 'node',
	        starts: {
	          end: '\\s*([\\w_-]+:)?',
	          starts: {
	            className: 'title',
	            end: '\\s*[\\$\\w_][\\w_-]*'
	          }
	        }
	      },
	      {
	        beginKeywords: RESOURCES,
	        starts: {
	          className: 'title',
	          end: '\\s*[\\$\\w_][\\w_-]*',
	          starts: {
	            end: '\\s*@?[\\w_][\\w_\\.:-]*'
	          }
	        }
	      },
	      {
	        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
	        keywords: COMMANDS,
	        starts: {
	          className: 'title',
	          end: '[\\$\\w_][\\w_-]*'
	        }
	      },
	      {
	        beginKeywords: PROPERTY_SETS,
	        starts: {
	          className: 'title',
	          end: '\\s*([\\w_-]+:)?'
	        }
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'meta',
	        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
	        relevance: 0
	      },
	      {
	        className: 'literal',
	        begin: '[-]?(infinity|inf)',
	        relevance: 0
	      },
	      {
	        className: 'attr',
	        begin: /([A-Za-z\$_\#][\w_-]+)=/,
	        relevance: 0
	      },
	      {
	        className: 'tag',
	        begin: '</?',
	        end: '/?>',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var NUM_SUFFIX = '(_[uif](8|16|32|64))?';
	  var CRYSTAL_IDENT_RE = '[a-zA-Z_]\\w*[!?=]?';
	  var RE_STARTER = '!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|' +
	    '>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
	  var CRYSTAL_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?';
	  var CRYSTAL_KEYWORDS = {
	    keyword:
	      'abstract alias as asm begin break case class def do else elsif end ensure enum extend for fun if ifdef ' +
	      'include instance_sizeof is_a? lib macro module next of out pointerof private protected rescue responds_to? ' +
	      'return require self sizeof struct super then type typeof union unless until when while with yield ' +
	      '__DIR__ __FILE__ __LINE__',
	    literal: 'false nil true'
	  };
	  var SUBST = {
	    className: 'subst',
	    begin: '#{', end: '}',
	    keywords: CRYSTAL_KEYWORDS
	  };
	  var EXPANSION = {
	    className: 'template-variable',
	    variants: [
	      {begin: '\\{\\{', end: '\\}\\}'},
	      {begin: '\\{%', end: '%\\}'}
	    ],
	    keywords: CRYSTAL_KEYWORDS
	  };

	  function recursiveParen(begin, end) {
	    var
	    contains = [{begin: begin, end: end}];
	    contains[0].contains = contains;
	    return contains;
	  }
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /`/, end: /`/},
	      {begin: '%w?\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	      {begin: '%w?\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	      {begin: '%w?{', end: '}', contains: recursiveParen('{', '}')},
	      {begin: '%w?<', end: '>', contains: recursiveParen('<', '>')},
	      {begin: '%w?/', end: '/'},
	      {begin: '%w?%', end: '%'},
	      {begin: '%w?-', end: '-'},
	      {begin: '%w?\\|', end: '\\|'},
	    ],
	    relevance: 0,
	  };
	  var REGEXP = {
	    begin: '(' + RE_STARTER + ')\\s*',
	    contains: [
	      {
	        className: 'regexp',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	        variants: [
	          {begin: '//[a-z]*', relevance: 0},
	          {begin: '/', end: '/[a-z]*'},
	          {begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	          {begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	          {begin: '%r{', end: '}', contains: recursiveParen('{', '}')},
	          {begin: '%r<', end: '>', contains: recursiveParen('<', '>')},
	          {begin: '%r/', end: '/'},
	          {begin: '%r%', end: '%'},
	          {begin: '%r-', end: '-'},
	          {begin: '%r\\|', end: '\\|'},
	        ]
	      }
	    ],
	    relevance: 0
	  };
	  var REGEXP2 = {
	    className: 'regexp',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	      {begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	      {begin: '%r{', end: '}', contains: recursiveParen('{', '}')},
	      {begin: '%r<', end: '>', contains: recursiveParen('<', '>')},
	      {begin: '%r/', end: '/'},
	      {begin: '%r%', end: '%'},
	      {begin: '%r-', end: '-'},
	      {begin: '%r\\|', end: '\\|'},
	    ],
	    relevance: 0
	  };
	  var ATTRIBUTE = {
	    className: 'meta',
	    begin: '@\\[', end: '\\]',
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'})
	    ]
	  };
	  var CRYSTAL_DEFAULT_CONTAINS = [
	    EXPANSION,
	    STRING,
	    REGEXP,
	    REGEXP2,
	    ATTRIBUTE,
	    hljs.HASH_COMMENT_MODE,
	    {
	      className: 'class',
	      beginKeywords: 'class module struct', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	        {begin: '<'} // relevance booster for inheritance
	      ]
	    },
	    {
	      className: 'class',
	      beginKeywords: 'lib enum union', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	      ],
	      relevance: 10
	    },
	    {
	      className: 'function',
	      beginKeywords: 'def', end: /\B\b/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {
	          begin: CRYSTAL_METHOD_RE,
	          endsParent: true
	        })
	      ]
	    },
	    {
	      className: 'function',
	      beginKeywords: 'fun macro', end: /\B\b/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {
	          begin: CRYSTAL_METHOD_RE,
	          endsParent: true
	        })
	      ],
	      relevance: 5
	    },
	    {
	      className: 'symbol',
	      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':',
	      contains: [STRING, {begin: CRYSTAL_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'number',
	      variants: [
	        { begin: '\\b0b([01_]*[01])' + NUM_SUFFIX },
	        { begin: '\\b0o([0-7_]*[0-7])' + NUM_SUFFIX },
	        { begin: '\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])' + NUM_SUFFIX },
	        { begin: '\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)' + NUM_SUFFIX}
	      ],
	      relevance: 0
	    }
	  ];
	  SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
	  EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1); // without EXPANSION

	  return {
	    aliases: ['cr'],
	    lexemes: CRYSTAL_IDENT_RE,
	    keywords: CRYSTAL_KEYWORDS,
	    contains: CRYSTAL_DEFAULT_CONTAINS
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // Normal keywords.
	      'abstract as base bool break byte case catch char checked const continue decimal ' +
	      'default delegate do double else enum event explicit extern finally fixed float ' +
	      'for foreach goto if implicit in int interface internal is lock long ' +
	      'object operator out override params private protected public readonly ref sbyte ' +
	      'sealed short sizeof stackalloc static string struct switch this try typeof ' +
	      'uint ulong unchecked unsafe ushort using virtual void volatile while ' +
	      'nameof ' +
	      // Contextual keywords.
	      'add alias ascending async await by descending dynamic equals from get global group into join ' +
	      'let on orderby partial remove select set value var where yield',
	    literal:
	      'null false true'
	  };

	  var VERBATIM_STRING = {
	    className: 'string',
	    begin: '@"', end: '"',
	    contains: [{begin: '""'}]
	  };
	  var VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, {illegal: /\n/});
	  var SUBST = {
	    className: 'subst',
	    begin: '{', end: '}',
	    keywords: KEYWORDS
	  };
	  var SUBST_NO_LF = hljs.inherit(SUBST, {illegal: /\n/});
	  var INTERPOLATED_STRING = {
	    className: 'string',
	    begin: /\$"/, end: '"',
	    illegal: /\n/,
	    contains: [{begin: '{{'}, {begin: '}}'}, hljs.BACKSLASH_ESCAPE, SUBST_NO_LF]
	  };
	  var INTERPOLATED_VERBATIM_STRING = {
	    className: 'string',
	    begin: /\$@"/, end: '"',
	    contains: [{begin: '{{'}, {begin: '}}'}, {begin: '""'}, SUBST]
	  };
	  var INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
	    illegal: /\n/,
	    contains: [{begin: '{{'}, {begin: '}}'}, {begin: '""'}, SUBST_NO_LF]
	  });
	  SUBST.contains = [
	    INTERPOLATED_VERBATIM_STRING,
	    INTERPOLATED_STRING,
	    VERBATIM_STRING,
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE,
	    hljs.C_BLOCK_COMMENT_MODE
	  ];
	  SUBST_NO_LF.contains = [
	    INTERPOLATED_VERBATIM_STRING_NO_LF,
	    INTERPOLATED_STRING,
	    VERBATIM_STRING_NO_LF,
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE,
	    hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {illegal: /\n/})
	  ];
	  var STRING = {
	    variants: [
	      INTERPOLATED_VERBATIM_STRING,
	      INTERPOLATED_STRING,
	      VERBATIM_STRING,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };

	  var TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\s*,\\s*' + hljs.IDENT_RE + ')*>)?(\\[\\])?';
	  return {
	    aliases: ['csharp'],
	    keywords: KEYWORDS,
	    illegal: /::/,
	    contains: [
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'doctag',
	              variants: [
	                {
	                  begin: '///', relevance: 0
	                },
	                {
	                  begin: '<!--|-->'
	                },
	                {
	                  begin: '</?', end: '>'
	                }
	              ]
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'}
	      },
	      STRING,
	      hljs.C_NUMBER_MODE,
	      {
	        beginKeywords: 'class interface', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.TITLE_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '[a-zA-Z](\\.?\\w)*'}),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new return throw await',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + TYPE_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              STRING,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ }
/******/ ]);