const digiHour = document.getElementById('hour');
const digiMinute = document.getElementById('minute');
const digiSecond = document.getElementById('second');
const digiampm = document.getElementById('ampm');

function setClock(){
    const currentDate = new Date();
    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();
    let hour = currentDate.getHours();
    if(hour === "0"){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        digiampm.innerText = "PM";
    }
    digiSecond.innerText = (second < 10) ? digiSecond.innerText = '0' + second : digiSecond.innerText = second;
    digiMinute.innerText = (minute < 10) ? digiMinute.innerText = '0' + minute : digiMinute.innerText = minute;
    digiHour.innerText = (hour < 10) ? digiHour.innerText = '0' + hour : digiHour.innerText = hour;
}
setInterval(setClock, 1000);
setClock();