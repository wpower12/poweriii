/**
 * The Basic, untyped genetic programming simulation.  Nodes just represent a 
 * boolean check for one of the 8 possible food locations.  Terminals represent
 * a direction for the ant to move in.  
**/
import Simulation from '../simulation.js';
import fmod from '../helper.js';

class BasicSimulation extends Simulation {
	constructor(){
		super();
	}

	simulate_headless(ind){
		this.reset();
		while( this.health > 0 ){
			var dir = ind.eval(this.food, this.loc, this.size);
			var new_loc = {x: fmod((this.loc.x+dir_map[dir][1]), this.size.x),
						   y: fmod((this.loc.y+dir_map[dir][0]), this.size.y)};
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
				var new_loc = {x: fmod((this.loc.x+dir_map[dir][1]), this.size.x),
							   y: fmod((this.loc.y+dir_map[dir][0]), this.size.y)};
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

export default BasicSimulation;

// Map from the direction number to index deltas [dy, dx]
var dir_map = [[-1, 0], // 0 UP
			   [ 0,-1], // 1 LEFT
			   [ 0, 1], // 2 RIGHT
			   [ 1, 0]];// 3 DOWN
