import("../moment.js");
import("../moment-timezone-with-data.js");
/*var moment = document.createElement("script");
var mommentData = document.createElement("script");
mommentData.src = "TimeZone/moment-timezone-with-data.js"
mommentData.type = "text/javascript"
moment.src = "TimeZone/moment.js";
moment.type = "text/javascript";
var pos = document.querySelector("body");
pos.appendChild(moment);
pos.appendChild(mommentData);
*/
const hourHand = document.body.querySelector("#hour");
const minuteHand = document.body.querySelector("#minute");
const secondHand = document.body.querySelector("#second");

const hourHand2 = document.body.querySelector("#hour2");
const minuteHand2 = document.body.querySelector("#minute2");
const secondHand2 = document.body.querySelector("#second2");

function runClock(){
	var date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	//console.log("hour :" + hr + " minute :" + min + " second :" + sec);
	let secpos = sec *360 /60;
	let minpos = (min * 360 /60) + (secpos/60) ;
	let hrpos = (hr *360 /12) + (minpos/12);


	hourHand.style.transform="rotate(" +hrpos +"deg)";
	minuteHand.style.transform="rotate("+minpos+"deg)";
	secondHand.style.transform="rotate("+secpos+"deg)";
}

var interval = setInterval(runClock, 1000);

const d1 = new Date();
console.log(d1);
console.log(d1.toUTCString());
console.log(d1.getTimezoneOffset());

var a = moment("2013-11-18 11:55").tz("Asia/Taipei");
var b = moment("2013-11-18 11:55").tz("America/Toronto");

console.log(a.format()); // 2013-11-18T11:55:00+08:00
console.log(b.format()); // 2013-11-18T11:55:00-05:00

console.log(a.utc().format()); // 2013-11-18T03:55Z
console.log(b.utc().format()); // 2013-11-18T16:55Z

