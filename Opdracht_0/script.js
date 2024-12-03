
let modal = document.getElementById("rotmodal");
let knop = document.getElementById("knop")


knop.onclick = function() {
    rotmodal.style.display = "block";
  }
  function verifieren(){
  let leeftijd = input.value
 
  if (leeftijd > 18){
    window.location.replace("youtube.com")
  }
  }