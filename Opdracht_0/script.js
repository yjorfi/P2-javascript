
let modal = document.getElementById("rotmodal");
let knop = document.getElementById("knop")
let input = document.getElementById("input")



knop.onclick = function() {
    rotmodal.style.display = "block";
  }
  function verifieren(){
  let leeftijd = parseInt(input.value);

  if (leeftijd >= 18){
    window.location.assign("https://tcr-student.educus.nl/?0")
  }
  else {
    window.location.assign("rode-pagina.html")}
  }