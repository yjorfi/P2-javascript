const output = document.getElementById("output");

let input = document.getElementById("input");

let shop = [];

function Product_toevoegen(){
 let product = input.value;

if(product.trim() !== "") {
    shop.push(product);
    output.textContent = "In je winkelmand zitt: " + shop.join(", ");
input.value = "";
} else{
    alert("vul een product in 🤦‍♂️");
}
}