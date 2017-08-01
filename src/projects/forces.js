import '../style.css';

jQuery(function($, undefined) {
    $('#term_forces').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
            }
        } else {
           this.echo('');
        }
    }, {
        greetings: "Just a test to see if this loads.  Forces\n",
        name: 'js_demo',
        height: 400,
        prompt: "[[;#fff;]poweriii] [[b;#4C4CA6;]::] [[;#fff;]~] [[b;#4C4CA6;]% ] "
    });
});
