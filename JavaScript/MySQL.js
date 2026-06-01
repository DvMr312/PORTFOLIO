let circularProgressMySQL = document.querySelector(".circular-progressMySQL"),
    progressValueMySQL = document.querySelector(".progress-valueMySQL");

let progressStartValueMySQL = 0,
    progressEndValueMySQL = 56,
    speedMySQL = 50;

let progressMySQL = setInterval(() => {
    progressStartValueMySQL++;
    
    progressValueMySQL.textContent = `${progressStartValueMySQL}%`
    circularProgressMySQL.style.background = `conic-gradient(#7d2ae8 ${progressStartValueMySQL * 3.6}deg, #ededed 0deg)`

    if(progressStartValueMySQL == progressEndValueMySQL){
        clearInterval(progressMySQL);
    }
    
}, speedMySQL);