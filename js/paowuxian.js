function pao(elem, targetX, targetY, callback){
	// 起点
	var [originX, originY] = [elem.offsetLeft, elem.offsetTop];
	// y = a*x*x + b*x + c
	// x 和 y 是抛物线上的任意点的坐标
	var x = targetX-originX;
	var y = targetY-originY;
	var a = 0.0005;
	var c = 0;
	var b = ( y - a*x*x - c ) / x;
	//console.log( b );
	// 抛物线运动
	var x = 0;
	var timer = setInterval(function(){
		var step = (targetX-elem.offsetLeft)/6;
		step = Math.ceil(step);
		x += step;
		var y = a*x*x + b*x + c;
		//console.log( y );
		elem.style.left = originX+x+"px";	
		elem.style.top = originY+y+"px";
		if( originX+x>=targetX ){
			clearInterval(timer);
			if( callback){
				callback;
			}
		}
	}, 60);
}
