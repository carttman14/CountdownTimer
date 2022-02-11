const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl =document.getElementById('minutes');
const secondsEl =document.getElementById('seconds');
const newYear='1 Jan 2023';

const countDown=()=>{

    const newYearsDate=new Date(newYear);

    const currentDate=new Date();


    const totalSeconds=(newYearsDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);

    const hours=Math.floor(totalSeconds/3600)%24;

    const mins=Math.floor(totalSeconds/60)%24%60;

    const seconds=Math.floor(totalSeconds)%60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=mins;
    secondsEl.innerHTML=seconds;

    console.log(days,hours,mins,seconds)
}

setInterval(countDown,1000)
