let circularProgressVM = document.querySelector(".circular-progressVM"),
    progressValueVM = document.querySelector(".progress-valueVM");

let progressStartValueVM = 0,
    progressEndValueVM = 63,
    speedVM = 50;

let progressVM = setInterval(() => {
    progressStartValueVM++;
    
    progressValueVM.textContent = `${progressStartValueVM}%`
    circularProgressVM.style.background = `conic-gradient(#7d2ae8 ${progressStartValueVM * 3.6}deg, #ededed 0deg)`

    if(progressStartValueVM == progressEndValueVM){
        clearInterval(progressVM);
    }
    
}, speedVM);