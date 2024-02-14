let circularProgressKL = document.querySelector(".circular-progressKL"),
    progressValueKL = document.querySelector(".progress-valueKL");

let progressStartValueKL = 0,
    progressEndValueKL = 56,
    speedKL = 50;

let progressKL = setInterval(() => {
    progressStartValueKL++;
    
    progressValueKL.textContent = `${progressStartValueKL}%`
    circularProgressKL.style.background = `conic-gradient(#7d2ae8 ${progressStartValueKL * 3.6}deg, #ededed 0deg)`

    if(progressStartValueKL == progressEndValueKL){
        clearInterval(progressKL);
    }
    
}, speedKL);