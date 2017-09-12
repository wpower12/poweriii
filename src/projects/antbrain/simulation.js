/**
 * Base Class for the types of simulations run.  Allows the reuse of the draw
 * method.  
**/
class Simulation {
	constructor(){
		this.size = { x: 20, y: 15 };	// Dimensions of Board
		this.SCALE = 20;
		this.loc  = { x: 10, y: 10};	// Location of Bug
		this.FOOD_FILL = 0.25;			// Amount of food (in % of cells)
		this.food = build_food_array(this.size, this.FOOD_FILL); // Food Array
		this.health = 15;
		this.ticks_alive = 0;
		this.food_collected = 0;
	}

	draw( cnv, food, bug, scale ){
		var ctx = cnv.getContext("2d");
		var size = {x: food[0].length, y: food.length};
		var offset = calc_offsets(cnv, size, scale);

		// Fill Background
		ctx.beginPath();
		ctx.rect(offset.x,offset.y,size.x*scale,size.y*scale);
		ctx.fillStyle = "darkgrey";
		ctx.fill(); 

		// Draw Grid
		var crosssize = 0.25*scale;
		var blanksize = scale - crosssize;
		ctx.strokeStyle = "grey";
			// vertical lines
		for (var i = 1; i < size.x; i++){
			ctx.setLineDash([crosssize, blanksize]);
		    ctx.beginPath();
		    ctx.moveTo(i * scale + offset.x + 0.5, offset.y + 0.5 + blanksize + (crosssize / 2));
		    ctx.lineTo(i * scale + offset.x + 0.5, offset.y + (size.y-1)*scale+crosssize + 0.5);
		    ctx.stroke();
		}
			// horizontal
		for (var j = 1; j < size.y; j++){
			ctx.setLineDash([crosssize, blanksize]);
		    ctx.beginPath();
		    ctx.moveTo(offset.x + 0.5+ blanksize + (crosssize / 2), j*scale + offset.y + 0.5);
		    ctx.lineTo((size.x-1)*scale+offset.x + crosssize+0.5, j*scale + offset.y + 0.5);
		    ctx.stroke();
		}

		// Draw Food
		for (var i = 0; i < size.x; i++){
			for (var j = 0; j < size.y; j++){
				if( food[j][i] == 1 ){
					// Draw circle in the center of (i,j)th cell
					var center = {x: i*scale+0.5*scale+offset.x+0.5, 
								  y: j*scale+0.5*scale+offset.y+0.5};
					ctx.beginPath();
					ctx.arc(center.x, center.y, 0.25*scale, 0, 2*Math.PI)
					ctx.fillStyle = "green";
					ctx.fill();
				}
			}
		}

		// Draw Agent
		ctx.beginPath();
		ctx.rect(bug.x*scale+offset.x+0.5+0.25*scale, 
				 bug.y*scale+offset.y+0.5+0.25*scale,
				 0.5+(1-2*0.25)*scale,
				 0.5+(1-2*0.25)*scale);
		ctx.fillStyle = "black";
		ctx.fill();
	}

	reset(){
		this.food = build_food_array(this.size, this.FOOD_FILL);
		this.health = 15;
		this.ticks_alive = 0;
		this.food_collected = 0;
	}
}

function build_food_array(dim, fill){
	var ret = [];
	for (var j = 0; j < dim.y; j++){
		ret[j] = [];
		for (var i = 0; i < dim.x; i++  ){
			if( Math.random() < fill ){
				ret[j][i] = 1;
			} else {
				ret[j][i] = 0;
			}
		}
	}
	return ret;
}

function calc_offsets(cnv, size, scale){
	// Half the difference of the total size in each dir.
	var dx = 0.5*(cnv.width - size.x*scale);
	var dy = 0.5*(cnv.height - size.y*scale);
	return {x: dx, y: dy};
}

export default Simulation;