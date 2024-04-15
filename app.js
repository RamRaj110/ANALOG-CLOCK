const body = document.querySelector('body'),
hourHand = document.querySelector('.hour') ,
minuteHand = document.querySelector('.minute'), 
secondHand = document.querySelector('.second');
// btn = document.querySelector('.dark-white')




const updateTime = () =>{
    let now = new Date (),
    secToDeg = (now.getSeconds() / 60) * 360;
    minToDeg = (now.getMinutes() /60) *360,
    hourToDeg = (now.getHours() /60) * 360;
    
    secondHand.style.transform= `rotate(${secToDeg}deg)`;
    minuteHand.style.transform=`rotate(${minToDeg}deg)`;
    hourHand.style.transform=`rotate(${hourToDeg}deg)`;
  
}

setInterval(updateTime, 1000);
updateTime()