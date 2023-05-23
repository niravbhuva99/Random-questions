"use strict";
const btn = document.querySelector(".ans-btn");
const h1 = document.querySelector("h1");
const num = document.querySelector(".num");
const input = document.querySelector(".input");
const score = document.querySelector("#score");
let correctAns;
let correctScore = 0;
const questions = function () {
  h1.textContent = "";
  let str;
  const random = (max, min) => Math.floor(Math.random() * (max - min)) + min;
  const operators = ["+", "-", "*", "/"];
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const operator = operators[random(0, 4)];
  let ans;
  str = `what is ${num1} ${operator} ${num2}`;

  switch (operator) {
    case "*":
      ans = num1 * num2;
      break;
    case "+":
      ans = num1 + num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    default:
      break;
  }
  correctAns = ans;

  return str;
};
h1.insertAdjacentHTML("beforeend", questions());

const checkAns = function () {
  if (correctAns === Number(input.value)) {
    correctScore = correctScore + 1;
    console.log("correntscore", correctScore);
    score.textContent = correctScore;
    input.value = "";
    h1.insertAdjacentHTML("beforeend", questions());
  } else {
    correctScore = correctScore - 1;
    console.log("correntscore", correctScore);
    score.textContent = correctScore;
    console.log(correctAns);
    num.insertAdjacentHTML("beforeend", `<p>Correct was is:${correctAns}</p>`);
    setTimeout(() => {
      num.innerHTML = "";
    }, 1000);
    h1.insertAdjacentHTML("beforeend", questions());
  }
};
btn.addEventListener("click", checkAns);
