// const price = document.getElementById("budget").innerText;
// const convertPrice = parseInt(price);

// const cartCount = document.getElementById("cart").innerText;
// const convertCartCount = parseInt(cartCount); 

// const leftCount = document.getElementById("left").innerText;
// const convertLeftCount = parseInt(leftCount); 


// const price = getConvertedValue("budget");
// const cartCount = getConvertedValue("cart");
// const leftCount = getConvertedValue("left")

const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function(event){
const name = event.target.parentNode.childNodes[1].innerText;
const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

const selectedContainer = document.getElementById("selected-players-container");
const div = document.createElement("div");


    });
}


function getConvertedValue(id) {
 const price = document.getElementById(id).innerText;
 const convertPrice = parseInt(price);
 console.log(convertPrice);
}

getConvertedValue("budget")