const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let nowHour = new Date().getHours();
let nowMin = new Date().getMinutes();
let nowSec = new Date().getSeconds();

hours.innerText = (nowHour < 10 ? "0" + nowHour : nowHour);
min.innerText = (nowMin < 10 ? "0" + nowMin : nowMin);
sec.innerText = (nowSec < 10 ? '0' + nowSec : nowSec);

setInterval(() => {
	nowHour = new Date().getHours();
	nowMin = new Date().getMinutes();
  nowSec = new Date().getSeconds();
  hours.innerText = nowHour < 10 ? "0" + nowHour : nowHour;
	min.innerText = nowMin < 10 ? "0" + nowMin : nowMin;
	sec.innerText = nowSec < 10 ? "0" + nowSec : nowSec;
}, 1000);

