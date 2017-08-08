class Car {
    constructor(id, cardata, type){
		this.id = id;
		this.loc = {lane: cardata.lane, pos: cardata.pos};
		this.type = type;
		this.speed = cardata.speed;
		this.timer = 0;
    }
};
export default Car;
