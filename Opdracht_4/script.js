let output = getElementById("output")
let input = getElementById("input")
//   let getal = 10;
//   for(let i = 1; i <= 10; i++){
//   document.getElementById('output').innerHTML += (i + " x " + getal + " = " + i * getal) + "<br>"
//   }
function tafel_van() {

    output.innerHTML = " "
    let getal = input.value
    for (let i = 1; i <= 10; i++) {
        document.getElementById('output').innerHTML += (i + " x " + getal + " = " + i * getal) + "<br>"
    }
}