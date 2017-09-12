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

export default Experiment;