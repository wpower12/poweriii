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

export default MOVE_XX;

