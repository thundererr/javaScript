var obj = new Object();
obj.name = "suraj";
obj.company = "Samsung";
obj.col = "blue";
obj.location = "noida";
console.log(obj);

//variation;

var obj1 = {
name : "suraj1",
company : "Samsung1",
col : "blue1",
location :"noida1"
}
console.log(obj1);

//variation 2

function Obj(name,company,col,location){
	this.name = name;
	this.company = company;
	this.col = col;
	this.location = location;
}
var arrayObj = [
new Obj("suraj3","samsung3","blue3","noida3"),
new Obj("suraj4","samsung4","blue4","noida4"),
]

console.log(arrayObj[1]["name"]);
