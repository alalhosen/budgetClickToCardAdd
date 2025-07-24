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
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;

    const selectedContainer = document.getElementById(
      "selected-players-container"
    );


// update budget
const budget = getConvertedValue("budget");
document.getElementById("budget").innerText = budget - parseInt(price)

// cartCount update
const cart = getConvertedValue ("cart");
document.getElementById("cart").innerText = cart + 1;


    const div = document.createElement("div");
    div.classList.add("selected-player");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);

    updateTotalCost(price);
    updateGrandTotal();
  });
}

function updateGrandTotal(status) {
  const totalCost = getConvertedValue("total-cost");
  if (status == undefined) {

    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;

    if (couponCode == "love420") {
      const discounted = totalCost * .2;
      document.getElementById("grand-total").innerText = totalCost - discounted;
    } else {
      alert("Please enter valid coupon code");
    }
  }
}

function updateTotalCost(price) {
  const totalCost = getConvertedValue("total-cost");
  const convertedPrice = parseInt(price);
  const sum = totalCost + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}

// function updateTotalCost(value) {
//   const totalCost = getConvertedValue("total-cost");
//   const sum = totalCost + parseInt(value);
//   document.getElementById("total-cost").innerText = sum;
// }

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}

// getConvertedValue("budget")

function checkParameter(status) {
  if (status == undefined) {
    console.log("kichu dei nai");
  } else {
    console.log("parameter acche");
  }
}

checkParameter();
