"use strict";

const container = document.getElementById("container");
const input = document.querySelectorAll("input");
const button = document.querySelector("button");
const h1 = document.createElement("h1");

h1.textContent = "Гипотенуза прямоугольного треугольника равна:";
h1.classList.add("title");

container.insertAdjacentElement("afterbegin", h1);

button.addEventListener("click", clickButtonHandler);
const error = document.createElement("div");
error.remove();

//функция проверки полей формы перед отправкой
function clickButtonHandler() {
  event.preventDefault();

  let side1 = +input[0].value;
  let side2 = +input[1].value;

  if (
    !side1 ||
    !side2 ||
    (side1 || side2) === "isNaN" ||
    (side1 || side2) < 0
  ) {
    input[0].value = 0;
    input[1].value = 0;

    h1.textContent = "Гипотенуза прямоугольного треугольника равна:";
    error.textContent = "Введите корретные данные";
    error.classList.add("error");
    container.insertAdjacentElement("afterend", error);
  } else {
    error.remove();
    const result = Math.sqrt(
      Math.pow(side1.toFixed(2), 2) + Math.pow(side2.toFixed(2), 2)
    ).toFixed(2);
    h1.textContent =
      "Гипотенуза прямоугольного треугольника равна:" + `${result}`;

    input[0].value = 0;
    input[1].value = 0;
  }
}
