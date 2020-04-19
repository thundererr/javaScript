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

	console.log("hour :" + hr + " minute :" + min + " second :" + sec);
	let secpos = sec *360 /60;
	let minpos = (min * 360 /60) + (secpos/60) ;
	let hrpos = (hr *360 /12) + (minpos/12);

	console.log("hrpos :" + hrpos);

	hourHand.style.transform="rotate(" +hrpos +"deg)";
	minuteHand.style.transform="rotate("+minpos+"deg)";
	secondHand.style.transform="rotate("+secpos+"deg)";
}

var interval = setInterval(runClock, 1000);
