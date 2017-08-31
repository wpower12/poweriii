/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

var directory = {
    home: {
        about: {
            name: "about.txt",
            type: "file",
            tag: " [[;#BAE4F0;]about.txt] - A bit about me.",
            body: "[[b;#BAE4F0;]Background:] \n In a past life I was a mechanical engineer. Automating \nthings in AutoCAD made me fall in love with solving problems\n through code. After teaching myself some basics and gaining\nsome freelance web development clients, I decided to go back\nto school.  I am currently pursuing a Phd degree in \nAI and ML from Temple University.\n[[b;#BAE4F0;]Skills:] \n    I have experience with a bunch of languages, but feel\nmost comfortable in Java and PHP.  For a full break down, \nyou can obtain a copy of my cv with the '[[;#BAE4F0;]cv]' command or use\nthe '[[;#BAE4F0;]github]', '[[;#BAE4F0;]linkedin]' commands to view my profiles.\n[[b;#BAE4F0;]Interests:] \n  In my free time I enjoy completing software, hardware, or \nother-ware projects.  I also like to juggle, bake, and play \nwith my cats.\n"
        },
        projects: {
            name: "projects",
            type: "dir",
            tag: " [[b;#44D544;]projects]  - Personal Projects"
        },
        blog: {
            name: "blog",
            type: "dir",
            tag: " [[b;#44D544;]blog]  - Things I Wrote"
        }
    },
    projects: {
        forces: {
            name: "forces",
            type: "exe",
            tag: " [[;#BAE4F0;]forces]  - Physics Simulation ",
            about: "This is one of my first involved javascript projects.  It is a\nsimple simulation of rigid discs in motion.  It handles momentem\nconserving collisions and includes a rudimentary simulation \nof a gravitational force.  The location of the moving discs is \nstored in a quad-tree to ensure quick lookups during collision \nresolution. The source for this can be found on my github.\n"
        },
        traffic: {
            name: "traffic",
            type: "exe",
            tag: " [[;#BAE4F0;]traffic] - Traffic Simulation",
            about: "Traffic is a grid based simulation of cars in a flow of \ntraffic. It comes with three possible types of driver; a sane\ndriver that always tries to be in the slow lane unless it \nneeds to pass, a fast driver that always stays in the fast \nlane, and a distrubting driver that always sits in the middle\nlane, and never moves. The simulation models roads and \nintersections, and allows for a variety of interconnections \nbetween them.  My input handling still needs to be migrated \nfrom my old implementation, but allows for the placement\nof all modeled components."
        },
        // procgen: {
        //     name: "procgen",
        //     type: "exe",
        //     tag: " [[;#BAE4F0;]procgen] - Procedural Generation of terrain.",
        //     about: "This was my first project using the Phaser game library.  It\nwas made as a way to explore the topic of procedural\ngeneration. A simple isometric level is generated using a \ncombination of noise, hand tuned methods, and good old \nrandomness.  The Phaser library made it easy to add some\nvisually pleaseing tweens. A copy of the source can be\nfound on my github."
        // },
        tribes: {
            name: "tribes",
            type: "exe",
            tag: " [[;#BAE4F0;]tribes]  - Tribe Simulation",
            about: "Tribes was one of my first javascript projects.  :)\nIt's a crude model of how 'tribes' or groups might form in\na collection of units tracking 'strength' values.  Each \nturn, a unit can 'fight' a unit near it, where the winner\nof the fight spreads its tribe.  If any unit ever notices\nthat it is surrounded only by weaker members of its current\ntribe, it revolts and starts its own tribe.  Suprisngly \ncomplex behaviour emerges from these simple rules."
        }
        // unitgp: {
        //     name: "unitgp",
        //     type: "exe",
        //     tag: " [[;#BAE4F0;]unitgp]  - Genetic Programming of Insect Behavior",
        //     about: "Look back later for more!  This is my current project.  I am\nworking on using genetic programming to 'evolve' programatic \nrepresentations of behaviour."
        // }
    }
};

var curr_dir = "home";
var prev_dir = "";

jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command, term) {
        if (command !== '') {
            try {
                var i = command.split(" ");
                switch( i[0] ){
                    case "about": 
                        commandAbout(term, command, directory);
                        break;
                    case "help":
                        commandHelp(term);
                        break;
                    case "cd":
                        if( i.length > 1 && i[1] == "blog" && curr_dir == "home"){
                            commandGoTo("/blog/")
                        }
                        commandCD(term, command, directory);
                        break;
                    case "ls":
                        commandLS(term, directory);
                        break;
                    case "read":
                        commandRead(term, command, directory);
                        break;
                    case "cv":
                        commandGoTo("http://poweriii.com/resume.php");
                        break;
                    case "github":
                        commandGoTo("https://github.com/wpower12");
                        break;
                    case "source":
                        commandGoTo("https://github.com/wpower12/poweriii");
                        break;
                    case "linkedin":
                        commandGoTo("https://www.linkedin.com/in/wkp3engineer");
                        break;
                    case "forces":
                        commandGoTo("/projects/forces.html");
                        break;
                    case "unitgp":
                        commandGoTo("/projects/unitgp.html");
                        break;
                    case "traffic":
                        commandGoTo("/projects/traffic.html");
                        break;
                    case "tribes":
                        commandGoTo("/projects/tribes.html");
                        break;
                    case "procgen":
                        commandGoTo("/projects/procgen.html");
                        break;
                    case "":
                        term.echo("");
                        break;
                    default:
                        var result = window.eval(command);
                        if (result !== undefined) {
                            this.echo(new String(result));
                        }
                }
            } catch(e) {
                this.error(new String(e));
            }
        } else {
           this.echo('');
        }
    }, {
        greetings: "[[b;#fff;]Welcome!  I'm the personal site of William Power.  \nType] [[b;#BAE4F0;]help] [[b;#fff;]for options.]\n",
        name: 'js_demo',
        height: 400,
        prompt: "[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~] [[b;#4C4CA6;]% ] "
    });
});

function commandAbout(t, e, directory) {
    var i, n = e.split(" ")[1], r = !1;
    for (var s in directory[curr_dir]) "exe" == directory[curr_dir][s].type && directory[curr_dir][s].name == n && (r = !0, i = directory[curr_dir][s]);
    r ? t.echo(i.about) : t.echo("exe not found")
}

function commandHelp(t) {
    t.echo("   This terminal behaves as a basic Javascript REPL. The \nfollowing commands are also available: \n");
    t.echo("       [[;#BAE4F0;]help] - Display this message");
    t.echo("   [[;#BAE4F0;]cd <DIR>] - Navigate to <DIR> ");
    t.echo("         [[;#BAE4F0;]ls] - List Contents of Directory.  Formatting:");
    t.echo("              [[b;#44D544;]directories] [[;#BAE4F0;]executables/files]");
    t.echo("[[;#BAE4F0;]read <FILE>] - Opens a file for reading.");
    t.echo("[[;#BAE4F0;]about <EXE>] - Displays some information about the application.");
    t.echo("         [[;#BAE4F0;]cv] - Download a PDF resume.");
    t.echo("     [[;#BAE4F0;]github] - Go to Github profile");
    t.echo("     [[;#BAE4F0;]source] - Go to source for this website");
    t.echo("   [[;#BAE4F0;]linkedin] - Go to Linkedin profile")
}
    
function commandCD(t, e, directory) {
    var i = e.split(" ")[1], n = !1;
    for (var r in directory[curr_dir]) "dir" == directory[curr_dir][r].type && directory[curr_dir][r].name == i && (n = !0);
    n && (prev_dir = curr_dir, curr_dir = i, t.set_prompt("[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~/" + curr_dir + "] [[b;#4C4CA6;]% ] "), console.log("Changed Directory to: " + i)), ".." == i && "home" != curr_dir && (curr_dir = prev_dir, "home" == curr_dir ? t.set_prompt("[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~ ] [[b;#4C4CA6;]% ] ") : t.set_prompt("[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~/" + curr_dir + "] [[b;#4C4CA6;]% ] "))
}

function commandLS(t, directory) {
    for(var e in directory[curr_dir]){
        t.echo(directory[curr_dir][e].tag);
    }
}

function commandRead(t, e, directory) {
    var i, n = e.split(" ")[1], r = !1;
    for (var s in directory[curr_dir]) "file" == directory[curr_dir][s].type && directory[curr_dir][s].name == n && (r = !0, i = directory[curr_dir][s]);
    r ? t.echo(i.body) : t.echo("file not found");
}

function commandGoTo(t) {
    // Little hacky but w.e.
    window.location.href = t
}

/***/ })

/******/ });