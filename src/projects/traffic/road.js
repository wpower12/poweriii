import Car from './car.js';
import ColorPicker from './colorpicker.js';

class Road {
    //Roads track their 0lane, 0pos, lanes, length, and orientation
    //TODO - make orientation not shitty.  Either enum like driver, or use explicit
    //     - names in an input object that describe the orientation 'vectors' of the
    //     - lane and position directions ex: {lanex: 0, laney: -1, posx: 1, posy: 0} 
    //     - orientation is a bunch of vectors that could probably be more simply
    //     - expressed but w.e  it works right now. 
    constructor(rdata, orientation, length, lanes){
	    this.orientation = orientation;    // 0 iup (-y), 1 ileft(-x), 2 idown(+y), 3 iright(+x)
	    this.o = {x: 0, y: 0, xd: 0, yd: 0, lx: -1, ly: 0, lanes: lanes};
	    this.length = length;
	    this.lanes = lanes;
	    this.out = "none";   //Out is where cars are passed when they get to the end.
	    this.outside = 0;
	    this.outs = [];
	    this.outs[0] = "none";

	    this.colors = new ColorPicker(7);

	    this.start = {xn: rdata.x, yn: rdata.y, x: 0, y: 0};

	    this.dim = {
	        xn0: rdata.x,
	        yn0: rdata.y,
	        xd0: 0,
	        yd0: 0,
	        dx: 0,
	        dy: 0};

	    //Orientation and dimensions - makes drawing easier
	    this.o = this.getO(this.orientation);
	    this.dim.xd0 = this.dim.xn0 + this.o.xd;
	    this.dim.yd0 = this.dim.yn0 + this.o.yd;
	    this.dim.dx = this.o.lx * this.lanes + this.o.px * this.length;
	    this.dim.dy = this.o.ly * this.lanes + this.o.py * this.length;

	    this.cars = [];
	    this.road = [];
	    for (var i = 0; i < lanes; i++) {
	        this.road[i] = [];
	        for (var j = 0; j < length; j++) {
	            this.road[i][j] = 0;
	        }
	    }
	}
	
	draw(ctx, size) {
        this.drawPavement(ctx, size);
        this.drawCars(ctx, size);
    }

    update() {
        //Update Cars
        //If an update pushes a car to the intersection, it asks the
        //intersection if it can proceed, if so, pass and then remove
        var forward = 0, depass = 1, pass = 1, position = 0, car = 0;
        for (var c = 0; c < this.cars.length; c++) {
            car = this.cars[c];

            if (car.timer++ > car.speed) {
                car.timer = 0;
                //If near end, do intersection shit
                if (car.loc.pos === (this.length - 1) && this.out !== "none") {
                    if (this.out.open(car.loc.lane, this.outside)) {
                        this.out.addCar(new Car(car.id, {lane: car.loc.lane, pos: 0, speed: car.speed}, car.type), this.outside);
                        this.cars.splice(c, 1);
                        this.road[car.loc.lane][car.loc.pos] = 0;
                    }
                } else {
                    switch (car.type) {
                        case 0:
                            //If you can depass, depass.
                            if (car.loc.lane > 0) {
                                depass = this.road[car.loc.lane - 1][ car.loc.pos + 1 ];
                                if (depass === 0) {
                                    //TODO - Depass function outta scope
                                    this.depass(car);
                                    return;
                                }
                            }
                            //If forward is clear go, else pass
                            forward = this.road[car.loc.lane + 0][car.loc.pos + 1];
                            if (forward === 0) {
                                this.moveForward(car);
                                return;
                            } else {
                                if (car.loc.lane < (this.lanes - 1)) {
                                    pass = this.road[car.loc.lane + 1][ car.loc.pos + 1 ];
                                    if (pass === 0) {
                                        //TODO - Pass function outta scope
                                        this.pass(car);
                                        return;
                                    }
                                }
                            }
                            break;
                        // case Driver().CRAZY:
                        //     break;
                        default:
                            break;
                    }
                }
            }
        }
    }

    drawPavement(ctx, size) {
        //Grey rectangle under the road
        ctx.fillStyle = "lightgrey";
        var x0 = (size.scale * (this.dim.xd0)) + size.x0;
        var y0 = (size.scale * (this.dim.yd0)) + size.y0;
        ctx.beginPath();
        ctx.rect(x0,
                y0,
                size.scale * this.dim.dx,
                size.scale * this.dim.dy);
        ctx.fill();

        //Outline the road
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x0 + (size.scale * this.o.px * this.length), y0 + (size.scale * this.o.py * this.length));
        ctx.stroke();
        ctx.beginPath();
        var xl = 0, yl = 0;
        xl = x0 + (size.scale * this.o.lx * this.lanes);
        yl = y0 + (size.scale * this.o.ly * this.lanes);
        ctx.moveTo(xl, yl);
        ctx.lineTo(xl + (size.scale * this.o.px * this.length), yl + (size.scale * this.o.py * this.length));
        ctx.stroke();

        //Draw lane lines
        if (this.lanes > 1) {
            ctx.strokeStyle = "darkgrey";
            ctx.lineWidth = 3;
            var xp = 0, yp = 0;
            for (var l = 1; l < (this.lanes); l++) {
                xl = x0 + (size.scale * this.o.lx * l);
                yl = y0 + (size.scale * this.o.ly * l);
                for (var p = 0; p < this.length; p += 2) {
                    xp = xl + (size.scale * this.o.px * p);
                    yp = yl + (size.scale * this.o.py * p);
                    ctx.beginPath();
                    ctx.moveTo(xp, yp);
                    ctx.lineTo(xp + (size.scale * this.o.px), yp + (size.scale * this.o.py));
                    ctx.stroke();
                }
            }
        }
    }

    drawCars(ctx, size) {
        var cloc = {x: 0, y: 0};
        for (var c = 0; c < this.cars.length; c++) {
            var car = this.cars[c];
            cloc.x = size.scale * (this.dim.xd0 + (this.o.lx * car.loc.lane) + (this.o.px * car.loc.pos)) + size.x0;
            cloc.y = size.scale * (this.dim.yd0 + (this.o.ly * car.loc.lane) + (this.o.py * car.loc.pos)) + size.y0;
            ctx.beginPath();
            ctx.fillStyle = this.colors.get(car.id);
            ctx.fillRect(cloc.x + 2*(this.o.x),
                    cloc.y+ 2*(this.o.y),
                    (size.scale * (this.o.x) - 4*(this.o.x)),
                    (size.scale * (this.o.y) - 4*(this.o.y)));
        }
    }

    addCar(c) {
        this.cars.push(c);
        this.road[c.loc.lane][c.loc.pos] = c;
    }

    setOutput(r, s) {
        this.out = r;
        this.outs[0] = r;
        this.outside = s;
    }

    depass(c) {
        this.road[c.loc.lane][c.loc.pos] = 0;
        c.loc.lane--;
        c.loc.pos++;
        this.road[c.loc.lane][c.loc.pos] = 1;
    }

    moveForward(c) {
        this.road[c.loc.lane][c.loc.pos] = 0;
        c.loc.pos++;
        this.road[c.loc.lane][c.loc.pos] = 1;
    }

    pass(c) {
        this.road[c.loc.lane][c.loc.pos] = 0;
        c.loc.lane++;
        c.loc.pos++;
        this.road[c.loc.lane][c.loc.pos] = 1;
    }

    open(lane, s) {
        return (this.road[lane][0] === 0);
    }

    add(c) {
        this.cars.push(c);
        var n = this.cars.length;
        //this.cars[n - 1].loc = {lane: 0, pos: 0};
        this.road[c.loc.lane][0] = c;
    }

    getFrom(size, scale, side) {
        var xout, yout;
        xout = (this.dim.xd0
                + (this.length - 0.5) * this.o.px
                + (this.lanes / 2) * this.o.lx) * scale
                + size.x0;
        yout = (this.dim.yd0
                + (this.length - 0.5) * this.o.py
                + (this.lanes / 2) * this.o.ly) * scale
                + size.y0;
        return {x: xout, y: yout};
    }

    getTo(size, scale, side) {
        return {
            x: (this.dim.xd0 + 0.5 * this.o.lx * this.lanes + this.o.px * (0.5)) * scale + size.x0,
            y: (this.dim.yd0 + 0.5 * this.o.ly * this.lanes + this.o.py * (0.5)) * scale + size.y0
        };
    }

    getO(o) {
        switch (o) {
            case 0:
                return {x: -1, y: -1, xd: 1, yd: 1, lx: -1, ly: 0, px: 0, py: -1};
                break;
            case 1:
                return {x: -1, y: 1, xd: 1, yd: 0, lx: 0, ly: 1, px: -1, py: 0};
                break;
            case 2:
                return {x: 1, y: 1, xd: 0, yd: 0, lx: 1, ly: 0, px: 0, py: 1};
                break;
            case 3:
                return {x: 1, y: -1, xd: 0, yd: 1, lx: 0, ly: -1, px: 1, py: 0};
                break
            default:

        }
    }
};

export default Road;