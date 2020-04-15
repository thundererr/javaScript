//use of const and let
const fixed = 5.9;

//block scope of variable
(function(){
	var scope1 = 2;
	if(scope1){
		var scope1 = 20;
		console.log("scope2 :" + scope1);
	}
	console.log("scope1 :" + scope1);
} )();

(function(){
	var scope1 = 2;
	if(scope1){
		let scope1 = 20;
		console.log("scope2 :" + scope1);
	}
	console.log("scope1 :" + scope1);
} )();
