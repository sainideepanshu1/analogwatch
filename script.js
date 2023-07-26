function showtime(){
let date=new Date();
let sec=date.getSeconds()*6;
let minute=date.getMinutes();
let min=date.getMinutes()*6;
let hour=date.getHours()*30+minute/2;
document.getElementById("seconds").style.transform = `rotate(${sec}deg)`;
document.getElementById("minutes").style.transform = `rotate(${min}deg)`;
document.getElementById("hours").style.transform=`rotate(${hour}deg)`;
}
setInterval(showtime,1000);