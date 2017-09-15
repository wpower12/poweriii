import BasicGenerator from './basic/basic_generation.js'; 
import BasicOperate   from './basic/basic_operate.js';
import BasicSimulation  from './basic/basic_simulation.js';


class Experiment {
	constructor(){
		this.gen = new BasicGenerator();
		this.op  = new BasicOperate();
		this.sim = new BasicSimulation();
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
			this.fitness    = evaluate(this.sim, this.population, this.runs_per_eval);
			this.population = select_operate(this.op, this.fitness, this.population);
		}
	}

	simulate_best(canvas){
		// Last element in pop is best.
		this.fitness    = evaluate(this.sim, this.population, this.runs_per_eval);
		this.sim.simulate_canvas(this.population[this.size-1], canvas);
	}
}

function build_population(gen, size, max_depth){
	var num_buckets = max_depth;
	var bucket_size = 0.5*size/num_buckets; 
	var ret = [];
	for( var depth = 1; depth <= num_buckets; depth++ ){
		for( var n = 0; n < bucket_size; n++){
			// Each loop we add a full and a partial tree. 
			// Brings us to a total of 'size'
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
	var pop_zip = zip(pop, fit); 
	var new_pop = [];
	for(var i = 0; i < fit.length; i++){
		var p1 = select_fps(pop_zip);
		var p2 = select_fps(pop_zip);
		new_pop = new_pop.concat( crossover(p1,p2) );
	}
	console.log(new_pop.length);
	return new_pop;
}

function select_fps(fit_pop){
	var total = 0;
	for( var i = 0; i < fit_pop.length; i++ ){
		total += fit_pop[i].f;
	}
	var r = Math.random()*total;
	for( var i = 0; i < fit_pop.length; i++	){
		r -= fit_pop[i].f;
		if(r <= 0) return fit_pop[i].ind;
	}
	return fit_pop.length - 1;
}

function crossover(p1, p2){
	// TODO - Implement tree based genetic crossover.
	// Traverse each, randomly select a node weighted by depth?
	// How to traverse and have an equal chance to pick a node 
	// from each depth?
	return [p1, p2];
}

function zip( l1, l2 ){
	var ret = [];
	for( var i = 0; i < l1.length; i++ ){
		var item = {ind: l1[i], f: l2[i]};
		ret.push(item);
	}
	return ret;
}

function unzip(l){
	var l1 = [];
	var l2 = [];
	for(var i = 0; i < l.length; i++){
		l1.push(l[i].ind);
		l2.push(l[i].f);
	}
	return [l1,l2];
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

export default Experiment;