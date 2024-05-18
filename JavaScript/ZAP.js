let circularProgressZAP = document.querySelector(".circular-progressZAP"),
    progressValueZAP = document.querySelector(".progress-valueZAP");

let progressStartValueZAP = 0,
    progressEndValueZAP = 63,
    speedZAP = 50;

let progressZAP = setInterval(() => {
    progressStartValueZAP++;
    
    progressValueZAP.textContent = `${progressStartValueZAP}%`
    circularProgressZAP.style.background = `conic-gradient(#7d2ae8 ${progressStartValueZAP * 3.6}deg, #ededed 0deg)`

    if(progressStartValueZAP == progressEndValueZAP){
        clearInterval(progressZAP);
    }
    
}, speedZAP);