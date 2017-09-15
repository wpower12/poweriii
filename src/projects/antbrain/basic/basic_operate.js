/**
 * Need a class that manages the genetic operations.  Need a way to get
 * the FPS sorted set. Also need operations that take two individuals and
 * perform crossover with truncation.  
 * Also need a mutation operator.  
**/
import BasicGenerator from './basic_generation.js';

class BasicOperate {
	constructor(){
		this.gen = new BasicGenerator();
	}

	// For now just returning the one. 
	crossover(p1, p2){
		// TODO - Need to play with copies of the parents, want to avoid issues with reselection.
		// TODO - Implement with crossover
		var cp1 = get_crossover(p1);
		var cp2 = get_crossover(p2);

		if(cp1[2]){	// If p1's cp is on a truebranch
			cp1[1].t_branch = cp2[0]; // Place the second trees cp node there.
		} else {
			cp1[1].f_branch = cp2[0];
		}
		return p1;
	}

	mutate(p){
		// TODO - Implement
		return p;
	}
}

function get_crossover(p){
	// Need max depth? Need to deal with non-full trees, too.
	var cur_depth = 1;
	var node   = p;	
	var n = p;
	var parent = null;
	var branch = null;
	var TEST_CHANCE = 0.5

	while( n !== null ){
		if(Math.random() < TEST_CHANCE){	// TODO - Make this not shitty.
			parent = node;
			if(Math.random() < 0.5){
				branch = true;
				node = node.t_branch;
			} else {
				branch = false;
				node = node.f_branch;
			}
			n = null;
		} else {
			parent = n;
			if(Math.random() < 0.5){
				n = n.t_branch;
			} else {
				n = n.f_branch;
			}
		}
	}
	return [node, parent, branch];
}


export default BasicOperate;
