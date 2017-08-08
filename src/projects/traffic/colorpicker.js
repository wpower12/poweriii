class ColorPicker {
    constructor(n){
    	this.s = 90;
	    this.l = 40;
	    this.delta = 360 / n;
    }
};
$.extend(ColorPicker.prototype, {
    //Returns the css color string used by canvas
    get: function (c) {
        var ret = 'hsl(' + c * this.delta + ',' + this.s + '%,' + this.l + '%' + ')';
        return ret;
    }
});
export default ColorPicker;