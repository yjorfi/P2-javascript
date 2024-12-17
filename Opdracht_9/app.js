let computerChoice = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let resultOutput = document.getElementById("Result");

const possibleChoices = document.querySelectorAll('button');

let player;
let computer;
let resultaat;

possibleChoices.forEach(
  button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    computerkeuze();
    result();  
}));
function 

computerkeuze() {
    const randomnummer = 
    Math.floor(Math.random() * 3) + 1;  
  
    if (randomnummer === 1) {
      computer = "rock";
    } 
    else if (randomnummer === 2) {
      computer = "paper";
    } else {
      computer = "scissor";
    }
  
    computerChoice.innerHTML = computer;    }
  function result(

  ) 
  {

    if (computer === player) {
        resultaat = "Gelijkspel";  
    } else if (computer === 'rock' && player === 'paper') {
        resultaat = "Hoera je wint ";  

    } else if (computer === 'rock' && player === 'scissor')
        {

            resultaat = "Loser";  

    } else if
     (computer === 'paper' && player === 'scissor') {

        resultaat = "Hoera je wint ";  
    } else if (computer === 'paper' && player === 'rock') {

        resultaat = "Loser";  
    } else if (computer === 'scissor' && player === 'rock') 
        {
            resultaat = "Hoera je wint ";  
    } else if (computer === 'scissor' && player === 'paper') {
        resultaat = "Loser";  
    }
 
  resultOutput.innerHTML = resultaat;  
}