
var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);
var math  = require('mathjs');

var canvas_2d = document.getElementById("canvas_2d");
var canvas_3d = document.getElementById("canvas_3d");

// Globals for threejs and drawing on the canvas.
var scene, camera, renderer, controls, geometry, material, mesh;
var ctx_2d, points, w_arrow, arrow_helper, w_plane, dir;

// Data Parameters - Points about which the pos/neg examples are centered.
var xp = getRandomArbitrary(-0.55, 0.35);
var yp = getRandomArbitrary(-0.55, 0.35);
var xn = getRandomArbitrary(-0.55, 0.35);
var yn = getRandomArbitrary(-0.55, 0.35);
var r = 0.65, n = 10;

init();
animate(); 

function init() {
    points = get_random_data(xp, yp, xn, yn, n, r); 
    init_3d();
    init_2d()
    add_listeners();
}

function init_3d(){
    // threejs core stuff.
    renderer = new THREE.WebGLRenderer( {canvas: canvas_3d} );
    renderer.setSize( canvas_3d.width, canvas_3d.height );
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.Camera();
    camera = new THREE.PerspectiveCamera( 75, canvas_3d.width/canvas_3d.height, 1, 10000 );
    camera.position.x = 1.5;
    camera.position.y = 2.0;
    camera.position.z = 2.0;
    camera.lookAt(new THREE.Vector3(0,0,0));

    // Controls
    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableKeys = false;
    var d = Math.sqrt(camera.position.x*camera.position.x+camera.position.y*camera.position.y+camera.position.z*camera.position.z);
    controls.minDistance = d;
    controls.maxDistance = d;

    // Data
    var point_cloud_p = generatePoints(points[0], new THREE.Color(0,1,0));
    var point_cloud_n = generatePoints(points[1], new THREE.Color(1,0,0));
    scene.add(point_cloud_p);
    scene.add(point_cloud_n);

    // W Vector Arrow
    w_arrow = calculate_w(points);
    dir = new THREE.Vector3().fromArray(w_arrow.toArray());
    dir.normalize();
    var origin = new THREE.Vector3(0,0,0);
    var hex = 0xffff00;
    arrow_helper = new THREE.ArrowHelper( dir, origin, 1, hex );
    scene.add( arrow_helper );

    // W Vectors Normal Plane
    var plane_geo = new THREE.PlaneGeometry(3, 3);
    var material = new THREE.MeshBasicMaterial( {color: 0xCCCCCC, side: THREE.DoubleSide} );
    w_plane = new THREE.Mesh( plane_geo, material );
    w_plane.lookAt(dir);
    scene.add( w_plane);
    
    // 0-Plane
    var gridHelper_0 = new THREE.GridHelper( 2, 10 );
    scene.add( gridHelper_0 );

    // 1-Plane
    var gridHelper_1 = new THREE.GridHelper( 2, 10 );
    gridHelper_1.position.y = 1;
    scene.add( gridHelper_1 );

    scene.add( new THREE.AxisHelper( 1 ) );
}

function init_2d(){
    // 2D Init
    ctx_2d = canvas_2d.getContext("2d");
    ctx_2d.fillStyle = "darkgrey";
    ctx_2d.fillRect(0,0,350, 350);

    draw_points_2d( ctx_2d, points );
    draw_line_2d( ctx_2d, dir );
}

function add_listeners(){
    window.onkeydown = function(e){
        var key = e.keyCode ? e.keyCode : e.which;
        var angles = calculate_angles(dir);
        
        update_flag = true;
        var delta = 0.005;
        if( e.ctrlKey ){
            delta = 0.015;
        } 

        switch(key){
            case 37: // Left - (<theta/off z>, <phi/about z, old_angles)
                angles = tweak_angles( 0, delta, angles );
                break;
            case 39: // Right
                angles = tweak_angles( 0, -1*delta, angles );
                break;
            case 38: // Up
                angles = tweak_angles( -1*delta, 0, angles );
                break;
            case 40: // Down
                angles = tweak_angles( delta, 0, angles );
                break;   
            default:
                update_flag = false;
                break; 
        }

        if(update_flag){
            var new_dir = get_3vec(angles);
            arrow_helper.setDirection( new_dir );
            w_plane.lookAt( new_dir );
            dir = new_dir;
            renderer.render(scene, camera);
            init_2d();  
        }
    }
}

function calculate_angles(dir){
    var theta   = Math.acos(dir.z);
    var phi = Math.atan2(dir.y, dir.x);
    return [theta, phi];
}

function tweak_angles( d_theta, d_phi, angles ){ 
    var new_theta = angles[0]+d_theta;
    var new_phi   = angles[1]+d_phi;

    if(new_theta < 0){
        new_theta = Math.PI;
    } else if(new_theta > Math.PI){
        new_theta = 0;
    }

    if(new_phi < 0){
        new_phi = 2*Math.PI;
    } else if(new_phi > 2*Math.PI){
        new_phi = 0;
    }
    return [new_theta, new_phi];
}

function get_3vec(angles){  
    var theta = angles[0];
    var phi   = angles[1];
    var x = Math.sin(theta)*Math.cos(phi);
    var y = Math.sin(theta)*Math.sin(phi);
    var z = Math.cos(theta);
    return new THREE.Vector3(x,y,z);
}

function draw_line_2d( ctx, w ){
    var size = {x: ctx.canvas.width*1.0, y: ctx.canvas.height*1.0};
    var origin = {x: 0.5*size.x, y: 0.5*size.y};
    var p1 = {x: -1.0, y: 0};
    var p2 = {x: 1.0, y: 0};

    p1.y = line_eqn(p1.x, w);
    p2.y = line_eqn(p2.x, w);

    ctx.beginPath();
    ctx.moveTo(p1.x*size.x+origin.x, p1.y*size.y+origin.y);
    ctx.lineTo(p2.x*size.x+origin.x, p2.y*size.y+origin.y);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function line_eqn( x, w_a ){
    return (-1/w_a.z)*(w_a.y + w_a.x*x);
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
    var best_err = Number.MAX_SAFE_INTEGER;
    var W = math.add(math.zeros(3), 0.05);
    var i = 0;
    var y_p;

    while( i < itr ){
        // Evaluate Error
        y_p = math.sign(math.multiply(math.transpose(W), math.transpose(X)));
        err = math.sum(math.abs(math.compare(y_n, y_p)));  

        if( err < best_err ){
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
    return best;
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