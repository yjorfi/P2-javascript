const game = document.querySelector(".game")
const music = document.querySelector(".music")
const dinosaur = document.querySelector('.dinosaur');
const obstacle = document.querySelector('.obstacle'); 
const dead_cat = document.querySelector('.deathscreen');
const start = document.querySelector('.start');
const gameOverText = document.querySelector('.game-over'); // haalt elementen uit de html op

const jumpSound = new Audio('/Opdracht_10/Images/jump.mp3');
const gameSound = new Audio('/Opdracht_10/Images/nyan-cat-music.mp3');
const deathSound = new Audio('/Opdracht_10/Images/death_music.mp3'); // maakt geluiden voor het spel

let isJumping = false;
let isGameOver = false; // kijkt of nyan cat aan het springen of dood is

game.style.display = 'none'; // verbergt de game wanneer je de pagina opent

function startGame() { // zorgt ervoor dat de game start wanneer je op de knop drukt
    start.style.display = 'none'; 
    game.style.display = 'block';
    gameSound.loop = true;
    gameSound.play(); 
}

document.addEventListener('keydown', function (event) { //zorgt ervoor dat als je op w drukt nyan cat springt

    if (event.key === 'w' && !isJumping && !isGameOver) {
        isJumping = true;
        dinosaur.style.animation = 'jump 1.5s'; 
        jumpSound.play(); 
        setTimeout(() => {
            dinosaur.style.animation = 'none'; 
            isJumping = false;
        }, 1500);
    }
});
game.addEventListener('click', function () { //zorgt ervoor dat als je op de bovenste pijltje drukt nyan cat springt

    if (!isJumping && !isGameOver) {
        isJumping = true;
        dinosaur.style.animation = 'jump 1.5s'; 
        jumpSound.play();
        setTimeout(() => {
            dinosaur.style.animation = 'none';
            isJumping = false;
        }, 1500); 
    }
});


function checkCollision() { //kijkt of nyan cat het obstakel aanraakt
    const dinosaurRect = dinosaur.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinosaurRect.right > obstacleRect.left &&
        dinosaurRect.left < obstacleRect.right &&
        dinosaurRect.bottom > obstacleRect.top 
    ) {
    gameIsOver();
    }
}

    
setInterval(checkCollision, 10); //elke 10 milliseconden checkt het of nyan cat het obstakel heeft geraakt

function gameIsOver() { //zorgt ervoor dat  alles weggaat en het vervangen wordt door een foto van een dode nyan cat met muziek en een alert
    isGameOver = true;
    dinosaur.remove();
    obstacle.remove();
    jumpSound.pause();
    gameSound.pause();
    dead_cat.style.display = 'block';
    deathSound.loop = true;
deathSound.play()
    setTimeout(() => {
        alert('Nyan cat is DOOD .·´¯`(>▂<)´¯`·. '); 
    }, 20);

}

    