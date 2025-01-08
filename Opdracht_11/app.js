let hunger = 100;
let energy = 100;
let happiness = 100;

let hungerText = document.getElementById("hunger");
let hungerBar = document.getElementById("hungerBar");
let energyText = document.getElementById("energy");
let energyBar = document.getElementById("energyBar");
let happinessText = document.getElementById("happiness");
let happinessBar = document.getElementById("happinessBar");
let statusMessage = document.getElementById("statusMessage");
let feedButton = document.getElementById("feed");
let sleepButton = document.getElementById("sleep");
let playButton = document.getElementById("play");

  
  function updateStatus() {
    hungerText.textContent = `Honger: ${hunger}`;
    energyText.textContent = `Energie: ${energy}`;
    happinessText.textContent = `Geluk: ${happiness}`;
    
    hungerBar.style.width = `${hunger}%`;
    energyBar.style.width = `${energy}%`;
    happinessBar.style.width = `${happiness}%`;
  
    if (hunger <= 0 && energy <= 0 && happiness <= 0) {
      statusMessage.textContent = "Je Tamagotchi is door jou dood 💀💀";
      statusMessage.classList.add("dead");
      clearInterval(timer); 
    } else {
      statusMessage.textContent = "Je Tamagotchi leeft 🥳";
      statusMessage.classList.remove("dead");
    }
  }
  
  feedButton.addEventListener("click", () => {
    hunger = Math.min(hunger + 20, 100); 
    updateStatus();
  });
  
  sleepButton.addEventListener("click", () => {
    energy = Math.min(energy + 20, 100); 
    updateStatus();
  });
  
  playButton.addEventListener("click", () => {
    happiness = Math.min(happiness + 20, 100); 
    updateStatus();
  });
  const timer = setInterval(() => {
    hunger = Math.max(hunger - 1, 0); 
    energy = Math.max(energy - 1, 0); 
    happiness = Math.max(happiness - 1, 0); 
    updateStatus();
  }, 1000);
