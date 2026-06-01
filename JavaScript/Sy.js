let circularProgressSy = document.querySelector(".circular-progressSy"),
    progressValueSy = document.querySelector(".progress-valueSy");

let progressStartValueSy = 0,
    progressEndValueSy = 56,
    speedSy = 50;

let progressSy = setInterval(() => {
    progressStartValueSy++;
    
    progressValueSy.textContent = `${progressStartValueSy}%`
    circularProgressSy.style.background = `conic-gradient(#7d2ae8 ${progressStartValueSy * 3.6}deg, #ededed 0deg)`

    if(progressStartValueSy == progressEndValueSy){
        clearInterval(progressSy);
    }
    
}, speedSy);