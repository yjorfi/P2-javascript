let blokje = document.getElementById('div')
let positie = 0
function blok_bewegen() {
    positie += 10
    blokje.style.left = positie + 'px'
}

setInterval(blok_bewegen, 100) 