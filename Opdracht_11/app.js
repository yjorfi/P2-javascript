let hunger = 100;
let energy = 100;
let happiness = 100;

let hungerText = document.getElementById("hungernumber");
let hungerBar = document.getElementById("hungerbar");
let energyText = document.getElementById("energynumber");
let energyBar = document.getElementById("energybar");
let happinessText = document.getElementById("happinessnumber");
let happinessBar = document.getElementById("happinessbar");
let statusMessage = document.getElementById("statusmessage");
let feedButton = document.getElementById("eat");
let sleepButton = document.getElementById("sleep");
let playButton = document.getElementById("play");


  function feed() {
    if (hunger < 100) hunger += 10;
    if (hunger > 100) hunger = 100;
    energy -= 5;
    happiness -= 5;
    updateBars();
    checkStatus();
  }
  
  function sleep() {
    if (energy < 100) energy += 10;
    if (energy > 100) energy = 100;
    hunger -= 5;
    happiness -= 5;
    updateBars();
    checkStatus();
  }
  
  function play() {
    if (happiness < 100) happiness += 10;
    if (happiness > 100) happiness = 100;
    hunger -= 5;
    energy -= 5;
    updateBars();
    checkStatus();
  }
  
