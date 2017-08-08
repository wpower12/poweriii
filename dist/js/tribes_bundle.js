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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);

var $ = jQuery;

class Unit {
    constructor (id, str, tribe, x, y) {
        this.id = id;
        this.str = str;
        this.tribe = tribe;
        this.loc = {x: x, y: y};
    }
}

class ColorPicker {
    constructor(n){
        this.s = 90;
        this.l = 45;
        this.delta = 360 / n;     
    }
   get(c) {
        var ret = 'hsl(' + c * this.delta + ',' + this.s + '%,' + this.l + '%' + ')';
        return ret;
    }
}

/* Simulation class that will run all the things
 * 
 * ctx, world, units, logic, draw, loop
 * 
 * @param {canvas element} canvas
 * @returns {Simulation}
 */
class Simulation {
    constructor  (canvas){
        this.canvas = canvas;
        this.scale = 8;
        this.size = this.getSize();
        this.ctx = this.canvas.get(0).getContext('2d');
        this.units = [];
        this.fps = 10;
        this.fillfactor = 50;
        this.look = 2;

        //Setup input handler
        this.input = new InputHandler(this);
        this.input.setFieldsFPS($('#fpsfield'), $('#fps'))
                .setFieldsFill($('#fillfield'), $('#fill'))
                .setFieldsScale($('#scalefield'), $('#scale'))
                .setFieldsLookR($('#lookfield'), $('#look'));
        this.input.attachInputs();

        this.reset();

        //Main loop
        var self = this;
        var tick = function () {
            self.update();
            self.draw();
            setTimeout(function () {
                requestAnimationFrame(tick);
            }, 1000 / self.fps);
            //console.log(1);
        };
        tick(); //Start the show
    }

    update () {
        //Update Nearest Neighbors
        this.resetWorld();
        var u;
        for (var i = 0; i < this.units.length; i++) {
            u = this.units[i];
            this.world[u.loc.x][u.loc.y] = u;
        }

        //Update each unit
        for (var unit = 0; unit < this.units.length; unit++) {
            var u = this.units[unit];

            var friends = true;
            var alpha = true;
            var target;
            var targets = [];

            //Get nearest neighbors
             for (var i = -1 * this.look; i < this.look + 1; i++) {
                for (var j = -1 * this.look; j < this.look + 1; j++) {
                    if (!(i == 0 && j == 0)) {
                        var xc = u.loc.x + i;
                        var yc = u.loc.y + j;
                        if (xc >= 0 && yc >= 0 && xc < this.size.x && yc < this.size.y) {
                            var c = this.world[xc][yc];
                            if (c instanceof Unit) {
                                if (c.tribe != u.tribe) {
                                    friends = false;
                                    //If really close, make them the target
                                    if ((i > -2) && (i < 2) && (j > -2) && (j < 2)) {
                                        target = c;
                                        targets.push(c);
                                    }
                                } else if (c.str > u.str) {
                                    alpha = false;
                                }
                            }
                        }
                    }
                }
            }

            //If everyone is on your team and everyone is less str than you, revolt
            if (friends && alpha) {
                //Revolt
                u.tribe = u.id;
            } else if (target != 0) {
                var tar;
                for (var t = 0; t < targets.length; t++) {
                    tar = targets[t];
                    //Attack target - Bigger strength transfers tribeID
                    if (tar.str > u.str) {
                        u.tribe = tar.tribe;
                    } else if (tar.str < u.str) {
                        tar.tribe = u.tribe;
                    } else {
                        //Equal case is random
                        var r = Math.floor(Math.random() * 2);
                        if (r == 0) {
                            tar.tribe = u.tribe;
                        } else {
                            u.tribe = tar.tribe;
                        }
                    }
                }
            }
            //Everyone walks each loop.
            var s = Math.floor(Math.random() * 2);
            var t = (Math.floor(Math.random() * 2) * 2) - 1;
            var deltax = 0;
            var deltay = 0;
            if (s == 0) {
                deltax = t;
            } else {
                deltay = t;
            }
            //u.attemptMove(deltax, deltay, world);
            var nx = u.loc.x + deltax;
            var ny = u.loc.y + deltay;
            //if (inside(nx, ny, world) && empty(nx, ny, world)) {
            if ((nx >= 0) && (nx < this.size.x) && (ny >= 0) && (ny < this.size.y) && (this.world[nx][ny] === 0)) {
                this.world[u.loc.x][u.loc.y] = 0;
                this.world[nx][ny] = u;
                u.loc.x = nx;
                u.loc.y = ny;
            }
        }
    }
    draw () {
        this.ctx.clearRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
        this.drawGrid();
        //Draw each unit
        for (var i = 0; i < this.units.length; i++) {
            var val = this.units[i];
            var c = this.colors.get(val.tribe);
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.rect(this.size.x0 + this.scale * val.loc.x + 2, this.size.y0 + this.scale * val.loc.y + 2, this.scale - 3, this.scale - 3);
            this.ctx.fill();
        }
    }
    drawGrid () {
        // this.ctx.fillStyle("grey");
        this.ctx.strokeStyle = "darkgrey";
        this.ctx.lineWidth = 1;
        for (var i = 0; i < this.size.x + 1; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.scale + this.size.x0 + 0.5, this.size.y0 + 0.5);
            this.ctx.lineTo(i * this.scale + this.size.x0 + 0.5, this.size.y0 + this.size.h + 0.5);
            this.ctx.stroke();
        }
        for (var j = 0; j < this.size.y + 1; j++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5, j * this.scale + this.size.y0 + 0.5);
            this.ctx.lineTo(this.size.x0 + this.size.w + 0.5, j * this.scale + this.size.y0 + 0.5);
            this.ctx.stroke();
        }
    }
    getSize () {
        //Return 0 point of drawing grid, width of grid in pixels/cells
        var width = this.canvas.get(0).width;
        var height = this.canvas.get(0).height;
        var xn = Math.floor((width-this.scale) / this.scale);
        var yn = Math.floor((height-this.scale) / this.scale);
        return {
            x: xn,
            y: yn,
            w: xn * this.scale,
            h: yn * this.scale,
            x0: (width - xn * this.scale) / 2,
            y0: (height - yn * this.scale) / 2
        };
    }
    resetWorld () {
        this.world = [];
        for (var i = 0; i < this.size.x; i++) {
            this.world[i] = [];
            for (var j = 0; j < this.size.y; j++) {
                this.world[i][j] = 0;
            }
        }
    }
    reset () {
        //Update Size
        this.size = this.getSize();
        this.resetWorld();
        this.units = [];

        //Fill new units
        var n = this.size.x * this.size.y * this.fillfactor * 0.01;
        this.colors = new ColorPicker(n);   //Used later when drawing units

        for (var i = 1; i < n + 1; i++) {
            var collision = true;
            while (collision) {
                var xr = Math.floor(Math.random() * this.size.x);
                var yr = Math.floor(Math.random() * this.size.y);
                var str = Math.floor(Math.random() * 5);
                if (!(this.world[xr][yr] instanceof Unit)) {
                    this.units.push(new Unit(i, str, i, xr, yr));
                    this.world[xr][yr] = this.units[i - 1];
                    collision = false;
                }
            }
        }
    }
}

class InputHandler {
    constructor (sim){
        this.sim = sim;
        // TODO - Replace all the onchange listeners with a giant key handler.
        // same as with the traffic and forces things.  
        this.sim.canvas.on('keypress', this.handleKey.bind(this));      
    }
    handleKey (key){
        switch(key.which){
            case 113: // q fps down
                if(this.sim.fps > 1){
                    this.sim.fps--;
                    $(this.rangefps).text(""+this.sim.fps);
                }
                break;
            case 119:  // w - fps 'up'
                if(this.sim.fps < 60){
                    this.sim.fps++;
                    $(this.rangefps).text(""+this.sim.fps);
                }
                break;
            case 97:   // a - fill down
                if(this.sim.fillfactor > 1){
                    this.sim.fillfactor--;
                    $(this.rangefill).text(""+this.sim.fillfactor);
                    this.sim.reset();
                }
                break; 
            case 115:  // s - fill up
                if(this.sim.fillfactor < 100){
                    this.sim.fillfactor++;
                    $(this.rangefill).text(""+this.sim.fillfactor);
                    this.sim.reset();    
                }
                break;
            case 122:  // z - scale down
                if(this.sim.scale > 5){
                    this.sim.scale--;
                    $(this.rangescale).text(""+this.sim.scale);
                    this.sim.reset();
                }
                break; 
            case 120:  // x - scale up
                if(this.sim.scale < 20){
                    this.sim.scale++;
                    $(this.rangescale).text(""+this.sim.scale);
                    this.sim.reset();
                }
                break;  
        }
    }
    setFieldsFPS (r, v) {
        this.rangefps = r;
        this.viewfps = v;
        return this;
    }
    setFieldsFill (r, v) {
        this.rangefill = r;
        this.viewfill = v;
        return this;
    }
    setFieldsScale (r, v) {
        this.rangescale = r;
        this.viewscale = v;
        return this;
    }
    setFieldsLookR (r, v) {
        this.rangelook = r;
        this.viewlook = v;
        return this;
    }
    attachInputs () {
        //Fill Setting
        $(this.rangefill).on('change', function (e) {
            var v = $(this.rangefill).val();
            this.sim.fillfactor = v;
            $(this.viewfill).text(String(v));
            this.sim.reset();
        }.bind(this));

        //FPS Setting
        $(this.rangefps).on('change', function (e) {
            var v = $(this.rangefps).val();
            this.sim.fps = v;
            $(this.viewfps).text(String(v));
            this.sim.reset();
        }.bind(this));

        //Scale Settings
        $(this.rangescale).on('change', function (e) {
            var v = $(this.rangescale).val();
            this.sim.scale = v;
            $(this.viewscale).text(String(v));
            this.sim.reset();
        }.bind(this));

        //Look Radius
        $(this.rangelook).on('change', function (e) {
            var v = $(this.rangelook).val();
            this.sim.look = v;
            $(this.viewlook).text(String(v));
            this.sim.reset();
        }.bind(this));
    }
}

//Now we just make a sim
var canvas = $("#tribescanvas");
var sim = new Simulation(canvas);


/***/ })
/******/ ]);