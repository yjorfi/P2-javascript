// document.getElementById('openModal').addEventListener('click', function () {
// document.getElementById('modal').classList.remove('hidden');
//   });
  
//   document.getElementById('verifyAge').addEventListener('click', function () {
//     const age = parseInt(document.getElementById('ageInput').value);
  
//     if (age > 18) {
//       window.location.href = 'https://www.google.com'; // Vervang met jouw gewenste URL
//     } else {
//       document.body.innerHTML = '<div class="red-page">Helaas, je bent te jong!</div>';
//     }
//   });
  
let modal = document.getElementById("rotmodal");
let knop = document.getElementById("knop")


knop.onclick = function() {
    rotmodal.style.display = "block";
  }
