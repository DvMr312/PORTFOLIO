let circularProgressNMAP = document.querySelector(".circular-progressNMAP"),
    progressValueNMAP = document.querySelector(".progress-valueNMAP");

let progressStartValueNMAP = 0,
    progressEndValueNMAP = 43,
    speedNMAP = 50;

let progressNMAP = setInterval(() => {
    progressStartValueNMAP++;
    
    progressValueNMAP.textContent = `${progressStartValueNMAP}%`
    circularProgressNMAP.style.background = `conic-gradient(#7d2ae8 ${progressStartValueNMAP * 3.6}deg, #ededed 0deg)`

    if(progressStartValueNMAP == progressEndValueNMAP){
        clearInterval(progressNMAP);
    }
    
}, speedNMAP);