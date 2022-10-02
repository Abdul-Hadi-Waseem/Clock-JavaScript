 startWatch = () => {
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    if(hours >= 12){
        document.getElementById("am-pm").innerHTML= "PM"
    }else {
        document.getElementById("am-pm").innerHTML= "AM"
    }
    if(hours > 12){
       hours = hours - 12;
}}
setInterval(startWatch,1000)