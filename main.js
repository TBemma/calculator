"use strict";
const displayArea = document.querySelector(".display");
const functionalities = document.querySelectorAll(".numberfunc");
const number1 = document.querySelectorAll(".number1");
const plus = document.getElementsByClassName("plus");
const number3 = document.querySelectorAll(".number3");
const numbers = document.querySelectorAll(".number");
const symbols = document.querySelectorAll(".symbol");
const equals = document.querySelector(".equals");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");

let value = "";
let result = "";

[...numbers].forEach((num) => {
  num.addEventListener("click", function () {
    value = value + num.textContent;
    displayArea.value = value;
  });
});

[...symbols].forEach((sym) => {
  sym.addEventListener("click", function () {
    value = value + sym.textContent;
    displayArea.value = value;
  });
});
equals.addEventListener("click", function () {
  const results = eval(value);
  let result = results;
  displayArea.value = result;
  value = result;
});
ac.addEventListener("click", function () {
  value = "";
  displayArea.value = "";
});
del.addEventListener("click", function () {
  const split = value.split("");
  split.pop();
  const join = split.join("");
  value = join;
  displayArea.value = value;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    const split = value.split("");
    split.pop();
    const join = split.join("");
    value = join;
    displayArea.value = value;
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const results = eval(value);
    let result = results;
    displayArea.value = result;
    value = result;
  }
});

// equals.addEventListener("click", function () {
//   const result = Number(value);
//   console.log(Number(result));
// });
