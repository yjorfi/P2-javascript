let blokje = document.getElementById('div')
let positie = 0

function blok_bewegen() {
    positie += 10
    if (positie >= window.innerWidth) {
        positie = 0
    }
    blokje.style.left = positie + 'px'
}

setInterval(blok_bewegen, 100) 

