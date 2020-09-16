const hexRandom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".click");
const hex = document.querySelector(".hex");

function getHex() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexRandom.length);
    color += hexRandom[random];
  }
  hex.textContent = color;
  document.querySelector("body").style.backgroundColor = color;
}

btn.addEventListener("click", getHex);
