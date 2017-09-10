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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antbrain_basic_basic_simulation_js__ = __webpack_require__(13);


var sim = new __WEBPACK_IMPORTED_MODULE_0__antbrain_basic_basic_simulation_js__["a" /* default */]();

sim.simulate_canvas(0, document.getElementById('antcanvas'));


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simulation_js__ = __webpack_require__(14);


class BasicSimulation extends __WEBPACK_IMPORTED_MODULE_0__simulation_js__["a" /* default */] {
	constructor(){
		super();
	}

	simulate_headless(ind){

	}

	simulate_canvas(ind, cnv){
		this.draw( cnv, this.food, this.loc, this.SCALE );
	}
}

/* harmony default export */ __webpack_exports__["a"] = (BasicSimulation);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Simulation {
	constructor(){
		this.size = { x: 20, y: 15 };	// Dimensions of Board
		this.SCALE = 20;
		this.loc  = { x: 10, y: 10};	// Location of Bug
		this.FOOD_FILL = 0.25;			// Amount of food (in % of cells)
		this.food = build_food_array(this.size, this.FOOD_FILL); // Food Array
	}

	draw( cnv, food, bug, scale ){
		var ctx = cnv.getContext("2d");
		var size = {x: food[0].length, y: food.length};
		var offset = calc_offsets(cnv, size, scale);

		// Fill Background
		ctx.beginPath();
		ctx.rect(offset.x,offset.y,size.x*scale,size.y*scale);
		ctx.fillStyle = "darkgrey";
		ctx.fill(); 

		// Draw Grid
		var crosssize = 0.25*scale;
		var blanksize = scale - crosssize;
		ctx.strokeStyle = "grey";
			// vertical lines
		for (var i = 1; i < size.x; i++){
			ctx.setLineDash([crosssize, blanksize]);
		    ctx.beginPath();
		    ctx.moveTo(i * scale + offset.x + 0.5, offset.y + 0.5 + blanksize + (crosssize / 2));
		    ctx.lineTo(i * scale + offset.x + 0.5, offset.y + (size.y-1)*scale+crosssize + 0.5);
		    ctx.stroke();
		}
			// horizontal
		for (var j = 1; j < size.y; j++){
			ctx.setLineDash([crosssize, blanksize]);
		    ctx.beginPath();
		    ctx.moveTo(offset.x + 0.5+ blanksize + (crosssize / 2), j*scale + offset.y + 0.5);
		    ctx.lineTo((size.x-1)*scale+offset.x + crosssize+0.5, j*scale + offset.y + 0.5);
		    ctx.stroke();
		}

		// Draw Food
		for (var i = 0; i < size.x; i++){
			for (var j = 0; j < size.y; j++){
				if( food[j][i] == 1 ){
					// Draw circle in the center of (i,j)th cell
					var center = {x: i*scale+0.5*scale+offset.x+0.5, 
								  y: j*scale+0.5*scale+offset.y+0.5};
					ctx.beginPath();
					ctx.arc(center.x, center.y, 0.25*scale, 0, 2*Math.PI)
					ctx.fillStyle = "green";
					ctx.fill();
				}
			}
		}

		// Draw Agent
		ctx.beginPath();
		ctx.rect(bug.x*scale+offset.x+0.5+0.25*scale, 
				 bug.y*scale+offset.y+0.5+0.25*scale,
				 0.5+(1-2*0.25)*scale,
				 0.5+(1-2*0.25)*scale);
		ctx.fillStyle = "black";
		ctx.fill();
	}
}

function build_food_array(dim, fill){
	var ret = [];
	for (var j = 0; j < dim.y; j++){
		ret[j] = [];
		for (var i = 0; i < dim.x; i++  ){
			if( Math.random() < fill ){
				ret[j][i] = 1;
			} else {
				ret[j][i] = 0;
			}
		}
	}
	return ret;
}

function calc_offsets(cnv, size, scale){
	// Half the difference of the total size in each dir.
	var dx = 0.5*(cnv.width - size.x*scale);
	var dy = 0.5*(cnv.height - size.y*scale);
	return {x: dx, y: dy};
}

/* harmony default export */ __webpack_exports__["a"] = (Simulation);

/***/ })

/******/ });