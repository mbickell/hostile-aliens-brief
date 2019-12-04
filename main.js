import {
  generateShipData,
  insertShips,
  damageShipAndUpdateDisplay
} from "./code.js";

const shipData = [
  ["mothership", 100, 9, true, 1],
  ["defence", 80, 10, false, 5],
  ["attack", 45, 12, false, 8]
];

let ships = generateShipData(shipData);
let fireButton = document.getElementById("fire");
let resetButton = document.getElementById("reset");

insertShips(ships);
fireButton.addEventListener("click", () => {
  damageShipAndUpdateDisplay(ships);
});

resetButton.addEventListener("click", () => {
  ships = generateShipData(shipData);
  insertShips(ships);
});
