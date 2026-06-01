let circularProgressAWS = document.querySelector(".circular-progressAWS"),
    progressValueAWS = document.querySelector(".progress-valueAWS");

let progressStartValueAWS = 0,
    progressEndValueAWS = 56,
    speedAWS = 50;

let progressAWS = setInterval(() => {
    progressStartValueAWS++;
    
    progressValueAWS.textContent = `${progressStartValueAWS}%`
    circularProgressAWS.style.background = `conic-gradient(#7d2ae8 ${progressStartValueAWS * 3.6}deg, #ededed 0deg)`

    if(progressStartValueAWS == progressEndValueAWS){
        clearInterval(progressAWS);
    }
    
}, speedAWS);