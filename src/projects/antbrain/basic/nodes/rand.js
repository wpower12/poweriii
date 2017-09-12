class RAND {
	constructor(){
		this.t_branch = null;
		this.f_branch = null;
	}
	eval(grid, loc, size){
		if(Math.random() > 0.5){
			return this.t_branch.eval(grid, loc, size);
		} else {
			return this.f_branch.eval(grid, loc, size);
		}
	}
}
export default RAND;