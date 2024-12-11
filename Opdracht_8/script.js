let blok = document.getElementById('kleur_veranderen')
let updownpositie = 0
let leftrightpositie = 0



function blok_bewegen(knop) {
    console.log(knop.keyCode)
    if (knop.keyCode == 87) {
        updownpositie -= 10    
        blok.style.top = updownpositie + "px"
    }else if  (knop.keyCode == 83 ){
        updownpositie += 10
        blok.style.top = updownpositie + "px"
    } 
    if (knop.keyCode == 65) {
        leftrightpositie -= 10  
        blok.style.left = leftrightpositie + "px"
    }else if  (knop.keyCode == 68 ){
        leftrightpositie += 10 
        blok.style.left = leftrightpositie + "px"
    } 
    if (knop.keyCode == 38) {
        updownpositie -= 10    
        blok.style.top = updownpositie + "px"
    }else if  (knop.keyCode == 40 ){
        updownpositie += 10
        blok.style.top = updownpositie + "px"
    } 
    if (knop.keyCode == 37) {
        leftrightpositie -= 10  
        blok.style.left = leftrightpositie + "px"
    }else if  (knop.keyCode == 39 ){
        leftrightpositie += 10 
        blok.style.left = leftrightpositie + "px"
    } 

}

addEventListener("keydown", blok_bewegen)
