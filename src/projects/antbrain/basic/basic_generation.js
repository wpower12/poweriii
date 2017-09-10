/**
 * Class for generating the Basic program trees.  
**/
import Generator from '../generator.js';

class BasicGenerator extends Generator {
	constructor(){
		super();
	}

	get_random_internal(){
		throw {name : "NotImplementedError", message : "too lazy to implement"}; 
	}

	get_random_terminal(){
		throw {name : "NotImplementedError", message : "too lazy to implement"}; 
	}
}