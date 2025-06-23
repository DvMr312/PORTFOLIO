let circularProgressCPT = document.querySelector(".circular-progressCPT"),
    progressValueCPT = document.querySelector(".progress-valueCPT");

let progressStartValueCPT = 0,
    progressEndValueCPT = 56,
    speedCPT = 50;

let progressCPT = setInterval(() => {
    progressStartValueCPT++;
    
    progressValueCPT.textContent = `${progressStartValueCPT}%`
    circularProgressCPT.style.background = `conic-gradient(#7d2ae8 ${progressStartValueCPT * 3.6}deg, #ededed 0deg)`

    if(progressStartValueCPT == progressEndValueCPT){
        clearInterval(progressCPT);
    }
    
}, speedCPT);