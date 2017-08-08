import Car from './car.js';
import ColorPicker from './colorpicker.js';

class Intersection {
    //Base point is the lower right corner on the grid, in grid units
    constructor (basepoint, lanecount, type) {
        this.base = {x: basepoint.x, y: basepoint.y};
        this.lanes = lanecount;
        this.type = type;
        this.colors = new ColorPicker(7);

        //Sides basically are in's and out's, 4 of um
        this.outs = [];     //Point to roads
        for (var i = 0; i < 4; i++) {
            this.outs[i] = "none";
        }

        //Fields needed for managing logic.
        this.timer = 0;
        this.threshold = 200;
        this.currentside = 0;   //Side 'in', same orientation as roads
        this.cycle = 0;
        this.outside = 1;

        this.cars = [];
        this.road = [];//Square road this time.  the side is a road, same as before
        //Bottom right is 0,0, 'left turn' goes towards 2n,2n corner
        for (var i = 0; i < this.lanes * 2; i++) {
            this.road[i] = [];
            for (var j = 0; j < this.lanes * 2; j++) {
                this.road[i][j] = 0;
            }
        }
    }

    update() {
        var side = this.currentside;
        var out = (this.currentside + this.cycle + 1) % 4;
        console.log(this.cars);
        //Only do stuff/allow cars in if there is an output that way.
        if (this.outs[out] !== "none") {
            for (var c = 0; c < this.cars.length; c++) {
                var car = this.cars[c];
                car.timer++;
                if (car.timer > car.speed) {
                    car.timer = 0;
                    switch (this.cycle) {
                        case 0:  //Right                            
                            this.updateCarRight(car, c);
                            break;
                        case 1:  //Straight
                            this.updateCarStraight(car, c);
                            break;
                        case 2:  //Left
                            this.updateCarLeft(car, c);
                            break;
                        default:
                            break;
                    }
                }
            }
        } else {
            this.timer = this.threshold;
        }

        //Increment timer, and change stuff if necessary
        this.timer++;
        if ((this.timer > this.threshold) && (this.cars.length === 0)) {
            this.cycle = Math.floor(Math.random() * 3);
            this.currentside = (this.currentside + 1) % 4;
            this.outside = (this.currentside + this.cycle + 1) % 4;
            this.timer = 0;
        }
    }
    draw (ctx, size) {
        this.drawPavement(ctx, size);
        this.drawCars(ctx, size);
    }
    drawPavement (ctx, size) {
        //Grey square under the intersection
        ctx.fillStyle = "lightgrey";
        var x0 = (size.scale * (this.base.x + 1)) + size.x0;
        var y0 = (size.scale * (this.base.y + 1)) + size.y0;
        var d = -2 * size.scale * this.lanes;
        ctx.beginPath();
        ctx.rect(x0, y0, d, d);
        ctx.fill();

        ctx.strokeStyle = "darkgrey";
        ctx.beginPath();
        ctx.setLineDash([size.scale * this.lanes]);
        ctx.lineWidth = 3;
        ctx.rect(x0, y0, d, d);
        ctx.stroke();
        ctx.setLineDash([0]);
    }
    drawCars (ctx, size) {
        //Need to draw cars based on road orientation.
        var t = this.getDrawTransform(this.currentside);

        //Transform array position to draw position
        var cloc = {x: 0, y: 0};
        for (var c = 0; c < this.cars.length; c++) {
            var car = this.cars[c];
            cloc.x = size.scale * ((this.base.x + t.dbasex * (2 * this.lanes - 1)) + t.lanex * car.loc.lane + t.posx * car.loc.pos) + size.x0;
            cloc.y = size.scale * ((this.base.y + t.dbasey * (2 * this.lanes - 1)) + t.laney * car.loc.lane + t.posy * car.loc.pos) + size.y0;
            ctx.beginPath();
            ctx.fillStyle = this.colors.get(car.id);
            ctx.fillRect(cloc.x+2,
                    cloc.y+2,
                    (size.scale-4),
                    (size.scale-4));    
        }
    }
    addCar (c, side) {
        this.cars.push(c);
        //Based on side, need to add car to right location.
        var l, p;
        var n = this.lanes;
        var lane = c.loc.lane;
        c.loc.pos = 0;
        this.road[lane][0] = c;
    }
    setOutput (r, s) {
        this.outs[s] = r;
    }
    updateCarStraight (car, c) {
        var out = this.outs[this.outside];
        if (car.loc.pos >= (this.lanes * 2 - 1)) {
            this.passCar( out, car, car.loc.lane, c );
        } else {
            //Else, try to go straight
            this.moveForward(car);
        }
    }
    updateCarRight (car, c) {
        var out = this.outs[this.outside];
        //Car goes straight until its in the diagonal, then right until out
        //diagonal is when pos == lane
        if (car.loc.lane === 0) {
            this.passCar( out, car, car.loc.pos, c );
        } else {
            if (car.loc.pos >= car.loc.lane) {
                this.moveRight(car);
            } else {
                //Else, try to go straight
                this.moveForward(car);
            }
        }
    }
    updateCarLeft (car, c) {
        var out = this.outs[this.outside];
        if (car.loc.lane === 2 * this.lanes - 1) {
            //Try to pass car to output
            var laneout = (2 * this.lanes - 1 - car.loc.pos);
            this.passCar( out, car, laneout, c );
        } else {
            if (car.loc.pos <= 2*this.lanes - car.loc.pos - car.loc.lane) {
                this.moveForward(car);
            } else {
                this.moveLeft(car);
            }
        }
    }
    passCar (out, car, laneout, c) {
        if (out.open(laneout, 0)) {
            out.addCar(new Car(car.id, {lane: laneout, pos: 0, speed: car.speed}, car.type));
            this.cars.splice(c, 1);
            this.road[car.loc.lane][car.loc.pos] = 0;
        }
    }
    moveForward (car) {
        if (this.road[car.loc.lane][car.loc.pos + 1] === 0) {
            this.road[car.loc.lane][car.loc.pos] = 0;
            this.road[car.loc.lane][car.loc.pos+1] = car;
            car.loc.pos++;
        } else {
            car.timer = this.threshold;
        }
    }
    moveRight (car) {
        if (this.road[car.loc.lane-1][car.loc.pos ] === 0) {
            this.road[car.loc.lane][car.loc.pos] = 0;
            this.road[car.loc.lane-1][car.loc.pos] = car;
            car.loc.lane--;
        } else {
            car.timer = this.threshold;
        }
    }
    moveLeft (car) {
        if (this.road[car.loc.lane+1][car.loc.pos ] === 0) {
            this.road[car.loc.lane][car.loc.pos] = 0;
            this.road[car.loc.lane+1][car.loc.pos] = car;
            car.loc.lane++;
        } else {
            car.timer = this.threshold;
        }
    }
    open (lane, side) {
        //Need to use orientation of sides to do this in a less shitty way.
        return ((side === this.currentside) && this.road[lane][0] === 0);
    }
    getSide (mx, my) {
        console.log("Inter getSide:", mx, my);
        //Given mouse click, see what side its on.
        //whichever quadrant its in. 
        if (mx <= (this.base.x - this.lanes)) {
            if (my <= (this.base.y - this.lanes)) {
                return 0;
            } else {
                return 1;
            }
        } else {
            if (my <= (this.base.y - this.lanes)) {
                return 3;
            } else {
                return 2;
            }
        }
    }
    getOut (mx, my) {
        console.log("Inter getOut:", mx, my);
        if (mx <= (this.base.x - this.lanes)) {
            if (my <= (this.base.y - this.lanes)) {
                return 1;
            } else {
                return 2;
            }
        } else {
            if (my <= (this.base.y - this.lanes)) {
                return 0;
            } else {
                return 3;
            }
        }
    }
    getFrom (size, scale, side) {
        //Need out location for line.
        console.log("Inter getFrom: ", side);
        var xr, yr;
        switch (side) {
            case 0:
                xr = (this.base.x - (0.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y - (2) * this.lanes + 1.5) * scale + size.y0;
                break;
            case 1:
                xr = (this.base.x - (2) * this.lanes + 1.5) * scale + size.x0;
                yr = (this.base.y - (1.5) * this.lanes + 1) * scale + size.y0;
                break;
            case 2:
                xr = (this.base.x - (1.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y + 0.5) * scale + size.y0;
                break;
            case 3:
                xr = (this.base.x + 0.5) * scale + size.x0;
                yr = (this.base.y - (0.5) * this.lanes + 1) * scale + size.y0;
                break;
            default:
                break;
        }
        return {
            x: xr,
            y: yr
        };
    }
    getTo (size, scale, side) {
        //Use side to find 
        var xr, yr;
        switch (side) {
            case 0:
                xr = (this.base.x - (1.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y - (2) * this.lanes + 1.5) * scale + size.y0;
                break;
            case 1:
                xr = (this.base.x - (2) * this.lanes + 1.5) * scale + size.x0;
                yr = (this.base.y - (0.5) * this.lanes + 1) * scale + size.y0;
                break;
            case 2:
                xr = (this.base.x - (0.5) * this.lanes + 1) * scale + size.x0;
                yr = (this.base.y + 0.5) * scale + size.y0;
                break;
            case 3:
                xr = (this.base.x + 0.5) * scale + size.x0;
                yr = (this.base.y - (1.5) * this.lanes + 1) * scale + size.y0;
                break;
            default:
                break;
        }
        return {
            x: xr,
            y: yr
        };
    }
    getO (o) {
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
    getDrawTransform (side) {
        var ret;
        switch (side) {
            case 0:
                ret = {
                    dbasex: -1,
                    dbasey: -1,
                    lanex: 1,
                    laney: 0,
                    posx: 0,
                    posy: 1
                };
                break;
            case 1:
                ret = {
                    dbasex: -1,
                    dbasey: 0,
                    lanex: 0,
                    laney: -1,
                    posx: 1,
                    posy: 0
                };
                break;
            case 2:
                ret = {
                    dbasex: 0,
                    dbasey: 0,
                    lanex: -1,
                    laney: 0,
                    posx: 0,
                    posy: -1
                };
                break;
            case 3:
                ret = {
                    dbasex: 0,
                    dbasey: -1,
                    lanex: 0,
                    laney: 1,
                    posx: -1,
                    posy: 0
                };
                break;
            default:
        }
        return ret;
    }
};

export default Intersection;