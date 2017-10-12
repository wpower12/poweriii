document.onkeyup = function(e){
	switch(e.keyCode){
		case 72: // h
			window.location.href = "/"
			break;
		case 66: // b
			window.location.href = "/blog/"
			break;
		default:
			break;
	}
}