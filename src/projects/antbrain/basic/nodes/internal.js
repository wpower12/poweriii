/**
 * The one type of internal class.  The XX refers to one of the 8 directions
 * ant that we can check for food:

								0 1 2
								3 A 4
								5 6 7

 * The number that determines the direction will be passed to the constructor.
 * TODO - Create enum or something for the directions to make life easier.
**/

class IF_XX {
	constructor(dir){
		this.dir = dir;
		this.t_branch = null;
		this.f_branch = null;
	}

	eval(grid){
		// TODO - implement this!  read correct neighbor cell and call eval on the right branch.
	}
}