let circularProgressLOOP = document.querySelector(".circular-progressLOOP"),
    progressValueLOOP = document.querySelector(".progress-valueLOOP");

let progressStartValueLOOP = 0,
    progressEndValueLOOP = 56,
    speedLOOP = 50;

let progressLOOP = setInterval(() => {
    progressStartValueLOOP++;
    
    progressValueLOOP.textContent = `${progressStartValueLOOP}%`
    circularProgressLOOP.style.background = `conic-gradient(#7d2ae8 ${progressStartValueLOOP * 3.6}deg, #ededed 0deg)`

    if(progressStartValueLOOP == progressEndValueLOOP){
        clearInterval(progressLOOP);
    }
    
}, speedLOOP);