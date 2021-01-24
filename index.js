var startbutton=document.getElementById("START");
var pausebutton=document.getElementById("PAUSE");
var stopbutton=document.getElementById("STOP");

var hh=0;
var mm=0;
var ss=0;
var miniSec=0;
var timer;

function calculatedTime(hh,mm,ss){
    var result="";
    if(hh<10){
        result+="0"+hh+":";
    }else{
        result+=hh+":";
    }

    if(mm<10){
        result+="0"+mm+":";
    }else{
        result+=mm+":";
    }

    if(ss<10){
        result+="0"+ss;
    }else{
        result+=ss;
    }
    return result;
}


function runtimer(){
    document.getElementById("timer").innerHTML=calculatedTime(hh,mm,ss);
    miniSec+=100;
    if(miniSec==1000){
        miniSec=0;
        ss++;
    }
    if(ss==60){
        ss=0;
        mm++;
    }
    if(mm==60){
        mm=0;
        hh++;
    }   
}


// start the timer
function start(){
    startbutton.disabled=true;
    pausebutton.disabled=false;
    stopbutton.disabled=false;
    if(!timer) {
        timer=setInterval(runtimer,100);
    }
}
startbutton.addEventListener("click",start);

//for pause
var count=0;
function pause(){
    count++;
    if(count%2==1){
        pausebutton.innerHTML="continue";
        clearInterval(timer);
        timer=false;
    }
    else{
        pausebutton.innerHTML="pause"; 
        start();
    }
}
pausebutton.addEventListener("click",pause);


//for reset 
function stop(){
    stopbutton.disabled=true;
    pausebutton.disabled=true;
    startbutton.disabled=false;
    pausebutton.innerHTML="pause";
    hh=0;
    mm=0;
    ss=0;
    miniSec=0;
    document.getElementById("timer").innerHTML="00:00:00";
    clearInterval(timer);
    timer=false;
}
stopbutton.addEventListener("click",stop);