const dinosaur = document.querySelector('.dinosaur');
const obstacle = document.querySelector('.obstacle');
const bird = document.querySelector('.bird');
const gameOverText = document.querySelector('.game-over');
let isJumping = false;
let isGameOver = false;
document.addEventListener('keydown', function (event) {
    if (event.key === 'w' && !isJumping && !isGameOver) {
        isJumping = true;
        dinosaur.style.animation = 'jump 1.5s';
        setTimeout(() => {
            dinosaur.style.animation = 'none';
            isJumping = false;
        }, 800);
    }
});


function checkCollision() {
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

    
setInterval(checkCollision, 10);
setInterval(spawnBird, 20000);

function gameIsOver() {
    isGameOver = true;
    dinosaur.style.animation = 'none';
    obstacle.style.animation = 'none';
    gameOverText.style.display = 'block';
}

    