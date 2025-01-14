let startButton = document.getElementById('start');
let time = document.getElementById('time');
let section = document.getElementById('container');

let startTime;
let endTime;
let reactionTime;

function startTimer(){
startTime = Date.now()
console.log(startTime)
}
function startGame(){
    startButton.style.display = "none"
    container.style.backgroundColor = 'red'
    setTimeout(function(){
    container.style.backgroundColor = 'green'
    startTimer()
    }, 3000)    
    time.innerText = "";
    container.onclick = stopTimer;

}
function stopTimer(){
if(container.style.backgroundColor == "red") return
endTime = Date.now();
reactionTime = endTime - startTime;
time.innerText = `${reactionTime} ms`;
startButton.style.display = '';
container.style.backgroundColor = '#2b87d1'
container.onclick = null;

}