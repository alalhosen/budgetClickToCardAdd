const price = document.getElementById("budget").innerText;
const convertPrice = parseInt(price);

const cartCount = document.getElementById("cart").innerText;
const convertCartCount = parseInt(cart); 

const leftCount = document.getElementById("cart").innerText;
const convertLeftCount = parseInt(cart); 


function getConvertedValue(id) {
 const price = document.getElementById(id).innerText;
 const convertPrice = parseInt(price);
 console.log(convertPrice);
}

getConvertedValue("budget")