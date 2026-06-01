let circularProgressWAMP = document.querySelector(".circular-progressWAMP"),
    progressValueWAMP = document.querySelector(".progress-valueWAMP");

let progressStartValueWAMP = 0,
    progressEndValueWAMP = 56,
    speedWAMP = 50;

let progressWAMP = setInterval(() => {
    progressStartValueWAMP++;
    
    progressValueWAMP.textContent = `${progressStartValueWAMP}%`
    circularProgressWAMP.style.background = `conic-gradient(#7d2ae8 ${progressStartValueWAMP * 3.6}deg, #ededed 0deg)`

    if(progressStartValueWAMP == progressEndValueWAMP){
        clearInterval(progressWAMP);
    }
    
}, speedWAMP);