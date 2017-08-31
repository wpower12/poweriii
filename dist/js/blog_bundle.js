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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

var posts = [
	{
		title: "Websites and Blogs and Cats Oh My!",
		slug: "",
		ref: "first.html",
		date: "9/27/19"
	}
];

jQuery(function($, undefined) {
    $('#term_blog').terminal(function(command, term) {
        if (command !== '') {
            try {
                var i = command.split(" ");
                switch( i[0] ){
                	case "cd":
                        if( i.length > 1 && i[1] == ".." ){
                            commandGoTo("/")
                        }
                		break;
                	case "help":
                		commandHelp(term);
                		break;
                	case "ls":
                		commandLS(term);
                        break;
                	case "read":
                		commandRead(term, posts, i[1]);
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
        greetings: null,
        onInit: function( term ){ build_greeting(term, posts); },
        name: 'blog',
        height: 400,
        prompt: "[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~/blog] [[b;#4C4CA6;]% ] "
    });
});

function build_greeting( term, list ) {
	var counter = 0;
	console.log(list);
	for ( var item in list ){
        term.echo("["+counter+"] - "+"<a href=\"blog/"+list[item].ref+"\">"+list[item].title+"</a>", {raw: true});
		counter++;
	}
}



function commandRead(term, list, n){
	if( n < list.length ){
		var t = "";
			t += list[n].ref;
    	commandGoTo(t);
	} else {
        term.echo("post number not found.");
    }
}

function commandHelp(t) {
    t.echo("   This terminal behaves as a basic Javascript REPL. The \nfollowing commands are also available: \n");
    t.echo("         [[;#BAE4F0;]help] - Display this message");
    t.echo("        [[;#BAE4F0;]cd ..] - Navigate to Home ");
    t.echo("           [[;#BAE4F0;]ls] - List blog posts.");
    t.echo("[[;#BAE4F0;]read <POST #>] - Opens a post for reading.");
}

function commandLS(t){
    build_greeting(t, posts);
}

function commandGoTo(t){
    window.location.href = t;

}

/***/ })

/******/ });