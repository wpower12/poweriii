import Road from './road.js';
import Car from './car.js';
import Intersection from './intersection.js';

var DRIVERS = ["Normal", "Slow", "Crazy"];

class InputHandler {
	constructor(sim){
	    this.sim = sim;
	    this.Road = new Road({x: 0, y: 0}, 0, 0, 0);
	    
	    //JQuery Object fields
	    this.$speed = $("#speed");
	    this.$color = $("#color");
	    this.$roadlanes = $("#road_lanes");
	    this.$roador = $("#roador");
	    this.$length = $("#length");
	    this.$intlanes = $("#int_lanes");
        this.$type = $("#type");

	    this.$roadform = $("#road_control");
	    this.$carform  = $("#car_control");
	    this.$intform  = $("#inter_control");
	    this.$connform = $("#conn_control");
	    this.$deleteform = $("#delete_control");

	    //Drawing/Adding fields
	    this.selected = 0; //0 - Car, 1 - Road, 2 - Intersection, 3 - Connection, 4 - Delete
	    this.mousecell = {x: 0, y: 0};
	    this.mousecell = {x: 0, y: 0};
	    this.timer = 0;
	    this.drawing = true;

	    this.r = new Road({x: 0, y: 0}, 0, 0, 0);

	    this.roadfits = true;
	    this.connclicked = false;
	    this.openroad = "";
	    this.openroadside = 0;

	    this.updateValues();
	    this.hideAllForms();  
	    this.attachInputs();
	    this.$carform.show();
	    $("#car").text("[c]ar");
	}
    attachInputs () {
        //Div Buttons - on click toggle displays of forms
        this.sim.canvas.on( 'keypress',this.handleKey.bind(this));

        //On mouse move to update data for drawing
        this.sim.canvas.on('mousemove', function (e) {
            this.mousepos = this.calculateMousePos(e);
            this.mousecell = this.calculateMouseCell();
            this.checkInsertionFit();   //This updates fields used by the click callbacks
            //Reset Drawing timer
            this.timer = 0;
            this.drawing = true;
        }.bind(this));

        //On mouse click to add things
        this.sim.canvas.on('click', function (e) {
        	this.updateValues();
            switch (this.selected) {
                case 0: //Car
                    this.carClickCallback();
                    break;
                case 1: //Road
                    this.roadClickCallback();
                    break;
                case 2: //Intersection
                    this.interClickCallback();
                    break;
                case 3: //Connection
                    this.connClickCallback();
                    break;
                case 4: //Delete
                    this.deleteClickCallback();
                default:
            }
        }.bind(this));

        //With all of the callbacks setup, now is a good time to update our 
        //information from the dom.  
        this._speed = this.$speed.val();
        this._color = this.$color.val();
        this._roadlanes = this.$roadlanes.val();
        this._intlanes = this.$intlanes.val();
        this._length = this.$length.val();
        this._drivetype_ind = 0;
    }
    updateValues(){
        this._speed = 1*this.$speed.text();
        this._color = 1*this.$color.text();
        this._roadlanes = 1*this.$roadlanes.text();
        this._length = 1*this.$length.text();
        this._intlanes = 1*this.$intlanes.text();
        this._roador = 1*this.$roador.text();
    }
    hideAllForms () {
        $("#road").text("'r'oad");
        $("#car").text("'c'ar");
        $("#intersection").text("'i'ntersection");
        $("#connections").text("c'o'nnect");
        $("#delete").text("'d'elete");
        this.$roadform.hide();
        this.$carform.hide();
        this.$intform.hide();
        this.$connform.hide();
        this.$deleteform.hide();
    }
    handleKey (key){
        // Change Menu
    	switch(key.which){
    		case 99:  // c - Car
    			console.log("car");
    			this.selected = 0;
    			this.hideAllForms();
    			this.$carform.show();
    			$("#car").text("[c]ar");
    			break;
    		case 114: // r - Road
    			this.selected = 1;
    			this.hideAllForms();
    			this.$roadform.show();
    			$("#road").text("[r]oad");
    			break;
    		case 105: // i - Intersection
    			this.selected = 2;
    			this.hideAllForms();
    			this.$intform.show();
    			$("#intersection").text("[i]ntersection");
    			break;
    		case 111: // o - Connection
    			this.selected = 3;
    			this.hideAllForms();
    			this.$connform.show();
    			$("#connections").text("c[o]nnect");
    			break;
    		case 100: // d - delete
    			this.selected = 4;
    			this.hideAllForms();
    			this.$deleteform.show();
    			$("#delete").text("[d]elete");
    			break;
    		default:
    	}
        // Interact with menu
    	switch(this.selected){
    		case 0:
    			this.handleCarKeys(key.which);
    			break;
    		case 1:
    			this.handleRoadKeys(key.which);
    			break;
    		case 2:
    			this.handleIntersectionKeys(key.which);
    			break;
    		default:
    			break;
    	}
    }
    handleCarKeys(which){
        console.log("handling car keys. lol.");
        switch(which){
            case 113: // q color down
                if(this._color > 0){
                    this._color--;
                    this.$color.text(""+this._color);
                }
                break;
            case 119:  // w - color 'up'
                if(this._color < 21){
                    this._color++  ;
                    this.$color.text(""+this._color);
                }
                break;
            case 97:   // a - driver down
                if(this._drivetype_ind > 0){
                    this._drivetype_ind--;
                    this.$type.text(DRIVERS[this._drivetype_ind]);
                }
                break; 
            case 115:  // s - driver down
                if(this._drivetype_ind < 2){
                    this._drivetype_ind++  ;
                    this.$type.text(DRIVERS[this._drivetype_ind]);
                }
                break;
            case 122:  // z - speed down
                if(this._speed > 10){
                    this._speed--;
                    this.$speed.text(""+this._speed);
                }
                break; 
            case 120:  // x - speed up
                if(this._speed < 60){
                    this._speed++   ;
                    this.$speed.text(""+this._speed);
                }
                break; 
        }
    }
    handleRoadKeys(which){
    	console.log("handling road keys");
    	switch(which){
    		case 113:  // q - orientation 'down'
    			if(this._roador > 0){
    				this._roador--;
    				this.$roador.text(""+this._roador);
    			}
    			break;
    		case 119:  // w - orientation 'up'
    			if(this._roador < 3){
    				this._roador++	;
    				this.$roador.text(""+this._roador);
    			}
    			break;
    		case 97:   // a - length down
    			if(this._length > 0){
    				this._length--;
    				this.$length.text(""+this._length);
    			}
    			break; 
    		case 115:  // s - length down
    			if(this._length < 30){
    				this._length++	;
    				this.$length.text(""+this._length);
    			}
    			break;
			case 122:  // z - lanes down
				if(this._roadlanes > 1){
    				this._roadlanes--;
    				this.$roadlanes.text(""+this._roadlanes);
    			}
    			break; 
    		case 120:  // x - lanes up
    			if(this._roadlanes < 4){
    				this._roadlanes++	;
    				this.$roadlanes.text(""+this._roadlanes);
    			}
    			break; 	
    	}
    }
    handleIntersectionKeys(which){
        console.log("handling car keys. lol.");
        switch(which){
            case 113: // q lanes down
                if(this._intlanes > 1){
                    this._intlanes--;
                    this.$intlanes.text(""+this._intlanes);
                }
                break;
            case 119:  // w - lanes 'up'
                if(this._intlanes < 6){
                    this._intlanes++  ;
                    this.$intlanes.text(""+this._intlanes);
                }
                break;
        }
    }   
    draw () {
        var ctx = this.sim.ctx;
        if (this.mousecell.y >= 0
                && this.mousecell.x >= 0
                && this.mousecell.y < this.sim.size.y
                && this.mousecell.x < this.sim.size.x) {
            switch (this.selected) {
                case 0: //Car
                    this.drawCar(ctx);
                    break;
                case 1: //Road
                    this.drawRoad(ctx);
                    break;
                case 2: //Intersections
                    this.drawInt(ctx);
                    break;
                case 3: //Connections
                    this.drawConn(ctx);
                    break;
                default:
                    break;
            }
        }
    }
    drawCar (ctx) {
        if (++this.timer > 20) {
            this.drawing = !this.drawing;
            this.timer = 0;
        }
        if (this.drawing) {
            ctx.beginPath();
            ctx.fillStyle = "grey";
            ctx.fillRect(this.mousecell.x * this.sim.scale + this.sim.size.x0 + 2,
                    this.mousecell.y * this.sim.scale + this.sim.size.y0 + 2,
                    this.sim.scale - 3, this.sim.scale - 3);
        }
    }
    drawRoad (ctx) {
        if (this.drawing) {
            //Draw the rectangle
            var rx, ry, dx, dy, o, or;
            o = this._roador;
            or = this.r.getO(o * 1);
            rx = (this.mousecell.x + or.xd) * this.sim.scale + this.sim.size.x0;
            ry = (this.mousecell.y + or.yd) * this.sim.scale + this.sim.size.y0;
            dx = (this._roadlanes * or.lx + this._length * or.px) * this.sim.scale - 1 * or.lx - 1 * or.px;
            dy = (this._roadlanes * or.ly + this._length * or.py) * this.sim.scale - 1 * or.ly - 1 * or.py;
            ctx.strokeStyle = "grey";
            ctx.beginPath();
            ctx.setLineDash([5]);
            ctx.lineWidth = 3;
            ctx.rect(rx, ry, dx, dy);
            ctx.stroke();
            ctx.setLineDash([0]);

            //Draw direction arrow
            var mx, my, ax, ay, tx, ty;
            mx = rx + 0.5 * this._roadlanes * this.sim.scale * or.lx;
            my = ry + 0.5 * this._roadlanes * this.sim.scale * or.ly;
            ax = mx + this._length * this.sim.scale * or.px;
            ay = my + this._length * this.sim.scale * or.py;
            ctx.strokeStyle = "grey";
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(ax, ay);
            ctx.stroke();

            ctx.beginPath();
            tx = ax - this.sim.scale * or.px - 0.5 * this.sim.scale * or.lx;
            ty = ay - this.sim.scale * or.py - 0.5 * this.sim.scale * or.ly;
            ctx.moveTo(ax, ay);
            ctx.lineTo(tx, ty);
            ctx.moveTo(ax, ay);
            tx = ax - this.sim.scale * or.px + 0.5 * this.sim.scale * or.lx;
            ty = ay - this.sim.scale * or.py + 0.5 * this.sim.scale * or.ly;
            ctx.lineTo(tx, ty);
            ctx.stroke();
        }
    }
    drawInt (ctx) {
        //Draw an outline of the square representing the intersection.
        var rx, ry, d;
        rx = (this.mousecell.x + 1) * this.sim.scale + this.sim.size.x0;
        ry = (this.mousecell.y + 1) * this.sim.scale + this.sim.size.y0;
        d = -1 * this._intlanes * this.sim.scale;
        ctx.strokeStyle = "grey";
        ctx.beginPath();
        ctx.setLineDash([5]);
        ctx.lineWidth = 3;
        ctx.rect(rx, ry, d * 2, d * 2);
        ctx.stroke();
        ctx.setLineDash([0]);
    }
    drawConn (ctx) {
        //Road Output Connections
        var road;
        for (var i = 0; i < this.sim.roads.length; i++) {
            road = this.sim.roads[i];
            if (!(road.out === "none")) {
                this.drawConnLineRoad(ctx, road);
            }
            this.drawDirectionArrow(ctx, road);
        }
        //Intersection Output Connections
        var int, outx0, outy0, inx0, iny0, dx, dy;
        for (var i = 0; i < this.sim.intersections.length; i++) {
            this.drawConnLineInt(ctx, this.sim.intersections[i]);
        }
        //If an open output is clicked, draw a line from output to cursor
        if (this.connclicked === true) {
            this.drawMouseLine(ctx);
        }
    }
    drawConnLineRoad (ctx, road) {
        var from, to;
        from = {
            x: (road.dim.xd0 + road.o.px * (road.length - 0.5) + 0.5 * road.o.lx * road.lanes) * this.sim.scale + this.sim.size.x0,
            y: (road.dim.yd0 + road.o.py * (road.length - 0.5) + 0.5 * road.o.ly * road.lanes) * this.sim.scale + this.sim.size.y0
        };
        to = road.out.getTo(this.sim.size, this.sim.scale, road.outside);
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.lineWidth = 2;
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    }
    drawConnLineInt (ctx, int) {
        for (var side = 0; side < 4; side++) {
            if (!(int.outs[side] === "none")) {
                this.drawOutLineInt(ctx, int, side);
            } else {
                this.drawOutputsInt(ctx, int, side);
            }
        }
    }
    drawDirectionArrow (ctx, road) {
        //Draw direction arrow
        var mx, my, ax, ay, tx, ty;

        ax = road.dim.xd0 + (0.5 * road.length * road.o.px) + (0.5 * road.o.lx * road.lanes);
        ay = road.dim.yd0 + (0.5 * road.length * road.o.py) + (0.5 * road.o.ly * road.lanes);

        ctx.strokeStyle = "#B33D3D";

        ctx.beginPath();
        tx = (ax - 0.5 * road.o.lx - 0.5 * road.o.px) * this.sim.scale;
        ty = (ay - 0.5 * road.o.ly - 0.5 * road.o.py) * this.sim.scale;
        ctx.moveTo(ax * this.sim.scale + this.sim.size.x0, ay * this.sim.scale + this.sim.size.y0);
        ctx.lineTo(tx + this.sim.size.x0, ty + this.sim.size.y0);
        ctx.moveTo(ax * this.sim.scale + this.sim.size.x0, ay * this.sim.scale + this.sim.size.y0);
        tx = (ax + 0.5 * road.o.lx - 0.5 * road.o.px) * this.sim.scale;
        ty = (ay + 0.5 * road.o.ly - 0.5 * road.o.py) * this.sim.scale;
        ctx.lineTo(tx + this.sim.size.x0, ty + this.sim.size.y0);
        ctx.stroke();
    }
    drawMouseLine (ctx, road) {
        var from = this.openroad.getFrom(this.sim.size, this.sim.scale, this.openroadside);
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(this.mousepos.x, this.mousepos.y);
        ctx.stroke();
    }
    drawOutputsInt (ctx, int, side) {
        //Draw Rectangles
        var outx0, outy0, inx0, iny0, dx, dy;
        switch (side) {
            case 0:
                outx0 = int.base.x;
                outy0 = int.base.y - 2 * int.lanes + 1;
                inx0 = int.base.x - int.lanes + 1;
                iny0 = int.base.y - 2 * int.lanes + 1;
                dx = -1 * (int.lanes - 1);
                dy = 1;
                break;
            case 1:
                outx0 = int.base.x - 2 * int.lanes + 1;
                outy0 = int.base.y - 2 * int.lanes + 2;
                inx0 = outx0;
                iny0 = int.base.y - int.lanes + 1;
                ;
                dx = 1;
                dy = int.lanes - 1;
                break;
            case 2:
                outx0 = int.base.x - 2 * int.lanes + 2;
                outy0 = int.base.y;
                inx0 = int.base.x - int.lanes + 1;
                iny0 = outy0;
                dx = int.lanes - 1;
                dy = 1;
                break;
            case 3:
                outx0 = int.base.x;
                outy0 = int.base.y;
                inx0 = outx0;
                iny0 = int.base.y - int.lanes + 1;
                dx = 1;
                dy = -1 * (int.lanes - 1);
                break;
        }
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.rect(outx0 * this.sim.scale + this.sim.size.x0,
                outy0 * this.sim.scale + this.sim.size.y0,
                dx * this.sim.scale,
                dy * this.sim.scale);
        ctx.rect(inx0 * this.sim.scale + this.sim.size.x0,
                iny0 * this.sim.scale + this.sim.size.y0,
                dx * this.sim.scale,
                dy * this.sim.scale);
        ctx.stroke();
    }
    drawOutLineInt (ctx, int, side) {
        var from, to;
        from = int.getFrom(this.sim.size, this.sim.scale, side);
        to = int.outs[side].getTo(this.sim.size, this.sim.scale, side);
        ctx.beginPath();
        ctx.strokeStyle = "#B33D3D";
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    }
    carClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (mx >= 0 && my >= 0 && mx < this.sim.size.x && my < this.sim.size.y) {
            //Find which road or intersection the car goes in
            for (var i = 0; i < this.sim.roads.length; i++) {
                if (this.insideRoad(mx, my, this.sim.roads[i])) {
                    var target = this.sim.roads[i];
                    var pos = this.getPos(mx, my, target);

                    //Check that it doesnt hit another car.
                    if (target.road[pos.l][pos.p] === 0) {
                        target.addCar(new Car(this._color, {lane: pos.l, pos: pos.p, speed: this._speed}, Driver().NORMAL));
                    }
                    break;
                }
            }
        }
    }
    roadClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (this.roadfits) {
            this.sim.addRoad(new Road({x: mx, y: my}, this._roador, this._length, this._roadlanes));
        }
    }
    interClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (this.roadfits) {
            this.sim.addIntersection(new Intersection({x: mx, y: my}, this._intlanes, 0));
        }
    }
    connClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        if (this.connclicked) {
            //Check if click is on a road
            for (var i = 0; i < this.sim.roads.length; i++) {
                if (this.insideRoad(mx, my, this.sim.roads[i])) {
                    var target = this.sim.roads[i];
                    this.openroad.setOutput(target, this.openroadside);
                    break;
                }
            }
            //Check if click is on an intersection
            for (var i = 0; i < this.sim.intersections.length; i++) {
                if (this.insideInt(mx, my, this.sim.intersections[i])) {
                    var target = this.sim.intersections[i];
                    this.openroad.setOutput(target, target.getSide(mx, my));
                    break;
                }
            }
            this.connclicked = false;
        } else {
            //Check if click is on a connection
            for (var i = 0; i < this.sim.roads.length; i++) {
                if (this.insideRoad(mx, my, this.sim.roads[i])) {
                    this.sim.roads[i].out = "none";
                    this.openroad = this.sim.roads[i];
                    this.openroadside = 0; //Hack for road/intersection 'polymorphism'
                    break;
                }
            }
            //Check if click is on an intersection
            var inter;
            for (var i = 0; i < this.sim.intersections.length; i++) {
                inter = this.sim.intersections[i];
                if (this.insideInt(mx, my, inter)) {
                    inter.outs[inter.getOut(mx, my)] = "none";
                    this.openroad = inter;
                    this.openroadside = inter.getOut(mx, my);
                    break;
                }
            }
            this.connclicked = true;
        }
    }
    deleteClickCallback () {
        var mx, my;
        mx = this.mousecell.x;
        my = this.mousecell.y;
        for (var i = 0; i < this.sim.roads.length; i++) {
            if (this.insideRoad(mx, my, this.sim.roads[i])) {
                this.sim.roads.splice( i, 1 );
                break;
            }
        }
        //Check if click is on an intersection
        for (var i = 0; i < this.sim.intersections.length; i++) {
            if (this.insideInt(mx, my, this.sim.intersections[i])) {
                this.sim.intersections.splice(i, 1);
                break;
            }
        }
    }
    calculateMousePos (e) {
        //Get mouse x, y
        var mx, my;
        var c = this.sim.canvas.get(0);

        var element = c, offsetX = 0, offsetY = 0;
        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }
        var stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(c, null)['paddingLeft'], 10) || 0;
        var stylePaddingTop = parseInt(document.defaultView.getComputedStyle(c, null)['paddingTop'], 10) || 0;
        var styleBorderLeft = parseInt(document.defaultView.getComputedStyle(c, null)['borderLeftWidth'], 10) || 0;
        var styleBorderTop = parseInt(document.defaultView.getComputedStyle(c, null)['borderTopWidth'], 10) || 0;
        // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
        // They will mess up mouse coordinates and this fixes that
        var html = document.body.parentNode;
        var htmlTop = html.offsetTop;
        var htmlLeft = html.offsetLeft;

        offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
        offsetY += stylePaddingTop + styleBorderTop + htmlTop;
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
        return {x: mx, y: my};
    }
    calculateMouseCell () {
        var mx = this.mousepos.x;
        var my = this.mousepos.y;
        mx = mx - this.sim.size.x0;
        my = my - this.sim.size.y0;
        mx = Math.floor(mx / this.sim.scale);
        my = Math.floor(my / this.sim.scale);
        return {x: mx, y: my};
    }
    checkInsertionFit () {
        var rx0, ry0, rxn, ryn, or, o, bottom, top, left, right;
        rx0 = this.mousecell.x;
        ry0 = this.mousecell.y;
        switch (this.selected) {
            case 1:
                o = this.$roador.text();
                or = this.r.getO(o * 1);
                rxn = rx0 + ((this._roadlanes - 1) * or.lx + (this._length - 1) * or.px);
                ryn = ry0 + ((this._roadlanes - 1) * or.ly + (this._length - 1) * or.py);

                top = Math.max(ry0, ryn);
                bottom = Math.min(ry0, ryn);
                left = Math.min(rx0, rxn);
                right = Math.max(rx0, rxn);
                break;
            case 2:
                rxn = rx0 - this._intlanes * 2 + 1;
                ryn = ry0 - this._intlanes * 2 + 1;

                top = Math.max(ry0, ryn);
                bottom = Math.min(ry0, ryn);
                left = Math.min(rx0, rxn);
                right = Math.max(rx0, rxn);
                break;
            default:
                break;
        }

        this.roadfits = true;
        //Bounding rect
        if (top < this.sim.size.y && bottom >= 0 && left >= 0 && right < this.sim.size.x) {
            var road, rtop, rbottom, rleft, rright;
            for (var i = 0; i < this.sim.roads.length; i++) {
                road = this.sim.roads[i];
                rtop = Math.max(road.dim.yd0, road.dim.yd0 + road.dim.dy);
                rbottom = Math.min(road.dim.yd0, road.dim.yd0 + road.dim.dy);
                rright = Math.max(road.dim.xd0, road.dim.xd0 + road.dim.dx);
                rleft = Math.min(road.dim.xd0, road.dim.xd0 + road.dim.dx);
                // l1 < r2 && r1 > l2 && b1 < t2 && t1 > b2
                if (left < rright && right >= rleft && top >= rbottom && bottom < rtop) {
                    this.roadfits = false;

                    break;
                }
            }
        } else {
            this.roadfits = false;
        }
    }
    insideRoad (x, y, road) {

        var right = Math.max(road.dim.xn0, road.dim.xn0 + (road.o.lx * (road.lanes - 1)) + (road.o.px * (road.length - 1)));
        var left = Math.min(road.dim.xn0, road.dim.xn0 + (road.o.lx * (road.lanes - 1)) + (road.o.px * (road.length - 1)));
        var top = Math.max(road.dim.yn0, road.dim.yn0 + (road.o.ly * (road.lanes - 1)) + (road.o.py * (road.length - 1)));
        var bottom = Math.min(road.dim.yn0, road.dim.yn0 + (road.o.ly * (road.lanes - 1)) + (road.o.py * (road.length - 1)));

        return (x >= left)
                && (x <= right)
                && (y >= bottom)
                && (y <= top);
    }
    insideInt (x, y, int) {
        var right = int.base.x;
        var left = int.base.x - 2 * int.lanes;
        var bottom = int.base.y - 2 * int.lanes;
        var top = int.base.y;
        var ret = (x >= left)
                && (x <= right)
                && (y >= bottom)
                && (y <= top);
        console.log("InsideInt?:", x, y, ret);
        return ret;
    }
    getPos (x, y, road) {
        var lane, pos;
        lane = Math.abs(road.o.lx * (road.dim.xn0 - x) + road.o.ly * (road.dim.yn0 - y));
        //pos is distance in px/py from xn0/yn0
        pos = Math.abs(road.o.px * (road.dim.xn0 - x) + road.o.py * (road.dim.yn0 - y));
        return {l: lane, p: pos};
    }
};

function Driver() {
    return({NORMAL: 0, SLOW: 1, CRAZY: 2});
}

export default InputHandler;