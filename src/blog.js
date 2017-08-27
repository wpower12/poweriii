var posts = [
	{
		title: "First!",
		slug: "",
		ref: "test.html",
		date: ""
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
                            commandGoTo("/index.html")
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
        greetings: build_greeting( posts ),
        name: 'blog',
        height: 400,
        prompt: "[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~/blog] [[b;#4C4CA6;]% ] "
    });
});

function build_greeting( list ) {
	var ret = "";
	var counter = 0;
	console.log(list);
	for ( var item in list ){
		ret += "[ [[b;#44D544;]"+counter+"] ] - " +  list[item].title + "\n";
		counter++;
	}
	return ret;
}



function commandRead(term, list, n){
	if( n < list.length ){
		var t = "blog/";
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
	t.echo( build_greeting(posts) );
}

function commandGoTo(t){
    window.location.href = t;

}