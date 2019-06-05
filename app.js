
window.onload = function(){ 
var days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    mintes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    endDate = new Date("2019-09-01T12:00:00");

var summerSale = function summerSale() {
  var today = new Date();
  var difference = new Date(endDate - today);
  days.innerText = Math.floor(difference / 86400000);
  hours.innerText = difference.getHours();
  minutes.innerText = difference.getMinutes();
  seconds.innerText = difference.getSeconds();
};

setInterval(summerSale, 1000);
  
};