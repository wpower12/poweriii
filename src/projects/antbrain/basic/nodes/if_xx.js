/**
 * The one type of internal class.  The XX refers to one of the 8 directions
 * ant that we can check for food:

								0 1 2
								3 A 4
								5 6 7

 * The number that determines the direction will be passed to the constructor.
 * TODO - Create enum or something for the directions to make life easier.
**/
import fmod from '../../helper.js';

class IF_XX {
	constructor(dir){
		this.dir = dir;
		this.t_branch = null;
		this.f_branch = null;
	}

	eval(grid, loc, size){
		var y = fmod(loc.y+dir_map[this.dir][0], size.y); 
		var x = fmod(loc.x+dir_map[this.dir][1], size.x);
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

export default IF_XX;