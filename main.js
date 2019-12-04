import {
  generateShipData,
  insertShips,
  damageShipAndUpdateDisplay
} from "./code.js";

const shipData = [
  ["mothership", "./images/mothership.jpg", 100, 9, true, 1],
  ["defence", "./images/defence.png", 80, 10, false, 5],
  ["attack", "./images/attack.png", 45, 12, false, 8]
];

let ships = generateShipData(shipData);
let fireButton = document.getElementById("fire");
let resetButton = document.getElementById("reset");
console.log(ships);

insertShips(ships);
fireButton.addEventListener("click", () => {
  damageShipAndUpdateDisplay(ships);
});

resetButton.addEventListener("click", () => {
  ships = generateShipData(shipData);
  insertShips(ships);
});
