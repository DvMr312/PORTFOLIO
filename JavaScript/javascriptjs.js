let circularProgressJS = document.querySelector(".circular-progressJS"),
    progressValueJS = document.querySelector(".progress-valueJS");

let progressStartValueJS = 0,
    progressEndValueJS = 19,
    speedJS = 50;

let progressJS = setInterval(() => {
    progressStartValueJS++;
    
    progressValueJS.textContent = `${progressStartValueJS}%`
    circularProgressJS.style.background = `conic-gradient(#7d2ae8 ${progressStartValueJS * 3.6}deg, #ededed 0deg)`

    if(progressStartValueJS == progressEndValueJS){
        clearInterval(progressJS);
    }
    
}, speedJS);