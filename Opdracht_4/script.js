
//   let getal = 10;
//   for(let i = 1; i <= 10; i++){
//   document.getElementById('output').innerHTML += (i + " x " + getal + " = " + i * getal) + "<br>"
//   }
let output = document.getElementById("output")
let input = document.getElementById("input")

function tafel_van() {

    output.innerHTML = " "
    let getal = input.value;
    for (let i = 1; i <= 10; i++) {
        document.getElementById('output').innerHTML += (i + " x " + getal + " = " + i * getal) + "<br>"
    }
}