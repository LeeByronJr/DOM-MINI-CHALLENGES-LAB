"use strict";
// Challenge #1
let total = 0;
const totalParagraph = document.querySelector("#challenge1 p");
const cola = document.querySelector("#cola");
const peanuts = document.querySelector("#peanuts");
const chocolate = document.querySelector("#chocolate");
const fruit = document.querySelector("#fruit");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `$${total}.00`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `$${total}.00`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `$${total}.00`;
});
fruit.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `$${total}.00`;
});

// // challenge #2

const coinForm = document.querySelector("form");
const coinCointainer = document.querySelector("#coin-container");

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount");
  const type = document.querySelector("#type");
  for (let i = 0; i < parseInt(amount.value); i++) {
    const newCoin = document.createElement("li");
    newCoin.textContent = type.value;
    newCoin.classList.add("coin", type.value);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    coinCointainer.append(newCoin);
  }
});

// challenge #3
const bulb = document.querySelector("#bulb");
const onButton = document.querySelector("#on");
const offButton = document.querySelector("#off");
const toggleButton = document.querySelector("#toggle");
const endButton = document.querySelector("#end");
const lightButtons = document.querySelectorAll("#challenge3 button");

onButton.addEventListener("click", () => {
  bulb.classList.add("activated");
});

offButton.addEventListener("click", () => {
  bulb.classList.remove("activated");
});

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("activated");
});

endButton.addEventListener("click", () => {
  bulb.remove();
  lightButtons.forEach((item) => {
    item.disabled = true;
  });
});
