function fmod( v1, v2 ){
	var a = v1 % v2;
	if(a < 0){
		return v2 + a;
	} else {
		return a;
	}
}
export default fmod;