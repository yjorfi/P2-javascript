let winkelmand = [];

winkelmand.push("Bananen")
winkelmand.push("Whiskey")
winkelmand.push("Chips")
winkelmand.push("Bonen")
winkelmand.push("Aardappelen")

//opdracht 1
let aantalProducten = winkelmand.length;

document.getElementById("opdr1").innerText = " er zitten " + aantalProducten + " producten in uw winkelmand";

//opdracht 2
document.getElementById("opdr2").innerText = " Uw producten zijn " + winkelmand;

//opdracht 3
let vierdeproduct =  winkelmand[3];
document.getElementById("opdr3").innerText = vierdeproduct + " is de vierde product in je winkelmand"

//opdracht 4

winkelmand[1] = " bier "
document.getElementById("opdr4").innerText = winkelmand

//opdracht 5
function product_toevoegen() {
winkelmand.push("Drugs")
document.getElementById("opdr5").innerText = winkelmand
}

//opdracht 6
if (winkelmand.length >= 1) {document.getElementById("opdr6").innerText = "u kunt boodschappen doen"}
 else {document.getElementById("opdr6").innerText =" u kunt geen boodschappen doen "}

//opdracht 7
if (winkelmand[4] == "drop"  ) {
    document.getElementById("opdr7").innerText = winkelmand
} else {
    document.getElementById("opdr7").innerText = "u heeft geen drop"
}

//opdracht 8
document.getElementById("opdr8").innerText = `uw producten zijn: ${winkelmand.join(" ")}.`

//opdracht 9
winkelmand.splice(1, 2);
document.getElementById("opdr9").innerText = `uw producten zijn: ${winkelmand.join(" ")}.`

//opdracht 10                                                          
document.getElementById("opdr10").innerText;
winkelmand.sort();  
document.getElementById("opdr10").innerText = winkelmand;
