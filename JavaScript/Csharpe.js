let circularProgressC = document.querySelector(".circular-progressC"),
    progressValueC = document.querySelector(".progress-valueC");

let progressStartValueC = 0,
    progressEndValueC = 21,
    speedC = 50;

let progressC = setInterval(() => {
    progressStartValueC++;
    
    progressValueC.textContent = `${progressStartValueC}%`
    circularProgressC.style.background = `conic-gradient(#7d2ae8 ${progressStartValueC * 3.6}deg, #ededed 0deg)`

    if(progressStartValueC == progressEndValueC){
        clearInterval(progressC);
    }
    
}, speedC);