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

	crossover(p1, p2){
		// TODO - Implement with crossover
		return [p1, p2];
	}

	mutate(p){
		// TODO - Implement
		return p;
	}
}

export default BasicOperate;