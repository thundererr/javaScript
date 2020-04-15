
// function with void or ! return type
void function(){
	var a = 10;
	var b = 2.323;
	var result = a*b;
	console.log("result1 : "+ result);
}();

//function using parenthesis

(function(){
	var a = 1.353;
	var b = 2.323;
	var result = a*b;
	console.log("result3 : "+ result);
})();
//parenthesis variation 
(function(){
	var a = 1.353;
	var b = 12.323;
	var result = a*b;
	console.log("result4 : "+ result);
}());
//function with parameters
var result = (function(a,b){
	var multipy = a*b;
	return multipy;
})(1.45456,20);

console.log("result2 " + result);