class Generator {
	constructor(){
		this.TERMINAL_CHANCE = 0.5;
	}
	
	generate( remaining_depth, type ){
		if (remaining_depth > 0){
			if( type === "full" || Math.random < (1-this.TERMINAL_CHANCE)) {
				var n = this.get_random_internal();
				n.t_branch = this.generate( remaining_depth-1,type );
				n.f_branch = this.generate( remaining_depth-1,type );
				return n;
			} else {
				return this.get_random_terminal();
			}
		} else {
			return this.get_random_terminal();
		}
	}

	get_random_internal(){
		throw {name : "NotImplementedError", message : "implement in concrete class."}; 
	}

	get_random_terminal(){
		throw {name : "NotImplementedError", message : "implement in concrete class."}; 
	}
}
export default Generator;