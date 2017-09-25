var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE)
var math  = require('mathjs');

var canvas_2d = document.getElementById("canvas_2d");
var canvas_3d = document.getElementById("canvas_3d");

// THREEjs Globals
var scene, camera, renderer, controls, geometry, material, mesh;
var ctx_2d, points, w_arrow;

// Data Parameters
var xp = getRandomArbitrary(-0.55, 0.35);
var yp = getRandomArbitrary(-0.55, 0.35);
var xn = getRandomArbitrary(-0.55, 0.35);
var yn = getRandomArbitrary(-0.55, 0.35);
var r = 0.65, n = 10;

init();
animate(); 

function init() {
    // Data Init
    points = get_random_data(xp, yp, xn, yn, n, r); 
    init_3d();
    init_2d();

}

function init_3d(){
    // 3D Init
    var point_cloud_p = generatePoints(points[0], new THREE.Color(0,1,0));
    var point_cloud_n = generatePoints(points[1], new THREE.Color(1,0,0));

    renderer = new THREE.WebGLRenderer( {canvas: canvas_3d} );
    renderer.setSize( canvas_3d.width, canvas_3d.height );

    scene = new THREE.Scene();
    camera = new THREE.Camera();
    camera = new THREE.PerspectiveCamera( 75, canvas_3d.width/canvas_3d.height, 1, 10000 );
    camera.position.x = 1.5;
    camera.position.y = 2.0;
    camera.position.z = 2.0;
    camera.lookAt(new THREE.Vector3(0,0,0));

    controls = new OrbitControls( camera, renderer.domElement );
    var d = Math.sqrt(camera.position.x*camera.position.x+camera.position.y*camera.position.y+camera.position.z*camera.position.z);
    controls.minDistance = d;
    controls.maxDistance = d;

    // Actually get the vector from the data. 
    w_arrow = calculate_w(points);
    var dir = new THREE.Vector3().fromArray(w_arrow.toArray());
    dir.normalize();
    var origin = new THREE.Vector3(0,0,0);
    var length = 1;
    var hex = 0xffff00;

    var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
    scene.add( arrowHelper );

    var plane_geo = new THREE.PlaneGeometry(3, 3);
    var material = new THREE.MeshBasicMaterial( {color: 0xCCCCCC, side: THREE.DoubleSide} );
    var w_plane = new THREE.Mesh( plane_geo, material );
    w_plane.lookAt(dir);
    scene.add( w_plane);
    
    var gridHelper = new THREE.GridHelper( 4, 10 );
    scene.add( gridHelper );
    scene.add(point_cloud_p);
    scene.add(point_cloud_n);
    scene.add( new THREE.AxisHelper( 1 ) );
}

function init_2d(){
    // 2D Init
    ctx_2d = canvas_2d.getContext("2d");
    ctx_2d.fillStyle = "darkgrey";
    ctx_2d.fillRect(0,0,350, 350);

    draw_points_2d( ctx_2d, points );
    // Busted for now.  Gotta get the method calls down. 
    // draw_line_2d( ctx_2d, w_arrow );
}

function draw_line_2d( ctx, w ){
    var size = {x: ctx.canvas.width, y: ctx.canvas.height};
    var origin = {x: 0.5*size.x, y: 0.5*size.y};
    var p1 = {x: -1, y: 0};
    var p2 = {x: 1, y: 0};

    var w_3 = new THREE.Vector3().fromArray(w.toArray());
    // w_3.normalize();

    p1.y = line_eqn(p1.x, w_3.normalize().toArray());
    p2.y = line_eqn(p2.x, w_3.normalize().toArray());

    ctx.beginPath();
    ctx.moveTo(p1.x*size.x+origin.x, p1.y*size.y+origin.y);
    ctx.lineTo(p2.x*size.x+origin.x, p2.y*size.y+origin.y);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function line_eqn( x, w_a ){
    // var w_a = w.toArray();
    return (1/w_a[1])*(-1*(w_a[2]) - w_a[0]*x);
}

function calculate_w(points){
    var n = points[0].length + points[1].length;
    var full_x = [];
    var full_y = [];
    for(var p=0; p<points[0].length; p++){
        var pos = points[0][p];
        var neg = points[1][p];
        full_x.push([pos[0], 1, pos[1]]);
        full_y.push(1);
        full_x.push([neg[0], 1, neg[1]]);
        full_y.push(-1);
    }   

    var X = math.matrix(full_x);
    var y_n = math.transpose(math.matrix(full_y));
    var W = pocket_algo( X, y_n, 1000 );

    return W;
}

function pocket_algo( X, y_n, itr ){
    var best = null;
    var best_err = null;
    var W = math.add(math.zeros(3), 0.05);
    var i = 0;
    var y_p;

    while( i < itr ){
        // Evaluate Error
        y_p = math.sign(math.multiply(math.transpose(W), math.transpose(X)));
        err = math.sum(math.abs(math.compare(y_n, y_p)));  
        if( best == null || best_err < err ){
            best = W;
            best_err = err;
        }

        var rnd_i = math.pickRandom( math.range(0,20), math.abs(math.compare(y_n, y_p)))
        if( rnd_i == undefined ){
            // Sometimes the weights are all 0?
        } else {
            var r_x = math.subset(X,   math.index(rnd_i, [0,1,2]));
            var r_y = math.subset(y_n, math.index(rnd_i));
            W = math.add(W, math.squeeze(math.transpose(math.multiply(r_y, r_x))));
        }

        i++;  
    }
    // Tracking the best in the pocket isn't working?  Idk.  Just returning last W for now.
    return W;
}

function get_random_data( xp, yp, xn, yn, n, r){
    var pos = [], neg = [];
    pos = get_random_set_about(xp, yp, n, r);
    neg = get_random_set_about(xn, yn, n, r);
    return [pos, neg];
}

function get_random_set_about( x, y, n, r ){
    var ret = [];
    var rx = getRandomNormal(r, r/3);
    var ry = getRandomNormal(r, r/3);
    
    for(var i = 0; i < n; i++){
        var new_x = x+getRandomNormal(0, rx);
        var new_y = y+getRandomNormal(0, ry);
        ret.push([new_x, new_y]);
    }
    return ret;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomNormal(mean, rad){
    return mean + rad*gauss_aprx();
}

function gauss_aprx() {
    return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
}

function generatePoints(points, color){
    var geometry = new THREE.Geometry();
    var colors   = [];
    for(var p=0; p < points.length; p++){
        var y = 1; // x_0
        var x = points[p][0]; // x_1
        var z = points[p][1]; // x_2
        var v = new THREE.Vector3(x,y,z);
        geometry.vertices.push(v);
        colors[p] = color;
    }
    geometry.colors = colors;
    geometry.computeBoundingBox();
    var material = new THREE.PointsMaterial( { size: 0.05, vertexColors: THREE.VertexColors } );
    var pointcloud = new THREE.Points( geometry, material );
    return pointcloud;
}


function draw_points_2d(ctx, points){
    // TODO - Change the points locations to be relative to the orgin you have, not the
    // actual origin of the canvas.  

    var size = {x: ctx.canvas.width, y: ctx.canvas.height};
    var origin = {x: 0.5*size.x, y: 0.5*size.y};
    
    // draw origin in the middle.
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(origin.x, origin.y+0.05*size.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(origin.x+0.05*size.x, origin.y);
    ctx.stroke();

    // Draw positives:
    var r = size.x * 0.005;
    ctx.strokeStyle = "green";
    for( var p = 0; p < points[0].length; p++){
        var xp = points[0][p][0]*0.5*size.x+origin.x;
        var yp = points[0][p][1]*0.5*size.x+origin.y;
        var xn = points[1][p][0]*0.5*size.x+origin.x;
        var yn = points[1][p][1]*0.5*size.x+origin.y;

        draw_circle(ctx, xp, yp, r, "green");
        draw_circle(ctx, xn, yn, r, "red");
    }
}

function draw_circle(ctx, x, y, r, clr){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI, false);
    ctx.fillStyle = clr;
    ctx.fill()
}

function animate() {
    requestAnimationFrame( animate );
    // group.rotation.y += 0.005;
    render();
}

function render() {
    renderer.render( scene, camera );
}