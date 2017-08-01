import './style.css';

var directory = {
    home: {
        about: {
            name: "about.txt",
            type: "file",
            tag: " [[;#BAE4F0;]about.txt] - A bit about me.",
            body: "[[b;#BAE4F0;]Background:] \n In a past life I was a mechanical engineer. Automating \nthings in AutoCAD made me fall in love with solving problems\n through code. After teaching myself some basics and gaining\nsome freelance web development clients, I decided to go back\nto school.  I am currently pursuing a masters degree in \ncomputer science from Temple University, with a focus\non Machine Learning, and general Software Engineering.\n[[b;#BAE4F0;]Skills:] \n    I have experience with a bunch of languages, but feel\nmost comfortable in Java and PHP.  For a full break down, \nyou can obtain a copy of my cv with the '[[;#BAE4F0;]cv]' command or use\nthe '[[;#BAE4F0;]github]', '[[;#BAE4F0;]linkedin]' commands to view my profiles.\n[[b;#BAE4F0;]Interests:] \n  In my free time I enjoy completing software, hardware, or \nother-ware projects.  I also like to juggle, bake, and play \nwith my cats.\n"
        },
        projects: {
            name: "projects",
            type: "dir",
            tag: " [[b;#44D544;]projects]  - Personal Projects"
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
        procgen: {
            name: "procgen",
            type: "exe",
            tag: " [[;#BAE4F0;]procgen] - Procedural Generation of terrain.",
            about: "This was my first project using the Phaser game library.  It\nwas made as a way to explore the topic of procedural\ngeneration. A simple isometric level is generated using a \ncombination of noise, hand tuned methods, and good old \nrandomness.  The Phaser library made it easy to add some\nvisually pleaseing tweens. A copy of the source can be\nfound on my github."
        },
        tribes: {
            name: "tribes",
            type: "exe",
            tag: " [[;#BAE4F0;]tribes]  - Tribe Simulation",
            about: "Tribes was one of my first javascript projects.  :)\nIt's a crude model of how 'tribes' or groups might form in\na collection of units tracking 'strength' values.  Each \nturn, a unit can 'fight' a unit near it, where the winner\nof the fight spreads its tribe.  If any unit ever notices\nthat it is surrounded only by weaker members of its current\ntribe, it revolts and starts its own tribe.  Suprisngly \ncomplex behaviour emerges from these simple rules."
        },
        unitgp: {
            name: "unitgp",
            type: "exe",
            tag: " [[;#BAE4F0;]unitgp]  - Genetic Programming of Insect Behavior",
            about: "Look back later for more!  This is my current project.  I am\nworking on using genetic programming to 'evolve' programatic \nrepresentations of behaviour."
        }
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
                        commandAbout(term, command);
                        break;
                    case "help":
                        commandHelp(term);
                        break;
                    case "cd":
                        commandCD(term, command);
                        break;
                    case "cv":
                        commandCV(term);
                        break;
                    case "ls":
                        commandLS(term);
                        break;
                    case "read":
                        commandRead(term, command);
                        break;
                    case "github":
                        commandGoTo("https://github.com/wpower12");
                        break;
                    case "linkedin":
                        commandGoTo("https://www.linkedin.com/in/wkp3engineer");
                        break;
                    case "forces":
                        commandGoTo("/projects/forces.html");
                        break;
                    case "unitgp":
                        // commandUnitGP(term);
                        break;
                    case "traffic":
                        // commandTraffic(term);
                        break;
                    case "tribes":
                        // commandTribes(term);
                        break;
                    case "procgen":
                        // commandProcgen(term);
                        break;
                    case "procgenstl":
                        // commandProcgenstl(term);
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

function commandAbout(t, e) {
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
    t.echo("     [[;#BAE4F0;]github] - Github Profile");
    t.echo("   [[;#BAE4F0;]linkedin] - Linkedin Profile")
}

function commandLS(t) {
    for(var e in directory[curr_dir]) t.echo(directory[curr_dir][e].tag), "raw"
}

function commandGoTo(t) {
    window.location.href = t
}