let circularProgressRS = document.querySelector(".circular-progressRS"),
    progressValueRS = document.querySelector(".progress-valueRS");

let progressStartValueRS = 0,
    progressEndValueRS = 86,
    speedRS = 50;

let progressRS = setInterval(() => {
    progressStartValueRS++;
    
    progressValueRS.textContent = `${progressStartValueRS}%`
    circularProgressRS.style.background = `conic-gradient(#7d2ae8 ${progressStartValueRS * 3.6}deg, #ededed 0deg)`

    if(progressStartValueRS == progressEndValueRS){
        clearInterval(progressRS);
    }
    
}, speedRS);