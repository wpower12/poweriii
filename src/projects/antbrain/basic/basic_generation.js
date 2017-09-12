/**
 * Class for generating the Basic program trees.  
**/
import Generator from '../generator.js';
import {IF_XX, RAND} from './nodes/internal.js';
import MOVE_XX from './nodes/external.js';


class BasicGenerator extends Generator {
	constructor(){
		super();
	}

	get_random_internal(){
		var dir = getRandomInt(0, 8); // One of the 7 [0, 6] possible directions to look
		if(dir < 8){
			return new IF_XX(dir); 
		} else {
			return new RAND();
		}
	}

	get_random_terminal(){
		var dir = getRandomInt(0, 4); // One of the 4 [0,3] possible directions to move
		return new MOVE_XX(dir); 
	}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}

export default BasicGenerator;