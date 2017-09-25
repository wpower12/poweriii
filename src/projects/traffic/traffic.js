// import '../style.css';
import Simulation from './simulation.js';
import Road from './road.js';
import Intersection from './intersection.js';
import Car from './car.js';

var canvas = $("#trafficcanvas");
var container = $('.terminal');
var sim = new Simulation(canvas, container);

sim.addRoad(new Road({x: 8, y: 20}, 0, 15, 2)); //0 - Up   (leftish)
sim.addRoad(new Road({x: 38, y: 20}, 0, 15, 2)); //1 - Up   (rightish)
sim.addRoad(new Road({x: 34, y: 21}, 1, 26, 2)); //2 - Left (lower)
sim.addRoad(new Road({x: 34,  y: 2}, 1, 26, 2)); //3 - Left (upper)
sim.addRoad(new Road({x: 5,  y: 6}, 2, 15, 2)); //4 - Down  (leftsh)
sim.addRoad(new Road({x: 35, y: 6}, 2, 15, 2));//5 - Down  (rightish)
sim.addRoad(new Road({x: 9, y: 24}, 3, 26, 2));//6 - Right (lower)
sim.addRoad(new Road({x: 9, y: 5}, 3, 26, 2));//7 - Rght (uppwr)

sim.addIntersection(new Intersection({x: 8, y: 5}, 2, 1));//0 (up left)
sim.addIntersection(new Intersection({x: 38, y: 5}, 2, 1));//1 (up right)
sim.addIntersection(new Intersection({x: 38, y: 24}, 2, 1));//2 (down right)
sim.addIntersection(new Intersection({x: 8, y: 24}, 2, 1));//3 (down left)

sim.addCar(0, new Car(0, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(0, new Car(1, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(0, new Car(2, {lane: 0, pos: 10, speed: 70}, 0));
sim.addCar(0, new Car(3, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(4, new Car(4, {lane: 0, pos: 1, speed: 30}, 0));
// sim.addCar(4, new Car(5, {lane: 0, pos: 5, speed: 50}, 0));
// sim.addCar(4, new Car(6, {lane: 0, pos: 12, speed: 80}, 0));
// sim.addCar(4, new Car(7, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(5, new Car(8, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(5, new Car(9, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(5, new Car(10, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(6, new Car(11, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(6, new Car(12, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(6, new Car(13, {lane: 1, pos: 1, speed: 50}, 0));

sim.addCar(7, new Car(14, {lane: 0, pos: 1, speed: 30}, 0));
sim.addCar(7, new Car(15, {lane: 0, pos: 5, speed: 50}, 0));
sim.addCar(7, new Car(16, {lane: 1, pos: 1, speed: 50}, 0));

//Upperleft
sim.connectRtoI(0, 0, 2);
sim.connectRtoI(3, 0, 3);
sim.connectItoR(0, 4, 2);
sim.connectItoR(0, 7, 3);

//Upperright
sim.connectRtoI(1, 1, 2);
sim.connectRtoI(7, 1, 1);
sim.connectItoR(1, 3, 1);
sim.connectItoR(1, 5, 2);

//Lowerright
sim.connectRtoI(6, 2, 1);
sim.connectRtoI(5, 2, 0);
sim.connectItoR(2, 1, 0);
sim.connectItoR(2, 2, 1);

//Lowerleft
sim.connectRtoI(2, 3, 3);
sim.connectRtoI(4, 3, 0);
sim.connectItoR(3, 6, 3);
sim.connectItoR(3, 0, 0);

sim.run();