import {
  generateShipData,
  insertShips, 
  damageShipAndUpdateDisplay,
} 
from "./code.js"
const shipData = [
  ["mothership", 100, 9, true, 1],
  ["defence", 80, 10, false, 5],
  ["attack", 45, 12, false, 8]
]
let ships = generateShipData(shipData)
insertShips(ships)
let fireButton = document.getElementById("fire");
fireButton.addEventListener("click", () => {
  damageShipAndUpdateDisplay(ships)
})
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  ships = generateShipData(shipData)
  insertShips(ships)
})