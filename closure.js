function add10(p){
	var sum = 0;
	function add(){
		sum = p +10;
		return sum;
	}
	return add();
}

console.log(add10(2));