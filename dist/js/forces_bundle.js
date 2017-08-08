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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);


var $ = jQuery;
var QUAD = {}; // global var for the quadtree

QUAD.init = function (args) {

    var node;
    var TOP_LEFT = 0;
    var TOP_RIGHT = 1;
    var BOTTOM_LEFT = 2;
    var BOTTOM_RIGHT = 3;
    var PARENT = 4;
    // assign default values
    args.maxChildren = args.maxChildren || 2;
    args.maxDepth = args.maxDepth || 4;
    /**
     * Node creator. You should never create a node manually. the algorithm takes
     * care of that for you.
     */
    node = function (x, y, w, h, depth, maxChildren, maxDepth) {

        var items = [], // holds all items
            nodes = []; // holds all child nodes

        // returns a fresh node object
        return {
            x: x, // top left point
            y: y, // top right point
            w: w, // width
            h: h, // height
            depth: depth, // depth level of the node

            /**
             * iterates all items that match the selector and invokes the supplied callback on them.
             */
            retrieve: function (item, callback, instance) {
                for (var i = 0; i < items.length; ++i) {
                    (instance) ? callback.call(instance, items[i]) : callback(items[i]);
                }
                // check if node has subnodes
                if (nodes.length) {
                    // call retrieve on all matching subnodes
                    this.findOverlappingNodes(item, function (dir) {
                        nodes[dir].retrieve(item, callback, instance);
                    });
                }
            },
            /**
             * Adds a new Item to the node.
             *
             * If the node already has subnodes, the item gets pushed down one level.
             * If the item does not fit into the subnodes, it gets saved in the
             * "children"-array.
             *
             * If the maxChildren limit is exceeded after inserting the item,
             * the node gets divided and all items inside the "children"-array get
             * pushed down to the new subnodes.
             */
            insert: function (item) {

                var i;
                if (nodes.length) {
                    // get the node in which the item fits best
                    i = this.findInsertNode(item);
                    if (i === PARENT) {
                        // if the item does not fit, push it into the
                        // children array
                        items.push(item);
                    } else {
                        nodes[i].insert(item);
                    }
                } else {
                    items.push(item);
                    //divide the node if maxChildren is exceeded and maxDepth is not reached
                    if (items.length > maxChildren && this.depth < maxDepth) {
                        this.divide();
                    }
                }
            },
            /**
             * Find a node the item should be inserted in.
             */
            findInsertNode: function (item) {
                // left
                if (item.x + item.w < x + (w / 2)) {
                    if (item.y + item.h < y + (h / 2)) {
                        return TOP_LEFT;
                    }
                    if (item.y >= y + (h / 2)) {
                        return BOTTOM_LEFT;
                    }
                    return PARENT;
                }

                // right
                if (item.x >= x + (w / 2)) {
                    if (item.y + item.h < y + (h / 2)) {
                        return TOP_RIGHT;
                    }
                    if (item.y >= y + (h / 2)) {
                        return BOTTOM_RIGHT;
                    }
                    return PARENT;
                }

                return PARENT;
            },
            /**
             * Finds the regions the item overlaps with. See constants defined
             * above. The callback is called for every region the item overlaps.
             */
            findOverlappingNodes: function (item, callback) {
                // left
                if (item.x < x + (w / 2)) {
                    if (item.y < y + (h / 2)) {
                        callback(TOP_LEFT);
                    }
                    if (item.y + item.h >= y + h / 2) {
                        callback(BOTTOM_LEFT);
                    }
                }
                // right
                if (item.x + item.w >= x + (w / 2)) {
                    if (item.y < y + (h / 2)) {
                        callback(TOP_RIGHT);
                    }
                    if (item.y + item.h >= y + h / 2) {
                        callback(BOTTOM_RIGHT);
                    }
                }
            },
            /**
             * Divides the current node into four subnodes and adds them
             * to the nodes array of the current node. Then reinserts all
             * children.
             */
            divide: function () {
                var width, height, i, oldChildren;
                var childrenDepth = this.depth + 1;
                // set dimensions of the new nodes
                width = (w / 2);
                height = (h / 2);
                // create top left node
                nodes.push(node(this.x, this.y, width, height, childrenDepth, maxChildren, maxDepth));
                // create top right node
                nodes.push(node(this.x + width, this.y, width, height, childrenDepth, maxChildren, maxDepth));
                // create bottom left node
                nodes.push(node(this.x, this.y + height, width, height, childrenDepth, maxChildren, maxDepth));
                // create bottom right node
                nodes.push(node(this.x + width, this.y + height, width, height, childrenDepth, maxChildren, maxDepth));
                oldChildren = items;
                items = [];
                for (i = 0; i < oldChildren.length; i++) {
                    this.insert(oldChildren[i]);
                }
            },
            /**
             * Clears the node and all its subnodes.
             */
            clear: function () {
                var i;
                for (i = 0; i < nodes.length; i++) {
                    nodes[i].clear();
                }
                items.length = 0;
                nodes.length = 0;
            },
            /*
             * convenience method: is not used in the core algorithm.
             * ---------------------------------------------------------
             * returns this nodes subnodes. this is usful if we want to do stuff
             * with the nodes, i.e. accessing the bounds of the nodes to draw them
             * on a canvas for debugging etc...
             */
            getNodes: function () {
                return nodes.length ? nodes : false;
            }
        };
    };
    return {
        root: (function () {
            return node(args.x, args.y, args.w, args.h, 0, args.maxChildren, args.maxDepth);
        }()),
        insert: function (item) {

            var len, i;
            if (item instanceof Array) {
                len = item.length;
                for (i = 0; i < len; i++) {
                    this.root.insert(item[i]);
                }

            } else {
                this.root.insert(item);
            }
        },
        retrieve: function (selector, callback, instance) {
            return this.root.retrieve(selector, callback, instance);
        },
        clear: function () {
            this.root.clear();
        }
    };
};
var vmath = {};
vmath.newvector = function (x, y) {
    return {
        i: x,
        j: y
    };
};
vmath.dot = function (a, b) {
    return (a.i * b.i) + (a.j * b.j);
};
vmath.length = function (a) {
    return Math.sqrt(Math.pow(a.i, 2) + Math.pow(a.j, 2));
};
vmath.norm = function (a) {
    var d = vmath.length(a);
    return {
        i: a.i / d,
        j: a.j / d
    };
};
vmath.times = function (a, d) {
    return {
        i: d * a.i,
        j: d * a.j
    };
};
vmath.add = function (a, b) {
    return {
        i: a.i + b.i,
        j: a.j + b.j
    };
};
vmath.sub = function (a, b) {
    return {
        i: a.i - b.i,
        j: a.j - b.j
    };
};
vmath.print = function (a) {
    return "(" + (a.i).toFixed(2) + ", " + (a.j).toFixed(2) + ")";
};

//Simulation Class
var Simulation = function () {
    this.canvas = document.getElementById('forcecanvas');
    this.screen = this.canvas.getContext('2d');
    this.screenSize = {x: this.canvas.width, y: this.canvas.height};
    //Setting up the container for all the discs and point sources
    this.discs = [];
    this.points = [];
    //Statistics Fields
    this.frames = [];
    this.frame = 0;
    this.fsum = 0;
    this.fave = 0;
    this.delta = 1;
    this.last = new Date().getTime();
    this.fps = 60;
    this.slowChecks = 0;
    this.checkCounter = 0;
    this.energy = 0;
    for (var i = 0; i < 100; i++) {
        this.frames.push(0);
    }
    this.drawInfo = false;
    //Starting elements
    this.points.push(new PointSource(197.5, 167.2, 72, 1.8));
    this.discs.push(new Disc(337.5, 93, 8, -1.09, 0.9));
    //Create a quadtree for quick collision detection 
    var args = {
        x: 0,
        y: 0,
        w: this.canvas.width,
        h: this.canvas.height,
        maxChildren: 3
    };
    this.tree = QUAD.init(args);
    this.showGrid = false;
    //GifMaker for saving clips
    // this.gif = new GifMaker(this.screen);
    // this.recording = false;
    //Holds all the event handlers and their functions
    //  -makes it easier to animate control events
    this.input = new InputHandler(this);
    //tick() is the main 'game loop', requestAnimationFrame calls tick 
    var self = this;
    var tick = function () {
        self.update();
        self.draw();
        self.input.draw(); //For fancy control animations! woot
        // self.gif.update();
        requestAnimationFrame(tick);
    };
    //First call to tick to start things off.
    tick();
};
Simulation.prototype = {
    update: function () {
        this.tree.clear();
        this.tree.insert(this.discs);
        this.checkCounter = 0;
        this.energy = 0;
        //For each disc
        for (var i = 0; i < this.discs.length; i++) {
            var b, nearby, collided = false;
            b = this.discs[i];
            //For all nearby discs
            nearby = this.tree.retrieve(b, function (item) {
                if (notSame(b, item)) {
                    this.checkCounter++;
                    collided = resolveCollision(b, item);
                }
            }, this);
            if (!collided) {
                //If resolveCollision doesnt detect a hit, normal update
                b.update(this.screenSize);
            }
            //Add energy to total.
            this.energy += b.energy();
        }

        this.tree.clear();
        this.tree.insert(this.discs);
        //For each Point, find nearby discs and act on them
        for (var i = 0; i < this.points.length; i++) {
            var p, nearby;
            p = this.points[i];
            //For all nearby discs
            nearby = this.tree.retrieve(p, function (item) {
                //console.log(item);
                if (p.inRange(item)) {
                    p.applyForce(item);
                }
            }, this);
        }
        if (this.drawInfo) {
            this.updateStats();
        }
    },
    updateStats: function () {
        this.delta = (new Date().getTime() - this.last) / 1000;
        this.last = new Date().getTime();
        this.fps = 1 / this.delta;
        this.slowChecks = this.discs.length * (this.discs.length - 1);
        //100 Frame Average - FPS
        if (!isNaN(this.frames[this.frame])) {
            this.fsum -= this.frames[this.frame];
        }
        if (!isNaN(this.fps)) {
            this.fsum += this.fps;
            this.frames[this.frame] = this.fps;
        } else {
            this.frames[this.frame] = 0;
        }
        this.fave = (this.fsum / 100).toFixed(2);
        this.frame = (this.frame + 1) % 100;
    },
    draw: function () {
        this.screen.clearRect(0, 0, this.screenSize.x, this.screenSize.y);
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].draw(this.screen);
        }
        for (var i = 0; i < this.discs.length; i++) {
            this.discs[i].draw(this.screen);
        }
        if (this.showGrid) {
            drawQuadtree(this.tree.root, this.screen);
        }
        if (this.drawInfo) {
            this.drawStats(this.screen);
        }
        this.input.draw();
    },
    drawStats: function (screen) {
        var d = 18;
        screen.fillStyle = "Grey";
        screen.font = "normal 14pt courier";
        screen.fillText("         N: " + this.discs.length, 10, d * 1);
        screen.fillText("       FPS: " + (this.fps).toFixed(1), 10, d * 2);
        screen.fillText("  100F Ave: " + this.fave, 10, d * 3);
        screen.fillText("N^2 Checks: " + this.slowChecks, 10, d * 4);
        screen.fillText(" QT Checks: " + this.checkCounter, 10, d * 5);
        screen.fillText("|E| of System: " + this.energy, 10, d * 6);
    }
};
//Disc Class 
var Disc = function (xi, yi, radius, xv, yv) {
    var center, radius, vel, x, y, w, h;
    this.center = vmath.newvector(xi, yi);
    this.radius = radius;
    this.vel = vmath.newvector(xv, yv);
    //To be used with the quad tree, need the following available fields
    this.x = this.center.i - radius; //Top Left
    this.y = this.center.j - radius;
    this.w = 2 * radius;
    this.h = 2 * radius;
};
Disc.prototype = {
    update: function (screenSize) {
        //Check if hitting walls
        //x
        if (this.center.i + this.vel.i <= this.radius || this.center.i + this.radius + this.vel.i >= screenSize.x) {
            this.vel.i = -1 * this.vel.i;
        } else {
            this.center.i += this.vel.i;
        }
        //y
        if (this.center.j + this.vel.j <= this.radius || this.center.j + this.radius + this.vel.j >= screenSize.y) {
            this.vel.j = -1 * this.vel.j;
        } else {
            this.center.j += this.vel.j;
        }
        //Update quad tree fields
        this.x = this.center.i - this.radius;
        this.y = this.center.j - this.radius;
    },
    setVel: function (a) {
        this.vel.i = a.i;
        this.vel.j = a.j;
    },
    setPos: function (a) {
        this.center.i = a.i;
        this.center.j = a.j;
        this.x = a.i - this.radius;
        this.y = a.j - this.radius;
    },
    energy: function () {
        return Math.pow(this.vel.i, 2) + Math.pow(this.vel.j, 2);
    },
    draw: function (screen) {
        screen.beginPath();
        screen.arc(this.center.i, this.center.j, this.radius, 0, 2 * Math.PI, false);
        screen.fillStyle = 'gray';
        screen.fill();
        screen.beginPath();
        screen.arc(this.center.i, this.center.j, this.radius, 0, 2 * Math.PI, false);
        screen.lineWidth = 2;
        screen.strokeStyle = 'black';
        screen.stroke();
    }
};
//'Gravity' Point Source 
var PointSource = function (xi, yi, radius, power) {
    var center, radius, power, x, y, w, h;
    //Basic Fields
    this.center = vmath.newvector(xi, yi);
    this.radius = radius;
    this.G = 0.15;
    //for drawing
    this.power = power;
    this.powerscale = 3;
    this.n = this.power * this.powerscale;
    this.b = 2;
    this.a = 6 * (this.radius - this.n) / (this.n * (this.n + 1) * (2 * this.n + 1));
    //QT Fields
    this.x = this.center.x - radius; //Top Left
    this.y = this.center.y - radius;
    this.w = 2 * radius;
    this.h = 2 * radius;
};
PointSource.prototype = {
    inRange: function (disc) {
        return (Math.abs(vmath.length(vmath.sub(disc.center, this.center))) < this.radius + disc.radius);
    },
    applyForce: function (disc) {
        /* The point source applies a force on the line from the point to
         * the center of the disc.  this force changes the velocity by a 
         * set amount each frame.
         * 
         * The amount of velocity subtracted from each component is a function of
         * distance and the 'mass' of the point source
         * 
         * V' = V - c1*f(r)*C 
         * 
         * Gonna go with linear, not quadratic,  over d^2 is boring.
         */
        var dist = vmath.length(vmath.sub(disc.center, this.center));
        var factor = this.G * this.power * disc.radius / (dist); //c1*f(r)
        var vprime = vmath.sub(disc.vel, vmath.times(vmath.sub(disc.center, this.center), factor)); //V - factor*C
        disc.setVel(vprime);
    },
    draw: function (screen) {
        var s = function (x, a, b) {
            return a * x * x + b;
        };
        var sums = function (x, a, b, i, j) {
            //Series a*i^2+b, a and b defined in pointsource.
            //sum_(x=n)^i x^2 = -1/6 (i-(1+j)) (2 i^2-(1-2 j) i-(2-j)) = S
            var S = (-1 / 6) * (i - 1 - j) * (2 * i * i - i + 2 * j * i - 2 + j);
            var ret = Math.abs((i - j) * b + a * S);
            return ret > 0 ? ret : 0;
        };
        var dist = function (p, i) {
            //Should return the loction of the ith circle of point p
            //higher power = more circles, closer together
            //lower power = less circles, spaced further apart
            return s(i, p.a, p.b) + sums(i, p.a, p.b, 0, i - 1);
        };
        for (var i = 1; i < this.n + 1; i++) {
            var c = Math.floor(255 - 255 * 0.75 * (1 - (dist(this, i) / this.radius)));
            if (c > 220)
                c = 220;
            screen.strokeStyle = "rgb(" + c + "," + c + "," + c + ")";
            screen.beginPath();
            screen.arc(this.center.i, this.center.j, dist(this, i), 0, 2 * Math.PI, true);
            screen.stroke();
        }
    }
};
// var GifMaker = function (c) {
//     this.ctx = document.getElementById('gamecanvas');
//     this.gif = {};
//     this.recording = false;
//     this.i = 0;
// };
// GifMaker.prototype = {
//     startRecording: function () {
//         this.recording = true;
//         this.gif = new GIF({
//             workers: 1,
//             quality: 10,
//             transparent: '#FFF'
//         });
//         console.log("> Started Recording Canvas Frames");
//     },
//     stopRecording: function () {
//         this.recording = false;
//         this.gif.on('finished', function (blob) {
//             window.open(URL.createObjectURL(blob));
//         });
//         console.log('> Rendering Gif');
//         this.gif.render();
//         this.i = 0;
//     },
//     update: function () {
//         if (this.recording) {
//             this.gif.addFrame(this.ctx, {copy: true, delay: 0});
//             console.log('> Added Frame ' + this.i);
//             this.i++;
//         }
//     }
// };
var InputHandler = function (s) {
    this.sim = s;
    this.c = s.canvas;
    this.rect = s.canvas.getBoundingClientRect();

    this.addingDisc = true;
    this.addingPoint = false;
    
    this.sim.canvas.onkeypress = this.handleKey.bind(this);
    
    //Fields used by both during click events
    this.addradius = 0;
    this.addpower = 0;
    this.addvelocity = vmath.newvector(0, 0);
    this.addtimer = 0;
    this.maxdiscradius = 20;
    this.maxvelocity = 4.5;
    this.velocityscale = 0.01;
    this.maxpointradius = 85;
    //Click control
    this.clickloc = 0;
    this.mouseloc = 0;
    this.clicking = false;
    this.moved = false;
    this.sim.canvas.onmousedown = this.handleClick.bind(this);
};
InputHandler.prototype = {
    handleKey: function(key){
        switch(key.which){
            case 99: // c
                this.clrAll();
                break;
            case 103: // g
                this.toggleGrid();
                break;
            case 113: // q
                window.location.href="../index.html";
                break;
            case 115: // s
                this.toggleStats();
                break;
            case 100: // d
                this.selectDisc();
                this.unselectMass();
                this.addingDisc = true;
                this.addingPoint = false;
                break;
            case 109: // m
                this.selectMass();
                this.unselectDisc();
                this.addingPoint = true;
                this.addingDisc  = false;
                break;
        }
    },
    selectDisc: function() {
        $("#disc").text("[d]isc  |")
    },
    selectMass: function() {
        $("#mass").text("| [m]ass  |")
    },
    unselectDisc: function() {
        $("#disc").text("'d'isc  |")
    },
    unselectMass: function() {
        $("#mass").text("|  'm'ass  |")
    },
    draw: function () {
        if (this.clicking) {
            if (this.addingPoint) {
                this.draw_addPoint();
            } else if (this.addingDisc) {
                this.draw_addDisc();
            }
        }
    },
    draw_addPoint: function () {
        //Draw circle of radius center to point
        var screen = this.sim.screen;
        screen.beginPath();
        screen.arc(this.clickloc.i, this.clickloc.j, this.addradius, 0, 2 * Math.PI, false);
        screen.lineWidth = 2;
        screen.strokeStyle = 'black';
        screen.stroke();
    },
    draw_addDisc: function () {
        var screen = this.sim.screen;
        //If havent moved draw circle
        if (!this.moved) {
            screen.beginPath();
            screen.arc(this.clickloc.i, this.clickloc.j, this.addradius, 0, 2 * Math.PI, false);
            screen.fillStyle = 'gray';
            screen.fill();
            screen.beginPath();
            screen.arc(this.clickloc.i, this.clickloc.j, this.addradius, 0, 2 * Math.PI, false);
            screen.lineWidth = 2;
            screen.strokeStyle = 'black';
            screen.stroke();
        } else {
            drawLine(screen, this.clickloc, this.mouseloc);
            screen.beginPath();
            screen.arc(this.clickloc.i, this.clickloc.j, this.addradius, 0, 2 * Math.PI, false);
            screen.fillStyle = 'gray';
            screen.fill();
            screen.beginPath();
            screen.arc(this.clickloc.i, this.clickloc.j, this.addradius, 0, 2 * Math.PI, false);
            screen.lineWidth = 2;
            screen.strokeStyle = 'black';
            screen.stroke();
        }


    },
    addDisc: function (event) {
        var c = this.sim.canvas;
        this.addradius = 6;
        //Add interval timeout to increase disc size
        var discSizeTimeout = setInterval(function () {
            this.addradius += 2;
        }.bind(this), 800);
        //On mouse move - if the pointer leaves the circle, switch to
        // velocity onmousemove
        this.c.onmousemove = function (e) {
            this.mouseloc = getMousePos( c, e );
            var dist = Math.abs(vmath.length(vmath.sub(this.clickloc, this.mouseloc)));
            if (dist > this.addradius) {
                //Clear the timeout callback/set move flag
                clearInterval(discSizeTimeout);
                this.moved = true;
                //Add new onmousemove callback to track mouse position.
                this.c.onmousemove = function (e) {
                    this.mouseloc = getMousePos( c, e );
                    //mouse = click+line
                    //line = mouse-click
                    var line = vmath.sub(this.mouseloc, this.clickloc);
                    this.addvelocity = vmath.times(line, this.velocityscale);
                }.bind(this);
                this.c.onmouseup = function (e) {
                    if (this.addradius > 0) {
                        this.sim.discs.push(new Disc(this.clickloc.i, this.clickloc.j, this.addradius, this.addvelocity.i, this.addvelocity.j));
                        console.log("Disc: (" + this.clickloc.i + ", " + this.clickloc.j + "), " + this.addradius + ", (" + this.addvelocity.i + ", " + this.addvelocity.j + ")");
                    }
                    this.c.onmousemove = null;
                    this.c.onmouseup = null;
                    this.clicking = false;
                    this.moved = false;
                }.bind(this);
            }
        }.bind(this);
        this.c.onmouseup = function (e) {
            if (this.addradius > 0) {
                this.sim.discs.push(new Disc(this.clickloc.i, this.clickloc.j, this.addradius, this.addvelocity.i, this.addvelocity.j));
                console.log("Disc: (" + this.clickloc.i + ", " + this.clickloc.j + "), " + this.addradius + ", (" + this.addvelocity.i + ", " + this.addvelocity.j + ")");
            }
            this.c.onmousemove = null;
            this.c.onmouseup = null;
            this.clicking = false;
            this.moved = false;
        }.bind(this);
    },
    addPoint: function (event) {
        this.c.onmousemove = function (e) {
            this.mouseloc = getMousePos( this.c, e );
            var dist = Math.abs(vmath.length(vmath.sub(this.clickloc, this.mouseloc)));
            dist = (dist < this.maxpointradius) ? dist : this.maxpointradius;
            this.addradius = dist;
        }.bind(this);
        this.c.onmouseup = function (e) {
            //xi, yi, radius, power
            if (this.addradius > 0) {
                this.sim.points.push(new PointSource(this.clickloc.i, this.clickloc.j, this.addradius, this.addradius / 40));
                console.log("Point: (" + this.clickloc.i + ", " + this.clickloc.j + "), " + this.addradius + ", " + this.addradius / 40);
            }
            //Reset stuff
            this.c.onmousemove = null;
            this.c.onmouseup = null;
            this.clicking = false;
        }.bind(this);
    },
    clrAll: function () {
        this.sim.discs = [];
        this.sim.points = [];
    },
    toggleBold: function (ele) {
        var style = ele.style;
        if (style.fontWeight == "") {
            style.fontWeight = "bold";
        } else {
            style.fontWeight = "";
        }
    },
    toggleGrid: function () {
        this.sim.showGrid = !this.sim.showGrid;
    },
    toggleStats: function () {
        this.sim.drawInfo = !this.sim.drawInfo;
    },
    // record: function () {
    //     if (!this.sim.recording) {
    //         this.sim.gif.startRecording();
    //         this.sim.recording = true;
    //         //Change Style of Button to light red background
    //     } else {
    //         this.sim.gif.stopRecording();
    //         this.sim.recording = true;
    //         //Change style of Button back to white background
    //     }
    // },
    handleClick: function (event) {
        
        var mloc = getMousePos( this.c, event );
        
        this.clicking = true;
        this.clickloc = vmath.newvector(mloc.i, mloc.j);
        this.mouseloc = vmath.newvector(mloc.i, mloc.j);
        this.addradius = 0;
        if (this.addingPoint) {
            this.addPoint(event);
        } else if (this.addingDisc) {
            this.addDisc(event);
        }
    }
};
//Global functions
var getMousePos = function (c, e) {
//Get mouse x, y
    var mx, my;
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
    return { i: mx, j: my };
};

var resolveCollision = function (b1, b2) {
//Setting up vectors
    var C = vmath.sub(b1.center, b2.center);
    var movement = vmath.sub(b2.vel, b1.vel);
    var long = vmath.length(movement);
    var dist = vmath.length(C) - b1.radius - b2.radius;
    var lenM = vmath.length(movement);
    //First Test - Radii vs Movement vector
    if (lenM < dist) {
        return false;
    }

    var movenorm = vmath.norm(movement);
    var D = vmath.dot(C, movenorm);
    //Move-towards test
    if (D <= 0) {
        return false;
    }

    var lenC = vmath.length(C);
    var F = lenC * lenC - D * D;
    var fsumRad2 = (b1.radius + b2.radius) * (b1.radius + b2.radius);
    //Second Move Test   
    if (F >= fsumRad2) {
        return false;
    }

    var T = fsumRad2 - F;
    if (T < 0) {
        return false;
    }
    var distance = D - Math.sqrt(T);
    //Movement length test
    if (vmath.length(movement) < distance) {
        return false;
    }

    var short = vmath.length(vmath.norm(movement), distance);
    var ratio = (short / long);
    //New positions
    b1.setPos(vmath.add(b1.center, vmath.times(b1.vel, ratio)));
    b2.setPos(vmath.add(b2.center, vmath.times(b2.vel, ratio)));
    // We use the new disc locations to calculate the new velocity vectors
    var n = vmath.norm(vmath.sub(b2.center, b1.center));
    var a1 = vmath.dot(b1.vel, n);
    var a2 = vmath.dot(b2.vel, n);
    var adif = a1 - a2;
    var rad = b1.radius + b2.radius;
    var p = 2 * (adif / rad);
    //Set new velocities
    b1.setVel(vmath.sub(b1.vel, vmath.times(n, p * b2.radius)));
    b2.setVel(vmath.add(b2.vel, vmath.times(n, p * b1.radius)));
    return true;
};
var randomDisc = function (screensize) {
    var rad = Math.random() * 10 + 5; // 5 < rad < 15
    var xloc = Math.random() * (screensize.x - 2 * rad) + rad; // rad < xloc < screensize-rad
    var yloc = Math.random() * (screensize.y - 2 * rad) + rad; // rad < xloc < screensize-rad      
    var xv = Math.random() * 6 - 3; //-3 < xv < 3
    var yv = Math.random() * 6 - 3; //-3 < yv < 3
    return new Disc(xloc, yloc, rad, xv, yv);
};
var randomPoint = function (screensize) {
    var rad = Math.random() * 50 + 55;
    var xloc = Math.random() * (screensize.x - 2 * rad) + rad; // rad < xloc < screensize-rad
    var yloc = Math.random() * (screensize.y - 2 * rad) + rad; // rad < xloc < screensize-rad      
    var pow = Math.random() * 1 + 1;
    return new PointSource(xloc, yloc, rad, pow);
};
var drawLine = function (screen, a, b) {
    screen.beginPath();
    screen.strokeStyle = 'black';
    screen.moveTo(a.i, a.j);
    screen.lineTo(b.i, b.j);
    screen.stroke();
};
var drawQuadtree = function (node, screen) {
    var nodes = node.getNodes(), i;
    if (nodes) {
        for (i = 0; i < nodes.length; i++) {
            drawQuadtree(nodes[i], screen);
        }
    }
    screen.beginPath();
    screen.rect(node.x, node.y, node.w, node.h);
    screen.strokeStyle = 'grey';
    screen.stroke();
    screen.closePath();
};
var notSame = function (b1, b2) {
    var dx, dy;
    dx = b1.center.i - b2.center.i;
    dy = b1.center.j - b2.center.j;
    return !((dx == 0) && (dy == 0));
};
//'main'
window.addEventListener('load', function () {
    console.log("> Starting a new Simulation");
    var sim = new Simulation();
});

/***/ })
/******/ ]);