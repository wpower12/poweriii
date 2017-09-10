/**
 * The Basic, untyped genetic programming simulation.  Nodes just represent a 
 * boolean check for one of the 8 possible food locations.  Terminals represent
 * a direction for the ant to move in.  
**/
import Simulation from '../simulation.js'

class BasicSimulation extends Simulation {
	constructor(){
		super();
	}

	simulate_headless(ind){

	}

	simulate_canvas(ind, cnv){
		this.draw( cnv, this.food, this.loc, this.SCALE );
	}
}

export default BasicSimulation;