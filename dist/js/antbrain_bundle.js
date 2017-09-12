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
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodes_internal_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodes_external_js__ = __webpack_require__(20);
/**
 * Class for generating the Basic program trees.  
**/





class BasicGenerator extends __WEBPACK_IMPORTED_MODULE_0__generator_js__["a" /* default */] {
	constructor(){
		super();
	}

	get_random_internal(){
		var dir = getRandomInt(0, 8); // One of the 7 [0, 6] possible directions to look
		if(dir < 7){
			return new __WEBPACK_IMPORTED_MODULE_1__nodes_internal_js__["a" /* IF_XX */](dir); 
		} else {
			return new __WEBPACK_IMPORTED_MODULE_1__nodes_internal_js__["b" /* RAND */]();
		}
	}

	get_random_terminal(){
		var dir = getRandomInt(0, 4); // One of the 4 [0,3] possible directions to move
		return new __WEBPACK_IMPORTED_MODULE_2__nodes_external_js__["a" /* default */](dir); 
	}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}

/* harmony default export */ __webpack_exports__["a"] = (BasicGenerator);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function fmod( v1, v2 ){
	var a = v1 % v2;
	if(a < 0){
		return v2 + a;
	} else {
		return a;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (fmod);

/***/ }),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antbrain_gp_experiment_js__ = __webpack_require__(15);


var exp = new __WEBPACK_IMPORTED_MODULE_0__antbrain_gp_experiment_js__["a" /* default */]();

exp.run();
var cnv = document.getElementById('antcanvas');
exp.simulate_best(cnv);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_basic_generation_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_basic_operate_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_basic_simulation_js__ = __webpack_require__(22);
 




class Experiment {
	constructor(){
		this.gen = new __WEBPACK_IMPORTED_MODULE_0__basic_basic_generation_js__["a" /* default */]();
		this.op  = new __WEBPACK_IMPORTED_MODULE_1__basic_basic_operate_js__["a" /* default */]();
		this.sim = new __WEBPACK_IMPORTED_MODULE_2__basic_basic_simulation_js__["a" /* default */]();
		this.population = [];
		this.fitness = [];
		this.size = 40;
		this.max_depth = 5;
		this.generations = 50;
		this.runs_per_eval = 5;
	}
	run(){
		this.population = build_population(this.gen, this.size, this.max_depth);
		for( var g = 0; g < this.generations; g++){
			console.log(this.population.length);
			this.fitness    = evaluate(this.sim, this.population, this.runs_per_eval);
			this.population = select_operate(this.op, this.fitness, this.population);
		}
	}

	simulate_best(canvas){
		// Last element in pop is best.
		this.fitness    = evaluate(this.sim, this.population, this.runs_per_eval);
		this.sim.simulate_canvas(this.population[this.size-1], canvas);
		console.log(this.fitness);
	}
}

function build_population(gen, size, max_depth){
	var num_buckets = max_depth;
	var bucket_size = 0.5*size/num_buckets; 
	var ret = [];
	for( var depth = 1; depth <= num_buckets; depth++ ){
		for( var n = 0; n < bucket_size; n++){
			// Each loop we add a full and a partial tree. 
			// Brings use to a total of 'size'
			ret.push( gen.generate(depth, "full") );
			ret.push( gen.generate(depth, "partial"));
		}
	}
	return ret;
}

function evaluate(sim, pop, rpe){
	var ret = [];
	for(var ant = 0; ant < pop.length; ant++){
		var f = 0;
		for(var r = 0; r < rpe; r++){
			var a = sim.simulate_headless(pop[ant]);
			f += a;
		}
		ret.push(f);
	}
	return ret;
}

function select_operate(op, fit, pop){
	// TODO - Actually implement.  Just returns the sorted population right now. 
	var pop_zip_sort = zip(pop, fit).sort(fit_cmp); 
	return unzip(pop_zip_sort);
}

function zip( pop, fit ){
	var ret = [];
	for( var i = 0; i < pop.length; i++ ){
		var item = {ind: pop[i], f: fit[i]};
		ret.push(item);
	}
	return ret;
}

function unzip(l){
	var pop = [];
	var fit = [];
	for(var i = 0; i < l.length; i++){
		pop.push(l[i].ind);
		fit.push(l[i].f);
	}
	return pop;
}

function fit_cmp(a, b){
	if( a.f > b.f ){
		return 1;
	} else if( a.f < b.f){
		return -1;
	} else {
		return 0;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Experiment);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Generator {
	constructor(){
		this.TERMINAL_CHANCE = 0.5;
	}
	
	generate( remaining_depth, type ){
		if (remaining_depth > 0){
			if( type === "full" || Math.random < (1-this.TERMINAL_CHANCE)) {
				var n = this.get_random_internal();
				n.t_branch = this.generate( remaining_depth-1,type );
				n.f_branch = this.generate( remaining_depth-1,type );
				return n;
			} else {
				return this.get_random_terminal();
			}
		} else {
			return this.get_random_terminal();
		}
	}

	get_random_internal(){
		throw {name : "NotImplementedError", message : "implement in concrete class."}; 
	}

	get_random_terminal(){
		throw {name : "NotImplementedError", message : "implement in concrete class."}; 
	}
}
/* harmony default export */ __webpack_exports__["a"] = (Generator);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__if_xx_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rand_js__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__if_xx_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__rand_js__["a"]; });





/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_js__ = __webpack_require__(5);
/**
 * The one type of internal class.  The XX refers to one of the 8 directions
 * ant that we can check for food:

								0 1 2
								3 A 4
								5 6 7

 * The number that determines the direction will be passed to the constructor.
 * TODO - Create enum or something for the directions to make life easier.
**/


class IF_XX {
	constructor(dir){
		this.dir = dir;
		this.t_branch = null;
		this.f_branch = null;
	}

	eval(grid, loc, size){
		var y = Object(__WEBPACK_IMPORTED_MODULE_0__helper_js__["a" /* default */])(loc.y+dir_map[this.dir][0], size.y); 
		var x = Object(__WEBPACK_IMPORTED_MODULE_0__helper_js__["a" /* default */])(loc.x+dir_map[this.dir][1], size.x);
		if( grid[y][x] == 1 ){
			return this.t_branch.eval(grid, loc, size);
		} else {
			return this.f_branch.eval(grid, loc, size);
		}
	}
}

// Map from the direction number to index deltas [dy, dx]
// and with 0 being in the direction of the origin (same orientation as the canvas)
var dir_map = [[-1,-1], // 0
			   [-1, 0], // 1 UP
			   [-1, 1], 
			   [ 0,-1], // 3 LEFT
			   [ 0, 1],	// 4 RIGHT - Note we skip 0,0
			   [ 1,-1],
			   [ 1, 0], // 6 DOWN
			   [ 1, 1]];// 7

/* harmony default export */ __webpack_exports__["a"] = (IF_XX);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RAND {
	constructor(){
		this.t_branch = null;
		this.f_branch = null;
	}
	eval(grid, loc, size){
		if(Math.random() > 0.5){
			return this.t_branch.eval(grid, loc, size);
		} else {
			return this.f_branch.eval(grid, loc, size);
		}
	}
}
/* harmony default export */ __webpack_exports__["a"] = (RAND);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Ant only moves in one of 4 directions, U, D, L, R

 					0 'Down'
 		   Left   1 A 2   Right
 			      	3 'Up'
**/
class MOVE_XX {
	constructor(dir){
		this.dir = dir;
	}
	eval(grid, loc, size){
		return this.dir;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (MOVE_XX);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_generation_js__ = __webpack_require__(4);
/**
 * Need a class that manages the genetic operations.  Need a way to get
 * the FPS sorted set. Also need operations that take two individuals and
 * perform crossover with truncation.  
 * Also need a mutation operator.  
**/


class BasicOperate {
	constructor(){
		this.gen = new __WEBPACK_IMPORTED_MODULE_0__basic_generation_js__["a" /* default */]();
	}

	crossover(p1, p2){
		// TODO - Implement with crossover
		return [p1, p2];
	}

	mutate(p){
		// TODO - Implement
		return p;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (BasicOperate);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simulation_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_js__ = __webpack_require__(5);
/**
 * The Basic, untyped genetic programming simulation.  Nodes just represent a 
 * boolean check for one of the 8 possible food locations.  Terminals represent
 * a direction for the ant to move in.  
**/



class BasicSimulation extends __WEBPACK_IMPORTED_MODULE_0__simulation_js__["a" /* default */] {
	constructor(){
		super();
	}

	simulate_headless(ind){
		this.reset();
		while( this.health > 0 ){
			var dir = ind.eval(this.food, this.loc, this.size);
			var new_loc = {x: Object(__WEBPACK_IMPORTED_MODULE_1__helper_js__["a" /* default */])((this.loc.x+dir_map[dir][1]), this.size.x),
						   y: Object(__WEBPACK_IMPORTED_MODULE_1__helper_js__["a" /* default */])((this.loc.y+dir_map[dir][0]), this.size.y)};
			if (this.food[new_loc.y][new_loc.x] == 1 ){	// If we are moving to food
				this.health += 3;
				this.food[new_loc.y][new_loc.x] = 0;
				this.food_collected++;
			} else {
				this.health--;
			}
			this.ticks_alive++;
			this.loc = new_loc;
		}
		return this.ticks_alive;
	}

	simulate_canvas(ind, cnv){
		// There is probably a way to do this w.o writing a seperate but mostly the same method.
		// It's a TODO for the future.  Works as it is right now. 
		// To work with the requestAnimationFrame callback, gotta shove everything in the object and bind.
		console.log("simulating canvas");
		this.reset();
		this.ind = ind;  // even the canvas and the individual.  A lot dirtier than the headless. :(
		this.cnv = cnv;
		this.fps = 10;
		this.then = Date.now();
		this.interval = 1000/this.fps;
		requestAnimationFrame(this.sim_cnv.bind(this));
	}

	sim_cnv(){
		var ind = this.ind;
		var cnv = this.cnv;	

		if(this.health > 0){
			var now = Date.now();
			var delta = now - this.then;
			if( delta > this.interval ){
				var dir = ind.eval(this.food, this.loc, this.size);
				var new_loc = {x: Object(__WEBPACK_IMPORTED_MODULE_1__helper_js__["a" /* default */])((this.loc.x+dir_map[dir][1]), this.size.x),
							   y: Object(__WEBPACK_IMPORTED_MODULE_1__helper_js__["a" /* default */])((this.loc.y+dir_map[dir][0]), this.size.y)};
				if (this.food[new_loc.y][new_loc.x] == 1 ){	// If we are moving to food
					this.health += 3;
					this.food[new_loc.y][new_loc.x] = 0;
					this.food_collected++;
				} else {
					this.health--;
				}
				this.loc = new_loc;
				this.draw(cnv, this.food, this.loc, this.SCALE);		
			}
			this.then = now - (delta % this.interval);
			requestAnimationFrame(this.sim_cnv.bind(this));
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (BasicSimulation);

// Map from the direction number to index deltas [dy, dx]
var dir_map = [[-1, 0], // 0 UP
			   [ 0,-1], // 1 LEFT
			   [ 0, 1], // 2 RIGHT
			   [ 1, 0]];// 3 DOWN


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Base Class for the types of simulations run.  Allows the reuse of the draw
 * method.  
**/
class Simulation {
	constructor(){
		this.size = { x: 20, y: 15 };	// Dimensions of Board
		this.SCALE = 20;
		this.loc  = { x: 10, y: 10};	// Location of Bug
		this.FOOD_FILL = 0.25;			// Amount of food (in % of cells)
		this.food = build_food_array(this.size, this.FOOD_FILL); // Food Array
		this.health = 15;
		this.ticks_alive = 0;
		this.food_collected = 0;
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

	reset(){
		this.food = build_food_array(this.size, this.FOOD_FILL);
		this.health = 15;
		this.ticks_alive = 0;
		this.food_collected = 0;
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
/******/ ]);