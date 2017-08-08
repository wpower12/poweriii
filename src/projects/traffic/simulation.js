import Car from './car.js';
import ColorPicker from './colorpicker.js';
import InputHandler from './inputhandler.js';

/* TSimulation class that will run all the things
 * 
 * ctx, world, units, logic, draw, loop
 * 
 * @param {canvas element} canvas
 * @returns {TSimulation}
 */
class Simulation {
	constructor(canvas, container){
		this.canvas = canvas;
		this.scale = 12;
		this.size = this.getSize();
		this.ctx = this.canvas.get(0).getContext('2d');
		this.roads = [];
		this.intersections = [];
		this.input = new InputHandler(this);
		this.color = new ColorPicker(10);
	}

    run() {
        var self = this;
        var tick = function () {
            self.update();
            self.draw();
            setTimeout(function () {
                requestAnimationFrame(tick);
            }, 1000 / self.fps);
        };
        tick(); //Start the show
    }

    update() {
        var i;
        //Update each road, update each intersection
        for (i = 0; i < this.roads.length; i++) {
            this.roads[i].update();
        }
        for (i = 0; i < this.intersections.length; i++) {
            this.intersections[i].update();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
        this.drawGrid();
        var i;
        //Draw each road, intersection
        for (i = 0; i < this.roads.length; i++) {
            this.roads[i].draw(this.ctx, this.size);
        }
        for (i = 0; i < this.intersections.length; i++) {
            this.intersections[i].draw(this.ctx, this.size);
        }
        this.input.draw();
    }

    drawGrid() {
        var crosssize = this.scale * 0.25;
        var blanksize = this.scale - crosssize;

        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;

        this.ctx.beginPath();
        this.ctx.moveTo(this.size.x0 + 0.5, this.size.y0 + 0.5);
        this.ctx.lineTo((crosssize / 2) + this.size.x0 + 0.5, this.size.y0 + 0.5);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.size.x0 + 0.5, this.size.y0 + 0.5);
        this.ctx.lineTo(this.size.x0 + 0.5, (crosssize / 2) + this.size.y0 + 0.5);
        this.ctx.stroke();

        for (var i = 0; i < this.size.x + 1; i++) {
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5 + this.scale * i, this.size.y0 + 0.5);
            this.ctx.lineTo(this.size.x0 + 0.5 + this.scale * i, this.size.y0 + 0.5 + (crosssize / 2));
            this.ctx.stroke();

            this.ctx.setLineDash([crosssize, blanksize]);
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.scale + this.size.x0 + 0.5, this.size.y0 + 0.5 + blanksize + (crosssize / 2));
            this.ctx.lineTo(i * this.scale + this.size.x0 + 0.5, this.size.y0 + this.size.h + 0.5);
            this.ctx.stroke();
        }
        for (var j = 0; j < this.size.y + 1; j++) {
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5, this.size.y0 + 0.5 + this.scale * j);
            this.ctx.lineTo(this.size.x0 + 0.5 + (crosssize / 2), this.size.y0 + 0.5 + this.scale * j);
            this.ctx.stroke();

            this.ctx.setLineDash([crosssize, blanksize]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.size.x0 + 0.5 + blanksize + (crosssize / 2), j * this.scale + this.size.y0 + 0.5);
            this.ctx.lineTo(this.size.x0 + this.size.w + 0.5, j * this.scale + this.size.y0 + 0.5);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);
    }

    getSize() {
        //Return 0 point of drawing grid, width of grid in pixels/cells
        var width = this.canvas.get(0).width;
        var height = this.canvas.get(0).height;
        var xn = Math.floor((width - this.scale) / this.scale);
        var yn = Math.floor((height - this.scale) / this.scale);
        return {
            x: xn,
            y: yn,
            w: xn * this.scale,
            h: yn * this.scale,
            x0: (width - (xn * this.scale)) / 2,
            y0: (height - (yn * this.scale)) / 2,
            scale: this.scale
        };
    }

    addRoad(r) {
        this.roads.push(r);
    }

    addCar(r, c) {
        var road = this.roads[r];
        road.addCar(c);
    }

    addIntersection(i) {
        this.intersections.push(i);
    }

    connectRoad(from, to) {
        this.roads[from].setOutput(this.roads[to]);
    }

    connect(from, to) {
        //Make it agnostic.  Intersections will be passed as int.side to differentiat sides
        from.out = to;
    }

    connectRtoI( rfrom, intto, side ) {
        this.roads[rfrom].setOutput( this.intersections[intto], side );
    }

    connectItoR( intfrom, rto, side ) {
        this.intersections[intfrom].setOutput( this.roads[rto], side );
    }

    printStats(){
        var str, r, inter;
        str = "";
        //Roads
        for( var i = 0; i < this.roads.length; i++ ){
            r = this.roads[i];
            str += " sim.addRoad( new Road({";
            str += "x: "+r.start.xn+", y: "+r.start.yn+"},";
            str += r.orientation+", "+r.length+", "+r.lanes+"));\n";
        }
        //Intersections
        for( var i = 0; i < this.intersections.length; i++ ){
            inter = this.intersections[i];
            str += " sim.addIntersection( new Intersection({";
            str += "x: "+inter.base.x+", y: "+inter.base.y+"},";
            str += inter.lanes+", 1));\n";
        }
        //Connections - Roads
        for( var i = 0; i < this.roads.length; i++ ){
            r = this.roads[i];
            str += " sim.addRoad( new Road({";
            str += "x: "+r.start.xn+", y: "+r.start.yn+"},";
            str += r.orientation+", "+r.length+", "+r.lanes+"));\n";
        }
        console.log( str );
    }
};

function Driver() {
    return({NORMAL: 0, SLOW: 1, CRAZY: 2});
}

export default Simulation;