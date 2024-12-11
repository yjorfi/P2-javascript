let colors = ["red", "blue", "green", "yellow", "purple"];
let blok = document.getElementById('kleur_veranderen')
blok.addEventListener("click", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    blok.style.backgroundColor = randomColor;
});
