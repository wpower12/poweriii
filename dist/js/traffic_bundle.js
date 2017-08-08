/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "div {\n    display: block;\n}\n\nbody {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background: #333;\n}\n\ncanvas {\n    outline: none;\n    display: inline-block;\n    vertical-align: baseline;\n}\n\nol, ul {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.terminal, .cmd, .terminal .terminal-output div div, .cmd .prompt {\n    font-size: 14px;\n    line-height: 18px;\n}\n\n.cmd, .terminal, .forceterminal {\n    font-family: Consolas,monaco,monospace;\n    color: #aea79f;\n    background-color: #2c001e;\n    font-size: 14px;\n    line-height: 18px;\n}\n\n.forceterminal {\n    padding: 10px;\n    overflow: auto;\n    position: relative;\n}\n\n.container {\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    width: 600px;\n}\n\n.bar {\n    float: right;\n    left: -50%;\n    text-align: left;\n    height: inherit;\n}\n\n.bar, .bar ul {\n    position: relative;\n}\n\n.bar ul {\n    list-style: none;\n    left: 45%;\n}\n\n.bar li {\n    float: left;\n    position: relative;\n}\n\n.textcontrols {\n    margin-top: 5px;\n}\n\n*, :after, :before {\n    box-sizing: border-box;\n}\n\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Car {
    constructor(id, cardata, type){
		this.id = id;
		this.loc = {lane: cardata.lane, pos: cardata.pos};
		this.type = type;
		this.speed = cardata.speed;
		this.timer = 0;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (Car);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ColorPicker {
    constructor(n){
    	this.s = 90;
	    this.l = 40;
	    this.delta = 360 / n;
    }
};
$.extend(ColorPicker.prototype, {
    //Returns the css color string used by canvas
    get: function (c) {
        var ret = 'hsl(' + c * this.delta + ',' + this.s + '%,' + this.l + '%' + ')';
        return ret;
    }
});
/* harmony default export */ __webpack_exports__["a"] = (ColorPicker);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__car_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorpicker_js__ = __webpack_require__(6);



class Road {
    //Roads track their 0lane, 0pos, lanes, length, and orientation
    //TODO - make orientation not shitty.  Either enum like driver, or use explicit
    //     - names in an input object that describe the orientation 'vectors' of the
    //     - lane and position directions ex: {lanex: 0, laney: -1, posx: 1, posy: 0} 
    //     - orientation is a bunch of vectors that could probably be more simply
    //     - expressed but w.e  it works right now. 
    constructor(rdata, orientation, length, lanes){
	    this.orientation = orientation;    // 0 iup (-y), 1 ileft(-x), 2 idown(+y), 3 iright(+x)
	    this.o = {x: 0, y: 0, xd: 0, yd: 0, lx: -1, ly: 0, lanes: lanes};
	    this.length = length;
	    this.lanes = lanes;
	    this.out = "none";   //Out is where cars are passed when they get to the end.
	    this.outside = 0;
	    this.outs = [];
	    this.outs[0] = "none";

	    this.colors = new __WEBPACK_IMPORTED_MODULE_1__colorpicker_js__["a" /* default */](7);

	    this.start = {xn: rdata.x, yn: rdata.y, x: 0, y: 0};

	    this.dim = {
	        xn0: rdata.x,
	        yn0: rdata.y,
	        xd0: 0,
	        yd0: 0,
	        dx: 0,
	        dy: 0};

	    //Orientation and dimensions - makes drawing easier
	    this.o = this.getO(this.orientation);
	    this.dim.xd0 = this.dim.xn0 + this.o.xd;
	    this.dim.yd0 = this.dim.yn0 + this.o.yd;
	    this.dim.dx = this.o.lx * this.lanes + this.o.px * this.length;
	    this.dim.dy = this.o.ly * this.lanes + this.o.py * this.length;

	    this.cars = [];
	    this.road = [];
	    for (var i = 0; i < lanes; i++) {
	        this.road[i] = [];
	        for (var j = 0; j < length; j++) {
	            this.road[i][j] = 0;
	        }
	    }
	}
	
	draw(ctx, size) {
        this.drawPavement(ctx, size);
        this.drawCars(ctx, size);
    }

    update() {
        //Update Cars
        //If an update pushes a car to the intersection, it asks the
        //intersection if it can proceed, if so, pass and then remove
        var forward = 0, depass = 1, pass = 1, position = 0, car = 0;
        for (var c = 0; c < this.cars.length; c++) {
            car = this.cars[c];

            if (car.timer++ > car.speed) {
                car.timer = 0;
                //If near end, do intersection shit
                if (car.loc.pos === (this.length - 1) && this.out !== "none") {
                    if (this.out.open(car.loc.lane, this.outside)) {
                        this.out.addCar(new __WEBPACK_IMPORTED_MODULE_0__car_js__["a" /* default */](car.id, {lane: car.loc.lane, pos: 0, speed: car.speed}, car.type), this.outside);
                        this.cars.splice(c, 1);
                        this.road[car.loc.lane][car.loc.pos] = 0;
                    }
                } else {
                    switch (car.type) {
                        case 0:
                            //If you can depass, depass.
                            if (car.loc.lane > 0) {
                                depass = this.road[car.loc.lane - 1][ car.loc.pos + 1 ];
                                if (depass === 0) {
                                    //TODO - Depass function outta scope
                                    this.depass(car);
                                    return;
                                }
                            }
                            //If forward is clear go, else pass
                            forward = this.road[car.loc.lane + 0][car.loc.pos + 1];
                            if (forward === 0) {
                                this.moveForward(car);
                                return;
                            } else {
                                if (car.loc.lane < (this.lanes - 1)) {
                                    pass = this.road[car.loc.lane + 1][ car.loc.pos + 1 ];
                                    if (pass === 0) {
                                        //TODO - Pass function outta scope
                                        this.pass(car);
                                        return;
                                    }
                                }
                            }
                            break;
                        // case Driver().CRAZY:
                        //     break;
                        default:
                            break;
                    }
                }
            }
        }
    }

    drawPavement(ctx, size) {
        //Grey rectangle under the road
        ctx.fillStyle = "lightgrey";
        var x0 = (size.scale * (this.dim.xd0)) + size.x0;
        var y0 = (size.scale * (this.dim.yd0)) + size.y0;
        ctx.beginPath();
        ctx.rect(x0,
                y0,
                size.scale * this.dim.dx,
                size.scale * this.dim.dy);
        ctx.fill();

        //Outline the road
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x0 + (size.scale * this.o.px * this.length), y0 + (size.scale * this.o.py * this.length));
        ctx.stroke();
        ctx.beginPath();
        var xl = 0, yl = 0;
        xl = x0 + (size.scale * this.o.lx * this.lanes);
        yl = y0 + (size.scale * this.o.ly * this.lanes);
        ctx.moveTo(xl, yl);
        ctx.lineTo(xl + (size.scale * this.o.px * this.length), yl + (size.scale * this.o.py * this.length));
        ctx.stroke();

        //Draw lane lines
        if (this.lanes > 1) {
            ctx.strokeStyle = "darkgrey";
            ctx.lineWidth = 3;
            var xp = 0, yp = 0;
            for (var l = 1; l < (this.lanes); l++) {
                xl = x0 + (size.scale * this.o.lx * l);
                yl = y0 + (size.scale * this.o.ly * l);
                for (var p = 0; p < this.length; p += 2) {
                    xp = xl + (size.scale * this.o.px * p);
                    yp = yl + (size.scale * this.o.py * p);
                    ctx.beginPath();
                    ctx.moveTo(xp, yp);
                    ctx.lineTo(xp + (size.scale * this.o.px), yp + (size.scale * this.o.py));
                    ctx.stroke();
                }
            }
        }
    }

    drawCars(ctx, size) {
        var cloc = {x: 0, y: 0};
        for (var c = 0; c < this.cars.length; c++) {
            var car = this.cars[c];
            cloc.x = size.scale * (this.dim.xd0 + (this.o.lx * car.loc.lane) + (this.o.px * car.loc.pos)) + size.x0;
            cloc.y = size.scale * (this.dim.yd0 + (this.o.ly * car.loc.lane) + (this.o.py * car.loc.pos)) + size.y0;
            ctx.beginPath();
            ctx.fillStyle = this.colors.get(car.id);
            ctx.fillRect(cloc.x + 2*(this.o.x),
                    cloc.y+ 2*(this.o.y),
                    (size.scale * (this.o.x) - 4*(this.o.x)),
                    (size.scale * (this.o.y) - 4*(this.o.y)));
        }
    }

    addCar(c) {
        this.cars.push(c);
        this.road[c.loc.lane][c.loc.pos] = c;
    }

    setOutput(r, s) {
        this.out = r;
        this.outs[0] = r;
        this.outside = s;
    }

    depass(c) {
        this.road[c.loc.lane][c.loc.pos] = 0;
        c.loc.lane--;
        c.loc.pos++;
        this.road[c.loc.lane][c.loc.pos] = 1;
    }

    moveForward(c) {
        this.road[c.loc.lane][c.loc.pos] = 0;
        c.loc.pos++;
        this.road[c.loc.lane][c.loc.pos] = 1;
    }

    pass(c) {
        this.road[c.loc.lane][c.loc.pos] = 0;
        c.loc.lane++;
        c.loc.pos++;
        this.road[c.loc.lane][c.loc.pos] = 1;
    }

    open(lane, s) {
        return (this.road[lane][0] === 0);
    }

    add(c) {
        this.cars.push(c);
        var n = this.cars.length;
        //this.cars[n - 1].loc = {lane: 0, pos: 0};
        this.road[c.loc.lane][0] = c;
    }

    getFrom(size, scale, side) {
        var xout, yout;
        xout = (this.dim.xd0
                + (this.length - 0.5) * this.o.px
                + (this.lanes / 2) * this.o.lx) * scale
                + size.x0;
        yout = (this.dim.yd0
                + (this.length - 0.5) * this.o.py
                + (this.lanes / 2) * this.o.ly) * scale
                + size.y0;
        return {x: xout, y: yout};
    }

    getTo(size, scale, side) {
        return {
            x: (this.dim.xd0 + 0.5 * this.o.lx * this.lanes + this.o.px * (0.5)) * scale + size.x0,
            y: (this.dim.yd0 + 0.5 * this.o.ly * this.lanes + this.o.py * (0.5)) * scale + size.y0
        };
    }

    getO(o) {
        switch (o) {
            case 0:
                return {x: -1, y: -1, xd: 1, yd: 1, lx: -1, ly: 0, px: 0, py: -1};
                break;
            case 1:
                return {x: -1, y: 1, xd: 1, yd: 0, lx: 0, ly: 1, px: -1, py: 0};
                break;
            case 2:
                return {x: 1, y: 1, xd: 0, yd: 0, lx: 1, ly: 0, px: 0, py: 1};
                break;
            case 3:
                return {x: 1, y: -1, xd: 0, yd: 1, lx: 0, ly: -1, px: 1, py: 0};
                break
            default:

        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Road);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__car_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorpicker_js__ = __webpack_require__(6);



class Intersection {
    //Base point is the lower right corner on the grid, in grid units
    constructor (basepoint, lanecount, type) {
        this.base = {x: basepoint.x, y: basepoint.y};
        this.lanes = lanecount;
        this.type = type;
        this.colors = new __WEBPACK_IMPORTED_MODULE_1__colorpicker_js__["a" /* default */](7);

        //Sides basically are in's and out's, 4 of um
        this.outs = [];     //Point to roads
        for (var i = 0; i < 4; i++) {
            this.outs[i] = "none";
        }

        //Fields needed for managing logic.
        this.timer = 0;
        this.threshold = 200;
        this.currentside = 0;   //Side 'in', same orientation as roads
        this.cycle = 0;
        this.outside = 1;

        this.cars = [];
        this.road = [];//Square road this time.  the side is a road, same as before
        //Bottom right is 0,0, 'left turn' goes towards 2n,2n corner
        for (var i = 0; i < this.lanes * 2; i++) {
            this.road[i] = [];
            for (var j = 0; j < this.lanes * 2; j++) {
                this.road[i][j] = 0;
            }
        }
    }

    update() {
        var side = this.currentside;
        var out = (this.currentside + this.cycle + 1) % 4;
        console.log(this.cars);
        //Only do stuff/allow cars in if there is an output that way.
        if (this.outs[out] !== "none") {
            for (var c = 0; c < this.cars.length; c++) {
                var car = this.cars[c];
                car.timer++;
                if (car.timer > car.speed) {
                    car.timer = 0;
                    switch (this.cycle) {
                        case 0:  //Right                            
                            this.updateCarRight(car, c);
                            break;
                        case 1:  //Straight
                            this.updateCarStraight(car, c);
                            break;
                        case 2:  //Left
                            this.updateCarLeft(car, c);
                            break;
                        default:
                            break;
                    }
                }
            }
        } else {
            this.timer = this.threshold;
        }

        //Increment timer, and change stuff if necessary
        this.timer++;
        if ((this.timer > this.threshold) && (this.cars.length === 0)) {
            this.cycle = Math.floor(Math.random() * 3);
            this.currentside = (this.currentside + 1) % 4;
            this.outside = (this.currentside + this.cycle + 1) % 4;
            this.timer = 0;
        }
    }
    draw (ctx, size) {
        this.drawPavement(ctx, size);
        this.drawCars(ctx, size);
    }
    drawPavement (ctx, size) {
        //Grey square under the intersection
        ctx.fillStyle = "lightgrey";
        var x0 = (size.scale * (this.base.x + 1)) + size.x0;
        var y0 = (size.scale * (this.base.y + 1)) + size.y0;
        var d = -2 * size.scale * this.lanes;
        ctx.beginPath();
        ctx.rect(x0, y0, d, d);
        ctx.fill();

        ctx.strokeStyle = "darkgrey";
        ctx.beginPath();
        ctx.setLineDash([size.scale * this.lanes]);
        ctx.lineWidth = 3;
        ctx.rect(x0, y0, d, d);
        ctx.stroke();
        ctx.setLineDash([0]);
    }
    drawCars (ctx, size) {
        //Need to draw cars based on road orientation.
        var t = this.getDrawTransform(this.currentside);

        //Transform array position to draw position
        var cloc = {x: 0, y: 0};
        for (var c = 0; c < this.cars.length; c++) {
            var car = this.cars[c];
            cloc.x = size.scale * ((this.base.x + t.dbasex * (2 * this.lanes - 1)) + t.lanex * car.loc.lane + t.posx * car.loc.pos) + size.x0;
            cloc.y = size.scale * ((this.base.y + t.dbasey * (2 * this.lanes - 1)) + t.laney * car.loc.lane + t.posy * car.loc.pos) + size.y0;
            ctx.beginPath();
            ctx.fillStyle = this.colors.get(car.id);
            ctx.fillRect(cloc.x+2,
                    cloc.y+2,
                    (size.scale-4),
                    (size.scale-4));    
        }
    }
    addCar (c, side) {
        this.cars.push(c);
        //Based on side, need to add car to right location.
        var l, p;
        var n = this.lanes;
        var lane = c.loc.lane;
        c.loc.pos = 0;
        this.road[lane][0] = c;
    }
    setOutput (r, s) {
        this.outs[s] = r;
    }
    updateCarStraight (car, c) {
        var out = this.outs[this.outside];
        if (car.loc.pos >= (this.lanes * 2 - 1)) {
            this.passCar( out, car, car.loc.lane, c );
        } else {
            //Else, try to go straight
            this.moveForward(car);
        }
    }
    updateCarRight (car, c) {
        var out = this.outs[this.outside];
        //Car goes straight until its in the diagonal, then right until out
        //diagonal is when pos == lane
        if (car.loc.lane === 0) {
            this.passCar( out, car, car.loc.pos, c );
        } else {
            if (car.loc.pos >= car.loc.lane) {
                this.moveRight(car);
            } else {
                //Else, try to go straight
                this.moveForward(car);
            }
        }
    }
    updateCarLeft (car, c) {
        var out = this.outs[this.outside];
        if (car.loc.lane === 2 * this.lanes - 1) {
            //Try to pass car to output
            var laneout = (2 * this.lanes - 1 - car.loc.pos);
            this.passCar( out, car, laneout, c );
        } else {
            if (car.loc.pos <= 2*this.lanes - car.loc.pos - car.loc.lane) {
                this.moveForward(car);
            } else {
                this.moveLeft(car);
            }
        }
    }
    passCar (out, car, laneout, c) {
        if (out.open(laneout, 0)) {
            out.addCar(new __WEBPACK_IMPORTED_MODULE_0__car_js__["a" /* default */](car.id, {lane: laneout, pos: 0, speed: car.speed}, car.type));
            this.cars.splice(c, 1);
            this.road[car.loc.lane][car.loc.pos] = 0;
        }
    }
    moveForward (car) {
        if (this.road[car.loc.lane][car.loc.pos + 1] === 0) {
            this.road[car.loc.lane][car.loc.pos] = 0;
            this.road[car.loc.lane][car.loc.pos+1] = car;
            car.loc.pos++;
        } else {
            car.timer = this.threshold;
        }
    }
    moveRight (car) {
        if (this.road[car.loc.lane-1][car.loc.pos ] === 0) {
            this.road[car.loc.lane][car.loc.pos] = 0;
            this.road[car.loc.lane-1][car.loc.pos] = car;
            car.loc.lane--;
        } else {
            car.timer = this.threshold;
        }
    }
    moveLeft (car) {
        if (this.road[car.loc.lane+1][car.loc.pos ] === 0) {
            this.road[car.loc.lane][car.loc.pos] = 0;
            this.road[car.loc.lane+1][car.loc.pos] = car;
            car.loc.lane++;
        } else {
            car.timer = this.threshold;
        }
    }
    open (lane, side) {
        //Need to use orientation of sides to do this in a less shitty way.
        return ((side === this.currentside) && this.road[lane][0] === 0);
    }
    getSide (mx, my) {
        console.log("Inter getSide:", mx, my);
        //Given mouse click, see what side its on.
        //whichever quadrant its in. 
        if (mx <= (this.base.x - this.lanes)) {
            if (my <= (this.base.y - this.lanes)) {
                return 0;
            } else {
                return 1;
            }
        } else {
            if (my <= (this.base.y - this.lanes)) {
                return 3;
            } else {
                return 2;
            }
        }
    }
    getOut (mx, my) {
        console.log("Inter getOut:", mx, my);
        if (mx <= (this.base.x - this.lanes)) {
            if (my <= (this.base.y - this.lanes)) {
                return 1;
            } else {
                return 2;
            }
        } else {
            if (my <= (this.base.y - this.lanes)) {
                return 0;
            } else {
                return 3;
            }
        }
    }
    getFrom (size, scale, side) {
        //Need out location for line.
        console.log("Inter getFrom: ", side);
        var xr, yr;
        switch (side) {
            case 0:
                xr = (this.base.x - (0.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y - (2) * this.lanes + 1.5) * scale + size.y0;
                break;
            case 1:
                xr = (this.base.x - (2) * this.lanes + 1.5) * scale + size.x0;
                yr = (this.base.y - (1.5) * this.lanes + 1) * scale + size.y0;
                break;
            case 2:
                xr = (this.base.x - (1.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y + 0.5) * scale + size.y0;
                break;
            case 3:
                xr = (this.base.x + 0.5) * scale + size.x0;
                yr = (this.base.y - (0.5) * this.lanes + 1) * scale + size.y0;
                break;
            default:
                break;
        }
        return {
            x: xr,
            y: yr
        };
    }
    getTo (size, scale, side) {
        //Use side to find 
        var xr, yr;
        switch (side) {
            case 0:
                xr = (this.base.x - (1.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y - (2) * this.lanes + 1.5) * scale + size.y0;
                break;
            case 1:
                xr = (this.base.x - (2) * this.lanes + 1.5) * scale + size.x0;
                yr = (this.base.y - (0.5) * this.lanes + 1) * scale + size.y0;
                break;
            case 2:
                xr = (this.base.x - (0.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y + 0.5) * scale + size.y0;
                break;
            case 3:
                xr = (this.base.x + 0.5) * scale + size.x0;
                yr = (this.base.y - (1.5) * this.lanes + 1) * scale + size.y0;
                break;
            default:
                break;
        }
        return {
            x: xr,
            y: yr
        };
    }
    getO (o) {
        switch (o) {
            case 0:
                return {x: -1, y: -1, xd: 1, yd: 1, lx: -1, ly: 0, px: 0, py: -1};
                break;
            case 1:
                return {x: -1, y: 1, xd: 1, yd: 0, lx: 0, ly: 1, px: -1, py: 0};
                break;
            case 2:
                return {x: 1, y: 1, xd: 0, yd: 0, lx: 1, ly: 0, px: 0, py: 1};
                break;
            case 3:
                return {x: 1, y: -1, xd: 0, yd: 1, lx: 0, ly: -1, px: 1, py: 0};
                break
            default:

        }
    }
    getDrawTransform (side) {
        var ret;
        switch (side) {
            case 0:
                ret = {
                    dbasex: -1,
                    dbasey: -1,
                    lanex: 1,
                    laney: 0,
                    posx: 0,
                    posy: 1
                };
                break;
            case 1:
                ret = {
                    dbasex: -1,
                    dbasey: 0,
                    lanex: 0,
                    laney: -1,
                    posx: 1,
                    posy: 0
                };
                break;
            case 2:
                ret = {
                    dbasex: 0,
                    dbasey: 0,
                    lanex: -1,
                    laney: 0,
                    posx: 0,
                    posy: -1
                };
                break;
            case 3:
                ret = {
                    dbasex: 0,
                    dbasey: -1,
                    lanex: 0,
                    laney: 1,
                    posx: -1,
                    posy: 0
                };
                break;
            default:
        }
        return ret;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Intersection);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traffic_simulation_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traffic_intersection_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__ = __webpack_require__(5);






var canvas = $("#trafficcanvas");
var container = $('.terminal');
var sim = new __WEBPACK_IMPORTED_MODULE_1__traffic_simulation_js__["a" /* default */](canvas, container);

sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 8, y: 20}, 0, 15, 2)); //0 - Up   (leftish)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 38, y: 20}, 0, 15, 2)); //1 - Up   (rightish)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 34, y: 21}, 1, 26, 2)); //2 - Left (lower)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 34,  y: 2}, 1, 26, 2)); //3 - Left (upper)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 5,  y: 6}, 2, 15, 2)); //4 - Down  (leftsh)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 35, y: 6}, 2, 15, 2));//5 - Down  (rightish)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 9, y: 24}, 3, 26, 2));//6 - Right (lower)
sim.addRoad(new __WEBPACK_IMPORTED_MODULE_2__traffic_road_js__["a" /* default */]({x: 9, y: 5}, 3, 26, 2));//7 - Rght (uppwr)

sim.addIntersection(new __WEBPACK_IMPORTED_MODULE_3__traffic_intersection_js__["a" /* default */]({x: 8, y: 5}, 2, 1));//0 (up left)
sim.addIntersection(new __WEBPACK_IMPORTED_MODULE_3__traffic_intersection_js__["a" /* default */]({x: 38, y: 5}, 2, 1));//1 (up right)
sim.addIntersection(new __WEBPACK_IMPORTED_MODULE_3__traffic_intersection_js__["a" /* default */]({x: 38, y: 24}, 2, 1));//2 (down right)
sim.addIntersection(new __WEBPACK_IMPORTED_MODULE_3__traffic_intersection_js__["a" /* default */]({x: 8, y: 24}, 2, 1));//3 (down left)

sim.addCar(0, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](0, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(0, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](1, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(0, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](2, {lane: 0, pos: 10, speed: 70}, 0));
sim.addCar(0, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](3, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(4, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](4, {lane: 0, pos: 1, speed: 30}, 0));
// sim.addCar(4, new Car(5, {lane: 0, pos: 5, speed: 50}, 0));
// sim.addCar(4, new Car(6, {lane: 0, pos: 12, speed: 80}, 0));
// sim.addCar(4, new Car(7, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(5, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](8, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(5, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](9, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(5, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](10, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(6, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](11, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(6, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](12, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(6, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](13, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(7, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](14, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(7, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](15, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(7, new __WEBPACK_IMPORTED_MODULE_4__traffic_car_js__["a" /* default */](16, {lane: 1, pos: 1, speed: 50}, 0));

//Upperleft
sim.connectRtoI(0, 0, 2);
sim.connectRtoI(3, 0, 3);
sim.connectItoR(0, 4, 2);
sim.connectItoR(0, 7, 3);

//Upperright
sim.connectRtoI(1, 1, 2);
sim.connectRtoI(7, 1, 1);
sim.connectItoR(1, 3, 1);
sim.connectItoR(1, 5, 2);

//Lowerright
sim.connectRtoI(6, 2, 1);
sim.connectRtoI(5, 2, 0);
sim.connectItoR(2, 1, 0);
sim.connectItoR(2, 2, 1);

//Lowerleft
sim.connectRtoI(2, 3, 3);
sim.connectRtoI(4, 3, 0);
sim.connectItoR(3, 6, 3);
sim.connectItoR(3, 0, 0);


sim.run();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__car_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorpicker_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputhandler_js__ = __webpack_require__(13);




/* TSimulation class that will run all the things
 * 
 * ctx, world, units, logic, draw, loop
 * 
 * @param {canvas element} canvas
 * @returns {TSimulation}
 */
class Simulation {
	constructor(canvas, container){
		this.canvas = canvas;
		this.scale = 12;
		this.size = this.getSize();
		this.ctx = this.canvas.get(0).getContext('2d');
		this.roads = [];
		this.intersections = [];
		this.input = new __WEBPACK_IMPORTED_MODULE_2__inputhandler_js__["a" /* default */](this);
		this.color = new __WEBPACK_IMPORTED_MODULE_1__colorpicker_js__["a" /* default */](10);
	}

    run() {
        var self = this;
        var tick = function () {
            self.update();
            self.draw();
            setTimeout(function () {
                requestAnimationFrame(tick);
            }, 1000 / self.fps);
        };
        tick(); //Start the show
    }

    update() {
        var i;
        //Update each road, update each intersection
        for (i = 0; i < this.roads.length; i++) {
            this.roads[i].update();
        }
        for (i = 0; i < this.intersections.length; i++) {
            this.intersections[i].update();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
        this.drawGrid();
        var i;
        //Draw each road, intersection
        for (i = 0; i < this.roads.length; i++) {
            this.roads[i].draw(this.ctx, this.size);
        }
        for (i = 0; i < this.intersections.length; i++) {
            this.intersections[i].draw(this.ctx, this.size);
        }
        this.input.draw();
    }

    drawGrid() {
        var crosssize = this.scale * 0.25;
        var blanksize = this.scale - crosssize;

        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;

        this.ctx.beginPath();
        this.ctx.moveTo(this.size.x0 + 0.5, this.size.y0 + 0.5);
        this.ctx.lineTo((crosssize / 2) + this.size.x0 + 0.5, this.size.y0 + 0.5);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.size.x0 + 0.5, this.size.y0 + 0.5);
        this.ctx.lineTo(this.size.x0 + 0.5, (crosssize / 2) + this.size.y0 + 0.5);
        this.ctx.stroke();

        for (var i = 0; i < this.size.x + 1; i++) {
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5 + this.scale * i, this.size.y0 + 0.5);
            this.ctx.lineTo(this.size.x0 + 0.5 + this.scale * i, this.size.y0 + 0.5 + (crosssize / 2));
            this.ctx.stroke();

            this.ctx.setLineDash([crosssize, blanksize]);
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.scale + this.size.x0 + 0.5, this.size.y0 + 0.5 + blanksize + (crosssize / 2));
            this.ctx.lineTo(i * this.scale + this.size.x0 + 0.5, this.size.y0 + this.size.h + 0.5);
            this.ctx.stroke();
        }
        for (var j = 0; j < this.size.y + 1; j++) {
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5, this.size.y0 + 0.5 + this.scale * j);
            this.ctx.lineTo(this.size.x0 + 0.5 + (crosssize / 2), this.size.y0 + 0.5 + this.scale * j);
            this.ctx.stroke();

            this.ctx.setLineDash([crosssize, blanksize]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5 + blanksize + (crosssize / 2), j * this.scale + this.size.y0 + 0.5);
            this.ctx.lineTo(this.size.x0 + this.size.w + 0.5, j * this.scale + this.size.y0 + 0.5);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);
    }

    getSize() {
        //Return 0 point of drawing grid, width of grid in pixels/cells
        var width = this.canvas.get(0).width;
        var height = this.canvas.get(0).height;
        var xn = Math.floor((width - this.scale) / this.scale);
        var yn = Math.floor((height - this.scale) / this.scale);
        return {
            x: xn,
            y: yn,
            w: xn * this.scale,
            h: yn * this.scale,
            x0: (width - (xn * this.scale)) / 2,
            y0: (height - (yn * this.scale)) / 2,
            scale: this.scale
        };
    }

    addRoad(r) {
        this.roads.push(r);
    }

    addCar(r, c) {
        var road = this.roads[r];
        road.addCar(c);
    }

    addIntersection(i) {
        this.intersections.push(i);
    }

    connectRoad(from, to) {
        this.roads[from].setOutput(this.roads[to]);
    }

    connect(from, to) {
        //Make it agnostic.  Intersections will be passed as int.side to differentiat sides
        from.out = to;
    }

    connectRtoI( rfrom, intto, side ) {
        this.roads[rfrom].setOutput( this.intersections[intto], side );
    }

    connectItoR( intfrom, rto, side ) {
        this.intersections[intfrom].setOutput( this.roads[rto], side );
    }

    printStats(){
        var str, r, inter;
        str = "";
        //Roads
        for( var i = 0; i < this.roads.length; i++ ){
            r = this.roads[i];
            str += " sim.addRoad( new Road({";
            str += "x: "+r.start.xn+", y: "+r.start.yn+"},";
            str += r.orientation+", "+r.length+", "+r.lanes+"));\n";
        }
        //Intersections
        for( var i = 0; i < this.intersections.length; i++ ){
            inter = this.intersections[i];
            str += " sim.addIntersection( new Intersection({";
            str += "x: "+inter.base.x+", y: "+inter.base.y+"},";
            str += inter.lanes+", 1));\n";
        }
        //Connections - Roads
        for( var i = 0; i < this.roads.length; i++ ){
            r = this.roads[i];
            str += " sim.addRoad( new Road({";
            str += "x: "+r.start.xn+", y: "+r.start.yn+"},";
            str += r.orientation+", "+r.length+", "+r.lanes+"));\n";
        }
        console.log( str );
    }
};

function Driver() {
    return({NORMAL: 0, SLOW: 1, CRAZY: 2});
}

/* harmony default export */ __webpack_exports__["a"] = (Simulation);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__road_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intersection_js__ = __webpack_require__(8);




var DRIVERS = ["Normal", "Slow", "Crazy"];

class InputHandler {
	constructor(sim){
	    this.sim = sim;
	    this.Road = new __WEBPACK_IMPORTED_MODULE_0__road_js__["a" /* default */]({x: 0, y: 0}, 0, 0, 0);
	    
	    //JQuery Object fields
	    this.$speed = $("#speed");
	    this.$color = $("#color");
	    this.$roadlanes = $("#road_lanes");
	    this.$roador = $("#roador");
	    this.$length = $("#length");
	    this.$intlanes = $("#int_lanes");
        this.$type = $("#type");

	    this.$roadform = $("#road_control");
	    this.$carform  = $("#car_control");
	    this.$intform  = $("#inter_control");
	    this.$connform = $("#conn_control");
	    this.$deleteform = $("#delete_control");

	    //Drawing/Adding fields
	    this.selected = 0; //0 - Car, 1 - Road, 2 - Intersection, 3 - Connection, 4 - Delete
	    this.mousecell = {x: 0, y: 0};
	    this.mousecell = {x: 0, y: 0};
	    this.timer = 0;
	    this.drawing = true;

	    this.r = new __WEBPACK_IMPORTED_MODULE_0__road_js__["a" /* default */]({x: 0, y: 0}, 0, 0, 0);

	    this.roadfits = true;
	    this.connclicked = false;
	    this.openroad = "";
	    this.openroadside = 0;

	    this.updateValues();
	    this.hideAllForms();  
	    this.attachInputs();
	    this.$carform.show();
	    $("#car").text("[c]ar");
	}
    attachInputs () {
        //Div Buttons - on click toggle displays of forms
        this.sim.canvas.on( 'keypress',this.handleKey.bind(this));

        //On mouse move to update data for drawing
        this.sim.canvas.on('mousemove', function (e) {
            this.mousepos = this.calculateMousePos(e);
            this.mousecell = this.calculateMouseCell();
            this.checkInsertionFit();   //This updates fields used by the click callbacks
            //Reset Drawing timer
            this.timer = 0;
            this.drawing = true;
        }.bind(this));

        //On mouse click to add things
        this.sim.canvas.on('click', function (e) {
        	this.updateValues();
            switch (this.selected) {
                case 0: //Car
                    this.carClickCallback();
                    break;
                case 1: //Road
                    this.roadClickCallback();
                    break;
                case 2: //Intersection
                    this.interClickCallback();
                    break;
                case 3: //Connection
                    this.connClickCallback();
                    break;
                case 4: //Delete
                    this.deleteClickCallback();
                default:
            }
        }.bind(this));

        //With all of the callbacks setup, now is a good time to update our 
        //information from the dom.  
        this._speed = this.$speed.val();
        this._color = this.$color.val();
        this._roadlanes = this.$roadlanes.val();
        this._intlanes = this.$intlanes.val();
        this._length = this.$length.val();
        this._drivetype_ind = 0;
    }
    updateValues(){
        this._speed = 1*this.$speed.text();
        this._color = 1*this.$color.text();
        this._roadlanes = 1*this.$roadlanes.text();
        this._length = 1*this.$length.text();
        this._intlanes = 1*this.$intlanes.text();
        this._roador = 1*this.$roador.text();
    }
    hideAllForms () {
        $("#road").text("'r'oad");
        $("#car").text("'c'ar");
        $("#intersection").text("'i'ntersection");
        $("#connections").text("c'o'nnect");
        $("#delete").text("'d'elete");
        this.$roadform.hide();
        this.$carform.hide();
        this.$intform.hide();
        this.$connform.hide();
        this.$deleteform.hide();
    }
    handleKey (key){
        // Change Menu
    	switch(key.which){
    		case 99:  // c - Car
    			console.log("car");
    			this.selected = 0;
    			this.hideAllForms();
    			this.$carform.show();
    			$("#car").text("[c]ar");
    			break;
    		case 114: // r - Road
    			this.selected = 1;
    			this.hideAllForms();
    			this.$roadform.show();
    			$("#road").text("[r]oad");
    			break;
    		case 105: // i - Intersection
    			this.selected = 2;
    			this.hideAllForms();
    			this.$intform.show();
    			$("#intersection").text("[i]ntersection");
    			break;
    		case 111: // o - Connection
    			this.selected = 3;
    			this.hideAllForms();
    			this.$connform.show();
    			$("#connections").text("c[o]nnect");
    			break;
    		case 100: // d - delete
    			this.selected = 4;
    			this.hideAllForms();
    			this.$deleteform.show();
    			$("#delete").text("[d]elete");
    			break;
    		default:
    	}
        // Interact with menu
    	switch(this.selected){
    		case 0:
    			this.handleCarKeys(key.which);
    			break;
    		case 1:
    			this.handleRoadKeys(key.which);
    			break;
    		case 2:
    			this.handleIntersectionKeys(key.which);
    			break;
    		default:
    			break;
    	}
    }
    handleCarKeys(which){
        console.log("handling car keys. lol.");
        switch(which){
            case 113: // q color down
                if(this._color > 0){
                    this._color--;
                    this.$color.text(""+this._color);
                }
                break;
            case 119:  // w - color 'up'
                if(this._color < 21){
                    this._color++  ;
                    this.$color.text(""+this._color);
                }
                break;
            case 97:   // a - driver down
                if(this._drivetype_ind > 0){
                    this._drivetype_ind--;
                    this.$type.text(DRIVERS[this._drivetype_ind]);
                }
                break; 
            case 115:  // s - driver down
                if(this._drivetype_ind < 2){
                    this._drivetype_ind++  ;
                    this.$type.text(DRIVERS[this._drivetype_ind]);
                }
                break;
            case 122:  // z - speed down
                if(this._speed > 10){
                    this._speed--;
                    this.$speed.text(""+this._speed);
                }
                break; 
            case 120:  // x - speed up
                if(this._speed < 60){
                    this._speed++   ;
                    this.$speed.text(""+this._speed);
                }
                break; 
        }
    }
    handleRoadKeys(which){
    	console.log("handling road keys");
    	switch(which){
    		case 113:  // q - orientation 'down'
    			if(this._roador > 0){
    				this._roador--;
    				this.$roador.text(""+this._roador);
    			}
    			break;
    		case 119:  // w - orientation 'up'
    			if(this._roador < 3){
    				this._roador++	;
    				this.$roador.text(""+this._roador);
    			}
    			break;
    		case 97:   // a - length down
    			if(this._length > 0){
    				this._length--;
    				this.$length.text(""+this._length);
    			}
    			break; 
    		case 115:  // s - length down
    			if(this._length < 30){
    				this._length++	;
    				this.$length.text(""+this._length);
    			}
    			break;
			case 122:  // z - lanes down
				if(this._roadlanes > 1){
    				this._roadlanes--;
    				this.$roadlanes.text(""+this._roadlanes);
    			}
    			break; 
    		case 120:  // x - lanes up
    			if(this._roadlanes < 4){
    				this._roadlanes++	;
    				this.$roadlanes.text(""+this._roadlanes);
    			}
    			break; 	
    	}
    }
    handleIntersectionKeys(which){
        console.log("handling car keys. lol.");
        switch(which){
            case 113: // q lanes down
                if(this._intlanes > 1){
                    this._intlanes--;
                    this.$intlanes.text(""+this._intlanes);
                }
                break;
            case 119:  // w - lanes 'up'
                if(this._intlanes < 6){
                    this._intlanes++  ;
                    this.$intlanes.text(""+this._intlanes);
                }
                break;
        }
    }   
    draw () {
        var ctx = this.sim.ctx;
        if (this.mousecell.y >= 0
                && this.mousecell.x >= 0
                && this.mousecell.y < this.sim.size.y
                && this.mousecell.x < this.sim.size.x) {
            switch (this.selected) {
                case 0: //Car
                    this.drawCar(ctx);
                    break;
                case 1: //Road
                    this.drawRoad(ctx);
                    break;
                case 2: //Intersections
                    this.drawInt(ctx);
                    break;
                case 3: //Connections
                    this.drawConn(ctx);
                    break;
                default:
                    break;
            }
        }
    }
    drawCar (ctx) {
        if (++this.timer > 20) {
            this.drawing = !this.drawing;
            this.timer = 0;
        }
        if (this.drawing) {
            ctx.beginPath();
            ctx.fillStyle = "grey";
            ctx.fillRect(this.mousecell.x * this.sim.scale + this.sim.size.x0 + 2,
                    this.mousecell.y * this.sim.scale + this.sim.size.y0 + 2,
                    this.sim.scale - 3, this.sim.scale - 3);
        }
    }
    drawRoad (ctx) {
        if (this.drawing) {
            //Draw the rectangle
            var rx, ry, dx, dy, o, or;
            o = this._roador;
            or = this.r.getO(o * 1);
            rx = (this.mousecell.x + or.xd) * this.sim.scale + this.sim.size.x0;
            ry = (this.mousecell.y + or.yd) * this.sim.scale + this.sim.size.y0;
            dx = (this._roadlanes * or.lx + this._length * or.px) * this.sim.scale - 1 * or.lx - 1 * or.px;
            dy = (this._roadlanes * or.ly + this._length * or.py) * this.sim.scale - 1 * or.ly - 1 * or.py;
            ctx.strokeStyle = "grey";
            ctx.beginPath();
            ctx.setLineDash([5]);
            ctx.lineWidth = 3;
            ctx.rect(rx, ry, dx, dy);
            ctx.stroke();
            ctx.setLineDash([0]);

            //Draw direction arrow
            var mx, my, ax, ay, tx, ty;
            mx = rx + 0.5 * this._roadlanes * this.sim.scale * or.lx;
            my = ry + 0.5 * this._roadlanes * this.sim.scale * or.ly;
            ax = mx + this._length * this.sim.scale * or.px;
            ay = my + this._length * this.sim.scale * or.py;
            ctx.strokeStyle = "grey";
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(ax, ay);
            ctx.stroke();

            ctx.beginPath();
            tx = ax - this.sim.scale * or.px - 0.5 * this.sim.scale * or.lx;
            ty = ay - this.sim.scale * or.py - 0.5 * this.sim.scale * or.ly;
            ctx.moveTo(ax, ay);
            ctx.lineTo(tx, ty);
            ctx.moveTo(ax, ay);
            tx = ax - this.sim.scale * or.px + 0.5 * this.sim.scale * or.lx;
            ty = ay - this.sim.scale * or.py + 0.5 * this.sim.scale * or.ly;
            ctx.lineTo(tx, ty);
            ctx.stroke();
        }
    }
    drawInt (ctx) {
        //Draw an outline of the square representing the intersection.
        var rx, ry, d;
        rx = (this.mousecell.x + 1) * this.sim.scale + this.sim.size.x0;
        ry = (this.mousecell.y + 1) * this.sim.scale + this.sim.size.y0;
        d = -1 * this._intlanes * this.sim.scale;
        ctx.strokeStyle = "grey";
        ctx.beginPath();
        ctx.setLineDash([5]);
        ctx.lineWidth = 3;
        ctx.rect(rx, ry, d * 2, d * 2);
        ctx.stroke();
        ctx.setLineDash([0]);
    }
    drawConn (ctx) {
        //Road Output Connections
        var road;
        for (var i = 0; i < this.sim.roads.length; i++) {
            road = this.sim.roads[i];
            if (!(road.out === "none")) {
                this.drawConnLineRoad(ctx, road);
            }
            this.drawDirectionArrow(ctx, road);
        }
        //Intersection Output Connections
        var int, outx0, outy0, inx0, iny0, dx, dy;
        for (var i = 0; i < this.sim.intersections.length; i++) {
            this.drawConnLineInt(ctx, this.sim.intersections[i]);
        }
        //If an open output is clicked, draw a line from output to cursor
        if (this.connclicked === true) {
            this.drawMouseLine(ctx);
        }
    }
    drawConnLineRoad (ctx, road) {
        var from, to;
        from = {
            x: (road.dim.xd0 + road.o.px * (road.length - 0.5) + 0.5 * road.o.lx * road.lanes) * this.sim.scale + this.sim.size.x0,
            y: (road.dim.yd0 + road.o.py * (road.length - 0.5) + 0.5 * road.o.ly * road.lanes) * this.sim.scale + this.sim.size.y0
        };
        to = road.out.getTo(this.sim.size, this.sim.scale, road.outside);
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.lineWidth = 2;
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    }
    drawConnLineInt (ctx, int) {
        for (var side = 0; side < 4; side++) {
            if (!(int.outs[side] === "none")) {
                this.drawOutLineInt(ctx, int, side);
            } else {
                this.drawOutputsInt(ctx, int, side);
            }
        }
    }
    drawDirectionArrow (ctx, road) {
        //Draw direction arrow
        var mx, my, ax, ay, tx, ty;

        ax = road.dim.xd0 + (0.5 * road.length * road.o.px) + (0.5 * road.o.lx * road.lanes);
        ay = road.dim.yd0 + (0.5 * road.length * road.o.py) + (0.5 * road.o.ly * road.lanes);

        ctx.strokeStyle = "#B33D3D";

        ctx.beginPath();
        tx = (ax - 0.5 * road.o.lx - 0.5 * road.o.px) * this.sim.scale;
        ty = (ay - 0.5 * road.o.ly - 0.5 * road.o.py) * this.sim.scale;
        ctx.moveTo(ax * this.sim.scale + this.sim.size.x0, ay * this.sim.scale + this.sim.size.y0);
        ctx.lineTo(tx + this.sim.size.x0, ty + this.sim.size.y0);
        ctx.moveTo(ax * this.sim.scale + this.sim.size.x0, ay * this.sim.scale + this.sim.size.y0);
        tx = (ax + 0.5 * road.o.lx - 0.5 * road.o.px) * this.sim.scale;
        ty = (ay + 0.5 * road.o.ly - 0.5 * road.o.py) * this.sim.scale;
        ctx.lineTo(tx + this.sim.size.x0, ty + this.sim.size.y0);
        ctx.stroke();
    }
    drawMouseLine (ctx, road) {
        var from = this.openroad.getFrom(this.sim.size, this.sim.scale, this.openroadside);
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(this.mousepos.x, this.mousepos.y);
        ctx.stroke();
    }
    drawOutputsInt (ctx, int, side) {
        //Draw Rectangles
        var outx0, outy0, inx0, iny0, dx, dy;
        switch (side) {
            case 0:
                outx0 = int.base.x;
                outy0 = int.base.y - 2 * int.lanes + 1;
                inx0 = int.base.x - int.lanes + 1;
                iny0 = int.base.y - 2 * int.lanes + 1;
                dx = -1 * (int.lanes - 1);
                dy = 1;
                break;
            case 1:
                outx0 = int.base.x - 2 * int.lanes + 1;
                outy0 = int.base.y - 2 * int.lanes + 2;
                inx0 = outx0;
                iny0 = int.base.y - int.lanes + 1;
                ;
                dx = 1;
                dy = int.lanes - 1;
                break;
            case 2:
                outx0 = int.base.x - 2 * int.lanes + 2;
                outy0 = int.base.y;
                inx0 = int.base.x - int.lanes + 1;
                iny0 = outy0;
                dx = int.lanes - 1;
                dy = 1;
                break;
            case 3:
                outx0 = int.base.x;
                outy0 = int.base.y;
                inx0 = outx0;
                iny0 = int.base.y - int.lanes + 1;
                dx = 1;
                dy = -1 * (int.lanes - 1);
                break;
        }
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.rect(outx0 * this.sim.scale + this.sim.size.x0,
                outy0 * this.sim.scale + this.sim.size.y0,
                dx * this.sim.scale,
                dy * this.sim.scale);
        ctx.rect(inx0 * this.sim.scale + this.sim.size.x0,
                iny0 * this.sim.scale + this.sim.size.y0,
                dx * this.sim.scale,
                dy * this.sim.scale);
        ctx.stroke();
    }
    drawOutLineInt (ctx, int, side) {
        var from, to;
        from = int.getFrom(this.sim.size, this.sim.scale, side);
        to = int.outs[side].getTo(this.sim.size, this.sim.scale, side);
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    }
    carClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (mx >= 0 && my >= 0 && mx < this.sim.size.x && my < this.sim.size.y) {
            //Find which road or intersection the car goes in
            for (var i = 0; i < this.sim.roads.length; i++) {
                if (this.insideRoad(mx, my, this.sim.roads[i])) {
                    var target = this.sim.roads[i];
                    var pos = this.getPos(mx, my, target);

                    //Check that it doesnt hit another car.
                    if (target.road[pos.l][pos.p] === 0) {
                        target.addCar(new __WEBPACK_IMPORTED_MODULE_1__car_js__["a" /* default */](this._color, {lane: pos.l, pos: pos.p, speed: this._speed}, Driver().NORMAL));
                    }
                    break;
                }
            }
        }
    }
    roadClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (this.roadfits) {
            this.sim.addRoad(new __WEBPACK_IMPORTED_MODULE_0__road_js__["a" /* default */]({x: mx, y: my}, this._roador, this._length, this._roadlanes));
        }
    }
    interClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (this.roadfits) {
            this.sim.addIntersection(new __WEBPACK_IMPORTED_MODULE_2__intersection_js__["a" /* default */]({x: mx, y: my}, this._intlanes, 0));
        }
    }
    connClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (this.connclicked) {
            //Check if click is on a road
            for (var i = 0; i < this.sim.roads.length; i++) {
                if (this.insideRoad(mx, my, this.sim.roads[i])) {
                    var target = this.sim.roads[i];
                    this.openroad.setOutput(target, this.openroadside);
                    break;
                }
            }
            //Check if click is on an intersection
            for (var i = 0; i < this.sim.intersections.length; i++) {
                if (this.insideInt(mx, my, this.sim.intersections[i])) {
                    var target = this.sim.intersections[i];
                    this.openroad.setOutput(target, target.getSide(mx, my));
                    break;
                }
            }
            this.connclicked = false;
        } else {
            //Check if click is on a connection
            for (var i = 0; i < this.sim.roads.length; i++) {
                if (this.insideRoad(mx, my, this.sim.roads[i])) {
                    this.sim.roads[i].out = "none";
                    this.openroad = this.sim.roads[i];
                    this.openroadside = 0; //Hack for road/intersection 'polymorphism'
                    break;
                }
            }
            //Check if click is on an intersection
            var inter;
            for (var i = 0; i < this.sim.intersections.length; i++) {
                inter = this.sim.intersections[i];
                if (this.insideInt(mx, my, inter)) {
                    inter.outs[inter.getOut(mx, my)] = "none";
                    this.openroad = inter;
                    this.openroadside = inter.getOut(mx, my);
                    break;
                }
            }
            this.connclicked = true;
        }
    }
    deleteClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        for (var i = 0; i < this.sim.roads.length; i++) {
            if (this.insideRoad(mx, my, this.sim.roads[i])) {
                this.sim.roads.splice( i, 1 );
                break;
            }
        }
        //Check if click is on an intersection
        for (var i = 0; i < this.sim.intersections.length; i++) {
            if (this.insideInt(mx, my, this.sim.intersections[i])) {
                this.sim.intersections.splice(i, 1);
                break;
            }
        }
    }
    calculateMousePos (e) {
        //Get mouse x, y
        var mx, my;
        var c = this.sim.canvas.get(0);

        var element = c, offsetX = 0, offsetY = 0;
        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }
        var stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(c, null)['paddingLeft'], 10) || 0;
        var stylePaddingTop = parseInt(document.defaultView.getComputedStyle(c, null)['paddingTop'], 10) || 0;
        var styleBorderLeft = parseInt(document.defaultView.getComputedStyle(c, null)['borderLeftWidth'], 10) || 0;
        var styleBorderTop = parseInt(document.defaultView.getComputedStyle(c, null)['borderTopWidth'], 10) || 0;
        // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
        // They will mess up mouse coordinates and this fixes that
        var html = document.body.parentNode;
        var htmlTop = html.offsetTop;
        var htmlLeft = html.offsetLeft;

        offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
        offsetY += stylePaddingTop + styleBorderTop + htmlTop;
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
        return {x: mx, y: my};
    }
    calculateMouseCell () {
        var mx = this.mousepos.x;
        var my = this.mousepos.y;
        mx = mx - this.sim.size.x0;
        my = my - this.sim.size.y0;
        mx = Math.floor(mx / this.sim.scale);
        my = Math.floor(my / this.sim.scale);
        return {x: mx, y: my};
    }
    checkInsertionFit () {
        var rx0, ry0, rxn, ryn, or, o, bottom, top, left, right;
        rx0 = this.mousecell.x;
        ry0 = this.mousecell.y;
        switch (this.selected) {
            case 1:
                o = this.$roador.text();
                or = this.r.getO(o * 1);
                rxn = rx0 + ((this._roadlanes - 1) * or.lx + (this._length - 1) * or.px);
                ryn = ry0 + ((this._roadlanes - 1) * or.ly + (this._length - 1) * or.py);

                top = Math.max(ry0, ryn);
                bottom = Math.min(ry0, ryn);
                left = Math.min(rx0, rxn);
                right = Math.max(rx0, rxn);
                break;
            case 2:
                rxn = rx0 - this._intlanes * 2 + 1;
                ryn = ry0 - this._intlanes * 2 + 1;

                top = Math.max(ry0, ryn);
                bottom = Math.min(ry0, ryn);
                left = Math.min(rx0, rxn);
                right = Math.max(rx0, rxn);
                break;
            default:
                break;
        }

        this.roadfits = true;
        //Bounding rect
        if (top < this.sim.size.y && bottom >= 0 && left >= 0 && right < this.sim.size.x) {
            var road, rtop, rbottom, rleft, rright;
            for (var i = 0; i < this.sim.roads.length; i++) {
                road = this.sim.roads[i];
                rtop = Math.max(road.dim.yd0, road.dim.yd0 + road.dim.dy);
                rbottom = Math.min(road.dim.yd0, road.dim.yd0 + road.dim.dy);
                rright = Math.max(road.dim.xd0, road.dim.xd0 + road.dim.dx);
                rleft = Math.min(road.dim.xd0, road.dim.xd0 + road.dim.dx);
                // l1 < r2 && r1 > l2 && b1 < t2 && t1 > b2
                if (left < rright && right >= rleft && top >= rbottom && bottom < rtop) {
                    this.roadfits = false;

                    break;
                }
            }
        } else {
            this.roadfits = false;
        }
    }
    insideRoad (x, y, road) {

        var right = Math.max(road.dim.xn0, road.dim.xn0 + (road.o.lx * (road.lanes - 1)) + (road.o.px * (road.length - 1)));
        var left = Math.min(road.dim.xn0, road.dim.xn0 + (road.o.lx * (road.lanes - 1)) + (road.o.px * (road.length - 1)));
        var top = Math.max(road.dim.yn0, road.dim.yn0 + (road.o.ly * (road.lanes - 1)) + (road.o.py * (road.length - 1)));
        var bottom = Math.min(road.dim.yn0, road.dim.yn0 + (road.o.ly * (road.lanes - 1)) + (road.o.py * (road.length - 1)));

        return (x >= left)
                && (x <= right)
                && (y >= bottom)
                && (y <= top);
    }
    insideInt (x, y, int) {
        var right = int.base.x;
        var left = int.base.x - 2 * int.lanes;
        var bottom = int.base.y - 2 * int.lanes;
        var top = int.base.y;
        var ret = (x >= left)
                && (x <= right)
                && (y >= bottom)
                && (y <= top);
        console.log("InsideInt?:", x, y, ret);
        return ret;
    }
    getPos (x, y, road) {
        var lane, pos;
        lane = Math.abs(road.o.lx * (road.dim.xn0 - x) + road.o.ly * (road.dim.yn0 - y));
        //pos is distance in px/py from xn0/yn0
        pos = Math.abs(road.o.px * (road.dim.xn0 - x) + road.o.py * (road.dim.yn0 - y));
        return {l: lane, p: pos};
    }
};

function Driver() {
    return({NORMAL: 0, SLOW: 1, CRAZY: 2});
}

/* harmony default export */ __webpack_exports__["a"] = (InputHandler);

/***/ })
/******/ ]);