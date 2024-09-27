const hours=document.getElementById("hours")
const minuites=document.getElementById("minuites")
const seconds=document.getElementById("seconds")
const ampm=document.getElementById("ampm")
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")
const date=document.getElementById("date")

let d=new Date();
let weekdays=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
let months=["January","Febrary","March","April","May","June","July","August","September","Octobar",
"November","December"]

day.textContent=weekdays[d.getDay()];
year.textContent=d.getFullYear()
month.textContent=months[d.getMonth()]
date.textContent=`${d.getDate()}\t/\t${d.getMonth()+1}\t/\t${d.getFullYear()}`
console.log(d.getDay())

function displaytime()
{  const date=new Date();
   let current_hours=addzero(date.getHours()-12);
   let current_minuites=" : "+addzero(date.getMinutes());
   let current_seconds=" : "+addzero(date.getSeconds());
   hours.textContent=current_hours;
   minuites.textContent=current_minuites;
   seconds.textContent=current_seconds;
   if(current_hours>12){ampm.textContent="PM"}
}

function addzero(number)
{ 
   if(number<10){ number="0"+number}
   return number;
}

setInterval(displaytime,500)
