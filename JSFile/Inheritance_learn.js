function mobile(){
	this.a = 10;
}

var arr = [2,23,3,34,5];
var a = Math.max.apply(null,arr);
var c = Math.max.call(null,2,23,3,34,5);