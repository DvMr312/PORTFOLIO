const textDisplay = document.getElementById('textdesc')
const phrases = ['Etudiant  en BTS cybersécurité, informatique et réseaux, électronique option A informatique et réseaux .', 'And i love hack :)']

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    
    if (i < phrases.length) {
        
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
            
        }

        if(isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i] [j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
            
        }

        if(j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length){
                i = 0
            }
        }
    }
    const speedUp = Math.random() * (80 -50) + 80
    const normalSpeed = Math.random() * (300 -200) +30
    const time = isEnd ? 4000 : isDeleting ? speedUp : normalSpeed
    setTimeout(loop, time,)
    
}
loop()
